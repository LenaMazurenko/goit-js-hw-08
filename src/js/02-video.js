import Player from '@vimeo/player';

require(['https://player.vimeo.com/api/player.js'], function (Player) {
  var iframe = document.querySelector('#vimeo-player');
  var player = new Player(iframe);

  player.on('play', function () {
    console.log('played the video!');
  });
});
nn;
