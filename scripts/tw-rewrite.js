// tw-rewrite.js — rewrite className attributes across JSX using tw-mapping.json,
// remove CSS imports, and inject utilities for id-anchored rules.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const { structured, keep } = require("./tw-mapping.json");

const keepSet = new Set([
  ...keep,
  // classes referenced from JS (querySelectorAll / classList)
  "reveal", "visible", "service-card", "stat-item",
]);

// [class*="X"] substring patterns from the verbatim attribute rules — any
// class containing one of these must stay in the DOM for those rules to match
const classSubstrings = [];
{
  const attrFile = path.join(__dirname, "tw-attr.css");
  if (fs.existsSync(attrFile)) {
    const t = fs.readFileSync(attrFile, "utf8");
    for (const m of t.matchAll(/\[class\*=["']?([^"'\]]+?)["']?\]/g)) classSubstrings.push(m[1]);
  }
}
function mustKeep(token) {
  if (keepSet.has(token)) return true;
  return classSubstrings.some((s) => token.includes(s));
}

const report = { dynamicClassName: [], unknownDropped: {}, filesChanged: 0 };

// merge utility items from several classes on one element, resolving property
// conflicts by original cascade rank (higher rank wins; ties -> later order)
function mergeTokens(tokens) {
  const winners = new Map(); // prefix+"|"+prop -> item
  for (const t of tokens) {
    const items = structured["." + t];
    if (!items) continue;
    for (const it of items) {
      const key = it.prefix + "|" + it.prop;
      const prev = winners.get(key);
      if (!prev || it.rank >= prev.rank) winners.set(key, it);
    }
  }
  return [...winners.values()].sort((a, b) => a.order - b.order).map((i) => i.utility);
}

function rewriteClassList(raw) {
  const tokens = raw.split(/\s+/).filter(Boolean);
  const kept = [];
  const mapped = [];
  for (const t of tokens) {
    if (structured["." + t]) {
      mapped.push(t);
      if (mustKeep(t)) kept.push(t);
    } else if (mustKeep(t)) {
      kept.push(t);
    } else {
      report.unknownDropped[t] = (report.unknownDropped[t] || 0) + 1;
    }
  }
  const utils = mergeTokens(mapped);
  return [...kept, ...utils].join(" ");
}

function processFile(file) {
  let src = fs.readFileSync(file, "utf8");
  const orig = src;

  // 1. drop css imports
  src = src.replace(/^\s*import\s+["'][^"']*\.css["'];?\s*\r?\n/gm, "");

  // 2. className="..."  /  className={"..."}  /  className={'...'}
  src = src.replace(
    /className\s*=\s*(?:"([^"]*)"|\{\s*"([^"]*)"\s*\}|\{\s*'([^']*)'\s*\})/g,
    (m, a, b, c) => {
      const val = a !== undefined ? a : b !== undefined ? b : c;
      const out = rewriteClassList(val);
      return `className="${out}"`;
    },
  );

  // 3. template literals: className={`static ${expr} static`}
  src = src.replace(/className\s*=\s*\{\s*`([^`]*)`\s*\}/g, (m, tpl) => {
    // split into static text and ${...} chunks
    const parts = tpl.split(/(\$\{[^}]*\})/g);
    const rebuilt = parts
      .map((p) => {
        if (p.startsWith("${")) return p;
        if (!p.trim()) return p;
        const lead = p.match(/^\s*/)[0];
        const trail = p.match(/\s*$/)[0];
        return lead + rewriteClassList(p) + (trail || " ");
      })
      .join("");
    return "className={`" + rebuilt.replace(/\s+`$/, "`").replace(/ {2,}/g, " ") + "`}";
  });

  // 4. report remaining dynamic classNames for manual review
  for (const m of src.matchAll(/className\s*=\s*\{(?!\s*["'`])[^}]*\}/g)) {
    report.dynamicClassName.push(path.relative(ROOT, file) + " :: " + m[0].slice(0, 100));
  }

  // 5. id-anchored utilities (e.g. <section id="saltfacial-services">)
  for (const token of Object.keys(structured)) {
    if (!token.startsWith("#")) continue;
    const id = token.slice(1);
    if (id === "root") continue; // vite-era root div, no longer exists
    const idAttr = `id="${id}"`;
    if (!src.includes(idAttr)) continue;
    // -services sections carry the svc-section marker (stands in for the
    // old [id$="-services"] attribute selector) and its mapped utilities
    const isSvc = id.endsWith("-services");
    const items = [...structured[token]];
    if (isSvc && structured[".svc-section"]) items.push(...structured[".svc-section"]);
    const utils =
      (isSvc ? "svc-section " : "") +
      items.sort((a, b) => a.order - b.order).map((i) => i.utility).join(" ");
    // element already has className? merge; else inject one after the id attr
    const tagRe = new RegExp(`(<[a-zA-Z][^>]*)id="${id}"([^>]*>)`);
    src = src.replace(tagRe, (m, pre, post) => {
      if (/className=/.test(pre + post)) {
        return (pre + `id="${id}"` + post).replace(/className="([^"]*)"/, (mm, cls) => `className="${cls} ${utils}"`);
      }
      return `${pre}id="${id}" className="${utils}"${post}`;
    });
  }

  // 6. any remaining -services section (matched by the old [id$="-services"]
  // attribute selector) still needs the svc-section marker + its utilities
  if (structured[".svc-section"]) {
    const svcUtils = [...structured[".svc-section"]].sort((a, b) => a.order - b.order).map((i) => i.utility).join(" ");
    src = src.replace(/(<[a-zA-Z][^>]*)id="([a-z0-9-]*-services)"([^>]*>)/g, (m, pre, id, post) => {
      if (/svc-section/.test(m)) return m;
      if (/className=/.test(pre + post)) {
        return m.replace(/className="([^"]*)"/, (mm, cls) => `className="svc-section ${cls} ${svcUtils}"`);
      }
      return `${pre}id="${id}" className="svc-section ${svcUtils}"${post}`;
    });
  }

  if (src !== orig) {
    fs.writeFileSync(file, src);
    report.filesChanged++;
  }
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.jsx$/.test(e.name)) processFile(full);
  }
})(path.join(ROOT, "src"));
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.jsx$/.test(e.name)) processFile(full);
  }
})(path.join(ROOT, "app"));

console.log("files changed:", report.filesChanged);
console.log("dynamic className sites (manual review):");
for (const d of report.dynamicClassName) console.log("  ", d);
console.log("dropped unknown classes:", JSON.stringify(report.unknownDropped));
