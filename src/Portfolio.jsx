import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import ProfilePhoto from "./components/ProfilePhoto";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./components/icons";
import { skillGroups, certifications, achievements, education, experience } from "./data/skills.js";
import { projects } from "./data/projects.js";
import { links } from "./data/links.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Section({ id, eyebrow, title, children, className = "", style }) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 px-6 ${className}`} style={style}>
      <div className="max-w-5xl mx-auto">
        {(eyebrow || title) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {eyebrow && (
              <p className="font-mono text-xs tracking-wider uppercase mb-3" style={{ color: "var(--accent)" }}>
                {eyebrow}
              </p>
            )}
            {title && <h2 className="font-display text-3xl sm:text-4xl font-semibold">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen antialiased" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <div className="fixed inset-0 -z-10 grain-bg pointer-events-none" />

      <motion.div
        style={{ scaleX, background: "var(--accent)" }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      />

      <Nav />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 pt-16">
        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[1.15fr_auto] gap-14 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm mb-5 flex items-center gap-2"
              style={{ color: "var(--muted)" }}
            >
              <span aria-hidden>sanket@dev</span>
              <span aria-hidden>:~$</span>
              <span>whoami</span>
              <span className="cursor-blink" aria-hidden>▍</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]"
            >
              Sanket Desai
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-lg sm:text-xl max-w-xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Full-Stack Developer, AI/ML Engineer, and Cybersecurity Enthusiast building intelligent, scalable applications across web, mobile, and AI.
              Passionate about solving real-world problems with clean architecture, automation, and secure-by-design systems.

            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-lg sm:text-xl max-w-xl leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I ship production-minded code, then try to break it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-full font-medium text-sm transition-transform hover:scale-105"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                View projects
              </a>
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full font-medium text-sm border transition-colors flex items-center gap-1.5"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Resume <ArrowUpRight />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="justify-self-center md:justify-self-end"
          >
            <ProfilePhoto />
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <Section id="about" eyebrow="01 // About" title="Building at the intersection of systems and security">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I’m a Computer Science Engineer passionate about building intelligent,
              secure, and scalable software across web, mobile, and AI. My work spans
              full-stack development, backend engineering, Android development,
              machine learning, and cybersecurity, allowing me to approach problems
              from multiple perspectives and build solutions that are both practical
              and resilient.
            </p>
        
            <p>
              I enjoy turning ideas into production-ready applications—from
              AI-powered systems and LLM-driven tools to secure backend services and
              modern web and Android experiences. I’m particularly interested in the
              intersection of AI and cybersecurity, where intelligent systems need to
              make decisions while remaining reliable in unpredictable environments.
            </p>
        
            <p>
              Most of what I build starts as an idea, evolves into a full-stack
              application or AI-powered service, and is then pressure-tested with the
              same mindset I use in cybersecurity and CTF competitions: assume it will
              be attacked, and design accordingly. Whether it’s an LLM-powered
              application, an Android app, or a scalable backend, I focus on writing
              clean, maintainable software that is reliable, secure by design, and
              built to solve real-world problems.
            </p>
          </div>
          {/* Right */}
          <div className="space-y-5 self-start">
        
            {/* Location */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-mono text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                Location
              </p>
            
              <p className="text-lg font-medium">
                {links.location}
              </p>
            </div>
            
            {/* Education */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-mono text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                Education
              </p>
            
              <p className="text-lg leading-snug">
                {education.degree}
              </p>
            
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {education.school}
                <br />
                {education.years}
              </p>
            </div>
            
            {/* Status */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="font-mono text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                Status
              </p>
            
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--accent)" }}
              >
                Open to opportunities to build, learn, and grow as a Software Engineer.
              </p>
            </div>
            
          </div>
        </div>
      </Section>

      {/* ================= SKILLS ================= */}
      <Section
        id="skills"
        eyebrow="02 // Skills"
        title="Toolkit"
        className="border-y"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-9">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Certifications
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span style={{ color: "var(--accent)" }}>–</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: "var(--muted)" }}>
              Achievements
            </p>
            <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
              {achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <span style={{ color: "var(--accent)" }}>–</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ================= EXPERIENCE ================= */}
      <Section id="experience" eyebrow="03 // Experience" title="Where I've worked">
  <div className="space-y-6">
    {experience.map((exp, index) => (
      <motion.div
        key={index}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="rounded-2xl p-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderLeft: "3px solid var(--accent)",
        }}
      >
        <div
          className="sm:w-48 shrink-0 font-mono text-xs"
          style={{ color: "var(--muted)" }}
        >
          {exp.dates}
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">
            {exp.role}
          </h3>

          <p
            className="mt-1 text-sm"
            style={{ color: "var(--accent)" }}
          >
            {exp.company}
          </p>

          <ul
            className="mt-4 space-y-2 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {exp.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span style={{ color: "var(--accent)" }}>–</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </div>
</Section>

      {/* ================= PROJECTS ================= */}
      <Section
        id="projects"
        eyebrow="04 // Projects"
        title="Selected work"
        className="border-y"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl p-6 flex flex-col h-full min-h-[430px]"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3 className="font-display text-lg font-semibold">
                {p.title}
              </h3>
            
              <p
                className="mt-2 text-sm"
                style={{ color: "var(--accent)" }}
              >
                {p.subtitle}
              </p>
            
              <p
                className="mt-4 text-sm leading-relaxed flex-grow"
                style={{ color: "var(--muted)" }}
              >
                {p.summary}
              </p>
            
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-1 rounded-md"
                    style={{
                      background: "var(--surface-2)",
                      color: "var(--muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/project/${p.slug}`}
                className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: "var(--text)" }}
              >
                View project <ArrowUpRight />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ================= CONTACT ================= */}
      <Section id="contact" eyebrow="05 // Contact" title="Let's build something">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-[15px] leading-relaxed max-w-md" style={{ color: "var(--muted)" }}>
            I'm currently looking for internship and new-grad roles in backend, AI/ML, or
            security engineering. The fastest way to reach me is email — I read everything.
          </p>

          <div
            className="rounded-2xl p-6 font-mono text-sm space-y-4"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <p style={{ color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)" }}>$</span> contact --reach-out
            </p>
            <a href={`mailto:${links.email}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <MailIcon /> {links.email}
            </a>
            <a href={`tel:${links.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <PhoneIcon /> {links.phone}
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <GithubIcon /> {links.githubLabel}
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <LinkedinIcon /> {links.linkedinLabel}
            </a>
          </div>
        </div>
      </Section>

      <footer className="px-6 py-8 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-xs" style={{ color: "var(--muted)" }}>
          <p>© {new Date().getFullYear()} Sanket Desai</p>
          <p>Built with React, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
