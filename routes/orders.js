var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;

const OrderPaymentController = require("../controllers/OrderPaymentController");

router.get("/", OrderPaymentController.getAll);

module.exports = router;
