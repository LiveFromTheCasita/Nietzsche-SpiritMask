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

  // Print the complete references, then restore the reader's chosen state.
  const references = [...document.querySelectorAll('.book-references')];
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
