
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEO_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    let seconds = data.seconds;
    localStorage.setItem(VIDEO_KEY, seconds);
}

  if (localStorage.getItem(VIDEO_KEY)) {
    player.setCurrentTime(localStorage.getItem(VIDEO_KEY))
}
