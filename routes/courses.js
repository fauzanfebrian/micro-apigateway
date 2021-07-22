var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const CourseController = require("../controllers/CourseController");
const { verifyToken, permission } = require("../middlewares");

router.get("/", CourseController.getAll);
router.get("/:id", CourseController.get);

router.put("/:id", verifyToken, permission("admin"), CourseController.update);
router.post("/", verifyToken, permission("admin"), CourseController.create);
router.delete(
  "/:id",
  verifyToken,
  permission("admin"),
  CourseController.destroy
);

module.exports = router;
