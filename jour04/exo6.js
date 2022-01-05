// 06 - Time

function format(num) {
    let hours = Math.floor(num / 3600);
        minutes = Math.floor((num % 3600) / 60);
        seconds = Math.floor(num % 60);

    console.log(hours + ":" + minutes + ":" + seconds);
}

format(3700);