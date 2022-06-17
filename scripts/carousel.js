import Plyr from 'plyr';

const playerIndexes = ["", "2", "3", "4", "5"];

const players = playerIndexes.map(
  (playerIndex) => new Plyr(`#player${playerIndex}`)
);

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    640: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },

    2500: {
      slidesPerView: "auto",
    },
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

const swiperBtnPrev = document.getElementsByClassName("button-prev")[0];
const swiperBtnNext = document.getElementsByClassName("button-next")[0];

swiperBtnNext.addEventListener("click", function () {
  swiper.slideNext();
});

swiperBtnPrev.addEventListener("click", function () {
  swiper.slidePrev();
});

const playerNodes = document.querySelectorAll(
  "#player,#player2,#player3,#player4"
);
const swiperPlayerBtns = document.querySelectorAll(".plyr__control--overlaid");

swiperPlayerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const video =
        btn.previousElementSibling.previousElementSibling.firstChild;
    playerNodes.forEach((player, i) => {
      
        console.log(video)
      console.log(video.id !== player.id);
      if (video.id !== player.id && !video.paused) {
        player.pause();
      }
    });
  });
});

players.forEach(player => {
  player.on('click', function(e) {
    if (e.target.previousElementSibling.paused === false) {
      player.pause();
    }
  })
})
