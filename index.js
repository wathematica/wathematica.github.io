(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    const seminarList = document.getElementById("seminarlist");

    if (!seminarList) {
      return;
    }

    const children = seminarList.children;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 4 && children.length > 0; i++) {
      const rand = Math.floor(Math.random() * children.length);
      fragment.appendChild(children[rand]);
    }

    seminarList.innerHTML = "";
    seminarList.appendChild(fragment);
  });
})();
