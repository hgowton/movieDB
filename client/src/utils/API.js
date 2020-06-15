import axios from 'axios';
require('dotenv').config();

export default{
    movieOptions: function() {
        console.log("utils api")
        return axios.get("/api/movies");
    }, 
    filmSearch: function(filmId) {
        console.log("api", filmId)
        return axios.get("/api/film", {
            params: {filmId: filmId}
        });
    }
}