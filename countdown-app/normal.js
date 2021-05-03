"use strict";

const dateOnFuture = new Date(2021,9,5,14,30,0);

const details = document.querySelector('.phone-details h2');

const times = document.querySelectorAll('.time p');


const timer = document.querySelector('.timer');

const allMonths = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const allDaysOnWeek = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]


const years = dateOnFuture.getFullYear();
const months = dateOnFuture.getMonth();
const date = dateOnFuture.getDate();
const hours = dateOnFuture.getHours();
const minutes = dateOnFuture.getMinutes();
const weekdays = dateOnFuture.getDay();
const seconds = dateOnFuture.getSeconds();


details.innerHTML += `${allDaysOnWeek[weekdays]} ${date} ${allMonths[months]} ${years} ${hours}:${minutes} am`


function untilExpired() {
  const todaysDate = new Date();
  const difference = dateOnFuture - todaysDate;
  const oneWholeDay = 24 * 60 * 60 * 1000;
  const oneWholeHour = 60 * 60 * 1000;
  const oneWholeMinute = 60 * 1000;
  let day = Math.floor(difference / oneWholeDay);
  let hour = Math.floor((difference % oneWholeDay) / oneWholeHour);
  let minute = Math.floor((difference % oneWholeHour) / oneWholeMinute);
  let second = Math.floor((difference % oneWholeMinute) / 1000);

  const arrayOfValues = [day,hour,minute,second];

  function moreThan10(item) {
    if(item < 10) {
      return item = `0${item}`;
    } else {
      return item;
    }
  }

  times.forEach((value,index) => {
    value.innerHTML = moreThan10(arrayOfValues[index]);
  })
  if(difference < 0) {
    clearInterval(countDown);
    const h2 = document.createElement('h2');
    h2.textContent = 'sorry the discount is over';
    h2.style.color = 'red';
    h2.style.fontSize = '2.5rem';
    timer.replaceWith(h2);
  }
}

let countDown = setInterval(untilExpired,1000);

untilExpired();