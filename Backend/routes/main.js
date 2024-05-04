const express = require("express");
const router = express.Router();
const controller = require("../controllers/emailSend");

router.post("/send-email", controller.handleFormSubmit);

module.exports = router;
