const router = require("express").Router();
const {
  getAllStateData,
  getStateData,
} = require("../../controllers/stateController");
router.route("/").get(getAllStateData);
router.route("/:stateId").get(getStateData);
module.exports = router;
