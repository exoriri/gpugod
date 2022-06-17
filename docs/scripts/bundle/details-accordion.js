"use strict";

(function () {
  // scripts/details-accordion.js
  var detailsDescription = document.querySelector(".details--description");
  var detailsButtons = detailsDescription.querySelectorAll(".description--details");
  var detailsDescriptionQuestions = document.querySelector(".details--questions");
  var detailsQuestionnButtons = detailsDescriptionQuestions.querySelectorAll(".description--details");

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

  var togglingQuestionsAccordions = function togglingQuestionsAccordions() {
    detailsQuestionnButtons.forEach(function (btn) {
      var detailsContent = btn.getElementsByClassName("details__content")[1];
      var detailsIconQuestions = btn.getElementsByClassName("details__toggle-icon--plus-questions")[0];
      console.log(detailsIconQuestions);
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