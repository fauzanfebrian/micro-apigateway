var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const MentorController = require("../controllers/MentorController");

router.get("/", MentorController.getAll);
router.get("/:id", MentorController.get);
router.put("/:id", MentorController.update);
router.post("/", MentorController.create);
router.delete("/:id", MentorController.destroy);

module.exports = router;
