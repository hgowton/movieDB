const router = require("express").Router();
const moviesRoutes = require("./movies");
const movieRoutes = require("./movie");
const filmRoutes = require("./film");

// Book routes
router.use("/movies", moviesRoutes);
router.use("/movie", movieRoutes);
router.use("/film", filmRoutes);

module.exports = router;
