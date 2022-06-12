"use strict";

(function () {
  // scripts/carousel.js
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 0
      }
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  });
  var swiperBtnPrev = document.getElementsByClassName("button-prev")[0];
  var swiperBtnNext = document.getElementsByClassName("button-next")[0];
  swiperBtnNext.addEventListener("click", function () {
    swiper.slideNext();
  });
  swiperBtnPrev.addEventListener("click", function () {
    swiper.slidePrev();
  });
})();