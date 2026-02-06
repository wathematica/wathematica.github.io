(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gallery__container");
    const dots = document.querySelectorAll(".gallery__dot");

    if (!container || dots.length === 0) return;

    // 初期状態で最初のドットをアクティブに
    dots[0].classList.add("is-active");

    container.addEventListener("scroll", () => {
      const slides = container.querySelectorAll(".gallery__slide");
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

      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === closestIndex);
      });
    });
  });
})();
