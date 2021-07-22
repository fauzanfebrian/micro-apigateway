var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const WebhookController = require("../controllers/WebhookController");

router.post("/", WebhookController.create);

module.exports = router;
