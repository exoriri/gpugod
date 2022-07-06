const detailsDescription = document.querySelector('.details--description');
const detailsButtons = Array.from(detailsDescription.querySelectorAll('.description--details'));

const detailsDescriptionQuestions = document.querySelector('.details--questions');
const detailsQuestionnButtons = detailsDescriptionQuestions.querySelectorAll('.description--details');

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
      detailsIcon && detailsIcon.classList.toggle('details__toggle-icon--minus');

      if (detailsTextContainer.style.maxHeight) {
        detailsContent.style.display = 'none';
        detailsTextContainer.style.maxHeight = null;
      } else {
        detailsContent.style.display = 'block';
        detailsTextContainer.style.maxHeight = detailsTextParagraph.scrollHeight + "px";
      }

      const detailsBtnsToClose = detailsButtons.filter((_,index) => i !== index);
      detailsBtnsToClose.forEach(btn => {
        const detailsContent = btn.getElementsByClassName('details__content')[1];
        const detailsIcon = btn.getElementsByClassName('details__toggle-icon--minus')[0];
  
        const detailsTextContainer = detailsContent.querySelector('.details__text');
        const detailsTextParagraph = detailsTextContainer.querySelector('p');
  
        detailsIcon && detailsIcon.classList.toggle('details__toggle-icon--plus');
  
        detailsContent.style.maxHeight = null;
        detailsTextContainer.style.maxHeight = null;
  
      });
    })
  });
};

const togglingQuestionsAccordions = () => {
  detailsQuestionnButtons.forEach(btn => {
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
    })
  });
}

togglingAccordions();
togglingQuestionsAccordions();