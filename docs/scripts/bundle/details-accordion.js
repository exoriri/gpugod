"use strict";

(function () {
  // scripts/details-accordion.js
  var detailsButtons = document.querySelectorAll(".description--details");

  var togglingAccordions = function togglingAccordions() {
    detailsButtons.forEach(function (btn) {
      var detailsContent = btn.getElementsByClassName("details__content")[1];
      var detailsIcon = btn.getElementsByClassName("details__toggle-icon--plus")[0];
      btn.addEventListener("click", function (e) {
        var detailsTextContainer = detailsContent.querySelector(".details__text");
        var detailsTextParagraph = detailsTextContainer.querySelector("p");
        detailsContent.classList.toggle("details__content--active");
        detailsIcon && detailsIcon.classList.toggle("details__toggle-icon--minus");

        if (detailsTextContainer.style.maxHeight) {
          detailsContent.style.maxHeight = null;
          detailsTextContainer.style.maxHeight = null;
        } else {
          detailsContent.style.maxHeight = "100%";
          detailsTextContainer.style.maxHeight = detailsTextParagraph.scrollHeight + "px";
        }
      });
    });
  };

  togglingAccordions();
})();