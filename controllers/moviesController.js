const db = require("../models");
const axios = require("axios");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
      const { query: params } = req;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${params.search}&key=${process.env.REACT_APP_API_KEY}`
    console.log("movie search controller URL: ", url)
    axios.get(url)
    .then(results => 
        console.log(results)
    //     results.data.items.map(
    //   result =>
    //   ({
    //     id: result.id,
    //     title: result.volumeInfo.title,
    //     authors: result.volumeInfo.authors,
    //     image: result.volumeInfo.imageLinks ? result.volumeInfo.imageLinks.thumbnail : "http://i.imgur.com/J5LVHEL.jpg",
    //     synopsis: result.volumeInfo.description,
    //     link: result.volumeInfo.infoLink
    //   })
    // )
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
