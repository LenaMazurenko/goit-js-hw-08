import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  // id: 19231868,
  width: 640,
});

var onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
};

player.on('timeupdate', onPlay);

const savedSettings = localStorage.getItem('videoplayer-current-time');
const parsedSettings = JSON.parse(savedSettings);
const stopTime = parsedSettings.seconds;

player
  .setCurrentTime(stopTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
