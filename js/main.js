document.addEventListener('DOMContentLoaded', () => {
  // AOS 初期化
  AOS.init({
    duration: 800,
    once: true
  });

  // fullPage.js 初期化
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    afterLoad: () => {
      AOS.refresh();
    }
  });
});