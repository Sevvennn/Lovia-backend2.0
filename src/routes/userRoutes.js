const { createlUser, deleteUser, getAllUsers, getUserById, updateUser, createUser } = require("../controllers/useContrroller.js") ;

const express = require("express");

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
