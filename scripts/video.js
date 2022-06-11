import Plyr from 'plyr';

const playerIndexes = ['', '2', '3', '4', '5']

const players = playerIndexes.map(playerIndex => {
  return new Plyr(`#player${playerIndex}`)
});