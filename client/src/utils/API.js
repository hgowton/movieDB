import axios from 'axios';
require('dotenv').config();

export default{
    movieOptions: function() {
        return axios.get("/api/movies");
    }, 
    filmSearch: function(filmId) {
        return axios.get("/api/film", {
            params: {filmId: filmId}
        });
    }
}