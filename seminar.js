(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const seminarList = document.getElementById("seminarlist");

    if (!seminarList) {
      return;
    }

    const intl = new Intl.Collator("ja-JP");
    const children = Array.from(seminarList.children);

    children.sort((lhs, rhs) => {
      const x = lhs.dataset.ruby ?? "ん";
      const y = rhs.dataset.ruby ?? "ん";
      return intl.compare(x, y);
    });

    const fragment = document.createDocumentFragment();

    for (const child of children) {
      fragment.appendChild(child);
    }

    seminarList.appendChild(fragment);
  });
})();
