(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".question").forEach((question) => {
      const summary = question.querySelector(".question__summary");
      if (!summary) return;

      summary.addEventListener("click", () => {
        question.classList.toggle("is-open");
      });
    });
  });
})();
