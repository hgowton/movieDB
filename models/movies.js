const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    id: {type: String, required: true, unique: true},
    releaseDate: Date,
    image: String, 
    description: String, 
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;