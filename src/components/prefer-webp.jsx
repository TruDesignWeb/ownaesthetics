"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import preferWebp from "../utils/preferWebp";

// Prefer WebP assets at runtime with graceful fallback to original images.
// Re-runs on every route change so newly rendered images are covered.
export default function PreferWebp() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      preferWebp();
    } catch {
      // safe no-op
    }
  }, [pathname]);

  return null;
}
