const secondHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

const dateText = document.getElementById('date');
const digitalClock = document.getElementById('digitalClock')

function setTime(){

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360)+90;
    minsHand.style.transform=`rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours/60)*360)+90;
    hourHand.style.transform=`rotate(${hoursDegrees}deg)`

    const day = now.getDate();
    const month = now.getMonth()+1;
    const year = now.getFullYear();

    dateText.innerHTML = `${day}/${month}/${year}`;
    digitalClock.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(setTime,1000);
setTime;
