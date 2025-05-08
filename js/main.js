document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const elements = document.querySelectorAll('.fade');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: container,
    threshold: 0.5
  });

  elements.forEach(el => {
    const delay = el.getAttribute('data-delay') || 0;
    el.style.setProperty('--delay', `${delay}ms`);
    observer.observe(el);
  });
});