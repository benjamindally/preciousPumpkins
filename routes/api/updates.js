const router = require("express").Router();
const updateController = require("../../controller/updateController");

router
  .route("/")
  .get(updateController.findAll)
  .post(updateController.create);

router.route("/pin/:id").put(updateController.toggleSticky);
router.route("/unpin/:id").put(updateController.removeSticky);

router.route("/:id").delete(updateController.deleteUpdate);
module.exports = router;
