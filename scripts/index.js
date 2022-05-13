import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import Swiper from 'swiper';

const headerHeight = document.querySelector('.header').offsetHeight;
const pageWrapper = document.querySelector('.page-wrapper');
const hamburgerMenu = document.getElementById('hamburger-image');

if (hamburgerMenu) {
  hamburgerMenu.addEventListener('click', function() {
    
  })
}

pageWrapper.style.paddingTop = headerHeight+30+'px';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
gsap.registerPlugin(Draggable);

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

  console.log('video', video.duration);

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
      detailsContent.style.maxHeight = btn.scrollHeight + "px";
    }
  })
});

const pin = (container) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      start: "center center",
      pin:true,
      toggleActions: "play reverse play reverse",
    }
  });
}

const orders = document.querySelectorAll('.orders');

pin('.main-container');
smoothScrollTrigger('#videocard-first', '.videocard-first__video');
pin('.details--description');
smoothScrollTrigger('#videocard-second', '.videocard-second__video');

orders.forEach(order => {
  pin(order);
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


const greetingAnimatedItems = document.querySelectorAll('._greeting-color-anim, body, .header')
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.greeting',
    scrub: 1,
    pin: true,
    toggleActions: "play reverse play reverse",
  }
});

greetingAnimatedItems.forEach(item => {
  if (item.className.includes('header')) {
    tl.to('._header-white', {background: '#fff'});
  }
  tl
    .to(item, item.tagName === 'BODY'
      ? { background: '#fff' }
      : { color: '#000' })
});

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });