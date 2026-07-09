// css2tw.js — transpile the project's CSS files into Tailwind utility strings.
//
// Output:
//   scripts/tw-mapping.json  { anchors: { ".class"|"#id": "utility string" },
//                              keep: [class names that must stay in the DOM],
//                              manual: [rules needing hand conversion] }
//   scripts/tw-base.css      base/tag rules + @font-face + @keyframes + :root
//
// Strategy: every declaration becomes an arbitrary property `[prop:value]`;
// every selector context becomes a single arbitrary variant `[<selector-with-&>]:`
// (or hover:/max-[..]: shortcuts). Cascade (file order + specificity) is
// resolved per (anchor, variant, property) so the emitted utilities equal the
// original computed result.
const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const selParser = require("postcss-selector-parser");

const ROOT = path.resolve(__dirname, "..");

// files in old-cascade order (mirrors app/layout.jsx import order)
const CSS_FILES = [
  "src/views/index.css",
  "src/styles/global.css",
  "src/styles/navbar.css",
  "src/styles/banner.css",
  "src/styles/features.css",
  "src/styles/stats.css",
  "src/styles/programs.css",
  "src/styles/membership.css",
  "src/styles/outcomes.css",
  "src/styles/aboutoutcomes.css",
  "src/styles/journey.css",
  "src/styles/footer.css",
  "src/styles/contactform.css",
  "src/styles/customcursor.css",
  "src/styles/animations.css",
  "src/styles/infinitescroll.css",
  "src/styles/tiltedcard.css",
  "src/styles/register.css",
  "src/styles/showcasesection.css",
  "src/styles/testimonialshowcasestyles.css",
  "src/styles/socialmediastyles.css",
  "src/styles/rsvppopup.css",
  "src/styles/banner2.css",
  "src/styles/banner3.css",
  "src/styles/servicehighlightbox.css",
  "src/views/about.css",
  "src/views/contact.css",
  "src/views/dashboard.css",
  "src/views/collabpartners.css",
  "src/views/reviews.css",
  "src/views/appointments.css",
  "src/views/socials.css",
  "src/views/referringpartners.css",
  "src/views/services/antiwrinkle.css",
  "src/views/services/aquafirme.css",
  "src/views/services/nouvaderm.css",
  "src/views/services/saltfacial.css",
  "src/views/services/cellenis.css",
  "src/views/services/chemicalpeels.css",
  "src/views/services/consultation.css",
  "src/views/services/exosomes.css",
  "src/views/services/facials.css",
  "src/views/services/hairtreatments.css",
  "src/views/services/juvederm.css",
  "src/views/services/kybella.css",
  "src/views/services/sclerotherapy.css",
  "src/views/services/sculptra.css",
  "src/views/services/skinpen.css",
  "src/views/terms.css",
  "src/views/treatments.css",
  "src/views/privacypolicy.css",
  "src/views/cancellation.css",
  "src/views/rsvp.css",
  "src/views/seo-landing.css",
];

// classes that appear statically in JSX (preferred anchors)
const staticClasses = new Set();
(function scanJsx(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) scanJsx(full);
    else if (/\.jsx$/.test(e.name)) {
      const t = fs.readFileSync(full, "utf8");
      for (const m of t.matchAll(/className\s*=\s*{?[`"']([^`"'}]*)[`"']/g)) {
        for (const c of m[1].split(/\s+/)) if (c && !c.includes("$")) staticClasses.add(c);
      }
      // classes passed as string props (className=..., or e.g. class names in objects)
      for (const m of t.matchAll(/class(?:Name)?\s*[:=]\s*["']([^"']+)["']/g)) {
        for (const c of m[1].split(/\s+/)) staticClasses.add(c);
      }
    }
  }
})(path.join(ROOT, "src"));
scanAppDir();
function scanAppDir() {
  const dir = path.join(ROOT, "app");
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (/\.jsx$/.test(e.name)) {
        const t = fs.readFileSync(full, "utf8");
        for (const m of t.matchAll(/className\s*=\s*{?[`"']([^`"'}]*)[`"']/g)) {
          for (const c of m[1].split(/\s+/)) if (c && !c.includes("$")) staticClasses.add(c);
        }
      }
    }
  })(dir);
}

// ---------- helpers ----------
function specificity(selector) {
  let a = 0, b = 0, c = 0;
  selParser((sels) => {
    sels.walk((n) => {
      if (n.type === "id") a++;
      else if (n.type === "class" || n.type === "attribute") b++;
      else if (n.type === "pseudo") {
        if (/^::/.test(n.value)) c++;
        else if (!/^:(not|is|where|has)/.test(n.value)) b++;
      } else if (n.type === "tag") c++;
    });
  }).processSync(selector);
  return a * 10000 + b * 100 + c;
}

function escapeForTW(s) {
  // literal underscores must be escaped, then spaces become underscores
  return s.replace(/_/g, "\\_").replace(/ +/g, "_");
}

function declToUtility(prop, value, important) {
  let v = value.trim().replace(/\s*\n\s*/g, " ").replace(/\s{2,}/g, " ");
  // handle url() FIRST, with the original quoting intact: percent-encode
  // underscores (avoids the \_ escape, which JSX compilation mangles) and for
  // data: URIs also encode quotes and spaces so the later quote flip and
  // space->underscore rewrite can't corrupt them
  v = v.replace(/url\((['"]?)([\s\S]*?)\1\)/g, (m, q, u) => {
    let inner = u.replace(/_/g, "%5F");
    if (/^data:/i.test(inner)) {
      inner = inner.replace(/'/g, "%27").replace(/"/g, "%22").replace(/ /g, "%20");
      return `url(${inner})`;
    }
    return `url(${q ? `'${inner}'` : inner})`;
  });
  // double quotes would terminate the JSX className="..." attribute; CSS
  // treats single and double quotes identically
  v = v.replace(/"/g, "'");
  const u = `[${prop}:${escapeForTW(v)}]`;
  return important ? u + "!" : u;
}

function variantPrefix(variantSel, media) {
  // variantSel: selector string containing & for the element, "" for none
  let parts = [];
  if (media) {
    const mm = media.match(/^\(max-width:\s*([0-9.]+px)\)$/);
    const mn = media.match(/^\(min-width:\s*([0-9.]+px)\)$/);
    if (mm) parts.push(`max-[${mm[1]}]`);
    else if (mn) parts.push(`min-[${mn[1]}]`);
    else parts.push(`[@media_${escapeForTW(media)}]`);
  }
  if (variantSel && variantSel !== "&") {
    // always use the arbitrary form: Tailwind's built-in hover:/before:/after:
    // variants add extra behavior (hover media gating, default content) that
    // plain CSS selectors don't have
    parts.push(`[${escapeForTW(variantSel)}]`);
  }
  return parts.map((p) => p + ":").join("");
}

// ---------- parse all css ----------
const baseRules = []; // verbatim css for globals (font-face, keyframes, :root, tag-only rules)
const attrRules = [];
const attrCss = []; // attribute-selector rules, emitted unlayered
const manual = [];
// entries: {anchor, variant, media, prop, value, important, spec, order}
const entries = [];
let order = 0;

for (const rel of CSS_FILES) {
  const file = path.join(ROOT, rel);
  const css = fs.readFileSync(file, "utf8");
  let root;
  try {
    root = postcss.parse(css, { from: file });
  } catch (e) {
    manual.push({ file: rel, error: String(e) });
    continue;
  }

  function handleRule(rule, media) {
    const rawSel = rule.selector.replace(/\s+/g, " ").trim();
    // expand zero-specificity :where(list) wrappers into individual selectors
    const whereMatch = rawSel.match(/^:where\(([\s\S]*)\)$/);
    let selectors, forcedSpec = null;
    if (whereMatch) {
      selectors = whereMatch[1].split(",").map((s) => s.trim()).filter(Boolean);
      forcedSpec = 0;
    } else {
      // split top-level commas via the selector parser (respects parens)
      try {
        const ast = selParser().astSync(rawSel);
        selectors = ast.nodes.map((n) => n.toString().trim()).filter(Boolean);
      } catch {
        selectors = rawSel.split(",").map((s) => s.trim()).filter(Boolean);
      }
    }
    for (const sel of selectors) {
      processSelector(rel, sel, rule, media, forcedSpec);
    }
  }

  root.walkAtRules((at) => {
    if (["font-face", "keyframes", "-webkit-keyframes", "import", "charset"].includes(at.name)) {
      baseRules.push(at.toString());
      at.remove();
    }
  });

  root.walkRules((rule) => {
    if (rule.parent && rule.parent.type === "atrule") {
      const at = rule.parent;
      if (at.name === "media") handleRule(rule, at.params);
      else if (at.name === "supports") {
        manual.push({ file: rel, selector: rule.selector, note: "@supports rule" });
      }
      // keyframes already removed
    } else {
      handleRule(rule, null);
    }
  });

  function emitVerbatim(sel, rule, media) {
    const decls = [];
    rule.walkDecls((d) => decls.push(`  ${d.prop}: ${d.value}${d.important ? " !important" : ""};`));
    const block = `${sel} {\n${decls.join("\n")}\n}`;
    baseRules.push(media ? `@media ${media} {\n${block}\n}` : block);
  }

  function processSelector(fileRel, sel, rule, media, forcedSpec) {
    // :root and selectors without class/id anywhere -> base css
    const hasClass = /\./.test(sel.replace(/\\\./g, ""));
    const hasId = /#/.test(sel);
    // attribute selectors can't be expressed inside Tailwind arbitrary
    // variants (nested brackets). Emit them verbatim; gen-globals places them
    // UNLAYERED so their (mostly !important) declarations keep beating the
    // converted utilities exactly like they beat plain class rules before.
    // This check must run BEFORE the no-class check: selectors like
    // [id$="-services"] [class*="-row"] contain no literal "." or "#".
    if (/\[[^\]]*\]/.test(sel)) {
      const decls = [];
      rule.walkDecls((d) => decls.push(`  ${d.prop}: ${d.value}${d.important ? " !important" : ""};`));
      const block = `${sel} {\n${decls.join("\n")}\n}`;
      attrCss.push(media ? `@media ${media} {\n${block}\n}` : block);
      return;
    }
    if (sel === ":root" || (!hasClass && !hasId)) {
      emitVerbatim(sel, rule, media);
      return;
    }

    // parse into compounds
    let compounds;
    try {
      const parsed = selParser().astSync(sel);
      compounds = splitCompounds(parsed.nodes[0]);
    } catch (e) {
      manual.push({ file: fileRel, selector: sel, note: "selector parse failed" });
      return;
    }
    if (!compounds) {
      manual.push({ file: fileRel, selector: sel, note: "unsupported selector" });
      return;
    }

    // choose anchor: search compounds from LAST to first for a compound with a
    // static class or an id
    let anchorIdx = -1, anchorToken = null;
    for (let i = compounds.length - 1; i >= 0; i--) {
      const comp = compounds[i];
      const cls = comp.classes.find((c) => staticClasses.has(c));
      if (cls) { anchorIdx = i; anchorToken = "." + cls; break; }
      if (comp.id) { anchorIdx = i; anchorToken = "#" + comp.id; break; }
      // fall back to any class even if not seen statically (may be dynamic)
      if (comp.classes.length) { anchorIdx = i; anchorToken = "." + comp.classes[0]; break; }
    }
    if (anchorIdx === -1) {
      manual.push({ file: fileRel, selector: sel, note: "no anchor" });
      return;
    }

    // rebuild selector with the anchor compound replaced by & (keeping the
    // compound's other simple selectors attached to &)
    const parts = [];
    for (let i = 0; i < compounds.length; i++) {
      const comp = compounds[i];
      let txt;
      if (i === anchorIdx) {
        txt = "&" + comp.raw.replace(anchorToken, "");
      } else {
        txt = comp.raw;
      }
      parts.push({ txt, comb: comp.combinatorBefore });
    }
    // zero-specificity rules (expanded from :where lists) that anchor to a
    // DIFFERENT element (cross-element variants) must also be zero-specificity
    // in the generated CSS, or they'd beat direct rules they originally lost
    // to — wrap every compound in :where().
    const zeroSpec = forcedSpec === 0 && parts.length > 1;
    let variantSel = "";
    for (let i = 0; i < parts.length; i++) {
      if (i > 0) variantSel += parts[i].comb === " " ? " " : parts[i].comb;
      variantSel += zeroSpec ? `:where(${parts[i].txt})` : parts[i].txt;
    }
    const spec = forcedSpec !== null && forcedSpec !== undefined ? forcedSpec : specificity(sel);
    rule.walkDecls((d) => {
      entries.push({
        anchor: anchorToken,
        variant: variantSel,
        media: media ? media.trim() : null,
        prop: d.prop,
        value: d.value,
        important: !!d.important,
        spec,
        order: order++,
        file: fileRel,
        selector: sel,
      });
    });
  }
}

function splitCompounds(selNode) {
  // returns [{raw, classes:[], id, combinatorBefore}] or null
  const out = [];
  let cur = { raw: "", classes: [], id: null, combinatorBefore: null };
  for (const n of selNode.nodes) {
    if (n.type === "combinator") {
      if (cur.raw) out.push(cur);
      cur = { raw: "", classes: [], id: null, combinatorBefore: n.value === " " ? " " : n.value };
    } else {
      cur.raw += n.toString();
      if (n.type === "class") cur.classes.push(n.value);
      if (n.type === "id") cur.id = n.value;
    }
  }
  if (cur.raw) out.push(cur);
  return out.length ? out : null;
}

// ---------- cascade resolution ----------
// group by anchor + variant + media, resolve per property
const SEP = String.fromCharCode(1);
const groups = new Map();
for (const e of entries) {
  const key = e.anchor + SEP + e.variant + SEP + (e.media || "");
  if (!groups.has(key)) groups.set(key, new Map());
  const props = groups.get(key);
  const prev = props.get(e.prop);
  // cascade: important beats non-important; then specificity; then order
  const rank = (x) => (x.important ? 1e9 : 0) + x.spec * 1e4 + x.order / 1e5;
  if (!prev || rank(e) >= rank(prev)) props.set(e.prop, e);
}

// shorthand handling: when a shorthand (e.g. margin) outranks a longhand
// (margin-top) in the cascade, drop the longhand; when the longhand outranks
// the shorthand, keep both (the longhand must be emitted after) and record it.
const orderingRisks = [];
const entryRank = (x) => (x.important ? 1e9 : 0) + x.spec * 1e4 + x.order / 1e5;
for (const [key, props] of groups) {
  const names = [...props.keys()];
  const unrelated = (short, long) =>
    short === "border" && /^border-(radius|image|collapse|spacing|top-left|top-right|bottom-left|bottom-right)/.test(long);
  for (const short of names) {
    for (const long of names) {
      if (long !== short && long.startsWith(short + "-") && !unrelated(short, long)) {
        const s = props.get(short), l = props.get(long);
        if (!s || !l) continue;
        if (entryRank(s) > entryRank(l)) props.delete(long);
        else orderingRisks.push({ anchor: s.anchor, short, long, file: l.file });
      }
    }
  }
}

// cross-media pruning: a media-scoped declaration that is outranked by an
// UNCONDITIONAL declaration of the same property (same anchor+variant) could
// never win in the original cascade — but Tailwind emits media variants after
// base utilities, so it would wrongly win. Drop it.
{
  const baseGroups = new Map(); // anchor SEP variant -> props map
  for (const [key, props] of groups) {
    const [anchor, variant, media] = key.split(SEP);
    if (!media) baseGroups.set(anchor + SEP + variant, props);
  }
  for (const [key, props] of groups) {
    const [anchor, variant, media] = key.split(SEP);
    if (!media) continue;
    const base = baseGroups.get(anchor + SEP + variant);
    if (!base) continue;
    for (const [prop, e] of [...props]) {
      const b = base.get(prop);
      if (b && entryRank(b) > entryRank(e)) props.delete(prop);
    }
  }
}

// ---------- emit (structured, so the JSX rewriter can resolve conflicts
// between multiple classes on one element using original cascade rank) ----------
const structured = {};
for (const [key, props] of groups) {
  const parts = key.split(SEP);
  const anchor = parts[0], variant = parts[1], media = parts[2] || null;
  const prefix = variantPrefix(variant, media);
  for (const e of props.values()) {
    if (!structured[anchor]) structured[anchor] = [];
    structured[anchor].push({
      prefix,
      prop: e.prop,
      utility: prefix + declToUtility(e.prop, e.value, e.important),
      rank: (e.important ? 1e9 : 0) + e.spec * 1e4 + e.order / 1e5,
      order: e.order,
    });
  }
}
for (const token of Object.keys(structured)) structured[token].sort((a, b) => a.order - b.order);

// keep-set: class names referenced inside any variant selector or verbatim base css
const keep = new Set();
for (const [key] of groups) {
  const variant = key.split(SEP)[1];
  for (const m of variant.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)) keep.add(m[1]);
}
for (const block of baseRules.concat(attrCss)) {
  const selPart = block.split("{")[0];
  for (const m of selPart.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)) keep.add(m[1]);
}

fs.writeFileSync(
  path.join(__dirname, "tw-mapping.json"),
  JSON.stringify({ structured, keep: [...keep].sort(), manual, orderingRisks }, null, 1),
);
fs.writeFileSync(path.join(__dirname, "tw-base.css"), baseRules.join("\n\n") + "\n");

console.log("anchors:", Object.keys(structured).length);
console.log("keep classes:", keep.size);
console.log("manual:", manual.length);
console.log("ordering risks:", orderingRisks.length);
console.log("base blocks:", baseRules.length);
fs.writeFileSync(path.join(__dirname, "tw-attr.css"), attrCss.join("\n\n") + "\n");
console.log("attr blocks:", attrCss.length);
