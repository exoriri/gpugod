"use strict";

(function () {
  // scripts/mobile.js
  var applyMobileScripts = function applyMobileScripts() {
    var hamburgerMenu = document.getElementById("hamburger-image");
    hamburgerMenu.addEventListener("click", function () {
      console.log("click");

      if (hamburgerMenu.classList.contains("hamburger--active")) {
        hamburgerMenu.classList.remove("hamburger--active");
      } else {
        hamburgerMenu.classList.add("hamburger--active");
      }
    });
  };

  var mobile_default = applyMobileScripts;
})();