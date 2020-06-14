const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();


//Define middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Serve up static assets for heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Add API and view routes
app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/moviedb";
mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

// Start the API server
app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
  });
  