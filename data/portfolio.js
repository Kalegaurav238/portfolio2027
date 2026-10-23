/**
 * ==============================================================================
 * GAURAV KALE - PERSONAL PORTFOLIO DATA (FINAL SOURCE OF TRUTH)
 * ==============================================================================
 * Strictly aligned with current resume. Zero fabricated metrics or unverified claims.
 * ==============================================================================
 */

export const portfolioData = {
  personal: {
    name: "Gaurav Vilas Kale",
    shortName: "Gaurav Kale",
    currentRoleLine: "Currently R&D Engineer, ERP & AI Systems at Robotex India",
    tagline: "Builds autonomous AI agents, production-grade Python backends, and live ERP systems for education and field operations.",
    headlineRoles: [
      "AI Developer & Agentic Systems Engineer",
      "R&D Engineer (ERP & AI Systems)",
      "Python Backend Specialist",
      "Robotics & Edge Systems Builder"
    ],
    secondaryTags: [
      "LangGraph Multi-Agent Systems",
      "FastAPI & Docker Compose",
      "Live ERP Architecture",
      "Autonomous Robotics"
    ],
    location: "Pune, Maharashtra, India",
    email: "gauravkale238@gmail.com",
    github: "https://github.com/Kalegaurav238",
    linkedin: "https://www.linkedin.com/in/gaurav-kale-083753230/",
    resumeUrl: "/assets/gaurav-kale-resume.pdf",
    statusBadge: "Currently R&D Engineer at Robotex India • Open to Roles in Pune",
    availabilityNote: "Open to AI/Backend roles and ERP Coordinator / ERP Support roles in Pune.",
    bio: "2.5+ years of engineering experience spanning ERP implementation and support, AI/ML development, and full-stack operational automation. Independently researched, designed, and deployed a live multi-center ERP system (robotexerp.online) end-to-end. Experienced working directly with university stakeholders (Vishwakarma, NICMAR, Trinity Group), architecting LangGraph multi-agent frameworks, and building national championship-winning autonomous robotics."
  },

  differentiators: [
    {
      id: "live-erp",
      title: "Full-Lifecycle ERP & Automation",
      tagline: "Architecture, deployment, Linux servers & stakeholder support",
      description: "Independently built and deployed robotexerp.online end-to-end: FastAPI, WhatsApp webhook ingestion, Gemini Vision multimodal OCR, GPS geofencing, APScheduler, OpenPyXL reporting, Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel."
    },
    {
      id: "agentic-depth",
      title: "Practical Agentic AI",
      tagline: "LangGraph state machines & MCP microservices, not just prompting",
      description: "Architecting deterministic multi-agent systems with LangGraph StateGraph, FastMCP tool integration, and semantic caching. Built for fault-tolerance, dynamic branching, and multi-user sessions."
    },
    {
      id: "backend-discipline",
      title: "Production Discipline",
      tagline: "Strict typing, Redis caching, async I/O & Docker",
      description: "Rigorous standards: strict typing with mypy, Ruff linting, Redis caching and idempotency, async FastAPI endpoints, SQLAlchemy ORM, and automated schedulers."
    },
    {
      id: "stakeholder-liaison",
      title: "University & Client Stakeholder Liaison",
      tagline: "Requirement gathering, UAT, staff training & ERP coordination",
      description: "Served as primary technical liaison for Vishwakarma University, NICMAR University, and Trinity Group across admission, fee, and academic ERP modules, leading end-user training and system optimization."
    },
    {
      id: "hardware-depth",
      title: "Robotics & Hardware Depth",
      tagline: "2nd Place, Robotex India National Championship 2026",
      description: "Built the national 2nd-place autonomous race bot with HC-SR04 ultrasonic sensors, Arduino, TB6612FNG motor driver, and custom 3D-printed chassis. Also teaches robotics/STEAM labs to school students (grades 5–7)."
    }
  ],

  // Proof Strip — Exact verified facts from brief
  proofMetrics: [
    {
      value: "2nd Place",
      label: "National Championship 2026",
      context: "2nd Place, Robotex India National Championship 2026 with custom autonomous race robot.",
      source: "Robotex India National Championship 2026"
    },
    {
      value: "2.5+ Years",
      label: "Engineering Experience",
      context: "Across ERP implementation, AI/ML backend engineering, university support, and robotics.",
      source: "Robotex India, Almasons, Eduplus"
    },
    {
      value: "Live ERP",
      label: "Built End to End",
      context: "Researched, designed, deployed and maintained live multi-center ERP system (robotexerp.online).",
      source: "robotexerp.online"
    },
    {
      value: "600K → 45K",
      label: "Daily Log Entries Filtered",
      context: "Analysed ~600,000 log entries/day and filtered them down to ~45,000 meaningful entries for telecom signaling servers.",
      source: "Almasons Technology"
    }
  ],

  // Hero Case Studies
  caseStudies: [
    {
      id: "robotex-erp",
      title: "Robotex ERP (robotexerp.online) — Enterprise Multi-Center Management System",
      subtitle: "End-to-End Architecture, Multimodal Attendance Engine & Automated Reporting",
      category: "Full-Stack ERP & Operations Automation",
      status: "Production Live ERP",
      featured: true,
      confidentialityNote: "Production system. Public landing page linked; internal administrative portals, trainer records, and login routes protected. Demo access on request.",
      links: {
        live: "https://robotexerp.online",
        confidential: false,
        demoNote: "Public landing page linked. Internal administrative dashboards protected."
      },
      tags: [
        "FastAPI",
        "Gemini Vision",
        "WhatsApp Webhooks",
        "GPS Geofencing",
        "APScheduler",
        "OpenPyXL",
        "SQLAlchemy",
        "MySQL",
        "Docker Compose",
        "Nginx",
        "Cloudflare Tunnel",
        "Linux Server"
      ],
      overview: "Live enterprise ERP system (robotexerp.online) researched, designed, built, deployed, and supported end-to-end to manage remote training centers, automated attendance, field tracking, and managerial reporting across multiple locations.",
      problem: "Remote center trainers across multiple locations required centralized attendance tracking, automated punch verification, and daily operational reporting without requiring expensive standalone biometric hardware at every remote center.",
      approach: "Architected a full-stack ERP deployed via Docker Compose on Linux servers with Nginx (SSL/TLS, rate limiting, routing) and Cloudflare Tunnel. Engineered an automated attendance engine utilizing FastAPI, WhatsApp webhooks, multimodal Gemini Vision OCR, and GPS geofencing to verify physical location and prevent proxy attendance. Automated weekly data reconciliation, database backups, and styled Excel (OpenPyXL) plus HTML email digests via APScheduler.",
      architecture: [
        { step: "WhatsApp Webhook Ingestion", detail: "FastAPI receives incoming WhatsApp check-in photos posted from remote center trainers." },
        { step: "Multimodal Gemini Vision OCR", detail: "Gemini Vision parses watermarked photo timestamps, center names, and visual context." },
        { step: "GPS Geofencing Validation", detail: "Validates coordinate markers against designated training center geo-boundaries to eliminate proxy punches." },
        { step: "SQLAlchemy & MySQL Persistence", detail: "Normalized database models pair shifts, compute hours, and track trainer activity across remote centers." },
        { step: "APScheduler Workflows", detail: "Runs automated weekly data reconciliation, database backups, and generates styled OpenPyXL spreadsheets." },
        { step: "Nginx & Cloudflare Tunnel", detail: "Secure reverse proxy handling SSL/TLS termination, rate limiting, and tunnel routing on Linux." }
      ],
      techStack: [
        { name: "FastAPI & Python", role: "Core ERP backend API, webhook ingestion, and business logic" },
        { name: "Gemini Vision (Multimodal OCR)", role: "Extracts photo timestamps, text watermarks, and verification markers" },
        { name: "GPS Geofencing", role: "Coordinates validation preventing proxy check-ins at remote training centers" },
        { name: "APScheduler & OpenPyXL", role: "Automated weekly reconciliation, database backups, and styled Excel report generation" },
        { name: "SQLAlchemy & MySQL / SQLite", role: "Normalized relational schemas with Pydantic validation" },
        { name: "Docker Compose & Linux", role: "Containerized deployment stack on production Linux VPS" },
        { name: "Nginx & Cloudflare Tunnel", role: "Reverse proxy, SSL/TLS certificates, rate limiting, and secure ingress" }
      ],
      outcomes: [
        "Researched, designed, and independently built robotexerp.online from initial concept to live production deployment.",
        "Automated remote center attendance and check-in verification via WhatsApp, Gemini Vision, and GPS geofencing.",
        "Delivered automated managerial reporting with styled Excel sheets and HTML digests, eliminating manual compilation.",
        "Maintains ongoing production support, system health monitoring, and schema management."
      ],
      myRole: "R&D Engineer, ERP & AI Systems at Robotex India. Solely responsible for end-to-end architecture, development, deployment on Linux with Docker Compose, and ongoing production support."
    },
    {
      id: "heygini-wms",
      title: "HeyGini — Production AI Assistant & Anomaly Detection",
      subtitle: "Multi-User Sessions, LangGraph/LangChain Backend & Local-LLM Log Anomaly Detection",
      category: "Agentic AI & Anomaly Detection",
      status: "Production AI System",
      featured: true,
      confidentialityNote: "Internal enterprise AI system built at Almasons Technology. Architecture and sanitized metrics shared. Details in interview.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']",
        live: "[TODO: add if available, else leave 'Details shared in interview']",
        confidential: true
      },
      tags: ["Python", "FastAPI", "LangGraph", "LangChain", "Multi-User Sessions", "SQLite Cache", "In-Memory Caching", "Local-LLM Anomaly Detection"],
      overview: "Production AI assistant backend built with Python, FastAPI, LangGraph, and LangChain supporting multi-user sessions, dual-layer caching, and local-LLM log anomaly detection.",
      problem: "Enterprise operations required an intelligent assistant capable of managing contextual multi-user sessions, executing multi-step reasoning, and analyzing server log streams without exposing sensitive telemetry to external cloud models.",
      approach: "Developed the HeyGini backend in Python and FastAPI using LangGraph and LangChain with isolated multi-user session state. Implemented a dual-layer caching strategy (in-memory cache + SQLite) for query efficiency, and built a local-LLM log anomaly detection pipeline for operational telemetry.",
      architecture: [
        { step: "Session Ingestion", detail: "FastAPI endpoint captures queries and binds them to isolated multi-user session contexts." },
        { step: "LangGraph StateGraph", detail: "Manages state transitions, conditional branching, and agent coordination." },
        { step: "Dual-Layer Cache", detail: "Checks in-memory cache and local SQLite store to serve repetitive operational queries rapidly." },
        { step: "Tool Execution", detail: "Executes backend lookups and database queries through modular tool nodes." },
        { step: "Local-LLM Log Anomaly Pipeline", detail: "Runs local language models to parse and detect anomalous state transitions in server logs." }
      ],
      techStack: [
        { name: "Python & FastAPI", role: "Core asynchronous API backend and session routing" },
        { name: "LangGraph & LangChain", role: "Agentic state machines, memory persistence, and multi-user session flows" },
        { name: "SQLite & In-Memory Caching", role: "Dual-layer response and state caching" },
        { name: "Local LLM Inference", role: "Air-gapped log anomaly detection" }
      ],
      outcomes: [
        "Built production AI assistant backend supporting concurrent multi-user sessions.",
        "Implemented dual-layer caching reducing redundant database and inference calls.",
        "Engineered local-LLM anomaly detection system for privacy-preserving server log analysis."
      ],
      myRole: "Software Developer, AI/ML at Almasons Technology. Built the Python/FastAPI backend, LangGraph state workflows, multi-user session persistence, dual-layer cache, and local-LLM log anomaly pipeline."
    },
    {
      id: "eduplus-chatbots",
      title: "Eduplus Campus — Enterprise ERP Chatbots & University Liaison",
      subtitle: "Rasa-Based ERP Chatbots for Vishwakarma University, NICMAR University & Trinity Group",
      category: "Conversational NLP & ERP Support",
      status: "Production University Deployments",
      featured: true,
      confidentialityNote: "Client deployments for Vishwakarma University, NICMAR University, and Trinity Group, Pune. Details shared in interview.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']",
        confidential: true
      },
      tags: ["Rasa NLU", "Python", "REST APIs", "ERP Implementation", "University Liaison", "UAT & QA"],
      overview: "Designed and deployed conversational Rasa-based ERP chatbots in college portals for admission and fee queries, serving as primary liaison for Vishwakarma University, NICMAR University, and Trinity Group, Pune.",
      problem: "University admissions and finance offices were overwhelmed with repetitive student inquiries regarding admission criteria, eligibility rules, and fee schedules during peak academic cycles.",
      approach: "Designed and deployed Rasa NLU conversational chatbots embedded into university portals, integrated with underlying ERP modules via REST APIs. Acted as primary technical liaison between dev teams and university stakeholders across admissions, fee, and academic modules. Led testing, debugging, optimization, and trained faculty and admin staff.",
      architecture: [
        { step: "Portal Integration", detail: "Chatbot interface embedded directly inside university web portals." },
        { step: "Rasa NLU Pipeline", detail: "Classifies student intents and extracts entities (course names, fee categories, deadlines)." },
        { step: "ERP REST API Integration", detail: "Fetches live fee structure and admission requirements from university ERP backends." },
        { step: "Stakeholder Feedback Loop", detail: "Continuous testing, debugging, and module optimization based on staff and student usage." }
      ],
      techStack: [
        { name: "Rasa NLU", role: "Intent classification and dialogue management for university queries" },
        { name: "Python & REST APIs", role: "Middleware integration connecting chatbot with ERP backends" },
        { name: "ERP Support & Liaison", role: "Requirement gathering, UAT/QA testing, and staff/faculty enablement" }
      ],
      outcomes: [
        "Deployed automated admission and fee inquiry chatbots across major university portals.",
        "Served as primary technical liaison for Vishwakarma University, NICMAR University, and Trinity Group, Pune.",
        "Trained administrative staff and university faculty on ERP module workflows and features."
      ],
      myRole: "Software Engineer, Python / ERP Support (ERP Coordinator) at Eduplus Campus. Designed and deployed Rasa chatbots, led client technical onboarding, testing, and faculty training."
    },
    {
      id: "catalognormalizer",
      title: "CatalogNormalizer API — Enterprise SKU Normalization",
      subtitle: "High-Concurrency API Mapping E-Commerce SKUs to Google Product Taxonomy",
      category: "Backend & Structured GenAI",
      status: "Production API",
      featured: true,
      confidentialityNote: "Production system architecture; proprietary client SKU dictionaries sanitized. Details shared in interview.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']",
        live: "[TODO: add if available, else leave 'Details shared in interview']",
        confidential: true
      },
      tags: ["Python 3.11+", "FastAPI", "Cloud Run", "Instructor", "Pydantic v2", "Redis", "Vector Embeddings", "mypy strict", "Ruff"],
      overview: "High-concurrency async API mapping vendor SKU titles to Google Product Taxonomy categories with strict Pydantic schemas and idempotent Redis caching.",
      problem: "E-commerce catalogs contain non-standardized vendor SKU titles with inconsistent attributes and typos that fail marketplace categorization.",
      approach: "Built a high-concurrency API in FastAPI deployed to Cloud Run. Integrated Instructor with Pydantic v2 for deterministic structured outputs, Redis idempotency keys to prevent duplicate inference, batch chunking, vector embeddings, and fallback LLM orchestration. Enforced mypy strict and Ruff standards.",
      architecture: [
        { step: "Batch Ingestion", detail: "FastAPI receives batched product SKU records with asynchronous chunking." },
        { step: "Redis Idempotency Check", detail: "Prevents duplicate processing of previously classified SKUs." },
        { step: "Vector Embeddings", detail: "Performs semantic similarity lookup against Google Product Taxonomy categories." },
        { step: "Instructor Structured LLM", detail: "Enforces strict Pydantic schema validation for taxonomy matching." },
        { step: "Type Safety", detail: "Zero runtime type failures verified with mypy --strict." }
      ],
      techStack: [
        { name: "Python 3.11+ & FastAPI", role: "High-concurrency async API framework" },
        { name: "Instructor & Pydantic v2", role: "Strict schema validation and structured LLM extraction" },
        { name: "Redis", role: "Idempotency enforcement and caching layer" },
        { name: "Vector Embeddings", role: "Semantic matching for SKU classification" },
        { name: "mypy (--strict) & Ruff", role: "Rigorous static type verification and code linting" }
      ],
      outcomes: [
        "Automated mapping of raw vendor SKUs to Google Product Taxonomy standards.",
        "Guaranteed idempotency on repeated webhook calls via Redis keys.",
        "Zero runtime schema errors through Instructor Pydantic enforcement."
      ],
      myRole: "Python Backend Specialist. Designed the async pipeline, implemented Redis idempotency, configured Instructor schema enforcement, and maintained strict mypy type coverage."
    },
    {
      id: "pothole-vision-ai",
      title: "Pothole Vision AI — Real-Time Defect Detection Dashboard",
      subtitle: "Dual-Mode CV Dashboard with 1-FPS Video Streaming, Polygon Masks & Data Export",
      category: "Computer Vision & Edge",
      status: "Production Dashboard",
      featured: true,
      confidentialityNote: "Demonstration system & code. Ready for inspection.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']",
        confidential: false
      },
      tags: ["FastAPI", "Roboflow Workflows", "Supervision", "OpenCV", "Chart.js"],
      overview: "Dual-mode computer vision dashboard processing video feeds and camera streams at 1-FPS, displaying defect bounding boxes and polygon masks, with an interactive before/after split slider and CSV/JSON export.",
      problem: "Manual road surface inspection is slow and subjective, leaving dangerous road defects and potholes uncatalogued until citizen complaints or accidents occur.",
      approach: "Engineered a dual-mode computer vision pipeline in FastAPI utilizing Roboflow Workflows (supporting serverless and hosted configurations). Processed video feeds at 1-FPS with OpenCV and Supervision, providing polygon masks, bounding boxes, an interactive before/after split viewer, and CSV/JSON export.",
      architecture: [
        { step: "Feed Ingestion", detail: "Processes webcam or recorded road video stream at 1-FPS frame rate." },
        { step: "FastAPI & OpenCV", detail: "Extracts, resizes, and normalizes video frames for inference." },
        { step: "Roboflow Workflows", detail: "Defect detection running via serverless or hosted model endpoints." },
        { step: "Supervision Overlays", detail: "Draws bounding boxes and polygon segmentation masks over detected road defects." },
        { step: "Analytics & Export", detail: "Chart.js dashboard displays defect trends with before/after split slider and CSV/JSON data download." }
      ],
      techStack: [
        { name: "FastAPI", role: "Backend video frame streaming and API service" },
        { name: "Roboflow Workflows", role: "Serverless and hosted computer vision inference" },
        { name: "Supervision & OpenCV", role: "Frame extraction, polygon mask rendering, and annotation" },
        { name: "Chart.js", role: "Real-time dashboard charts and defect counting" }
      ],
      outcomes: [
        "1-FPS video processing suited for road inspection camera feeds.",
        "Interactive before/after split comparison slider for visual validation of detected defects.",
        "Direct CSV and JSON data export for GIS integration and maintenance planning."
      ],
      myRole: "Computer Vision & Full-Stack Developer. Integrated Roboflow Workflows, built OpenCV frame handler, and created the interactive inspection dashboard with split viewer."
    }
  ],

  // More Work (Compact Grid)
  moreProjects: [
    {
      id: "folkrace-robot",
      title: "FolkRace Autonomous Robot",
      category: "Robotics & Embedded Systems",
      status: "Competition Winner (2nd Place)",
      tags: ["Arduino", "HC-SR04 Ultrasonic Sensors", "TB6612FNG Driver", "3D Printing"],
      highlight: "2nd Place, Robotex India National Championship 2026",
      description: "Sensor-based autonomous race robot with custom 3D-printed chassis, tuned real-time obstacle navigation algorithms, Arduino-based control, and TB6612FNG motor driver.",
      details: "Sensor array: HC-SR04 ultrasonic sensors for real-time obstacle detection and collision-free track navigation, securing 2nd Place nationally at Robotex India National Championship 2026.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']"
      }
    },
    {
      id: "gss-log-parser",
      title: "GSS Log Parser — Signalling-Server Log Tool",
      category: "Python Tooling & Anomaly Detection",
      status: "Internal Production Utility (Almasons Technology)",
      tags: ["Python", "FastAPI", "Pandas", "Log Anomaly Detection"],
      highlight: "Analysed ~600,000 log entries/day and filtered them down to ~45,000 meaningful entries.",
      description: "Signalling-server log analysis and anomaly detection tool built at Almasons Technology. Ingests raw telecom log dumps, extracts critical state transitions, and filters out noise.",
      details: "Replaced manual grep parsing with an automated Python pipeline, isolating ~45,000 actionable anomalies from 600,000 daily events.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']"
      }
    },
    {
      id: "margdarshak-kiosk",
      title: "Margdarshak Kiosk — Offline AI Career Counsellor",
      category: "Edge AI Software Architecture",
      status: "Working PC-Based Software Prototype (Hardware prototype planned)",
      tags: ["Whisper STT", "Ollama", "Local RAG", "Hardware Design Planned"],
      highlight: "Working PC-based software prototype; hardware prototype planned",
      description: "Voice-based career counselling AI architecture designed for rural schools with poor internet. Working software prototype runs local Whisper STT, Ollama, and local RAG on PC.",
      details: "Hardware deployment (Raspberry Pi, AI HAT, Arduino UNO R4 WiFi, and solar power) is documented as the planned implementation architecture.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']"
      }
    },
    {
      id: "facial-attendance",
      title: "Facial Attendance System with Anti-Spoofing and Geofencing",
      category: "Computer Vision & Security",
      status: "Completed Project",
      tags: ["DeepFace", "OpenCV", "Python", "GPS Geofencing"],
      highlight: "DeepFace recognition + anti-spoofing + GPS geofencing",
      description: "Facial attendance verification system combining DeepFace recognition with anti-spoofing checks and mobile GPS geofencing validation to ensure on-premise check-ins.",
      details: "Validates authentic physical presence through image liveness checks and geographical coordinate verification.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']"
      }
    },
    {
      id: "robotex-steam-curriculum",
      title: "Robotics & STEAM Training Content Enablement",
      category: "Education & Hardware Pedagogy",
      status: "Education & Training (Robotex India)",
      tags: ["Python", "Data Analytics", "AI/Robotics", "Curriculum Design"],
      highlight: "Developed and delivered Python, Data Analytics and AI/robotics training content",
      description: "Developed and delivered training content in Python, Data Analytics, and AI/robotics for students, conducting hands-on laboratory workshops at Robotex India.",
      details: "Mentored students in foundational programming, sensor-based electronics, and analytical thinking.",
      links: {
        github: "[TODO: add if available, else leave 'Details shared in interview']"
      }
    }
  ],

  // Software x Hardware Duality (Modest & Grounded in Real Work)
  duality: {
    title: "Software × Hardware: The Practical Duality",
    subtitle: "How building physical robots reinforces disciplined software engineering",
    quote: "Working with microcontrollers, motor drivers, and sensor loops requires deterministic logic and efficient resource usage. When building AI agent workflows and live ERP backend services, those same principles translate directly into strict typing, reliable state machines, and low-waste computing.",
    bits: {
      title: "The Software (ERP, AI Agents & Backends)",
      focus: "Live ERP Systems, LangGraph State Machines & Async APIs",
      items: [
        "Live ERP system (robotexerp.online) built end-to-end with Docker Compose & Nginx",
        "FastAPI attendance engine with Gemini Vision multimodal OCR & GPS geofencing",
        "LangGraph StateGraph multi-agent systems and multi-user sessions at Almasons",
        "Rasa NLP chatbots and ERP support for Vishwakarma, NICMAR & Trinity Group",
        "Strict typing (mypy), Redis caching, APScheduler workflows & OpenPyXL reports"
      ]
    },
    atoms: {
      title: "The Hardware (Robotics & Physical Labs)",
      focus: "Microcontrollers, Sensors, Motors & 3D Printing",
      items: [
        "2nd Place, Robotex India National Championship 2026 with autonomous race bot",
        "HC-SR04 ultrasonic sensor array for real-time collision-free obstacle navigation",
        "Arduino microcontroller control and TB6612FNG dual motor driver tuning",
        "Custom 3D-printed chassis design and physical hardware assembly",
        "Delivered hands-on Python, Data Analytics, and AI/robotics training content"
      ]
    },
    bridgePoints: [
      {
        concept: "Deterministic Execution",
        hardware: "An autonomous robot on a track must process sensor readings deterministically to avoid collisions.",
        software: "An agent state machine in LangGraph must route through deterministic nodes to avoid invalid state loops."
      },
      {
        concept: "Resource Efficiency",
        hardware: "Microcontrollers have limited RAM and processing cycles that require clean, minimal loops.",
        software: "Live ERP backends require efficient async I/O, normalized schemas, and caching to support concurrent remote centers."
      },
      {
        concept: "Fail-Safe Reliability",
        hardware: "If a sensor read drops, fail-safe motor routines must prevent unexpected robot trajectory.",
        software: "If a cloud service or webhook fails, automated reconciliation and local fallback caches prevent data loss."
      }
    ]
  },

  // Skills Grouped Honestly (No Fake Percentage Bars, No Currently Learning Section)
  skills: {
    erpAutomation: {
      title: "ERP Systems & Automation",
      level: "Proficient",
      skills: [
        "Live ERP Implementation (robotexerp.online)",
        "FastAPI",
        "Gemini Vision (Multimodal OCR)",
        "GPS Geofencing",
        "WhatsApp Webhooks",
        "APScheduler",
        "OpenPyXL (Excel Automation)",
        "Jinja2 Email Automation",
        "ERP Coordinator Support",
        "Requirement Gathering",
        "UAT & QA Testing",
        "End-User Training",
        "Agile / SDLC / STLC"
      ]
    },
    agenticAI: {
      title: "Agentic AI & GenAI",
      level: "Proficient",
      skills: [
        "LangGraph",
        "LangChain",
        "LlamaIndex",
        "MCP (FastMCP)",
        "Multi-Agent Systems",
        "Multi-User Sessions",
        "RAG Pipelines",
        "Semantic / Hybrid Routing",
        "Prompt Engineering",
        "Instructor",
        "Pydantic v2",
        "Rasa NLU"
      ]
    },
    llmInference: {
      title: "LLMs & Inference",
      level: "Proficient",
      skills: [
        "Ollama (Mistral, LLaMA, Phi, Gemma, Qwen)",
        "Groq API",
        "OpenAI API",
        "Whisper (STT)",
        "BGE Embeddings",
        "FastEmbed",
        "Sentence Transformers",
        "ChromaDB Vector Store"
      ]
    },
    computerVision: {
      title: "Computer Vision",
      level: "Proficient",
      skills: [
        "Gemini Vision",
        "YOLO",
        "Roboflow Workflows",
        "OpenCV",
        "Supervision",
        "DeepFace",
        "MediaPipe",
        "OCR"
      ]
    },
    backendData: {
      title: "Backend, Databases & Infrastructure",
      level: "Proficient",
      skills: [
        "Python (Async)",
        "SQLAlchemy",
        "MySQL",
        "PostgreSQL",
        "SQLite",
        "Redis",
        "Docker & Docker Compose",
        "Nginx Reverse Proxy",
        "Cloudflare Tunnel",
        "SSL/TLS",
        "Linux Server Deployment & Monitoring",
        "Git & GitHub",
        "Pandas",
        "NumPy",
        "mypy (Strict)",
        "Ruff"
      ]
    },
    hardwareRobotics: {
      title: "Hardware & Robotics",
      level: "Proficient",
      skills: [
        "Arduino Uno / Nano / R4 WiFi",
        "ESP32 / ESP32-CAM",
        "HC-SR04 Ultrasonic Sensors",
        "TB6612FNG Motor Drivers",
        "Raspberry Pi",
        "3D Printing",
        "OpenSCAD / Tinkercad",
        "Scratch",
        "STEAM Pedagogy"
      ]
    },
    cloudFamiliar: {
      title: "Cloud & Platforms (Familiar)",
      level: "Familiar",
      skills: [
        "Cloud Run",
        "AWS (Familiar)",
        "Azure (Familiar)"
      ]
    }
  },

  // Experience Timeline (Reverse Chronological, Exact)
  experience: [
    {
      period: "Feb 2026 – Present",
      role: "R&D Engineer, ERP & AI Systems",
      company: "Robotex India",
      location: "Maharashtra, India",
      type: "Current Full-Time Role",
      isCurrent: true,
      summary: "Researched, designed, and independently built a live ERP system (robotexerp.online) end-to-end: architecture, development, deployment, and ongoing support.",
      bullets: [
        "Built ERP modules for attendance management, field tracking, and reporting for remote center trainers across multiple locations.",
        "Engineered automated attendance engine using FastAPI, WhatsApp webhooks, multimodal vision OCR (Gemini Vision), and GPS geofencing to verify check-ins and prevent proxy attendance.",
        "Implemented APScheduler workflows for weekly data reconciliation, database backups, and styled Excel (OpenPyXL) plus HTML email reports for management.",
        "Configured Docker Compose stack with Nginx reverse proxy (SSL/TLS, routing, rate limiting) and Cloudflare Tunnel on Linux server with normalized MySQL/SQLite schemas using SQLAlchemy and Pydantic.",
        "Developed and delivered Python, Data Analytics, and AI/robotics training content for students."
      ]
    },
    {
      period: "Jun 2025 – Feb 2026",
      role: "Software Developer, AI/ML",
      company: "Almasons Technology Pvt. Ltd.",
      location: "Mangaluru, India",
      type: "Full-Time Engineering",
      summary: "Built HeyGini production AI assistant backend and engineered local-LLM log anomaly detection system.",
      bullets: [
        "Built backend for HeyGini (production AI assistant) in Python, FastAPI, LangGraph, and LangChain with multi-user sessions.",
        "Implemented dual-layer SQLite + in-memory caching to optimize query response times.",
        "Engineered GSS Log Parser: analysed ~600,000 log entries/day and filtered them down to ~45,000 meaningful entries for telecom signaling servers.",
        "Developed local-LLM log anomaly detection pipeline for secure, privacy-preserving telemetry analysis."
      ],
      confidentialityNote: "Internal enterprise systems. Architecture and sanitized metrics shared."
    },
    {
      period: "Dec 2023 – May 2025",
      role: "Software Engineer, Python / ERP Support (ERP Coordinator)",
      company: "Eduplus Campus Pvt. Ltd.",
      location: "Pune, India",
      type: "Full-Time Engineering",
      summary: "Primary liaison between dev team and client stakeholders for Vishwakarma University, NICMAR University, and Trinity Group, Pune, across admissions, fee, and academic modules.",
      bullets: [
        "Served as primary technical liaison for Vishwakarma University, NICMAR University, and Trinity Group, Pune.",
        "Designed and deployed Rasa-based ERP chatbots in college portals for real-time admission and fee queries.",
        "Led testing, debugging, and module optimization across academic and financial workflows.",
        "Trained administrative staff and university faculty on ERP modules and feature adoption."
      ]
    },
    {
      period: "2022 – 2023",
      role: "Intern Software Developer",
      company: "Stromsoft",
      location: "India",
      type: "Early Internship",
      isCollapsed: true,
      summary: "Core software development, module design, and debugging.",
      bullets: [
        "Core software development, module design, and debugging across web applications."
      ]
    }
  ],

  // What I Can Build For You
  services: [
    {
      title: "End-to-End Live ERP & Operational Portals",
      description: "Custom ERP architecture, remote center tracking, automated attendance with multimodal OCR & GPS geofencing, and styled Excel/email reporting.",
      icon: "erp"
    },
    {
      title: "Autonomous Multi-Agent AI Systems",
      description: "LangGraph state machines, multi-user sessions, and FastMCP microservices that execute multi-step business logic deterministically.",
      icon: "agent"
    },
    {
      title: "Production FastAPI & Python Backends",
      description: "Async Python backends with strict typing (mypy), Redis caching, SQLAlchemy, Docker Compose, Nginx reverse proxy, and Cloudflare Tunnel.",
      icon: "backend"
    },
    {
      title: "Computer Vision & Visual Verification",
      description: "Multimodal Gemini Vision OCR, Roboflow Workflows, OpenCV, and DeepFace pipelines for defect detection, liveness check, and document parsing.",
      icon: "vision"
    },
    {
      title: "Conversational NLP & ERP Support",
      description: "Rasa-based conversational chatbots embedded into enterprise and university portals, paired with stakeholder requirement gathering and UAT.",
      icon: "chat"
    }
  ],

  education: [
    {
      degree: "B.Tech Computer/IT Engineering",
      institution: "Phaltan Education Society's College of Engineering",
      location: "Maharashtra, India",
      year: "2023",
      details: "Strong foundations in Data Structures, Algorithms, Operating Systems, Database Architecture, and Computer Networks."
    }
  ],

  certificationsGroup1: [
    {
      name: "EASE Master Training: AI in Education",
      issuer: "EASE",
      description: "Attended as Master Trainer for artificial intelligence in educational environments."
    },
    {
      name: "Python Programming",
      issuer: "Professional Certification",
      description: "Certified Python programming across core language semantics and backend development."
    },
    {
      name: "Data Science",
      issuer: "Professional Certification",
      description: "Data processing, statistical analysis, and algorithmic modeling."
    },
    {
      name: "Web Development",
      issuer: "Professional Certification",
      description: "Full-stack web application development and RESTful architecture."
    }
  ],

  certificationsGroup2: [
    {
      name: "Google Advanced Data Analytics Certificate",
      issuer: "Google",
      description: "Statistical modeling, exploratory data analysis, and predictive Python insights."
    },
    {
      name: "HackerRank Python Certified",
      issuer: "HackerRank",
      description: "Advanced data structures, decorators, and algorithms in Python."
    },
    {
      name: "HackerRank SQL Certified",
      issuer: "HackerRank",
      description: "Complex queries, joins, subqueries, and database indexing."
    }
  ],

  footer: {
    taglineEnglish: "Where autonomous code meets real-world machines.",
    taglineMarathi: "तंत्रज्ञान आणि कल्पकतेचा संगम",
    taglineMarathiMeaning: "Where technology and ingenuity converge",
    copyrightYear: 2026,
    signature: "Engineered by Gaurav Kale • Pune, India"
  }
};
