import axios from 'axios';
require('dotenv').config();

export default{
    movieOptions: function() {
        return axios.get("/api/movies");
    }, 
    movieSearch: function(query) {
        console.log("movie search client API")
        return axios.get("/api/movie", {
            params: {query: query}
        })
    },
    filmSearch: function(filmId) {
        return axios.get("/api/film", {
            params: {filmId: filmId}
        });
    }
}