document.addEventListener('DOMContentLoaded', () => {
  // fullPage.js 初期化
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    onLeave: () => {
      AOS.refresh();
    }
  });

  // AOS 初期化
  AOS.init({
    duration: 800,
    once: true
  });
});
