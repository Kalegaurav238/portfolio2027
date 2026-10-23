# Gaurav Kale — Personal Engineering Portfolio

> **"Builds autonomous AI agents, production-grade Python backends, and live ERP systems for education and field operations."**

A bespoke, high-performance personal portfolio website engineered for **Gaurav Vilas Kale** (R&D Engineer, ERP & AI Systems at Robotex India | AI Developer & Python Backend Specialist). Designed for top design-studio aesthetics, recruiter skim speeds (30–60 second proof above the fold), accessibility, and zero-dependency static reliability.

---

## ⚡ Architectural Highlights

- **Single Source of Truth (`/data/portfolio.js`):** All projects, metrics, case study problem-approach-architecture breakdowns, skills, timeline, and confidentiality tags live in one cleanly commented file. Update your data without touching HTML or CSS layout!
- **Zero-Dependency Modern Static Architecture:**
  - Semantic HTML5 with Schema.org `Person` JSON-LD structured data and OpenGraph tags.
  - Custom CSS Design System (`/css/design-system.css` and `/css/components.css`) featuring Obsidian Dark Mode by default and a crisp Editorial Light Mode toggle.
  - Modular JavaScript (`/js/app.js`, `/js/canvas-graph.js`, `/js/modal.js`).
  - Interactive Canvas Background: Visualizes agent state transitions and hardware node proximity, with full `prefers-reduced-motion` accessibility support.
  - Interactive SVG Execution Topologies: Embedded dataflow diagrams for Robotex ERP, LangGraph multi-user sessions, and Eduplus ERP chatbots.
  - Accessible Deep-Dive Case Study Modal with focus trapping (Tab/Shift+Tab), tabbed views (Overview, Architecture, Engineering Specs), and Escape key navigation.

---

## 📁 Repository Structure

```text
.
├── index.html                  # Main semantic HTML5 homepage
├── sitemap.xml                 # Search engine discovery sitemap
├── robots.txt                  # Search crawler directives
├── README.md                   # Documentation, deployment guide & asset checklist
├── data/
│   └── portfolio.js            # Single source of truth for all content & metrics
├── css/
│   ├── design-system.css       # Tokens, colors, typography, buttons, and base reset
│   └── components.css          # Navigation, hero, case study cards, modal, timeline & footer
├── js/
│   ├── app.js                  # Main controller, data hydration, typing rotator & toasts
│   ├── canvas-graph.js         # Interactive agent state canvas animation
│   └── modal.js                # Accessible case study modal & focus trap
└── assets/
    ├── gaurav-kale-resume.pdf  # Resume download target (placeholder ready to replace)
    └── og-preview.png          # OpenGraph social share card image
```

---

## 🚀 Running Locally

Because this project uses standard ES Modules (`import`/`export`), it should be served over HTTP rather than `file:///` directly:

### Option A: Using Python
From the project folder, run:
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

*(If port 3000 is occupied, run `python -m http.server 5500` or any available port)*.

### Option B: Using VS Code Live Server
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

---

## 🛠️ How to Edit Content

You do **not** need to modify HTML to update your projects, skills, or experience!

1. Open `data/portfolio.js` in your editor.
2. Update any of the clearly labeled sections:
   - **`personal`:** Name, roles, email, bio, status badges, LinkedIn URL.
   - **`proofMetrics`:** 4 proof numbers in the hero skim strip.
   - **`caseStudies`:** Featured hero case studies (Problem $\to$ Approach $\to$ Architecture $\to$ Outcomes $\to$ Role).
   - **`moreProjects`:** Compact secondary project cards.
   - **`skills`:** Categorized technical proficiencies.
   - **`experience`:** Career timeline dates and bullet points.
3. Save the file and refresh your browser!

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages (Free & Instant)
1. Push this repository to GitHub: `github.com/Kalegaurav238/portfolio` (or `Kalegaurav238.github.io`).
2. Go to your repository **Settings** $\to$ **Pages**.
3. Under **Branch**, select `main` (root `/`) and click **Save**.
4. Your site will be live at `https://kalegaurav238.github.io/` within 60 seconds!

### Deploy to Vercel
1. Install Vercel CLI (`npm i -g vercel`) or go to [vercel.com](https://vercel.com).
2. Import your GitHub repository.
3. Framework Preset: select **"Other"** (Static HTML).
4. Click **Deploy**. Vercel will automatically provision HTTPS and global CDN caching.

---

## 📋 Verified Facts & Ongoing Customization Checklist

All metrics in the portfolio are strictly audited against your resume:

| Item | Status / Location | Notes |
| :--- | :--- | :--- |
| **LinkedIn URL** | `https://www.linkedin.com/in/gaurav-kale-083753230/` | **Wired & verified** across hero, contact, footer, and JSON-LD. |
| **Live ERP Button** | `https://robotexerp.online` | Wired to public landing page only; internal dashboards protected. |
| **FolkRace Competition** | `Robotex India National Championship 2026` | 2nd Place nationally with HC-SR04 ultrasonic sensors. |
| **Log Parser Metrics** | `600K → 45K daily log entries filtered` | Attributed to Almasons Technology. |
| **Eduplus University Clients** | Vishwakarma University, NICMAR University, Trinity Group, Pune | Mentioned factually in Eduplus case study and timeline. |
| **Resume PDF File** | `/assets/gaurav-kale-resume.pdf` | Replace the placeholder PDF with your current resume file whenever ready. |
| **Project Demo Images** | Inside each case study card & modal | Swap the schematic placeholder frames with photos of your robots or system screenshots. |

---

## 🎨 Cultural Signature
The site proudly features Gaurav's preferred Marathi motto in the footer:
> **"तंत्रज्ञान आणि कल्पकतेचा संगम"**  
> *(Where technology and ingenuity converge)*
