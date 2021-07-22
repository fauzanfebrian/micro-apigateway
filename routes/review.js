var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const ReviewController = require("../controllers/ReviewController");

router.put("/:id", ReviewController.update);
router.post("/", ReviewController.create);
router.delete("/:id", ReviewController.destroy);

module.exports = router;
