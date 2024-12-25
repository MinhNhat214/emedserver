const express = require("express");
const {
  getAllUserWithRole,
  getAllUsers,
  getAllRoles,
} = require("../controllers/UserController");

const router = express.Router();

// Route để lấy danh sách Users kèm Role
router.get("/users-with-roles", getAllUsers);
router.get("/get-all-roles", getAllRoles);
router.get("/get-all-user-with-role", getAllRoles);

module.exports = router;
