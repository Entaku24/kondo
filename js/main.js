document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const faders = container.querySelectorAll('.fade');

  // Intersection Observer で .fade 要素を監視
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

  // 遅延設定を CSS 変数に反映してオブザーバ登録
  faders.forEach(el => {
    const delay = el.dataset.delay || 0;
    el.style.setProperty('--delay', `${delay}ms`);
    observer.observe(el);
  });
});
