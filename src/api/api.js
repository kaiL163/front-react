import axios from "axios";

const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

export const characters = {
    getAllCharacters(params) {
        return instance.get('/character', {params: params})
    },
    getCharacterById(id) {
        return instance.get('/character/' + id)
    }
}


export const location = {
    getLocationById(id) {
        return instance.get('/location/' + id)
    },
}