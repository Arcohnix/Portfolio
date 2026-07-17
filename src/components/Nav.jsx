import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { links } from "../data/links.js";

const navItems = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--bg) 78%, transparent)", borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono text-sm tracking-tight" style={{ color: "var(--text)" }}>
          sanket<span style={{ color: "var(--accent)" }}>.</span>dev
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-mono text-[13px]" style={{ color: "var(--muted)" }}>
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} className="hover:opacity-100 transition-opacity opacity-80 hover:!text-[var(--text)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: "var(--muted)" }} className="hover:!text-[var(--text)] transition-colors">
            <GithubIcon />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: "var(--muted)" }} className="hover:!text-[var(--text)] transition-colors">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${links.email}`} aria-label="Email" style={{ color: "var(--muted)" }} className="hover:!text-[var(--text)] transition-colors">
            <MailIcon />
          </a>
          <span className="w-px h-5" style={{ background: "var(--border)" }} />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="font-mono text-xs px-2 py-1 rounded-md border"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4 font-mono text-sm" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} onClick={() => setOpen(false)} style={{ color: "var(--text)" }}>
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-5 pt-2">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" style={{ color: "var(--muted)" }}>
              <GithubIcon />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" style={{ color: "var(--muted)" }}>
              <LinkedinIcon />
            </a>
            <a href={`mailto:${links.email}`} aria-label="Email" style={{ color: "var(--muted)" }}>
              <MailIcon />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
