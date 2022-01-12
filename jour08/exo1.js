// 01 - Countries

const axios = require("axios");

// let countriesNames = [];

function getCountries() {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
        // const countries = res.data.filter(function (country) {
        //     return countriesNames.push(country.name.common);
        let countriesNames = res.data.map((country) => {
            return country.name.common;
        })
        console.log(countriesNames.join(" - "));
    });
}

getCountries();