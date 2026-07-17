import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch (e) {
      /* ignore */
    }
  }, [dark]);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark((d) => !d)}
      className="relative inline-flex h-7 w-[3.1rem] shrink-0 items-center rounded-full border transition-colors duration-300"
      style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
    >
      <span
        className="absolute flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ease-out"
        style={{
          left: dark ? "calc(100% - 1.5rem)" : "0.25rem",
          background: "var(--accent)",
          color: "var(--accent-text)",
        }}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
