
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '1 January 2022';

const countDown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = timeFormat(days);
    hoursEl.innerHTML = timeFormat(hours);
    minutesEl.innerHTML = timeFormat(minutes);
    secondsEl.innerHTML = timeFormat(seconds);
}

const timeFormat = (time) => time < 10 ? `0${time}` : time;

countDown();

setInterval(countDown, 1000);
