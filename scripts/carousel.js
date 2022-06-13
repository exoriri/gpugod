const swiper = new Swiper(".mySwiper", {
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
      },
      
      1800: {
        slidesPerView: 3,
      },

      2500: {
        slidesPerView: 'auto'
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