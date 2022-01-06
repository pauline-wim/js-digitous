// 03 - Validator

const prompt = require("prompt");

prompt.start();

function checkProfile() {
    prompt.get([{name: 'userEmail', description: "What's your email?"},
        {name: 'username', description: "What's your username?"},
        {name: 'password', description: "What's your password?"}
], function (err, res) {
        let email = res.userEmail;
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailFormat.test(email) )
        // &&
        //     res.username &&
        //     res.password) 
        {
                console.log("All good !");
            } else {
                console.log("error")
            }
      });
}

checkProfile();