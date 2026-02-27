(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".seminar-card").forEach((card) => {
      if (card.scrollHeight > 200) {
        const btn = document.createElement("button");
        btn.className = "seminar-card__toggle";
        btn.textContent = "もっと見る";
        btn.addEventListener("click", () => {
          const expanded = card.classList.toggle("is-expanded");
          btn.textContent = expanded ? "閉じる" : "もっと見る";
        });
        card.appendChild(btn);
      }
    });
  });
})();
