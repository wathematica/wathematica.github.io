(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".gallery__container");
    const dots = document.querySelectorAll(".gallery__dot");

    if (!container || dots.length === 0) return;

    // 初期状態で最初のドットをアクティブに
    dots[0].classList.add("is-active");

    container.addEventListener("scroll", () => {
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.offsetWidth;
      const currentIndex = Math.round(scrollLeft / slideWidth);

      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === currentIndex);
      });
    });
  });
})();
