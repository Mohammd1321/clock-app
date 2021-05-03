'use strict';

const clock = document.querySelector('.middle');

function showTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let duration = 'am';
  
  if(hours == 0) {
    hours = 12;
  }


  if(hours > 12) {
    hours = hours - 12;
    duration = 'pm'
  }

  hours = hours < 10 ? '0' + hours: hours;
  minutes = minutes < 10 ? '0' + minutes: minutes;
  seconds = seconds < 10 ? '0' + seconds: seconds;

  clock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + duration;

}

let timer = setInterval(showTime,1000);

showTime();



