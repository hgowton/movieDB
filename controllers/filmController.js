const db = require("../models");
const axios = require("axios");

module.exports = {
  findAll: function(req, res) {
      const { query: params } = req;
      console.log("search params: " , params)
    let url = `https://api.themoviedb.org/3/movie/${params.filmId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    console.log("film controller URL: ", url)
    axios.get(url)
    .then(results => 
          ({
            id: results.data.id, 
            release: results.data.release_date,
            title: results.data.title,
            poster_path: results.data.poster_path,
            backdrop_path: results.data.backdrop_path,
            overview: results.data.overview,
            link: results.data.homepage,
          })
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
