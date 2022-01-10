// 03 - Validator

const prompt = require("prompt");

prompt.start();

function checkProfile() {
    prompt.get([
        {name: 'userEmail', description: "What's your email?"},
        {name: 'username', description: "What's your username?"},
        {name: 'password', description: "What's your password?"}
     ], function (err, res) {
         
        if (err) {
            console.log("Something went wrong", err);
        }

        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // regular email format
        const usernameFormat = /^[A-Za-z0-9-]*$/;
        // only contains letters, numbers and dashes
        const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;  
        // Minimum 6 characters, at least one letter, one number and one special character

        if (
            emailFormat.test(res.userEmail) &&
            usernameFormat.test(res.username) &&
            passwordFormat.test(res.password)
            ) {
                console.log("All good !");
            } else {
                console.log("error")
            }
    });
}

checkProfile();