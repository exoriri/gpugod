import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
gsap.registerPlugin(Draggable);

const scrollBarInit = () => {
  const scroller = document.querySelector('.scroller');

  const bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, thumbMinSize: 0, alwaysShowTracks: false });

  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    }
  });
  bodyScrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: scroller });
};


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
    scrollTrigger: {
      trigger: containerId,
      start: "center center",
      scrub: 1,
      end: "+=" + (window.innerHeight * 6),
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

const pin = (options) => {
  const { container, toHideContaier, fromHiddenContainer, pin, pinSpacing } = options;
  gsap.to(`${container} ${toHideContaier}`, {
    opacity: 0,
    y: -200,
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: pin !== undefined ? pin : true,
      pinSpacing: pinSpacing !== undefined ? pinSpacing : true,
      start: 'center center',
      end: "+=" + (window.innerHeight * 2)
    }
  });
}


const headerHeight = document.querySelector('.header').offsetHeight;
const pageWrapper = document.querySelector('.page-wrapper');
const equipments = document.querySelector('.equipments');
const greeting = document.querySelector('.greeting');


//MOBILE
if (window.matchMedia("(max-width: 1024px)").matches) {
  const video1 = document.querySelector('.videocard-first__video');
  const video2 = document.querySelector('.videocard-second__video');
  const headerHeight = document.querySelector('.header-mobile').offsetHeight;
  const hamburgerMenu = document.getElementById('hamburger-image');
  const navMain = document.getElementById("nav-main");
  const sectionContent = document.querySelector('.section-content');

  video1.autoPlay = true;
  video2.autoPlay = true;
  video1.loop = true;
  video2.loop = true;
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
      sectionContent.style.display = 'flex';
      menuAnimation
        .to(navMain, 0.4, { width: '100%', className: "+=vertical", ease: "power2.easeInOut", transform: "translate3d(0,0,0)" }, 0);
      menuAnimation.play(0);
    }
  });
  pageWrapper.style.paddingTop = headerHeight + 30 + 'px';
} else { // DESKTOP
  scrollBarInit();
  pageWrapper.style.paddingTop = headerHeight + 30 + 'px';
  equipments.style.paddingTop = headerHeight + 'px';
  greeting.style.paddingTop = headerHeight + 'px';

  const orders = document.querySelectorAll('.orders');
  pin({container: '.main-container', toHideContaier: '._scroll-fade-out'});
  smoothScrollTrigger('#videocard-first', '.videocard-first__video');
  pin({container: '.details--description', toHideContaier: '.description--details'});
  smoothScrollTrigger('#videocard-second', '.videocard-second__video');

  orders.forEach((order, i) => pin({container: `._orders--${i+1}`, toHideContaier: '._scroll-fade-out', pinSpacing: i !== orders.length - 1 ? false : true}));
  pin({container: '.equipments', toHideContaier: '._scroll-fade-out', toHideContaier: '.greeting', pin: false});

  const greetingAnimatedItems = document.querySelectorAll('body, .header');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.equipments',
      scrub: 1,
      start: 'bottom bottom',
    }
  });

  greetingAnimatedItems.forEach(item => {
    tl.add('start', 1)
    tl.to('._header-gray', { borderBottomColor: '#DADADA', background: '#fff' }, 'start')
    tl.to('._header-wht', { background: '#fff', border: '1px solid #DADADA' }, 'start')
    tl.to('.header__links-item', {className:"header__links-item header__links-item--wht"}, 'start')
    tl.to('._svg-coloring', { fill: '#000', color: '#000' }, 'start');
    tl.to('._greeting-color-anim', { fill: '#000', color: '#000' }, 'start');
    tl
      .to(item, item.tagName === 'BODY'
        ? { background: '#fff' }
        : { color: '#000' });
  });

  pin({container: '.details--questions', toHideContaier: '.description'});
  gsap.to(`.swiper-container`, {
    opacity: 0,
    y: -200,
    scrollTrigger: {
      trigger: '.swiper-container',
      scrub: true,
      start: 'top top',
      pin: true,
      end: "+=" + (window.innerHeight * 2)
    }
  });
}

new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  autoPlay: true,
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

// toggle details
const detailsButtons = document.querySelectorAll('.description--details');

const togglingAccordions = (plusIconClassNames, minusIconClassNames) => {
  detailsButtons.forEach(btn => {
    //only second element always has a accordion text
    const detailsContent = btn.getElementsByClassName('details__content')[1];
    const detailsIcon = btn.getElementsByClassName('details__toggle-icon--plus')[0];
    // const detailsIconQuestions = btn.getElementsByClassName('details__toggle-icon--plus-questions')[0];
    btn.addEventListener('click', (e) => {
      const detailsTextContainer = detailsContent.querySelector('.details__text');
      const detailsTextParagraph = detailsTextContainer.querySelector('p');
      // console.log(detailsIconQuestions.toggle)

      detailsContent.classList.toggle('details__content--active');
      detailsIcon && detailsIcon.classList.toggle('details__toggle-icon--minus');
      // detailsIconQuestions && detailsIconQuestions.toggle('details__toggle-icon--minus-questions');
      if (detailsTextContainer.style.maxHeight) {
        detailsContent.style.maxHeight = null;
        detailsTextContainer.style.maxHeight = null;
      } else {
        detailsContent.style.maxHeight = '100%';
        detailsTextContainer.style.maxHeight = detailsTextParagraph.scrollHeight + "px";
      }
    })
  });
};

togglingAccordions('details__toggle-icon--plus', 'details__toggle-icon--minus');
// togglingAccordions('details__toggle-icon--plus-questions', 'details__toggle-icon--minus-questions');

const videos = document.querySelectorAll('.embed-responsive-item');
videos.forEach(video => {
  video.addEventListener('click', function(e) {
    console.log(e.currentTarget)
  })
})


