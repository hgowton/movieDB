const router = require("express").Router();
const movieRoutes = require("./movies");
const filmRoutes = require("./film");

// Book routes
router.use("/movies", movieRoutes);
router.use("/film", filmRoutes);

module.exports = router;
