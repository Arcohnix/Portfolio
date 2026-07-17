/**
 * ============================================================
 *  PROJECTS DATA
 * ============================================================
 * Each object below renders its own page automatically at
 * /project/<slug> — you don't need to touch any component
 * code or add new routes/files.
 *
 * TO ADD A NEW PROJECT:
 *   1. Copy one of the objects below.
 *   2. Give it a unique `slug` (used in the URL).
 *   3. Fill in the fields — anything except `slug`, `title`,
 *      and `summary` can be left out and the page will just
 *      skip that section.
 *   4. Optional: drop screenshots at
 *      public/projects/<slug>/1.jpg, 2.jpg, 3.jpg ...
 *      and list their paths in `images`. If an image is
 *      missing, the page shows a clean placeholder instead
 *      of a broken image — so it's safe to list images you
 *      haven't added yet.
 *
 * FIELD REFERENCE:
 *   slug        (required) URL slug, e.g. "agentic-soc"
 *   title       (required) Project name
 *   subtitle    One-line tagline shown under the title
 *   role        e.g. "Solo project", "Team of 3", "Internship project"
 *   tech        Array of tech/tool tags
 *   githubUrl   Link for the "View on GitHub" button.
 *               Defaults to your GitHub profile if omitted —
 *               replace with the actual repo URL once it's public.
 *   liveUrl     Optional link to a live demo / deployed app
 *   problem     The problem statement — what pain point this solves
 *   summary     Short overview of what the project is / does
 *   highlights  Array of bullet points — key features or contributions
 *   images      Array of screenshot paths under /public
 * ============================================================
 */

export const projects = [
  {
    slug: "agentic-soc",
    title: "Agentic - Security Operations Centre",
    subtitle: "Intelligent cybersecurity monitoring platform",
    role: "Personal project",
    tech: ["Python", "FastAPI", "Scapy", "PyTorch", "PyTorch Geometric"],
    githubUrl: "https://github.com/Arcohnix/Agentic-Security-Operation-Centre.git",
    liveUrl: null,
    problem:
      "Security teams monitoring live network traffic often lean on static, rule-based detection that misses novel attack patterns and buries analysts in false-positive alerts.",
    summary:
      "An AI-powered SOC (Security Operations Center) platform for real-time network monitoring, anomaly detection, and automated threat response — built to reduce that manual triage load.",
    highlights: [
      "Packet inspection pipelines built with Scapy and FastAPI to analyze live network traffic.",
      "Machine learning and graph neural network models trained on cybersecurity datasets for attack classification.",
      "Automated threat mitigation workflows including IP blocking, risk scoring, and monitoring dashboards.",
    ],
    images: [
      "/projects/agentic-soc/1.jpg",
      "/projects/agentic-soc/2.jpg",
      "/projects/agentic-soc/3.jpg",
    ],
  },
  {
  slug: "forgegym",
  title: "ForgeGym",
  subtitle: "Offline AI-Free Gym Tracking Platform",
  role: "Personal Project",
  tech: [
    "Kotlin",
    "Jetpack Compose",
    "Material 3",
    "MVVM",
    "Room",
    "StateFlow",
    "Navigation Compose",
    "DataStore",
    "Coroutines"
  ],
  githubUrl: "https://github.com/Arcohnix/Gym-Workout-Tracker-android-application.git",
  liveUrl: null,
  problem:
    "Most fitness apps rely on subscriptions, cloud services, or internet connectivity, making workout tracking expensive, privacy-invasive, or unavailable offline.",
  summary:
    "ForgeGym is a premium offline-first Android gym companion that enables users to create custom workout plans, log workouts, analyze long-term progress, and receive scientifically driven progression recommendations—all without requiring an internet connection.",
  highlights: [
    "Built with Clean Architecture, MVVM, Repository Pattern, Room, and Jetpack Compose for a scalable and maintainable codebase.",
    "Developed a complete workout ecosystem including Workout Builder, Exercise Library, Workout Session Engine, History, Analytics, and Personal Records.",
    "Implemented a Progressive Overload Engine using deterministic training algorithms, multiple 1RM formulas, fatigue analysis, plateau detection, and recovery recommendations.",
    "Designed an offline-first architecture with Room persistence, DataStore preferences, JSON backup & restore, CSV export, and zero cloud dependencies for complete user privacy."
  ],
  images: ["/projects/forgegym/1.jpg"],
},
  {
    slug: "text-to-sql-engine",
    title: "LLM-Powered Text-to-SQL Engine",
    subtitle: "Natural language interface for relational databases",
    role: "Personal project",
    tech: ["Python", "SQL", "Ollama", "DeepSeek", "FastAPI"],
    githubUrl: "https://github.com/Arcohnix/Text-to-SQL-Engine---Local-LLM.git",
    liveUrl: null,
    problem:
      "Non-technical stakeholders often need answers hidden inside a database but don't know SQL — so every question has to be routed through an engineer, slowing everyone down.",
    summary:
      "A natural language interface for relational databases, powered by a local LLM, that turns plain-English questions into executable SQL — no query language required.",
    highlights: [
      "Query generation and execution workflows that convert prompts into executable SQL statements.",
      "Runs against a local model via Ollama, so it works schema-agnostically without sending data to a third-party API.",
      "Automated database interaction, enabling conversational access to structured information.",
    ],
    images: [
      "/projects/text-to-sql-engine/1.jpg",
      "/projects/text-to-sql-engine/2.jpg",
    ],
  },
  {
  slug: "autonomous-document-agent",
  title: "Autonomous Document Agent",
  subtitle: "Agentic AI system for autonomous document planning and generation",
  role: "Personal Project",
  tech: [
    "Python",
    "FastAPI",
    "Groq (Llama 3.3 70B)",
    "Pydantic",
    "python-docx",
    "Uvicorn"
  ],
  githubUrl: "https://github.com/Arcohnix/Autonomous-Document-Agent.git",
  liveUrl: null,

  problem:
    "Business document creation is repetitive and often requires manually deciding document structure, drafting content, formatting, and handling incomplete requirements. Traditional generators follow fixed templates instead of reasoning about what should be produced.",

  summary:
    "Built an autonomous AI agent that interprets natural-language requests, plans the appropriate document structure, generates section-wise content using an LLM, assembles a professionally formatted Word document, and exposes the entire workflow through a FastAPI service.",

  highlights: [
    "Implemented a two-stage autonomous pipeline separating planning from execution, allowing the agent to determine document type, sections, and assumptions before generating content.",
    "Integrated Groq's Llama 3.3 70B model through a lightweight HTTP client with retry, exponential backoff, and deterministic fallback planning.",
    "Generated fully formatted .docx documents using python-docx with headings, structured sections, bullet lists, and assumptions automatically included when required.",
    "Built REST APIs using FastAPI with Pydantic validation, download endpoints, and request guardrails for reliable document generation.",
    "Designed the architecture with modular components (planner, executor, document builder, and LLM client) to enable maintainability and future extensibility."
  ],

  images: ["/projects/autonomous-document-agent/1.jpg"],
},
{
    slug: "smart-trolley",
    title: "Smart Trolley Payment Android Application",
    subtitle: "Automated retail checkout, built for Android",
    role: "Personal project",
    tech: ["Java", "XML", "Android Studio", "Socket Programming"],
    githubUrl: "https://github.com/Arcohnix",
    liveUrl: null,
    problem:
      "Manual checkout queues are slow and labor-intensive in retail stores — customers wait, and staff spend time on repetitive scanning instead of higher-value work.",
    summary:
      "An Android-based payment application that moves checkout onto the shopping trolley itself, so payment happens as items are added instead of at a counter.",
    highlights: [
      "Secure transaction processing built directly into the in-store checkout flow.",
      "Socket-based communication between trolley devices and the billing backend.",
      "Designed around Android Studio with a focus on responsive, low-latency device communication.",
    ],
    images: ["/projects/smart-trolley/1.jpg"],
  },
];
