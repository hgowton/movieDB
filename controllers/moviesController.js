const db = require("../models");
const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    console.log("movie search controller URL: ", url)
    axios.get(url)
    .then(results => results.data.results.map(
          result => 
          ({
            id: result.id, 
            release: result.release_date,
            title: result.title,
            poster_path: result.poster_path,
            backdrop_path: result.backdrop_path,
            overview: result.overview
          })
        )
        )
    .then(movies => res.json(movies))
    .catch(err => console.error(err))
  },
  findById: function(req, res) {
    db.Movie
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      console.log("inside create")
    db.Movie
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Movie
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Movie
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
