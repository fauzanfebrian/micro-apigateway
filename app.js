require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const {
  usersRouter,
  indexRouter,
  mediaRouter,
  ordersRouter,
  coursesRouter,
  refreshTokensRouter,
  mentorsRouter,
  chapterRouter,
  lessonRouter,
  imageCourseRouter,
  myCourseRouter,
  reviewRouter,
  webhookRouter,
} = require("./routes");
const { verifyToken, permission } = require("./middlewares");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/media", verifyToken, permission("admin", "student"), mediaRouter);
app.use("/orders", verifyToken, permission("admin", "student"), ordersRouter);
app.use("/courses", verifyToken, permission("admin"), coursesRouter);
app.use("/lessons", verifyToken, permission("admin"), lessonRouter);
app.use("/mentors", verifyToken, permission("admin"), mentorsRouter);
app.use("/chapters", verifyToken, permission("admin"), chapterRouter);
app.use("/refresh-tokens", refreshTokensRouter);
app.use("/image-courses", verifyToken, permission("admin"), imageCourseRouter);
app.use(
  "/my-courses",
  verifyToken,
  permission("admin", "student"),
  myCourseRouter
);
app.use("/reviews", verifyToken, permission("admin", "student"), reviewRouter);
app.use("/webhook", webhookRouter);

module.exports = app;
