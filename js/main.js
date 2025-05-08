document.addEventListener('DOMContentLoaded', () => {
  // AOS 初期化
  AOS.init({ duration: 800, once: true });

  // fullPage.js 初期化
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    anchors: ['hero', 'background', 'study', 'hobbies', 'memories', 'future'],
    afterRender: () => {
      AOS.refresh();
    },
    afterLoad: (origin, destination) => {
      // AOS を再度リフレッシュ＆アニメート開始
      AOS.refresh();
      destination.item.querySelectorAll('[data-aos]').forEach(el => {
        el.classList.add('aos-animate');
      });
    }
  });
});