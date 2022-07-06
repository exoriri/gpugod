"use strict";

(function () {
  // scripts/details-accordion.js
  var detailsDescription = document.querySelector(".details--description");
  var detailsButtons = Array.from(detailsDescription.querySelectorAll(".description--details"));
  var detailsDescriptionQuestions = document.querySelector(".details--questions");
  var detailsQuestionnButtons = detailsDescriptionQuestions.querySelectorAll(".description--details");

  var togglingAccordions = function togglingAccordions() {
    detailsButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function (e) {
        var detailsContent = btn.getElementsByClassName("details__content")[1];
        var detailsIcon = btn.getElementsByClassName("details__toggle-icon--plus")[0];
        var detailsTextContainer = detailsContent.querySelector(".details__text");
        var detailsTextParagraph = detailsTextContainer.querySelector("p");
        detailsContent.classList.toggle("details__content--active");
        detailsIcon && detailsIcon.classList.toggle("details__toggle-icon--minus");

        if (detailsTextContainer.style.maxHeight) {
          detailsContent.style.display = "none";
          detailsTextContainer.style.maxHeight = null;
        } else {
          detailsContent.style.display = "block";
          detailsTextContainer.style.maxHeight = detailsTextParagraph.scrollHeight + "px";
        }

        var detailsBtnsToClose = detailsButtons.filter(function (_, index) {
          return i !== index;
        });
        detailsBtnsToClose.forEach(function (btn2) {
          var detailsContent2 = btn2.getElementsByClassName("details__content")[1];
          var detailsIcon2 = btn2.getElementsByClassName("details__toggle-icon--minus")[0];
          var detailsTextContainer2 = detailsContent2.querySelector(".details__text");
          var detailsTextParagraph2 = detailsTextContainer2.querySelector("p");
          detailsIcon2 && detailsIcon2.classList.toggle("details__toggle-icon--plus");
          detailsContent2.style.maxHeight = null;
          detailsTextContainer2.style.maxHeight = null;
        });
      });
    });
  };

  var togglingQuestionsAccordions = function togglingQuestionsAccordions() {
    detailsQuestionnButtons.forEach(function (btn) {
      var detailsContent = btn.getElementsByClassName("details__content")[1];
      var detailsIconQuestions = btn.getElementsByClassName("details__toggle-icon--plus-questions")[0];
      btn.addEventListener("click", function (e) {
        var detailsTextContainer = detailsContent.querySelector(".details__text");
        var detailsTextParagraph = detailsTextContainer.querySelector("p");
        detailsContent.classList.toggle("details__content--active");
        detailsIconQuestions.classList.remove("details__toggle-icon--plus-questions");
        detailsIconQuestions.classList.add("details__toggle-icon--minus-questions");

        if (detailsTextContainer.style.maxHeight) {
          detailsIconQuestions.classList.remove("details__toggle-icon--minus-questions");
          detailsIconQuestions.classList.add("details__toggle-icon--plus-questions");
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
  togglingQuestionsAccordions();
})();