const express = require("express");
const router = express.Router();

const controller = require("./ai.controller");
const authMiddleware = require("../../middlewares/auth.middleware");

// protegemos con login
router.post("/ask", authMiddleware, controller.ask);

module.exports = router;
