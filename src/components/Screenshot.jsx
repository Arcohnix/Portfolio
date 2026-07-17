import { useState } from "react";

/**
 * Renders a project screenshot. If the image path doesn't exist yet
 * (404), it shows a clean placeholder instead of a broken image —
 * so project pages look intentional even before real screenshots
 * are added at the given path.
 */
export default function Screenshot({ src, index }) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden aspect-video flex items-center justify-center"
      style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
    >
      {!errored ? (
        <img
          src={src}
          alt={`Screenshot ${index}`}
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="text-center px-4">
          <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            screenshot {index} · add image at
          </p>
          <p className="font-mono text-xs mt-1" style={{ color: "var(--accent)" }}>
            public{src}
          </p>
        </div>
      )}
    </div>
  );
}
