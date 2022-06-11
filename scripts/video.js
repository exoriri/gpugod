import videojs from 'video.js';

import 'video.js/dist/video-js.min.css';

var player = videojs('#video-js', {}, function onPlayerReady() {
    videojs.log('Your player is ready!');
  
    // In this context, `this` is the player that was created by Video.js.
    this.play();
  
    // How about an event listener?
    this.on('ended', function() {
      videojs.log('Awww...over so soon?!');
    });
  });