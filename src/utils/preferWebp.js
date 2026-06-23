// Prefer WebP at runtime: attempt to load .webp for images and fall back on error.
export default function preferWebp() {
  if (typeof window === "undefined" || !window.document) return;

  function trySwap(img) {
    const srcAttr = img.getAttribute("src") || "";
    if (!srcAttr) return;
    const src = srcAttr.replace(/\\/g, "/");
    // only target assets images with common raster extensions
    if (!/\/assets\/images\//i.test(src)) return;
    if (!/\.(png|jpe?g|gif|bmp)$/i.test(src)) return;

    const webp = src.replace(/\.(png|jpe?g|gif|bmp)$/i, ".webp");
    if (webp === src) return;
    // store original for fallback
    img.dataset.ownOriginalSrc = src;

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
    img.src = webp;
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
