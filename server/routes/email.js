const express = require("express");
const router = express.Router({ mergeParams: true });

const { sendEmail } = require("../handlers/email");

// prefix - /api/email
router.route("/").post(sendEmail);

module.exports = router;
