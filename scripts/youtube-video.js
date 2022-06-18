/*We use a smooth scrollbar (https://idiotwu.github.io/smooth-scrollbar/). 
  And iframe cannot be captured  from an outer document. https://github.com/idiotWu/smooth-scrollbar/issues/196#issuecomment-491763849  
  That is why we use this logic on youtube videos.
*/

import Plyr from 'plyr';

const player = new Plyr('#player-youtube-darya');

const invisibleClickable = document.querySelector('.invisible-clickable');
const youtubeIframe = document.querySelector('.greeting__video');
