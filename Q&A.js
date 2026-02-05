(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    // Q&A アコーディオンアニメーション
    document.querySelectorAll(".question__detail").forEach((details) => {
      const summary = details.querySelector(".question__summary");
      const wrapper = details.querySelector(".question__answer-wrapper");
      if (!summary || !wrapper) return;

      summary.addEventListener("click", (e) => {
        e.preventDefault();

        if (details.open) {
          // 閉じるアニメーション
          wrapper.classList.remove("is-open");
          wrapper.addEventListener(
            "transitionend",
            () => {
              details.open = false;
            },
            { once: true }
          );
        } else {
          // 開くアニメーション
          details.open = true;
          requestAnimationFrame(() => {
            wrapper.classList.add("is-open");
          });
        }
      });
    });
  });
})();
