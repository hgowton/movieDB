import axios from 'axios';
require('dotenv').config();

export default{
    movieOptions: function() {
        console.log("utils api")
        return axios.get("/api/movies");
    }
}