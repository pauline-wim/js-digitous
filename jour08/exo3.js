// 03 - Pokemon

const axios = require("axios");

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(function (res) {
        console.log(`id: ${res.data.id} \nname: ${res.data.name}`);
        }).catch((err) => {
            console.log("Something went wrong.");
        });
}

let n = Math.floor(Math.random() * ((898 - 1) + 1));

catchPokemon(n);