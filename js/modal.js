/**
 * ==============================================================================
 * ACCESSIBLE CASE STUDY MODAL & DRAWER SYSTEM
 * ==============================================================================
 * Implements strict WCAG 2.1 AA focus trapping, ARIA roles, tab switching,
 * Escape key listener, and seamless focus restoration.
 * ==============================================================================
 */

export class CaseStudyModal {
  constructor(portfolioData) {
    this.data = portfolioData;
    this.backdrop = document.getElementById('case-modal');
    this.dialog = document.getElementById('modal-dialog');
    this.closeBtn = document.getElementById('modal-close-btn');
    this.lastFocusedElement = null;
    this.currentCase = null;

    if (!this.backdrop) return;

    this.initEvents();
  }

  initEvents() {
    this.closeBtn?.addEventListener('click', () => this.close());

    this.backdrop.addEventListener('click', (e) => {
      if (e.target === this.backdrop) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (!this.isOpen()) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        this.close();
        return;
      }

      if (e.key === 'Tab') {
        this.handleTabTrap(e);
      }
    });

    // Modal Tabs Delegation
    const tabBtns = this.dialog?.querySelectorAll('.modal-tab-btn');
    tabBtns?.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        this.switchTab(targetTab);
      });
    });
  }

  isOpen() {
    return this.backdrop?.classList.contains('open');
  }

  handleTabTrap(e) {
    if (!this.dialog) return;

    const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(this.dialog.querySelectorAll(focusableSelectors))
      .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);

    if (focusable.length === 0) {
      e.preventDefault();
      return;
    }

    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift + Tab: if on first element, wrap to last
      if (document.activeElement === firstEl || !this.dialog.contains(document.activeElement)) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      // Tab: if on last element, wrap to first
      if (document.activeElement === lastEl || !this.dialog.contains(document.activeElement)) {
        e.preventDefault();
        firstEl.focus();
      }
    }
  }

  open(caseId, triggerEl) {
    this.lastFocusedElement = triggerEl || document.activeElement;
    this.currentCase = this.data.caseStudies.find((c) => c.id === caseId);

    if (!this.currentCase) return;

    this.renderContent(this.currentCase);

    this.backdrop.classList.add('open');
    this.backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus close button initially
    requestAnimationFrame(() => {
      this.closeBtn?.focus();
    });

    // Reset to overview tab
    this.switchTab('overview');
  }

  close() {
    this.backdrop.classList.remove('open');
    this.backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (this.lastFocusedElement && typeof this.lastFocusedElement.focus === 'function') {
      this.lastFocusedElement.focus();
    }
  }

  switchTab(tabName) {
    const tabBtns = this.dialog?.querySelectorAll('.modal-tab-btn');
    const tabPanels = this.dialog?.querySelectorAll('.modal-tab-content');

    tabBtns?.forEach((btn) => {
      const isActive = btn.getAttribute('data-tab') === tabName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    tabPanels?.forEach((panel) => {
      const isActive = panel.id === `tab-${tabName}`;
      panel.classList.toggle('active', isActive);
    });
  }

  renderContent(c) {
    const titleEl = document.getElementById('modal-case-title');
    const subEl = document.getElementById('modal-case-subtitle');
    const catEl = document.getElementById('modal-case-category');
    const statusEl = document.getElementById('modal-case-status');

    if (titleEl) titleEl.textContent = c.title;
    if (subEl) subEl.textContent = c.subtitle;
    if (catEl) catEl.textContent = c.category;
    if (statusEl) statusEl.textContent = c.status;

    // 1. Overview Tab
    const overviewTab = document.getElementById('tab-overview');
    if (overviewTab) {
      overviewTab.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${c.confidentialityNote ? `
            <div style="background: rgba(245, 158, 11, 0.1); border-left: 3px solid var(--accent-amber); padding: 0.85rem 1.25rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--accent-amber);">
              <strong>Confidentiality Note:</strong> ${c.confidentialityNote}
            </div>
          ` : ''}

          <div>
            <h4 style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.35rem;">Problem Statement</h4>
            <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.6;">${c.problem}</p>
          </div>

          <div>
            <h4 style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.35rem;">Engineering Approach</h4>
            <p style="font-size: 0.95rem; color: var(--text-primary); line-height: 1.6;">${c.approach}</p>
          </div>

          <div>
            <h4 style="color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.6rem;">Key Deliverables & Outcomes</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
              ${c.outcomes.map(o => `
                <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.92rem; color: var(--text-secondary);">
                  <span style="color: var(--accent-cyan); font-weight: bold;">✔</span>
                  <span>${o}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div style="background: var(--bg-primary); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
            <h4 style="color: var(--accent-amber); font-family: var(--font-mono); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.25rem;">My Exact Role</h4>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">${c.myRole}</p>
          </div>
        </div>
      `;
    }

    // 2. Architecture Tab
    const archTab = document.getElementById('tab-architecture');
    if (archTab) {
      archTab.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            End-to-end execution flow representing deterministic data movement, validation nodes, and fallback policies:
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${c.architecture.map((step, idx) => `
              <div style="display: flex; align-items: flex-start; gap: 1rem; padding: 1rem; background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
                <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(0, 240, 255, 0.15); color: var(--accent-cyan); font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${idx + 1}
                </div>
                <div>
                  <h5 style="font-size: 0.95rem; font-weight: 700; color: var(--text-bright); margin-bottom: 0.25rem;">${step.step}</h5>
                  <p style="font-size: 0.88rem; color: var(--text-secondary);">${step.detail}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="media-placeholder-frame">
            <span class="placeholder-badge">[TODO: Add demo video / schematic screenshot]</span>
            <span class="placeholder-title">${c.title} — System Demo</span>
            <span class="placeholder-sub">${c.confidentialityNote || 'Source code and detailed architecture walkthrough available in interview.'}</span>
          </div>
        </div>
      `;
    }

    // 3. Tech Specs Tab
    const specsTab = document.getElementById('tab-specs');
    if (specsTab) {
      specsTab.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <p style="font-size: 0.95rem; color: var(--text-secondary);">
            Component-by-component architectural responsibilities and design choices:
          </p>

          <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem;">
            ${c.techStack.map(t => `
              <div style="display: flex; flex-direction: column; gap: 0.2rem; padding: 0.9rem 1.25rem; background: var(--bg-primary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
                <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--accent-cyan);">${t.name}</span>
                <span style="font-size: 0.85rem; color: var(--text-secondary);">${t.role}</span>
              </div>
            `).join('')}
          </div>

          <div style="margin-top: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${c.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
          </div>

          <div style="padding: 1rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem;">
            <span style="color: var(--text-muted);">Repository Status:</span>
            <span style="font-family: var(--font-mono); color: var(--accent-amber);">
              ${c.links.confidential ? 'Private Enterprise Repo (Walkthrough in Interview)' : '[TODO: add public GitHub repo]'}
            </span>
          </div>
        </div>
      `;
    }
  }
}
