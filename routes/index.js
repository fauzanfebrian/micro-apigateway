const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = {
  indexRouter: router,
  coursesRouter: require("./courses"),
  mediaRouter: require("./media"),
  ordersRouter: require("./orders"),
  usersRouter: require("./users"),
  refreshTokensRouter: require("./refreshTokens"),
  mentorsRouter: require("./mentors"),
  chapterRouter: require("./chapter"),
  lessonRouter: require("./lesson"),
  imageCourseRouter: require("./imageCourse"),
  myCourseRouter: require("./myCourse"),
  reviewRouter: require("./review"),
  webhookRouter: require("./webhook"),
};
