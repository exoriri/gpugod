import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollToBlock = () => {
  const headerLinks = document.querySelectorAll(".header__links-text");
  const headerLinksMobile = document.querySelectorAll(".section-content__list-text");

  let allTriggers = ScrollTrigger.getAll();
  console.log(allTriggers)
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

  headerLinksMobile.forEach(link => {
      link.addEventListener('click', (e) => {
        gsap.to(window, {
            duration: 2,
            scrollTo: e.target.dataset.href,
            onStart: disableTriggers,
            onComplete: enableTriggers,
          });
      })
  })

  headerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      gsap.to(window, {
        duration: 2,
        scrollTo: e.target.dataset.href,
        onStart: disableTriggers,
        onComplete: enableTriggers,
      });
    });
  });
};

export default scrollToBlock;
