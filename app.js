"use strict";
if (window.innerWidth < 500) {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu-ul");
  let check = true;

  hamburger.addEventListener("click", function () {
    if (check) {
      menu.style.display = "block";
      check = false;
    } else {
      menu.style.display = "none";
      check = true;
    }
  });

  document.addEventListener("click", function (event) {
    const target = event.target;
    const isClickedInsideMenu = menu.contains(target);
    const isClickedInsideHamburger = hamburger.contains(target);

    if (!isClickedInsideMenu && !isClickedInsideHamburger) {
      menu.style.display = "none";
      check = true;
    }
  });
}
