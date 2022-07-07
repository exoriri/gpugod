const detailsDescription = document.querySelector('.details--description');
const detailsButtons = Array.from(detailsDescription.querySelectorAll('.description--details'));

const detailsDescriptionQuestions = document.querySelector('.details--questions');
const detailsQuestionnButtons = Array.from(detailsDescriptionQuestions.querySelectorAll('.description--details'));

const togglingAccordions = () => {

  detailsButtons.forEach((btn, i) => {
    //only second element always has a accordion text

    // get all btns except clicked one

    btn.addEventListener('click', (e) => {
      const detailsContent = btn.getElementsByClassName('details__content')[1];
      const detailsIcon = btn.getElementsByClassName('details__toggle-icon--plus')[0];
      
      const detailsTextContainer = detailsContent.querySelector('.details__text');
      const detailsTextParagraph = detailsTextContainer.querySelector('p');

      detailsContent.classList.toggle('details__content--active');
      detailsIcon && detailsIcon.classList.add('details__toggle-icon--minus');

      if (detailsIcon) {
        detailsIcon.classList.remove('details__toggle-icon--plus');
        detailsIcon.classList.add('details__toggle-icon--minus');
      } else {
        const detailsIcon = btn.getElementsByClassName('details__toggle-icon--minus')[0];
        detailsIcon.classList.remove('details__toggle-icon--minus');
        detailsIcon.classList.add('details__toggle-icon--plus');
      }

      if (detailsTextContainer.style.maxHeight) {
        detailsContent.style.maxHeight = null;
        detailsTextContainer.style.maxHeight = null;
      } else {
        detailsContent.style.maxHeight = '100%';
        detailsTextContainer.style.maxHeight = detailsTextParagraph.scrollHeight + "px";
      }

      const detailsBtnsToClose = detailsButtons.filter((_,index) => i !== index);

      detailsBtnsToClose.forEach(btn => {
        const detailsContent = btn.getElementsByClassName('details__content')[1];
        const detailsIcon = btn.getElementsByClassName('details__toggle-icon--minus')[0];
  
        const detailsTextContainer = detailsContent.querySelector('.details__text');
        const detailsTextParagraph = detailsTextContainer.querySelector('p');
        detailsContent.classList.remove('details__content--active');

        if (detailsIcon) {
          detailsIcon.classList.remove('details__toggle-icon--minus');
          detailsIcon.classList.add('details__toggle-icon--plus');

          detailsContent.style.maxHeight = null;
          detailsTextContainer.style.maxHeight = null;
        }
  
      });
    })
  });
};

const togglingQuestionsAccordions = () => {
  detailsQuestionnButtons.forEach((btn, i) => {
    //only second element always has a accordion text
    const detailsContent = btn.getElementsByClassName('details__content')[1];
    const detailsIconQuestions = btn.getElementsByClassName('details__toggle-icon--plus-questions')[0];

    btn.addEventListener('click', (e) => {
      const detailsTextContainer = detailsContent.querySelector('.details__text');
      const detailsTextParagraph = detailsTextContainer.querySelector('p');

      detailsContent.classList.toggle('details__content--active');
      detailsIconQuestions.classList.remove('details__toggle-icon--plus-questions');
      detailsIconQuestions.classList.add('details__toggle-icon--minus-questions');

      if (detailsTextContainer.style.maxHeight) {
        detailsIconQuestions.classList.remove('details__toggle-icon--minus-questions');
        detailsIconQuestions.classList.add('details__toggle-icon--plus-questions');
        detailsContent.style.maxHeight = null;
        detailsTextContainer.style.maxHeight = null;
      } else {
        detailsContent.style.maxHeight = '100%';
        detailsTextContainer.style.maxHeight = detailsTextParagraph.scrollHeight + "px";
      }


      const detailsBtnsToClose = detailsQuestionnButtons.filter((_,index) => i !== index);

      detailsBtnsToClose.forEach(btn => {
        const detailsContent = btn.getElementsByClassName('details__content')[1];
        const detailsIcon = btn.getElementsByClassName('details__toggle-icon--minus-questions')[0];
  
        const detailsTextContainer = detailsContent.querySelector('.details__text');
        const detailsTextParagraph = detailsTextContainer.querySelector('p');
        detailsContent.classList.remove('details__content--active');

        if (detailsIcon) {
          detailsIcon.classList.remove('details__toggle-icon--minus-questions');
          detailsIcon.classList.add('details__toggle-icon--plus-questions');

          detailsContent.style.maxHeight = null;
          detailsTextContainer.style.maxHeight = null;
        }
  
      });
    })
  });
}

togglingAccordions();
togglingQuestionsAccordions();