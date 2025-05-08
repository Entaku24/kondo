document.addEventListener('DOMContentLoaded', () => {
  // fullPage.js の初期化
  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 700,
    onLeave: () => {
      // セクション移動時に AOS を再初期化
      AOS.refresh();
    }
  });

  // AOS の初期化
  AOS.init({
    duration: 800,
    once: true,
  });
});
