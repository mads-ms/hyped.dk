// Simple enhancements: mobile nav toggle and smooth scrolling fallback
(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  if (!header || !toggle) return;

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();

      // Close mobile nav when clicking
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');

      // Smooth scroll with small offset for sticky header
      const rect = target.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 72;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    });
  });
})();


