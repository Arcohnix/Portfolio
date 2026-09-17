import { useState } from "react";

/**
 * Drop your photo at: public/profile.jpg  (or .png / .webp — update `src` below to match)
 * Until a real file exists there, this automatically shows an initials placeholder instead,
 * so the layout looks correct either way.
 */
export default function ProfilePhoto() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] shrink-0">
      {/* corner brackets */}
      {[
        "top-[-10px] left-[-10px] border-t-2 border-l-2",
        "top-[-10px] right-[-10px] border-t-2 border-r-2",
        "bottom-[-10px] left-[-10px] border-b-2 border-l-2",
        "bottom-[-10px] right-[-10px] border-b-2 border-r-2",
      ].map((cls) => (
        <span
          key={cls}
          className={`absolute w-6 h-6 ${cls}`}
          style={{ borderColor: "var(--accent)" }}
        />
      ))}

      <div
        className="w-full h-full overflow-hidden"
        style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
      >
        {!errored ? (
          <img
            src="/profile.png"
            alt="Sanket Desai"
            onError={() => setErrored(true)}
            className=""
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-6xl font-semibold" style={{ color: "var(--muted)" }}>
              SD
            </span>
          </div>
        )}
      </div>

      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-mono text-[11px] flex items-center gap-2 whitespace-nowrap"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--muted)", boxShadow: "var(--shadow)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--openToWork)", boxShadow: "0 0 0 4px var(--accent-soft)" }}
        />
        open to work
      </div>
    </div>
  );
}
