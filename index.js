(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      document.querySelector(".header__navigation").classList.toggle("is-open");
    });

    // スライドショー（自動再生）
    const container = document.querySelector(".gallery__container");
    const dots = document.querySelectorAll(".gallery__dot");

    if (container && dots.length > 0) {
      const slides = container.querySelectorAll(".gallery__slide");
      let autoplayTimer = null;

      dots[0].classList.add("is-active");

      function getCurrentIndex() {
        return Math.round(container.scrollLeft / container.offsetWidth);
      }

      function updateDots(index) {
        dots.forEach((dot, i) => {
          dot.classList.toggle("is-active", i === index);
        });
      }

      function goToSlide(index) {
        container.scrollTo({
          left: index * container.offsetWidth,
          behavior: "smooth",
        });
      }

      function nextSlide() {
        const current = getCurrentIndex();
        goToSlide((current + 1) % slides.length);
      }

      function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(nextSlide, 5000);
      }

      function stopAutoplay() {
        if (autoplayTimer) {
          clearInterval(autoplayTimer);
          autoplayTimer = null;
        }
      }

      container.addEventListener("scroll", () => {
        updateDots(getCurrentIndex());
      });

      container.addEventListener("pointerdown", () => {
        stopAutoplay();
      });

      container.addEventListener("pointerup", () => {
        startAutoplay();
      });

      startAutoplay();
    }
  });
})();
