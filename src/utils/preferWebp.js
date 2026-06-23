// Prefer WebP at runtime: attempt to load .webp for images and fall back on error.
export default function preferWebp() {
  if (typeof window === "undefined" || !window.document) return;

  function trySwap(img) {
    // prefer the raw attribute, fall back to currentSrc (from srcset/picture) or src
    const attr = img.getAttribute && img.getAttribute("src");
    const srcAttr = attr || img.currentSrc || img.src || "";
    if (!srcAttr) return;
    const src = String(srcAttr).replace(/\\/g, "/");
    // only target assets images with common raster extensions
    if (!/\/assets\/images\//i.test(src)) return;
    if (!/\.(png|jpe?g|gif|bmp)$/i.test(src)) return;

    const webp = src.replace(/\.(png|jpe?g|gif|bmp)$/i, ".webp");
    if (webp === src) return;
    // store original for fallback
    try {
      img.dataset.ownOriginalSrc = src;
    } catch (e) {
      // ignore if dataset isn't writable for some reason
    }

    const restore = () => {
      if (img.dataset.ownOriginalSrc) {
        img.src = img.dataset.ownOriginalSrc;
        delete img.dataset.ownOriginalSrc;
      }
      img.removeEventListener("error", onError);
    };

    function onError() {
      restore();
    }

    img.addEventListener("error", onError);
    // set src to webp; if it 404s, onError restores original
    try {
      img.src = webp;
    } catch (e) {
      onError();
    }
  }

  function runOnce() {
    try {
      const imgs = Array.from(document.images || []);
      imgs.forEach(trySwap);
    } catch (e) {
      // silent
    }
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(runOnce, 50);
  } else {
    document.addEventListener("DOMContentLoaded", runOnce);
  }
}
