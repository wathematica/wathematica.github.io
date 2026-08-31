(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".seminar-item").forEach((item, index) => {
      const name = item.querySelector(".seminar-item__name");
      const description = item.querySelector(".seminar-item__description");

      if (!name || !description) {
        return;
      }

      if (!description.textContent.trim()) {
        description.textContent = "紹介文は準備中です。";
      }

      const button = document.createElement("button");
      const descriptionId = `seminar-description-${index + 1}`;

      button.className = "seminar-item__toggle";
      button.type = "button";
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", descriptionId);
      button.append(...name.childNodes);

      name.appendChild(button);
      description.id = descriptionId;
      description.hidden = true;

      button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isExpanded));
        description.hidden = isExpanded;
      });
    });
  });
})();
