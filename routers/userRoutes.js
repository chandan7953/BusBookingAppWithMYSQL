const express = require("express");
const router = express.Router();
const { addUser, getAllUsers } = require("../controllers/userController");

router.post("/users", addUser);
router.get("/users", getAllUsers);

module.exports = router;
