var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const imageCourseController = require("../controllers/imageCourseController");

router.post("/", imageCourseController.create);
router.delete("/:id", imageCourseController.destroy);

module.exports = router;
