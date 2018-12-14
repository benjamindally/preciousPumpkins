const router = require("express").Router();
const postRoutes = require("./new-post");

// Articleroutes
router.use("/new-post", postRoutes);

module.exports = router;
