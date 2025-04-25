const {
  createlUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
  createUser,
} = require("../controllers/useController.js");

const express = require("express");
const validateUser = require("../middlewares/inputValidator.js");

const router = express.Router();

router.post("/user", validateUser, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
