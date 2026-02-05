(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      document.querySelector(".header__navigation").classList.toggle("is-open");
    });
  });
})();
