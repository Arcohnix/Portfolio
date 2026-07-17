import { Link, useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Screenshot from "./components/Screenshot";
import { ArrowLeft, ArrowUpRight, GithubIcon } from "./components/icons";
import { projects } from "./data/projects.js";
import { links } from "./data/links.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <Nav />
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <p className="font-mono text-sm mb-3" style={{ color: "var(--muted)" }}>
            404
          </p>
          <h1 className="font-display text-3xl font-semibold mb-4">Project not found</h1>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: "var(--accent)" }}>
            <ArrowLeft /> Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const githubUrl = project.githubUrl || links.github;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="fixed inset-0 -z-10 grain-bg pointer-events-none" />
      <Nav />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-mono mb-8 hover:opacity-80 transition-opacity"
          style={{ color: "var(--muted)" }}
        >
          <ArrowLeft /> back to projects
        </Link>

        <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--accent)" }}>
          Project{project.role ? ` · ${project.role}` : ""}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">{project.title}</h1>
        {project.subtitle && (
          <p className="mt-3 text-lg" style={{ color: "var(--muted)" }}>
            {project.subtitle}
          </p>
        )}

        {project.tech?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2.5 py-1 rounded-md"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full transition-transform hover:scale-105"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            <GithubIcon /> View on GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full border"
              style={{ borderColor: "var(--border)" }}
            >
              Live demo <ArrowUpRight />
            </a>
          )}
        </div>

        {project.problem && (
          <section className="mt-14">
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Problem statement
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text)" }}>
              {project.problem}
            </p>
          </section>
        )}

        {project.summary && (
          <section className="mt-10">
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Summary
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text)" }}>
              {project.summary}
            </p>
          </section>
        )}

        {project.highlights?.length > 0 && (
          <section className="mt-10">
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              How it works
            </p>
            <ul className="space-y-2.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {project.highlights.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span style={{ color: "var(--accent)" }}>–</span> {pt}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* {project.images?.length > 0 && (
          <section className="mt-12">
            <p className="font-mono text-xs uppercase tracking-wider mb-4" style={{ color: "var(--muted)" }}>
              Screenshots
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.images.map((src, i) => (
                <Screenshot key={src} src={src} index={i + 1} />
              ))}
            </div>
          </section>
        )} */}

        <div className="mt-14 pt-8 border-t flex justify-between items-center" style={{ borderColor: "var(--border)" }}>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-mono hover:opacity-80 transition-opacity"
            style={{ color: "var(--muted)" }}
          >
            <ArrowLeft /> all projects
          </Link>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--text)" }}
          >
            <GithubIcon /> Source <ArrowUpRight />
          </a>
        </div>
      </main>
    </div>
  );
}
