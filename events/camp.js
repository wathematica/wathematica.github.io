(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gallery__container");
    const dots = document.querySelectorAll(".gallery__dot");

    if (!container || dots.length === 0) return;

    const slides = container.querySelectorAll(".gallery__slide");
    let currentIndex = 0;
    let autoplayTimer = null;

    // 初期状態で最初のドットをアクティブに
    dots[0].classList.add("is-active");

    // 現在のスライドインデックスを取得
    function getCurrentIndex() {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      return Math.round(scrollLeft / slideWidth);
    }

    // ドットの更新
    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    }

    // 指定インデックスにスクロール
    function goToSlide(index) {
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: "smooth",
      });
    }

    // 次のスライドへ
    function nextSlide() {
      currentIndex = getCurrentIndex();
      const next = (currentIndex + 1) % slides.length;
      goToSlide(next);
    }

    // 自動再生の開始
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, 5000);
    }

    // 自動再生の停止
    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    // スクロール時にドットを更新
    container.addEventListener("scroll", () => {
      currentIndex = getCurrentIndex();
      updateDots(currentIndex);
    });

    // ユーザー操作時にタイマーをリセット
    container.addEventListener("pointerdown", () => {
      stopAutoplay();
    });

    container.addEventListener("pointerup", () => {
      startAutoplay();
    });

    // 自動再生を開始
    startAutoplay();
  });
})();
