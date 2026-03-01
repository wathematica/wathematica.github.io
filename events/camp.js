(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".camp-gallery__container");
    const dots = document.querySelectorAll(".camp-gallery__dot");

    if (!container || dots.length === 0) return;

    const slides = container.querySelectorAll(".camp-gallery__slide");
    let autoplayTimer = null;

    dots[0].classList.add("is-active");

    const get_slide_width = () => {
      return slides[1].getBoundingClientRect().left - slides[0].getBoundingClientRect().left;
    }

    const get_index = () => {
      //左端のスライドのインデックスを取得する。
      const containerLeft = container.getBoundingClientRect().left;
      let closest = 0;
      let minDist = Infinity;
      slides.forEach((slide, i) => {
        const dist = Math.abs(slide.getBoundingClientRect().left - containerLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      return closest;
    }

    const updateDots = (index) => {
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === index);
      });
    }

    const next_slide = () => {
      if (slides.length <= 1) return;
      const index = get_index();
      const num_elements = container.clientWidth >= 700 ? 3 : 1;
      const maxIndex = slides.length - num_elements;
      const nextIndex = index >= maxIndex ? 0 : index + 1;

      container.scrollTo({
        left: nextIndex * get_slide_width(),
        behavior: "smooth",
      });
    }

    const startAutoplay = () => {
      stopAutoplay();
      autoplayTimer = setInterval(next_slide, 7000);
    };

    const stopAutoplay = () => {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    };

    container.addEventListener("scroll", () => {
      updateDots(get_index());
    });

    container.addEventListener("pointerdown", stopAutoplay);
    container.addEventListener("pointerup", startAutoplay);

    startAutoplay();

  });
})();
