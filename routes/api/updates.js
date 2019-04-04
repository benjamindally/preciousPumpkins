const router = require("express").Router();
const updateController = require("../../controller/updateController");

router
  .route("/")
  .get(updateController.findAll)
  .post(updateController.create);

router.route("/:id").delete(updateController.deletePost);
module.exports = router;
