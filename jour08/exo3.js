// 03 - Pokemon

const axios = require("axios");

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(function (res) {
        console.log({id: res.data.id, name: res.data.name});
        });
}

let n = Math.floor(Math.random() * ((898 - 1) + 1));

catchPokemon(n);