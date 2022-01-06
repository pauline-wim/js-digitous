// 02 - Age

function calculateAge(dateOfBirth) {
    let today = Date.now();
    let thisYear = new Date(today);
    let birthday = new Date(dateOfBirth);

    let age = thisYear.getFullYear() - birthday.getFullYear();

    console.log(`If you were born in ${birthday.getFullYear()}. You're gonna turn ${age} in ${thisYear.getFullYear()}.`);
}

calculateAge("1996");
calculateAge("1994");
calculateAge("1992");