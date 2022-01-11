// 03 - Pokemon

const axios = require("axios");

function catchPokemon(id) {
    axios.get(`https://pokeapi.co/api/v2/ability/${id}/`).then(function (res) {
        console.log({id: res.data.id, name: res.data.name});
        });
}

catchPokemon(2);