import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
gsap.registerPlugin(Draggable);

const headerHeight = document.querySelector('.header').offsetHeight;
const pageWrapper = document.querySelector('.page-wrapper');
const equipments = document.querySelector('.equipments');
const greeting = document.querySelector('.greeting');

if (window.matchMedia("(max-width: 1024px)").matches) {
  const video1 = document.querySelector('.videocard-first__video');
  const video2 = document.querySelector('.videocard-second__video');
  const headerHeight = document.querySelector('.header-mobile').offsetHeight;
  const hamburgerMenu = document.getElementById('hamburger-image');
  const navMain = document.getElementById("nav-main");
  const sectionContent = document.querySelector('.section-content');

  video1.autoPlay = true;
  video2.autoPlay = true;
  video1.play();
  video2.play();

  let menuAnimation = gsap.timeline({ paused: true });
  let menuAnimationBack = gsap.timeline({ paused: true, reversed: true });

  hamburgerMenu.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('hamburger--active')) {
      hamburgerMenu.classList.remove('hamburger--active');
      sectionContent.style.display = 'none';
      menuAnimationBack
        .to(navMain, 0.55, { width: 0, className: "+=skewback", ease: "power4.easeIn", transform: "translate3d(0,0,0)" }, 0);
      menuAnimationBack.play(0);
    } else {
      hamburgerMenu.classList.add('hamburger--active');
      sectionContent.style.display = 'block';
      menuAnimation
        .to(navMain, 0.4, { width: '100%', className: "+=vertical", ease: "power2.easeInOut", transform: "translate3d(0,0,0)" }, 0);
      menuAnimation.play(0)
    }
  });
  pageWrapper.style.paddingTop = headerHeight + 30 + 'px';
} else {
  pageWrapper.style.paddingTop = headerHeight + 30 + 'px';
  equipments.style.paddingTop = headerHeight + 'px';
  greeting.style.paddingTop = headerHeight + 'px';

  const smoothScrollTrigger = (containerId, videoClass) => {
    const video = document.querySelector(videoClass);
    let src = video.currentSrc || video.src;

    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }

    once(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
    });
    let tl = gsap.timeline({
      defaults: { duration: 5 },
      scrollTrigger: {
        trigger: containerId,
        start: "center center",
        scrub: 1,
        pin: true,
      }
    });

    once(video, "loadedmetadata", () => {
      tl.fromTo(
        video,
        {
          currentTime: 0
        },
        {
          currentTime: video.duration || 1,
        }
      );
    });

    /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
    setTimeout(function () {
      if (window["fetch"]) {
        fetch(src)
          .then((response) => response.blob())
          .then((response) => {
            var blobURL = URL.createObjectURL(response);

            var t = video.currentTime;
            once(document.documentElement, "touchstart", function (e) {
              video.play();
              video.pause();
            });

            video.setAttribute("src", blobURL);
            video.currentTime = t + 0.001;
          });
      }
    }, 1000);

  };

  const pin = (container, type) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: 1,
        start: type === undefined ? "center center" : `${type} ${type}`,
        pin: true,
        toggleActions: "play reverse play reverse",
      }
    });
  }

  const orders = document.querySelectorAll('.orders');
  pin('.main-container');
  smoothScrollTrigger('#videocard-first', '.videocard-first__video');
  pin('.details--description');
  smoothScrollTrigger('#videocard-second', '.videocard-second__video');

  orders.forEach(order => pin(order));
  pin('.equipments', 'top');

  const greetingAnimatedItems = document.querySelectorAll('._greeting-color-anim, body, .header');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.greeting',
      scrub: 1,
      start: 'top top',
      pin: true,
      toggleActions: "play reverse play rever se",
    }
  });

  greetingAnimatedItems.forEach(item => {
    // tl.add('start', 1)
    tl.to('._header-white', { background: '#fff', border: '1px solid #DADADA' }, 'start')
    tl.to('._header-gray', { borderBottomColor: '#DADADA', background: '#fff' }, 'start')
    tl.to('.header__links-item', {className:" header__links-item header__links-item--white"})
    tl.to('._svg-coloring', { fill: '#000' }, 'start');

    tl
      .to(item, item.tagName === 'BODY'
        ? { background: '#fff' }
        : { color: '#000' }, 'start')
  });

  const toHideElements = document.querySelectorAll('._scroll-fade-out');

  toHideElements.forEach(toHideElem => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: toHideElem,
        scrub: 1,
        toggleActions: "play reverse play reverse",
      }
    });
    tl
      .to(toHideElem, { opacity: 1 })
      .to(toHideElem, { opacity: 0, yPercent: -20 })
  });
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  autoPlay: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
})

// toggle details
const detailsButtons = document.querySelectorAll('.description--details');

detailsButtons.forEach(btn => {
  //only second element always has a accordion text
  const detailsContent = btn.getElementsByClassName('details__content')[1];
  const detailsIcon = btn.getElementsByClassName('details__toggle-icon--plus')[0];

  btn.addEventListener('click', (e) => {
    detailsContent.classList.toggle('details__content--active');
    detailsIcon.classList.toggle('details__toggle-icon--minus');
    if (detailsContent.style.maxHeight) {
      detailsContent.style.maxHeight = null;
    } else {
      detailsContent.style.maxHeight = btn.scrollHeight + 50 + "px";
    }
  })
});