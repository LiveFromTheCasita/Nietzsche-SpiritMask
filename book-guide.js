(() => {
  'use strict';
  const menu = document.querySelector('.book-contents-menu');
  if (!menu) return;

  const wide = window.matchMedia('(min-width: 1200px)');
  const setMenu = () => { menu.open = wide.matches; };
  setMenu();
  wide.addEventListener('change', setMenu);
  menu.addEventListener('click', event => {
    if (!wide.matches && event.target.closest('a[href^="#"]')) menu.open = false;
  });

  // Follow links into a collapsed section, including direct bookmarked URLs.
  const revealSection = () => {
    let id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1).split(':~:')[0]);
    } catch {
      return;
    }
    const target = document.getElementById(id);
    if (!target) return;
    let node = target;
    let opened = false;
    while (node) {
      if (node.tagName === 'DETAILS' && !node.open) {
        node.open = true;
        opened = true;
      }
      node = node.parentElement;
    }
    if (opened) target.scrollIntoView({ block: 'start' });
  };
  revealSection();
  window.addEventListener('hashchange', revealSection);
  document.querySelector('.book-guide').addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link && link.getAttribute('href') === window.location.hash) revealSection();
  });

  // Print every reading, edition note, and passage note, then restore the chosen state.
  const references = [...document.querySelectorAll('.book-references, .book-coming-next, .book-editions')];
  let beforePrint = null;
  window.addEventListener('beforeprint', () => {
    if (beforePrint) return;
    beforePrint = references.map(details => details.open);
    references.forEach(details => { details.open = true; });
  });
  window.addEventListener('afterprint', () => {
    if (!beforePrint) return;
    references.forEach((details, i) => { details.open = beforePrint[i]; });
    beforePrint = null;
  });
})();
