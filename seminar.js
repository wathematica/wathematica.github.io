(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".seminar-card").forEach((card) => {
      if (card.scrollHeight > 200) {
        const btn = document.createElement("button");
        btn.className = "seminar-card__toggle";
        btn.textContent = "もっと見る";
        btn.addEventListener("click", () => {
          if (card.classList.contains("is-expanded")) {
            card.style.maxHeight = card.scrollHeight + "px";
            requestAnimationFrame(() => {
              card.style.maxHeight = "200px";
            });
            card.classList.remove("is-expanded");
            btn.textContent = "もっと見る";
          } else {
            card.style.maxHeight = card.scrollHeight + "px";
            card.classList.add("is-expanded");
            btn.textContent = "閉じる";
            card.addEventListener("transitionend", () => {
              if (card.classList.contains("is-expanded")) {
                card.style.maxHeight = "none";
              }
            }, { once: true });
          }
        });
        card.appendChild(btn);
      }
    });
  });
})();
