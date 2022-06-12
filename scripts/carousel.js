const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      // when window width is >= 480px
      // when window width is >= 640px
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
      slideShadows : true
    }
  });
  
  const swiperBtnPrev = document.getElementsByClassName('button-prev')[0];
  const swiperBtnNext = document.getElementsByClassName('button-next')[0];
  
  swiperBtnNext.addEventListener('click', function() {
    swiper.slideNext();
  });
  
  swiperBtnPrev.addEventListener('click', function() {
    swiper.slidePrev();
  });