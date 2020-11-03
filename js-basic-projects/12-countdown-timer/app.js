const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveWay = document.querySelector(".giveaway");

const futureDate = new Date(2020, 9, 30, 11, 36, 0);

// //Dynamic Date
// const tempDate = new Date();
// const tempYear = tempDate.getFullYear();
// const tempMonth = tempDate.getMonth();
// const tempDay = tempDate.getDate();

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 03, 0);

const year = futureDate.getFullYear();
const date = futureDate.getDate();
const hour = futureDate.getHours();
const munite = futureDate.getMinutes();
const second = futureDate.getSeconds();
let month1 = futureDate.getMonth();

const weekName = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const futureDayMilisecond = futureDate.getTime();

giveWay.textContent = `giveaway ends on ${weekName}, ${date} ${month} ${year}, ${hour}:${munite}pm`;

function remainingTime() {
  const deadlineItems = document.querySelectorAll(".deadline-format h4");
  const deadline = document.querySelector(".deadline");

  const today = new Date().getTime();

  const deadlineTime = futureDayMilisecond - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  const runningDate = Math.floor(deadlineTime / oneDay);
  const runningHour = Math.floor((deadlineTime % oneDay) / oneHour);
  const runnigMinute = Math.floor((deadlineTime % oneHour) / oneMinute);
  const runningSecond = Math.floor((deadlineTime % oneMinute) / oneSecond);

  const runningAllValue = [
    runningDate,
    runningHour,
    runnigMinute,
    runningSecond,
  ];

  deadlineItems.forEach(function (item, index) {
    item.innerHTML = runningAllValue[index];
    if (runningAllValue[index] < 10) {
      item.innerHTML = `0${runningAllValue[index]}`;
    }
  });
  if (deadlineTime < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `Time has been ended!`;
  }
}

const countDown = setInterval(remainingTime, 1000);
remainingTime();
