const daysId = document.getElementById('days');
const hoursId = document.getElementById('hours');
const minutesId = document.getElementById('minutes');
const secondsId = document.getElementById('seconds');

function getThursday(){
    var today = new Date();
    var nextThursday = new Date()

    nextThursday.setDate(today.getDate() + (6 - 1 -today.getDay()+0) % 7 || 7);
    nextThursday.setHours(8,0,0,0)
    return nextThursday
}

function countdown(){
    const newChapterDate = new Date(getThursday());
    const currentDate = new Date();
    const refer = (newChapterDate-currentDate)/1000;

    const days = Math.floor(refer / 3600 / 24);
    const hours = Math.floor((refer/3600)%24);
    const minutes = Math.floor(refer/60)%60;
    const seconds = Math.floor(refer%60);

    daysId.innerHTML = days;
    hoursId.innerHTML = hours;
    minutesId.innerHTML = minutes;
    secondsId.innerHTML = seconds;

    if (days == 0 && hours == 0 && minutes == 0 && seconds == 0 ){
        sendEmail();
    }


}

setInterval(countdown,1000)
getThursday();