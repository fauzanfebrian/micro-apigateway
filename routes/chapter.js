var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const ChapterController = require("../controllers/ChapterController");

router.get("/", ChapterController.getAll);
router.get("/:id", ChapterController.get);

router.put("/:id", ChapterController.update);
router.post("/", ChapterController.create);
router.delete("/:id", ChapterController.destroy);

module.exports = router;
