var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const MyCourseController = require("../controllers/MyCourseController");

router.post("/", MyCourseController.create);
router.get("/", MyCourseController.getAll);

module.exports = router;
