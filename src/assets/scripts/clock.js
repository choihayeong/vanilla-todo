const vanillaToday = document.querySelector('#today');
const clock = document.querySelector('#clock');

// setInterval & setTimeout
function getClock() {
    const today = new Date();

    let currentObj = {
        hours : String(today.getHours()).padStart(2,"0"),
        minutes : String(today.getMinutes()).padStart(2,"0"),
        seconds : String(today.getSeconds()).padStart(2,"0")
    }

    clock.innerText = `${currentObj.hours}:${currentObj.minutes}:${currentObj.seconds}`;
}

function getDate() {
    const today = new Date();

    const todayYear = today.getFullYear();
    const todayMonthIdx = today.getMonth();
    const todayDate = today.getDate();
    const todayWeekDayIdx = today.getDay();

    const monthObj = {
        0 : 'Jan',
        1 : 'Feb',
        2 : 'Mar',
        3 : 'Apr',
        4 : 'May',
        5 : 'Jun',
        6 : 'Jul',
        7 : 'Aug',
        8 : 'Sep',
        9 : 'Oct',
        10 : 'Nov',
        11 : 'Dec'
    };

    const weekDayObj = {
        0 : 'Sun',
        1 : 'Mon',
        2 : 'Tue',
        3 : 'Wed',
        4 : 'Thur',
        5 : 'Fri',
        6 : 'Sat',
    };

    const todayMonth = monthObj[todayMonthIdx];

    const todayWeekDay = weekDayObj[todayWeekDayIdx];

    vanillaToday.innerText = `${todayMonth} ${todayDate} (${todayWeekDay}) ${todayYear}`
}

getClock();
setInterval(getClock ,1000);

getDate();

export const testFunc = (maxNum) => console.log(Math.floor(Math.random() * maxNum));

// padStart()로 대체
/* function twoDigits(ele) {
    if(ele < 10) {
        ele = `0${ele}`;
    } else {
        ele = `${ele}`;
    }

    return ele;
} */