"use strict";

(function () {
  // scripts/details-accordion.js
  var detailsDescription = document.querySelector(".details--description");
  var detailsButtons = Array.from(detailsDescription.querySelectorAll(".description--details"));
  var detailsDescriptionQuestions = document.querySelector(".details--questions");
  var detailsQuestionnButtons = Array.from(detailsDescriptionQuestions.querySelectorAll(".description--details"));

  var togglingAccordions = function togglingAccordions() {
    detailsButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function (e) {
        var detailsContent = btn.getElementsByClassName("details__content")[1];
        var detailsIcon = btn.getElementsByClassName("details__toggle-icon--plus")[0];
        var detailsTextContainer = detailsContent.querySelector(".details__text");
        var detailsTextParagraph = detailsTextContainer.querySelector("p");
        detailsContent.classList.toggle("details__content--active");
        detailsIcon && detailsIcon.classList.add("details__toggle-icon--minus");

        if (detailsIcon) {
          detailsIcon.classList.remove("details__toggle-icon--plus");
          detailsIcon.classList.add("details__toggle-icon--minus");
        } else {
          var detailsIcon2 = btn.getElementsByClassName("details__toggle-icon--minus")[0];
          detailsIcon2.classList.remove("details__toggle-icon--minus");
          detailsIcon2.classList.add("details__toggle-icon--plus");
        }

        if (detailsTextContainer.style.maxHeight) {
          detailsContent.style.maxHeight = null;
          detailsTextContainer.style.maxHeight = null;
        } else {
          detailsContent.style.maxHeight = "100%";
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
          detailsContent2.classList.remove("details__content--active");

          if (detailsIcon2) {
            detailsIcon2.classList.remove("details__toggle-icon--minus");
            detailsIcon2.classList.add("details__toggle-icon--plus");
            detailsContent2.style.maxHeight = null;
            detailsTextContainer2.style.maxHeight = null;
          }
        });
      });
    });
  };

  var togglingQuestionsAccordions = function togglingQuestionsAccordions() {
    detailsQuestionnButtons.forEach(function (btn, i) {
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

        var detailsBtnsToClose = detailsQuestionnButtons.filter(function (_, index) {
          return i !== index;
        });
        detailsBtnsToClose.forEach(function (btn2) {
          var detailsContent2 = btn2.getElementsByClassName("details__content")[1];
          var detailsIcon = btn2.getElementsByClassName("details__toggle-icon--minus-questions")[0];
          var detailsTextContainer2 = detailsContent2.querySelector(".details__text");
          var detailsTextParagraph2 = detailsTextContainer2.querySelector("p");
          detailsContent2.classList.remove("details__content--active");

          if (detailsIcon) {
            detailsIcon.classList.remove("details__toggle-icon--minus-questions");
            detailsIcon.classList.add("details__toggle-icon--plus-questions");
            detailsContent2.style.maxHeight = null;
            detailsTextContainer2.style.maxHeight = null;
          }
        });
      });
    });
  };

  togglingAccordions();
  togglingQuestionsAccordions();
})();