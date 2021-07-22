var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const LessonController = require("../controllers/LessonController");

router.get("/", LessonController.getAll);
router.get("/:id", LessonController.get);

router.put("/:id", LessonController.update);
router.post("/", LessonController.create);
router.delete("/:id", LessonController.destroy);

module.exports = router;
