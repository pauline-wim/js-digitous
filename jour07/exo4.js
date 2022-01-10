// 04 - Filter Numbers

const tab = [1, "toto", 34, "javascript", 8];

const numbers = tab.filter(function (num) {
    if (isNaN(num) === false) {
        return num;
    }
});

console.log(numbers);