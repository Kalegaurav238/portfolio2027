/**
 * ==============================================================================
 * GAURAV KALE PORTFOLIO - CORE APPLICATION CONTROLLER
 * ==============================================================================
 * Renders data from data/portfolio.js, wires interactions, theme toggling,
 * role typing rotator, toast alerts, and modal deep-dives.
 * ==============================================================================
 */

import { portfolioData } from '../data/portfolio.js';
import { initCanvasGraph } from './canvas-graph.js';
import { CaseStudyModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Canvas Graph
  initCanvasGraph();

  // 2. Initialize Case Study Modal
  const modal = new CaseStudyModal(portfolioData);

  // 3. Render Dynamic Content
  renderProofStrip();
  renderDifferentiators();
  renderCaseStudies(modal);
  renderMoreWork();
  renderDualitySection();
  renderSkillsMatrix();
  renderTimeline();
  renderServices();
  renderCredentials();
  renderFooter();

  // 4. Interactive Behaviors
  initThemeToggle();
  initRoleRotator();
  initEmailCopy();
  initNavigation();
});

/* --- Toast Notification Helper --- */
export function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--accent-cyan); font-weight: bold;">⚡</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* --- Theme Toggle Controller --- */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const icon = document.getElementById('theme-toggle-icon');
  if (!toggleBtn || !icon) return;

  // Retrieve saved preference or default to dark
  const savedTheme = localStorage.getItem('gk_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, icon);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('gk_theme', nextTheme);
    updateThemeIcon(nextTheme, icon);
    showToast(`Switched to ${nextTheme === 'dark' ? 'Dark Obsidian' : 'Editorial Light'} theme`);
  });
}

function updateThemeIcon(theme, icon) {
  if (theme === 'light') {
    // Show Moon icon (to switch to dark)
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    // Show Sun icon (to switch to light)
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  }
}

/* --- Dynamic Typing / Role Rotator --- */
function initRoleRotator() {
  const textEl = document.getElementById('role-rotator-text');
  if (!textEl) return;

  const roles = portfolioData.personal.headlineRoles;

  // Accessibility: If user prefers reduced motion, set text statically
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    textEl.textContent = roles[0];
    const cursor = document.querySelector('.rotator-cursor');
    if (cursor) cursor.style.display = 'none';
    return;
  }

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 75;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      textEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 35;
    } else {
      textEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 2200; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --- 1-Click Email Copy --- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const email = portfolioData.personal.email;

  copyBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      showToast(`Copied ${email} to clipboard!`);
    } catch {
      // Fallback
      showToast(`Contact: ${email}`);
    }
  });
}

/* --- Sticky Nav & Mobile Drawer --- */
function initNavigation() {
  const nav = document.querySelector('.site-nav');
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  }, { passive: true });

  mobileToggle?.addEventListener('click', () => {
    const isOpen = drawer?.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  drawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      mobileToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- Render Proof Strip --- */
function renderProofStrip() {
  const container = document.getElementById('proof-grid');
  if (!container) return;

  container.innerHTML = portfolioData.proofMetrics.map(m => `
    <div class="proof-card">
      <div class="proof-value">${m.value}</div>
      <div class="proof-label">${m.label}</div>
      <div class="proof-context">${m.context}</div>
      <div class="proof-source">
        <span>●</span>
        <span>${m.source}</span>
      </div>
    </div>
  `).join('');
}

/* --- Render Differentiators --- */
function renderDifferentiators() {
  const container = document.getElementById('diff-grid');
  if (!container) return;

  container.innerHTML = portfolioData.differentiators.map((d, idx) => `
    <div class="diff-card">
      <div class="diff-num">0${idx + 1} // DIFFERENTIATOR</div>
      <h3 class="diff-title">${d.title}</h3>
      <div class="diff-tagline">${d.tagline}</div>
      <p class="diff-desc">${d.description}</p>
    </div>
  `).join('');
}

/* --- Render Hero Case Studies --- */
function renderCaseStudies(modal) {
  const container = document.getElementById('case-studies-list');
  if (!container) return;

  container.innerHTML = portfolioData.caseStudies.map((c) => `
    <article class="case-study-card" id="${c.id}">
      <div class="case-study-header">
        <div>
          <span class="case-category">
            <span>●</span> ${c.category}
          </span>
          <h3 class="case-title">${c.title}</h3>
          <div class="case-subtitle">${c.subtitle}</div>
        </div>
        <span class="status-pill">
          <span class="status-dot"></span>
          <span>${c.status}</span>
        </span>
      </div>

      <div class="case-grid">
        <div class="case-details-col">
          <div>
            <div class="case-block-label">Problem & Context</div>
            <p class="case-block-text">${c.problem}</p>
          </div>
          <div>
            <div class="case-block-label">Engineered Solution</div>
            <p class="case-block-text">${c.approach}</p>
          </div>
          <div>
            <div class="case-block-label">Key Outcomes & Metrics</div>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.3rem;">
              ${c.outcomes.slice(0, 3).map(o => `
                <li style="display: flex; align-items: flex-start; gap: 0.45rem; font-size: 0.88rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-cyan); font-weight: bold;">✔</span>
                  <span>${o}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <div class="case-visual-col">
          <div class="arch-diagram-card">
            <div class="arch-header">
              <span class="arch-badge">SVG EXECUTION TOPOLOGY</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${c.tags.slice(0, 3).join(' • ')}</span>
            </div>
            
            <div class="arch-svg-container">
              ${generateArchitectureSVG(c.id)}
            </div>

            <div class="media-placeholder-frame">
              <span class="placeholder-badge">[Visual Architecture Flow]</span>
              <span class="placeholder-title">${c.title}</span>
              <span class="placeholder-sub">${c.confidentialityNote ? c.confidentialityNote : 'Production deployment architecture'}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="case-footer">
        <div class="case-tags-wrap">
          ${c.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>

        <div class="case-actions">
          ${c.links?.live ? `
            <a href="${c.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-amber btn-sm" aria-label="Visit live system at ${c.links.live}">
              <span>Live ERP</span>
              <span aria-hidden="true">↗</span>
            </a>
          ` : ''}

          ${c.confidentialityNote ? `
            <span class="confidential-pill">
              <span>🔒</span> Details shared in interview
            </span>
          ` : ''}

          <button class="btn btn-primary btn-sm open-modal-btn" data-case-id="${c.id}">
            <span>Inspect Architecture</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Attach modal trigger listeners
  container.querySelectorAll('.open-modal-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case-id');
      modal.open(caseId, btn);
    });
  });
}

/* --- Inline Custom SVG Generator for Case Studies --- */
function generateArchitectureSVG(caseId) {
  // 1. Robotex ERP Architecture Diagram
  if (caseId === 'robotex-erp') {
    return `
      <svg class="arch-svg" viewBox="0 0 470 180" xmlns="http://www.w3.org/2000/svg">
        <!-- Node 1: Remote Trainer WhatsApp Photo -->
        <rect x="10" y="65" width="85" height="48" rx="8" fill="#131b2e" stroke="#25D366" stroke-width="1.5" />
        <text x="52" y="85" fill="#f8fafc" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Field Trainer</text>
        <text x="52" y="99" fill="#25D366" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">WhatsApp Photo</text>

        <!-- Arrow 1 -->
        <path d="M 95 89 L 125 89" stroke="#25D366" stroke-width="1.5" stroke-dasharray="3,3" />

        <!-- Node 2: FastAPI Webhook & Verification Engine -->
        <rect x="125" y="42" width="105" height="94" rx="8" fill="#1e293b" stroke="#00f0ff" stroke-width="2" />
        <text x="177" y="65" fill="#00f0ff" font-size="9.5" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">FastAPI Engine</text>
        <text x="177" y="82" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Gemini Vision OCR</text>
        <text x="177" y="98" fill="#f59e0b" font-size="8" font-family="JetBrains Mono" text-anchor="middle">GPS Geofencing</text>
        <text x="177" y="114" fill="#94a3b8" font-size="7" font-family="JetBrains Mono" text-anchor="middle">SQLAlchemy ORM</text>

        <!-- Branch Up to APScheduler / OpenPyXL -->
        <path d="M 230 65 L 265 40" stroke="#00f0ff" stroke-width="1.5" />
        <rect x="265" y="20" width="95" height="40" rx="6" fill="#0d1320" stroke="#94a3b8" stroke-width="1" />
        <text x="312" y="38" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">APScheduler</text>
        <text x="312" y="49" fill="#10b981" font-size="7" font-family="JetBrains Mono" text-anchor="middle">OpenPyXL Excel</text>

        <!-- Branch Middle to MySQL / SQLite -->
        <path d="M 230 89 L 265 89" stroke="#00f0ff" stroke-width="1.5" />
        <rect x="265" y="70" width="95" height="38" rx="6" fill="#0d1320" stroke="#94a3b8" stroke-width="1" />
        <text x="312" y="88" fill="#f8fafc" font-size="8.5" font-family="JetBrains Mono" text-anchor="middle">MySQL / SQLite</text>
        <text x="312" y="99" fill="#94a3b8" font-size="7" font-family="JetBrains Mono" text-anchor="middle">Normalized DB</text>

        <!-- Branch Down to Email Reports -->
        <path d="M 230 113 L 265 138" stroke="#00f0ff" stroke-width="1.5" />
        <rect x="265" y="120" width="95" height="38" rx="6" fill="#0d1320" stroke="#94a3b8" stroke-width="1" />
        <text x="312" y="138" fill="#f8fafc" font-size="8.5" font-family="JetBrains Mono" text-anchor="middle">HTML Digests</text>
        <text x="312" y="149" fill="#94a3b8" font-size="7" font-family="JetBrains Mono" text-anchor="middle">Management Email</text>

        <!-- Ingress Stack -->
        <path d="M 360 40 L 385 75" stroke="#f59e0b" stroke-width="1.2" />
        <path d="M 360 89 L 385 89" stroke="#f59e0b" stroke-width="1.2" />
        <path d="M 360 138 L 385 100" stroke="#f59e0b" stroke-width="1.2" />

        <rect x="385" y="60" width="75" height="58" rx="8" fill="#131b2e" stroke="#f59e0b" stroke-width="1.5" />
        <text x="422" y="79" fill="#f59e0b" font-size="8.5" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Docker Stack</text>
        <text x="422" y="93" fill="#f8fafc" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Nginx + TLS</text>
        <text x="422" y="106" fill="#94a3b8" font-size="6.5" font-family="JetBrains Mono" text-anchor="middle">Cloudflare Tunnel</text>
      </svg>
    `;
  }

  // 2. HeyGini Diagram
  if (caseId === 'heygini-wms') {
    return `
      <svg class="arch-svg" viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="65" width="85" height="48" rx="8" fill="#131b2e" stroke="#00f0ff" stroke-width="1.5" />
        <text x="52" y="86" fill="#f8fafc" font-size="10" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Multi-User</text>
        <text x="52" y="100" fill="#94a3b8" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Session State</text>

        <path d="M 95 89 L 125 89" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="3,3" />

        <rect x="125" y="45" width="105" height="88" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="177" y="70" fill="#00f0ff" font-size="10" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">LangGraph</text>
        <text x="177" y="86" fill="#f8fafc" font-size="9" font-family="JetBrains Mono" text-anchor="middle">StateGraph</text>
        <text x="177" y="102" fill="#94a3b8" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Multi-Session Memory</text>
        <circle cx="177" cy="118" r="4" fill="#00f0ff" />

        <path d="M 230 65 L 265 40" stroke="#00f0ff" stroke-width="1.5" />
        <path d="M 230 89 L 265 89" stroke="#00f0ff" stroke-width="1.5" />
        <path d="M 230 113 L 265 138" stroke="#00f0ff" stroke-width="1.5" />

        <rect x="265" y="20" width="90" height="38" rx="6" fill="#0d1320" stroke="#94a3b8" stroke-width="1" />
        <text x="310" y="38" fill="#f8fafc" font-size="8.5" font-family="JetBrains Mono" text-anchor="middle">In-Memory Cache</text>
        <text x="310" y="49" fill="#94a3b8" font-size="7" font-family="JetBrains Mono" text-anchor="middle">Fast Lookups</text>

        <rect x="265" y="70" width="90" height="38" rx="6" fill="#0d1320" stroke="#94a3b8" stroke-width="1" />
        <text x="310" y="88" fill="#f8fafc" font-size="8.5" font-family="JetBrains Mono" text-anchor="middle">SQLite Cache</text>
        <text x="310" y="99" fill="#94a3b8" font-size="7" font-family="JetBrains Mono" text-anchor="middle">Persistent State</text>

        <rect x="265" y="120" width="90" height="38" rx="6" fill="#0d1320" stroke="#94a3b8" stroke-width="1" />
        <text x="310" y="138" fill="#f8fafc" font-size="8.5" font-family="JetBrains Mono" text-anchor="middle">Local LLM</text>
        <text x="310" y="149" fill="#94a3b8" font-size="7" font-family="JetBrains Mono" text-anchor="middle">Log Anomaly Detector</text>

        <path d="M 355 40 L 380 75" stroke="#f59e0b" stroke-width="1.2" />
        <path d="M 355 89 L 380 89" stroke="#f59e0b" stroke-width="1.2" />
        <path d="M 355 138 L 380 100" stroke="#f59e0b" stroke-width="1.2" />

        <rect x="380" y="65" width="70" height="48" rx="8" fill="#131b2e" stroke="#f59e0b" stroke-width="1.5" />
        <text x="415" y="85" fill="#f59e0b" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Operational</text>
        <text x="415" y="99" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Response</text>
      </svg>
    `;
  }

  // 3. Eduplus Chatbots Diagram
  if (caseId === 'eduplus-chatbots') {
    return `
      <svg class="arch-svg" viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="60" width="85" height="48" rx="8" fill="#131b2e" stroke="#38bdf8" stroke-width="1.5" />
        <text x="57" y="82" fill="#f8fafc" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">College Portal</text>
        <text x="57" y="96" fill="#94a3b8" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Student Query</text>

        <path d="M 100 84 L 130 84" stroke="#38bdf8" stroke-width="1.5" />

        <rect x="130" y="45" width="105" height="78" rx="8" fill="#1e293b" stroke="#00f0ff" stroke-width="1.5" />
        <text x="182" y="70" fill="#00f0ff" font-size="9.5" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Rasa NLU</text>
        <text x="182" y="85" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Intent & Entity</text>
        <text x="182" y="100" fill="#94a3b8" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Admissions & Fees</text>

        <path d="M 235 84 L 270 84" stroke="#38bdf8" stroke-width="1.5" />

        <rect x="270" y="45" width="100" height="78" rx="8" fill="#131b2e" stroke="#f59e0b" stroke-width="1.5" />
        <text x="320" y="70" fill="#f59e0b" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">REST APIs</text>
        <text x="320" y="85" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">ERP Backend</text>
        <text x="320" y="100" fill="#94a3b8" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">University Data</text>

        <path d="M 370 84 L 400 84" stroke="#10b981" stroke-width="1.5" />

        <rect x="400" y="60" width="55" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
        <text x="427" y="82" fill="#10b981" font-size="8.5" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Portal</text>
        <text x="427" y="96" fill="#f8fafc" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Answer</text>
      </svg>
    `;
  }

  // 4. CatalogNormalizer Diagram
  if (caseId === 'catalognormalizer') {
    return `
      <svg class="arch-svg" viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="60" width="85" height="48" rx="8" fill="#131b2e" stroke="#38bdf8" stroke-width="1.5" />
        <text x="57" y="82" fill="#f8fafc" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Raw SKUs</text>
        <text x="57" y="96" fill="#94a3b8" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Vendor Titles</text>

        <path d="M 100 84 L 130 84" stroke="#38bdf8" stroke-width="1.5" />

        <rect x="130" y="45" width="95" height="78" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
        <text x="177" y="70" fill="#f59e0b" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Redis Cache</text>
        <text x="177" y="85" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Idempotency Key</text>
        <text x="177" y="100" fill="#10b981" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Idempotent Hit</text>

        <path d="M 225 84 L 260 84" stroke="#38bdf8" stroke-width="1.5" />

        <rect x="260" y="45" width="100" height="78" rx="8" fill="#131b2e" stroke="#00f0ff" stroke-width="1.5" />
        <text x="310" y="70" fill="#00f0ff" font-size="9" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Instructor + mypy</text>
        <text x="310" y="85" fill="#f8fafc" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Pydantic v2</text>
        <text x="310" y="100" fill="#94a3b8" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Strict Schemas</text>

        <path d="M 360 84 L 390 84" stroke="#10b981" stroke-width="1.5" />

        <rect x="390" y="60" width="60" height="48" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
        <text x="420" y="82" fill="#10b981" font-size="8.5" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Google Tax</text>
        <text x="420" y="96" fill="#f8fafc" font-size="7.5" font-family="JetBrains Mono" text-anchor="middle">Standard ID</text>
      </svg>
    `;
  }

  // Generic Modern Flow Diagram
  return `
    <svg class="arch-svg" viewBox="0 0 440 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="45" width="80" height="50" rx="8" fill="#131b2e" stroke="#00f0ff" stroke-width="1.5" />
      <text x="60" y="72" fill="#f8fafc" font-size="9" font-family="JetBrains Mono" text-anchor="middle">Input Stream</text>

      <path d="M 100 70 L 150 70" stroke="#00f0ff" stroke-width="1.5" />

      <rect x="150" y="35" width="130" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
      <text x="215" y="65" fill="#f59e0b" font-size="10" font-family="JetBrains Mono" font-weight="bold" text-anchor="middle">Inference & Logic</text>
      <text x="215" y="82" fill="#94a3b8" font-size="8" font-family="JetBrains Mono" text-anchor="middle">Deterministic State</text>

      <path d="M 280 70 L 330 70" stroke="#10b981" stroke-width="1.5" />

      <rect x="330" y="45" width="90" height="50" rx="8" fill="#131b2e" stroke="#10b981" stroke-width="1.5" />
      <text x="375" y="72" fill="#10b981" font-size="9" font-family="JetBrains Mono" text-anchor="middle">Verified Output</text>
    </svg>
  `;
}

/* --- Render More Work --- */
function renderMoreWork() {
  const container = document.getElementById('more-work-grid');
  if (!container) return;

  container.innerHTML = portfolioData.moreProjects.map(p => `
    <div class="more-card">
      <div class="more-card-top">
        <div class="more-category">${p.category}</div>
        <h4 class="more-title">${p.title}</h4>
        <div class="more-highlight">${p.highlight}</div>
        <p class="more-desc">${p.description}</p>
        <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">${p.details}</p>
        <div class="more-tags">
          ${p.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
      </div>
      <div class="more-status-footer">
        <span style="color: var(--accent-cyan);">● ${p.status}</span>
        <span>${p.links.github ? 'Public / Interview' : 'Confidential'}</span>
      </div>
    </div>
  `).join('');
}

/* --- Render Software x Hardware Duality Section --- */
function renderDualitySection() {
  const d = portfolioData.duality;

  const quoteEl = document.getElementById('duality-quote');
  if (quoteEl) quoteEl.textContent = `“${d.quote}”`;

  const bitsList = document.getElementById('duality-bits-list');
  if (bitsList) {
    bitsList.innerHTML = d.bits.items.map(item => `
      <li class="duality-item">
        <span class="duality-bullet"></span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  const atomsList = document.getElementById('duality-atoms-list');
  if (atomsList) {
    atomsList.innerHTML = d.atoms.items.map(item => `
      <li class="duality-item">
        <span class="duality-bullet"></span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  const bridgeTable = document.getElementById('bridge-table-rows');
  if (bridgeTable) {
    bridgeTable.innerHTML = d.bridgePoints.map(bp => `
      <div class="bridge-row">
        <div class="bridge-concept">${bp.concept}</div>
        <div class="bridge-hw">
          <span class="bridge-label-chip">● THE ATOMS (ROBOTICS)</span>
          <p>${bp.hardware}</p>
        </div>
        <div class="bridge-sw">
          <span class="bridge-label-chip">● THE BITS (ERP & AI)</span>
          <p>${bp.software}</p>
        </div>
      </div>
    `).join('');
  }
}

/* --- Render Skills Matrix (Strict, No Fake Bars, No Currently Learning) --- */
function renderSkillsMatrix() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const s = portfolioData.skills;
  const categories = [
    s.erpAutomation,
    s.agenticAI,
    s.llmInference,
    s.computerVision,
    s.backendData,
    s.hardwareRobotics,
    s.cloudFamiliar
  ];

  container.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <div class="skill-cat-header">
        <h4 class="skill-cat-title">${cat.title}</h4>
        <span class="skill-level-badge">${cat.level}</span>
      </div>
      <div class="skill-pills-wrap">
        ${cat.skills.map(skill => `<span class="tag-chip">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* --- Render Experience Timeline --- */
function renderTimeline() {
  const container = document.getElementById('timeline-list');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => {
    // Collapsed one-line card for Stromsoft early internship per instruction
    if (exp.isCollapsed) {
      return `
        <div class="timeline-item">
          <div class="timeline-marker" style="border-color: var(--text-muted); box-shadow: none; width: 14px; height: 14px; top: 8px;"></div>
          <div class="timeline-card" style="padding: 1rem 1.25rem; opacity: 0.85;">
            <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem;">
              <div>
                <span class="timeline-period" style="margin-bottom: 0.15rem; color: var(--text-muted);">${exp.period}</span>
                <h4 style="font-size: 1rem; color: var(--text-bright);">${exp.role} — <span style="font-weight: 500; color: var(--text-secondary);">${exp.company}</span></h4>
              </div>
              <span class="tag-chip" style="font-size: 0.7rem;">${exp.type}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem; line-height: 1.4;">${exp.summary}</p>
          </div>
        </div>
      `;
    }

    return `
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.4rem;">
            <span class="timeline-period">${exp.period}</span>
            ${exp.isCurrent ? `
              <span class="status-pill" style="font-size: 0.7rem; padding: 0.15rem 0.5rem;">
                <span class="status-dot"></span>
                <span>Current Role</span>
              </span>
            ` : ''}
          </div>
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-company">${exp.company} • ${exp.location} (${exp.type})</div>
          <p class="timeline-summary">${exp.summary}</p>
          <ul class="timeline-bullets">
            ${exp.bullets.map(b => `
              <li class="timeline-bullet-item">
                <span class="bullet-icon">›</span>
                <span>${b}</span>
              </li>
            `).join('')}
          </ul>
          ${exp.confidentialityNote ? `
            <div style="margin-top: 1rem; font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent-amber);">
              🔒 ${exp.confidentialityNote}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* --- Render Services --- */
function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;

  container.innerHTML = portfolioData.services.map(s => `
    <div class="service-card">
      <div class="service-icon-wrap">
        <span style="font-size: 1.3rem;">⚡</span>
      </div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
    </div>
  `).join('');
}

/* --- Render Credentials & Education --- */
function renderCredentials() {
  const eduContainer = document.getElementById('edu-container');
  if (eduContainer) {
    eduContainer.innerHTML = portfolioData.education.map(e => `
      <div class="cert-item">
        <div class="cert-name">${e.degree}</div>
        <div class="cert-issuer">${e.institution}, ${e.location} • Graduated ${e.year}</div>
        <div class="cert-desc">${e.details}</div>
      </div>
    `).join('');
  }

  const certContainer = document.getElementById('cert-container');
  if (certContainer) {
    certContainer.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-amber); text-transform: uppercase; margin-bottom: 0.5rem;">
          Technical & Master Trainer Certifications
        </div>
        ${portfolioData.certificationsGroup1.map(c => `
          <div class="cert-item">
            <div class="cert-name">${c.name}</div>
            <div class="cert-issuer">${c.issuer}</div>
            <div class="cert-desc">${c.description}</div>
          </div>
        `).join('')}
      </div>

      <div style="padding-top: 1rem; border-top: 1px dashed var(--border-subtle);">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 0.5rem;">
          Data & Database Verified Credentials
        </div>
        ${portfolioData.certificationsGroup2.map(c => `
          <div class="cert-item">
            <div class="cert-name">${c.name}</div>
            <div class="cert-issuer">${c.issuer}</div>
            <div class="cert-desc">${c.description}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

/* --- Render Footer --- */
function renderFooter() {
  const f = portfolioData.footer;
  const marathiEl = document.getElementById('footer-marathi');
  const meaningEl = document.getElementById('footer-marathi-meaning');
  const sigEl = document.getElementById('footer-sig');

  if (marathiEl) marathiEl.textContent = f.taglineMarathi;
  if (meaningEl) meaningEl.textContent = `“${f.taglineMarathiMeaning}”`;
  if (sigEl) sigEl.textContent = f.signature;
}
