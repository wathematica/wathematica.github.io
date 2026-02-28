(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gallery__container");
    const dots = document.querySelectorAll(".gallery__dot");

    if (!container || dots.length === 0) return;

    const slides = container.querySelectorAll(".gallery__slide");
    let autoplayTimer = null;
    let currentPage = 0;

    dots[0].classList.add("is-active");

    function getClosestIndex() {
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const distance = Math.abs(containerCenter - slideCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      return closestIndex;
    }

    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    }

    function nextSlide() {
      if (slides.length <= 1) return;
      const step = slides[1].offsetLeft - slides[0].offsetLeft;
      const maxScroll = container.scrollWidth - container.offsetWidth;
      const pageCount = maxScroll > 0 ? Math.round(maxScroll / step) + 1 : 1;

      currentPage = (currentPage + 1) % pageCount;

      if (currentPage === 0) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else if (currentPage >= pageCount - 1) {
        // 最終ページはmaxScrollに直接スクロールしてsnap誤差を回避
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        container.scrollTo({ left: currentPage * step, behavior: "smooth" });
      }
    }

    function startAutoplay() {
      stopAutoplay();
      // 手動スクロール後のページ位置を同期
      if (slides.length > 1) {
        const step = slides[1].offsetLeft - slides[0].offsetLeft;
        currentPage = step > 0 ? Math.round(container.scrollLeft / step) : 0;
      }
      autoplayTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    container.addEventListener("scroll", () => {
      updateDots(getClosestIndex());
    });

    container.addEventListener("pointerdown", () => {
      stopAutoplay();
    });

    container.addEventListener("pointerup", () => {
      startAutoplay();
    });

    startAutoplay();
  });
})();
