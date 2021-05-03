'use strict';

const clock = document.querySelector('.timer');
const party = document.querySelector('.party');
const video = document.querySelector('video');


let date = new Date(2000,1,1,12,0,0)

function showTime() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  let duration = 'am';
  let end = video.ended;
  
  if(hours == 0) {
    hours = 12;
  }

  if(hours > 12) {
    hours = hours - 12;
    duration = 'pm'
  }

  if(hours == 12 && minutes == 0 && seconds == 0) {
    party.setAttribute('id','awesome');
    display(true);
    video.load();
  }

  if(end) {
    party.removeAttribute('id');
    display(false);
  }

  hours = hours < 10 ? '0' + hours: hours;
  minutes = minutes < 10 ? '0' + minutes: minutes;
  seconds = seconds < 10 ? '0' + seconds: seconds;

  clock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + duration;

}

let timer = setInterval(showTime,1000);

showTime();


function display(value = false) {
  video.controls = value;
  video.autoplay = value;
}