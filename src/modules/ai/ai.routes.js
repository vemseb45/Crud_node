const express = require("express");
const router = express.Router();

const controller = require("./ai.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const validate = require("../../middlewares/validate.middleware");
const { askSchema } = require("./ai.schema");

router.post(
    "/ask",
    authMiddleware,
    validate(askSchema),
    controller.ask
);

module.exports = router;