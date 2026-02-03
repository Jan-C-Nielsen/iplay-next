"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleDarkmode() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded light:bg-white dark:black"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
