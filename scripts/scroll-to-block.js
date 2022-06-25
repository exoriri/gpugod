import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';

// import { scrollBarInit, bodyScrollBar } from './scrollbar';


// const sectionPositions = Array.from(headerLinks).reduce((acc, link) => {
//   const newAcc = {...acc};

//   //some links don't have data-href
//   if (link.dataset.href) {
//     //remove # before id name
//     let destinationSection = link.dataset.href.slice(1);
//     const foundSection = document.getElementById(destinationSection);

//     newAcc[destinationSection] = foundSection.getBoundingClientRect().top;
//   };
//   return newAcc;
// },{});
const scrollToBlock = () => {
  const headerLinks = document.querySelectorAll(".header__links-item");
  const headerLinksText = document.querySelectorAll(".header__links-item");

  let destinationSection = null;
  let lastDestination = null;

  const srollToBlock = (e) => {
    const destination = e.target.dataset.href;
    destinationSection = destination.slice(1);
    
    e.stopPropagation();
    e.preventDefault();

    const foundSection = document.getElementById(destinationSection);
  
    gsap.to(window, {
      duration: 2, 
      scrollTo: {y: destination, offsetY: foundSection.getBoundingClientRect().y < 0 && (destinationSection === 'doubts' || destinationSection === 'benefits') ? foundSection.offsetHeight * 2 : 0 }
    });

    lastDestination = destinationSection;
    return false;
  };

  headerLinksText.forEach(linkText => {
    linkText.addEventListener('click', scrollToBlock);
  })

  headerLinks.forEach((link) => {
    link.addEventListener('click', srollToBlock)
  });
};

export default scrollToBlock;
