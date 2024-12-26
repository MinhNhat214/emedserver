const express = require("express");
const { login } = require("../controllers/LoginController");

const router = express.Router();

// Route để lấy danh sách Users kèm Role
router.post("/login", login);

module.exports = router;

