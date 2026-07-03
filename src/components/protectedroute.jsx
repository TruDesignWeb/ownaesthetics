// src/components/ProtectedRoute.jsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(Boolean(token));
    setChecked(true);
    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  if (!checked || !hasToken) return null;
  return children;
}
