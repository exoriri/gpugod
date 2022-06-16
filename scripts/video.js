import Plyr from 'plyr';

const playerIndexes = ['', '2', '3', '4', '5']

const players = playerIndexes.map(playerIndex => (new Plyr(`#player${playerIndex}`)));

players.forEach(player => {
  player.on('click', function(e) {
    if (e.target.previousElementSibling.paused === false) {
      player.pause();
    }
  })
})


const swiperPlayerBtn = document.querySelectorAll('.plyr__control--overlaid');
console.log('swiper', swiperPlayerBtn)
