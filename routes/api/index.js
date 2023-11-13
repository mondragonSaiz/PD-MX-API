const router = require("express").Router();
const stateRoutes = require("./stateRoutes");

router.use("/state", stateRoutes);

module.exports = router;
