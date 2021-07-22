const express = require("express");
const router = express.Router();
const { APP_NAME } = process.env;

const UserController = require("../controllers/UserController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", verifyToken, UserController.getUser);
router.put("/", verifyToken, UserController.update);
router.post("/login", UserController.login);
router.post("/logout", verifyToken, UserController.logout);
router.post("/register", UserController.register);

module.exports = router;
