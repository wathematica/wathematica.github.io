(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gallery__container");
    const dots = document.querySelectorAll(".gallery__dot");

    if (!container || dots.length === 0) return;

    const slides = container.querySelectorAll(".gallery__slide");
    let autoplayTimer = null;

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

    function goToSlide(index) {
      const target = slides[index];
      const scrollLeft =
        target.offsetLeft - (container.offsetWidth - target.offsetWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }

    function nextSlide() {
      const current = getClosestIndex();
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
