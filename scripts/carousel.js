const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
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