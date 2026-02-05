(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".hamburger").addEventListener("click", () => {
      document.querySelector(".header__navigation").classList.toggle("is-open");
    });
  });
})();
