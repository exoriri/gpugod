import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';

// import { scrollBarInit, bodyScrollBar } from './scrollbar';

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

    const foundSection = document.getElementById(destination.slice(1));

    // bodyScrollBar.scrollIntoView(foundSection);

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
