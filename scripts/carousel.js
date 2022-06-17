import Plyr from "plyr";

const playerIndexes = ["", "2", "3", "4"];

const players = playerIndexes.map(
  (playerIndex) => new Plyr(`#player${playerIndex}`)
);

const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  spaceBetween: 0,
  noSwipingClass: 'swiper-no-swiping',
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
      loop: true,
    },

    640: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },

    1024: {
      loop: true,
      slidesPerView: 2.5,
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
    const video = btn.previousElementSibling.previousElementSibling.firstChild;
    playerNodes.forEach((player, i) => {
      if (video.id !== player.id && !video.paused) {
        player.pause();
      } else if (video.id === player.id && video.paused) {
        swiper.sliderTo();
      }
      // Странная вещь четвертый ролик не запускается
      if (video.id === 'player4') {
        console.log('asdfsadfsadf', players[players.length - 1])
        console.log(players[players.length - 1].play())
        btn.classList.add('plyr__control--pressed');
        btn.ariaLabel = 'Pause';
        const mainWrapper = btn.parentElement;
        mainWrapper.classList.remove('plyr--paused');
        mainWrapper.classList.add('plyr--playing');
        mainWrapper.classList.add('plyr--hide-controls');
      }
    });
  });
});

players.forEach((player,i) => {
  player.on("click", function (e) {
    if (e.target.previousElementSibling.paused === false) {
      player.pause();
    }
  });
});
