import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';

import { scrollBarInit, bodyScrollBar } from './scrollbar';

const scrollToBlock = () => {
  const headerLinks = document.querySelectorAll(".header__links-text");

  let allTriggers = ScrollTrigger.getAll();
  allTriggers.pop();

  const disableTriggers = () => {
    allTriggers.forEach((trigger) => {
      trigger.disable();
    });
  };

  const enableTriggers = () => {
    allTriggers.forEach((trigger) => {
      trigger.enable();
    });
  };
  
  const sections = gsap.utils.toArray(".section");
  const sectionIDs = document.querySelectorAll('.main-container, #videocard-first, .details--description, #videocard-second, .equipments, .swiper-container');
  
  let maxScroll = 0;
  let sectionsEnabled = true;
  let destinationSection = null;
  let lastDestination = null;

  const enableSections = () => {
    sectionsEnabled = true;
    
    sectionIDs.forEach(el => {
      console.log('element', el)
      el.enable();
      el.refresh();
    });
  };
  const disableSections = (excludeId) => {
    sectionsEnabled = false;
    const triggers = allTriggers.filter(triger => triger.id !== excludeId);

    triggers.forEach(trigger => {
      trigger.disable();
      trigger.refresh();
    });
  };

  headerLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const destination = e.target.dataset.href;
      destinationSection = destination.slice(1);
      // Scrollbar.destroyAll();
      // bodyScrollBar.removeListener(ScrollTrigger.update);
      disableSections(destinationSection);
      
      e.stopPropagation();
      e.preventDefault();
      // disable all but destination

      const foundSection = document.getElementById(destination.slice(1));

      // bodyScrollBar.scrollTop(foundSection.getBoundingClientRect().top)
      foundSection.scrollIntoView({ block: 'start', behavior: 'smooth' });
      document.querySelector('.scroller').scrollTo({
        top: foundSection.getBoundingClientRect().top
      })
      

      // enableTriggers(destinationSection);

      setTimeout(() => {
        enableTriggers();
        // scrollBarInit();
      },3000);

      // gsap.to(window, { duration: 2, scrollTo: destination });
      lastDestination = destinationSection;
      return false;
    })
  });
};

export default scrollToBlock;
