// 01 - Format

// let str = new Date("1994-09-21");
// console.log(`${str.getDate()}/${str.getMonth() + 1}/${str.getFullYear()}`);

function formatDate(str) {
    let birthday = new Date(str);
    console.log(`${birthday.getDate()}/${birthday.getMonth() + 1}/${birthday.getFullYear()}`);
}

formatDate("1994-09-21");