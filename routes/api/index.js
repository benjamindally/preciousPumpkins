const router = require("express").Router();
const updateRoutes = require("./updates");

// Articleroutes
router.use("/updates", updateRoutes);

module.exports = router;
