(() => {
  'use strict';
  const track = (name, fields = {}) => {
    if (typeof window.gtag === 'function') window.gtag('event', name, fields);
  };
  const buttons = document.querySelectorAll('.filter-bar button[data-view]');
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(other => {
      const selected = other === button;
      other.classList.toggle('is-active', selected);
      other.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-pane]').forEach(pane => {
      pane.hidden = pane.dataset.pane !== button.dataset.view;
    });
    track('theme_view_change', { view: button.dataset.view });
  }));

  const path = document.querySelector('[data-reading-path]');
  if (path) {
    const key = 'reading-nietzsche:' + path.dataset.readingPath;
    const steps = [...path.querySelectorAll(':scope > li[data-reading-step]')];
    let saved = [];
    let storageWorks = true;
    try {
      const value = JSON.parse(localStorage.getItem(key) || '[]');
      saved = Array.isArray(value) ? value.filter(x => typeof x === 'string') : [];
    } catch { storageWorks = false; }
    const panel = document.createElement('div');
    panel.className = 'reading-progress';
    const status = document.createElement('p');
    status.setAttribute('role', 'status');
    const note = document.createElement('p');
    note.className = 'progress-note';
    note.textContent = 'Progress stays in this browser on this device. It does not sync across devices.';
    const reset = document.createElement('button');
    reset.type = 'button'; reset.className = 'text-button'; reset.textContent = 'Reset this reading path';
    panel.append(status, note, reset); path.before(panel);
    const checks = steps.map(step => {
      const label = document.createElement('label'); label.className = 'reading-check';
      const box = document.createElement('input'); box.type = 'checkbox';
      box.checked = saved.includes(step.dataset.readingStep);
      const caption = document.createElement('span'); caption.textContent = 'Mark reading ' + step.dataset.readingStep + ' complete';
      label.append(box, caption); step.append(label);
      box.addEventListener('change', () => {
        update(true);
        if (box.checked) track('reading_step_complete', { theme: path.dataset.readingPath, step: Number(step.dataset.readingStep) });
      });
      return box;
    });
    function update(persist) {
      const done = steps.filter((step, i) => checks[i].checked).map(step => step.dataset.readingStep);
      if (persist) {
        try { localStorage.setItem(key, JSON.stringify(done)); }
        catch { storageWorks = false; }
      }
      status.textContent = done.length + ' of ' + steps.length + ' readings complete';
      if (!storageWorks) note.textContent = 'Saving is unavailable in this browser. Your checks will last only while this page stays open.';
      reset.disabled = done.length === 0;
      if (persist && done.length === steps.length) track('reading_path_complete', { theme: path.dataset.readingPath });
    }
    reset.addEventListener('click', () => { checks.forEach(box => { box.checked = false; }); update(true); });
    update(false);
  }

  document.addEventListener('click', event => {
    const a = event.target.closest('a');
    if (!a) return;
    if (a.dataset.primaryText !== undefined) track('primary_text_open', { book: a.dataset.primaryText, page_path: location.pathname });
    if (a.getAttribute('href') === 'start.html') track('begin_reading', { page_path: location.pathname });
    if (a.closest('.footer-nav') && a.getAttribute('href')?.includes('.html')) track('reading_next_page', { destination: a.getAttribute('href') });
  });

  const input = document.querySelector('#site-search');
  if (input) {
    const results = document.querySelector('#search-results');
    const status = document.querySelector('#search-status');
    let entries = [];
    const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const aliases = { ubermensch: 'overman', superman: 'overman', 'god is dead': 'death of god', 'eternal return': 'eternal recurrence' };
    function render() {
      let query = normalize(input.value.trim());
      query = aliases[query] || query;
      results.replaceChildren();
      if (!query) { status.textContent = 'Search for a theme, book, or glossary term.'; return; }
      const words = query.split(/\s+/);
      const matches = entries.map(entry => {
        const title = normalize(entry.title);
        const content = normalize(entry.title + ' ' + entry.description + ' ' + (entry.content || ''));
        return { entry, score: words.every(word => content.includes(word)) ? (title.includes(query) ? 100 : 1) + words.filter(word => title.includes(word)).length * 10 : 0 };
      }).filter(hit => hit.score > 0).sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
      status.textContent = matches.length ? matches.length + ' results. Showing up to 30.' : 'No results. Try a shorter phrase, a book title, or a term such as nihilism.';
      matches.slice(0, 30).forEach(({ entry }) => {
        const li = document.createElement('li');
        const heading = document.createElement('h2'); const link = document.createElement('a');
        link.href = entry.url; link.textContent = entry.title;
        heading.append(link); const description = document.createElement('p'); description.textContent = entry.description;
        li.append(heading, description); results.append(li);
      });
    }
    input.disabled = true;
    fetch('search-index.json').then(response => {
      if (!response.ok) throw new Error('Search unavailable');
      return response.json();
    }).then(data => { entries = data; input.disabled = false; render(); }).catch(() => {
      status.textContent = 'Search is temporarily unavailable. Use the Themes, Corpus, or Glossary links to browse.';
    });
    input.addEventListener('input', render);
    input.closest('form').addEventListener('submit', event => { event.preventDefault(); render(); });
  }
})();
