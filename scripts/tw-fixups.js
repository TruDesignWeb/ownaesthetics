// tw-fixups.js — post-rewrite fixes for className sites the mechanical
// rewriter can't handle (template literals with .trim(), single-quoted
// attributes, class strings arriving through props, and one cross-element
// cascade conflict). Run AFTER tw-rewrite.js.
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const { structured } = require("./tw-mapping.json");

function utils(anchor) {
  const items = structured[anchor];
  if (!items) throw new Error("no mapping for " + anchor);
  return [...items].sort((a, b) => a.order - b.order).map((i) => i.utility).join(" ");
}

let failures = 0;
function sub(rel, from, to) {
  const file = path.join(ROOT, rel);
  let t = fs.readFileSync(file, "utf8");
  if (!t.includes(from)) {
    console.log("FIXUP MISS:", rel, "::", from.slice(0, 60));
    failures++;
    return;
  }
  fs.writeFileSync(file, t.split(from).join(to));
  console.log("fixup ok:", rel);
}

// template literals with .trim() — the rewriter's regex doesn't reach these
sub(
  "src/components/banner2.jsx",
  "className={`banner2 ${variantClass}`.trim()}",
  "className={`" + utils(".banner2") + " ${variantClass}`.trim()}",
);
sub(
  "src/components/banner3.jsx",
  "className={`banner3-container ${className}`.trim()}",
  "className={`" + utils(".banner3-container") + " ${className}`.trim()}",
);
sub(
  "src/components/journey.jsx",
  "className={`journey-feature-card ${className ?? ''}`.trim()}",
  "className={`" + utils(".journey-feature-card") + " ${className ?? ''}`.trim()}",
);

// single-quoted className attribute
sub(
  "src/components/infinitescroll.jsx",
  "className='infinite-scroll-item'",
  'className="' + utils(".infinite-scroll-item") + '"',
);

// MagnetButton size/shape props held Tailwind-style strings from before
// Tailwind existed; now they'd really apply, so they must not reach the DOM
sub(
  "src/components/magneticbutton.jsx",
  'export default function MagnetButton({ children = "Hover Me", className="", size = "px-8 py-4 text-lg", shape = "rounded-full"}) {',
  'export default function MagnetButton({ children = "Hover Me", className = "" }) {',
);
sub(
  "src/components/magneticbutton.jsx",
  "className={`${size} ${shape} ${className}`}",
  "className={className}",
);
sub(
  "src/components/banner.jsx",
  '<MagnetButton href = "#content" size="px-15 py-9 text-3xl" shape="rounded-xl">Explore Now</MagnetButton>',
  '<MagnetButton href="#content">Explore Now</MagnetButton>',
);

// cross-element conflict: `.newsletter-container p` (contactform.css) must
// beat `.footer-section p` (footer.css) by cascade order. Both are now
// descendant variants on different ancestors, so boost the newsletter side
// with a self-compound (adds one class of specificity, like the old winner
// having later file order) and keep the marker class on the element.
{
  const file = path.join(ROOT, "src/components/footer.jsx");
  let t = fs.readFileSync(file, "utf8");
  const before = t;
  t = t.replace(/className="((?:[^"]*\s)?)(\[&_p\]|\[&_h2\]|\[&_a\])/g, (m) => m); // no-op guard
  // find the newsletter container div: the rewriter replaced its class list;
  // re-anchor by the surrounding JSX
  t = t.replace(/<div className="([^"]*)">\s*\n(\s*)<h2>/, (m, cls, ind) => {
    const boosted = cls
      .replace(/\[&_p\]/g, "[&.newsletter-container_p]")
      .replace(/\[&_h2\]/g, "[&.newsletter-container_h2]")
      .replace(/\[&_a\]/g, "[&.newsletter-container_a]");
    return `<div className="newsletter-container ${boosted}">\n${ind}<h2>`;
  });
  if (t !== before) {
    fs.writeFileSync(file, t);
    console.log("fixup ok: footer newsletter boost");
  } else {
    console.log("FIXUP MISS: footer newsletter boost");
    failures++;
  }
}

console.log(failures ? `FAILURES: ${failures}` : "all fixups applied");
