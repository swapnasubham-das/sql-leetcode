/**
 * SQLVault - Main Application Logic
 * Handles UI rendering, filtering, and theme management
 */

import { Q } from './questions.js';

// ══════════════════════════════════════════
// State Variables
// ══════════════════════════════════════════
let activeId = null;
let filter = 'all';
let tab = 'desc';
let search = '';
let dialect = 'mysql';

// ══════════════════════════════════════════
// Constants
// ══════════════════════════════════════════
const DIALECT_LABELS = {
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  sqlserver: 'SQL Server',
  oracle: 'Oracle'
};

const MOON_ICON = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
const SUN_ICON = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;

const COPY_ICON = `<svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;

// ══════════════════════════════════════════
// DOM Elements
// ══════════════════════════════════════════
const elements = {
  qlist: () => document.getElementById('qlist'),
  ptabs: () => document.getElementById('ptabs'),
  pbody: () => document.getElementById('pbody'),
  srch: () => document.getElementById('srch'),
  themeIcon: () => document.getElementById('theme-icon'),
  themeLabel: () => document.getElementById('theme-label'),
  stats: {
    total: () => document.getElementById('st'),
    easy: () => document.getElementById('se'),
    medium: () => document.getElementById('sm'),
    hard: () => document.getElementById('sh')
  }
};

// ══════════════════════════════════════════
// Question List Rendering
// ══════════════════════════════════════════
function renderList() {
  const el = elements.qlist();
  const list = Q.filter(q => {
    const matchesDifficulty = filter === 'all' || q.difficulty === filter;
    const matchesSearch = q.title.toLowerCase().includes(search) ||
                          String(q.id).includes(search) ||
                          q.tags.some(t => t.toLowerCase().includes(search));
    return matchesDifficulty && matchesSearch;
  });

  if (!list.length) {
    el.innerHTML = '<div style="padding:20px;text-align:center;color:var(--faint);font-size:12px">No results</div>';
    return;
  }

  el.innerHTML = list.map(q => `
    <div class="qrow${activeId === q.id ? ' sel' : ''}" data-id="${q.id}">
      <div class="qdot ${q.difficulty}"></div>
      <div class="qinfo">
        <div class="qtitle">${q.title}</div>
        <div class="qmeta">
          <span class="qnum">#${q.id}</span>
          ${q.tags.slice(0, 2).map(t => `<span class="qtag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
// Panel Rendering
// ══════════════════════════════════════════
function renderPanel() {
  const q = Q.find(x => x.id === activeId);
  if (!q) return;

  const descHTML = `
    <div class="dh">
      <span class="did">${q.id}.</span>
      <span class="dtitle">${q.title}</span>
      <span class="dbadge ${q.difficulty}">${q.difficulty[0].toUpperCase() + q.difficulty.slice(1)}</span>
    </div>
    <div class="dtags">${q.tags.map(t => `<span class="dtag">${t}</span>`).join('')}</div>
    <div class="desc-wrap">${q.description}</div>
  `;

  const dialectBtns = ['mysql', 'postgresql', 'sqlserver', 'oracle'].map(d =>
    `<button class="dtab-btn${dialect === d ? ' don' : ''}" data-dialect="${d}">${DIALECT_LABELS[d]}</button>`
  ).join('');

  const solHTML = `
    <div class="sol-header">
      <span class="sol-title">Solution</span>
      <div class="dialect-tabs" id="dtabs">${dialectBtns}</div>
    </div>
    <div class="code-wrap">
      <div class="cbar">
        <span class="clang" id="clang">${DIALECT_LABELS[dialect]}</span>
        <button class="cbtn" id="copy-btn">
          ${COPY_ICON}Copy
        </button>
      </div>
      <pre id="sol-pre">${q[dialect]}</pre>
    </div>
  `;

  elements.ptabs().style.display = 'flex';
  elements.pbody().innerHTML =
    `<div class="tc${tab === 'desc' ? ' vis' : ''}" id="td">${descHTML}</div>` +
    `<div class="tc${tab === 'sol' ? ' vis' : ''}" id="ts">${solHTML}</div>`;

  // Bind events for solution tab
  bindSolutionEvents();
}

function bindSolutionEvents() {
  // Dialect tab buttons
  const dialectTabs = document.getElementById('dtabs');
  if (dialectTabs) {
    dialectTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.dtab-btn');
      if (btn) {
        setDialect(btn.dataset.dialect);
      }
    });
  }

  // Copy button
  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => doCopy(copyBtn));
  }
}

// ══════════════════════════════════════════
// Dialect Management
// ══════════════════════════════════════════
function setDialect(d) {
  dialect = d;
  const q = Q.find(x => x.id === activeId);
  if (!q) return;

  document.getElementById('sol-pre').innerHTML = q[d];
  document.getElementById('clang').textContent = DIALECT_LABELS[d];
  document.querySelectorAll('.dtab-btn').forEach(b =>
    b.classList.toggle('don', b.textContent === DIALECT_LABELS[d])
  );
}

// ══════════════════════════════════════════
// Question Selection
// ══════════════════════════════════════════
function pick(id) {
  activeId = id;
  tab = 'desc';
  renderList();
  renderPanel();
  syncTabs();
}

// ══════════════════════════════════════════
// Tab Management
// ══════════════════════════════════════════
function syncTabs() {
  document.querySelectorAll('.ptab').forEach(t =>
    t.classList.toggle('on', t.dataset.tab === tab)
  );
}

// ══════════════════════════════════════════
// Copy Functionality
// ══════════════════════════════════════════
function doCopy(btn) {
  const code = document.getElementById('sol-pre').innerText;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✓ Copied';
    btn.style.color = 'var(--easy)';
    setTimeout(() => {
      btn.innerHTML = `${COPY_ICON}Copy`;
      btn.style.color = '';
    }, 2000);
  });
}

// ══════════════════════════════════════════
// Theme Toggle
// ══════════════════════════════════════════
function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  elements.themeIcon().innerHTML = isLight ? MOON_ICON : SUN_ICON;
  elements.themeLabel().textContent = isLight ? 'Dark' : 'Light';
  try {
    localStorage.setItem('sqlvault-theme', isLight ? 'light' : 'dark');
  } catch (e) { /* ignore */ }
}

function restoreTheme() {
  try {
    if (localStorage.getItem('sqlvault-theme') === 'light') {
      document.documentElement.classList.add('light');
      elements.themeIcon().innerHTML = MOON_ICON;
      elements.themeLabel().textContent = 'Dark';
    }
  } catch (e) { /* ignore */ }
}

// ══════════════════════════════════════════
// Statistics
// ══════════════════════════════════════════
function updateStats() {
  elements.stats.total().textContent = Q.length;
  elements.stats.easy().textContent = Q.filter(q => q.difficulty === 'easy').length;
  elements.stats.medium().textContent = Q.filter(q => q.difficulty === 'medium').length;
  elements.stats.hard().textContent = Q.filter(q => q.difficulty === 'hard').length;
}

// ══════════════════════════════════════════
// Event Binding
// ══════════════════════════════════════════
function bindEvents() {
  // Filter buttons
  document.querySelectorAll('.fb').forEach(b => {
    b.addEventListener('click', () => {
      filter = b.dataset.f;
      document.querySelectorAll('.fb').forEach(x =>
        x.className = 'fb' + (x.dataset.f === filter ? ' f' + filter[0] : '')
      );
      renderList();
    });
  });

  // Search input
  elements.srch().addEventListener('input', e => {
    search = e.target.value.toLowerCase();
    renderList();
  });

  // Panel tabs
  elements.ptabs().addEventListener('click', e => {
    const t = e.target.closest('.ptab');
    if (!t || !activeId) return;
    tab = t.dataset.tab;
    document.getElementById('td').classList.toggle('vis', tab === 'desc');
    document.getElementById('ts').classList.toggle('vis', tab === 'sol');
    syncTabs();
  });

  // Question list (event delegation)
  elements.qlist().addEventListener('click', e => {
    const row = e.target.closest('.qrow');
    if (row) {
      pick(parseInt(row.dataset.id, 10));
    }
  });

  // Theme toggle
  document.getElementById('theme-btn').addEventListener('click', toggleTheme);
}

// ══════════════════════════════════════════
// Initialize Application
// ══════════════════════════════════════════
function init() {
  restoreTheme();
  updateStats();
  bindEvents();
  renderList();
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential external use
export { Q, toggleTheme };
