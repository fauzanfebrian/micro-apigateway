var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const MediaController = require("../controllers/MediaController");

router.get("/", MediaController.getAll);
router.post("/", MediaController.create);
router.delete("/:id", MediaController.destroy);

module.exports = router;
