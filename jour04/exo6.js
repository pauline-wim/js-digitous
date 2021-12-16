// 06 - Time

let i = 0;
const time = {
    hours: 0,
    minutes: 0,
    secondes: 0,
}

function format(num) {
    for (let i = 0; i <= num; i++) {
        if (i === 60) {
            time.minutes += 1;
            if (time.minutes === 60) {
                time.hours += 1;
            }
        }
    }
}

format(3700);
console.log(time.hours, ":", time.minutes, ":", time.secondes);