import axios from "axios";

//https://www.potterapi.com/v1/characters
// $2a$10$C0VHLQtCHSPD2Yopqj2Nee0FeLO8zp/4KuGZc.Yf./kJFqfB.F1AO
// https://superheroapi.com/api/access-token/character-id/biography
const BASEURL = "https://www.potterapi.com/v1/characters?key=";
const APIKEY = "$2a$10$C0VHLQtCHSPD2Yopqj2Nee0FeLO8zp/4KuGZc.Yf./kJFqfB.F1AO";
const character = "characters"

export default {
    getCharacters: function () {
        return axios.get(BASEURL + APIKEY)
    }

};
