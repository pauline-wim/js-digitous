// 01 - Countries

let countriesNames = [];

const axios = require("axios");

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then(function (res) {
        const countries = res.data;
        const names = countries.filter(function (country) {
            return countriesNames.push(country.name.common);
        })
        // console.log(res.data[0].name.common);
        console.log(countriesNames.join(" - "));
    });
}

getCountries();