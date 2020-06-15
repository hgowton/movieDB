const router = require("express").Router();
const filmController = require("../../controllers/filmController");

// Matches with "/api/film"
router.route("/")
  .get(filmController.findAll)
  .post(filmController.create);

// Matches with "/api/film/:id"
router
  .route("/:id")
  .get(filmController.findById)
  .put(filmController.update)
  .delete(filmController.remove);

module.exports = router;