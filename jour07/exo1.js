// 01 - File System

const fs = require("fs");

fs.readFile("./jour07/jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log(data.toString());
 });