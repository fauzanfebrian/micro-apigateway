var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const RefreshTokenController = require("../controllers/RefreshTokenController");

router.post("/", RefreshTokenController.refreshToken);

module.exports = router;
