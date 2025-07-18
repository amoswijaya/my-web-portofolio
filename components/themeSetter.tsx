// app/components/ThemeSetter.tsx
"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/themeProvider"; // your existing hook

export default function ThemeSetter() {
  const { theme } = useTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return null;
}
