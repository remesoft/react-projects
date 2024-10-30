const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user_controller");

router.get("/", getUsers);
router.post("/", createUsers);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

// router.post("/", (req, res) => {});

// // Read all

// // Read one
// router.get("/:id", (req, res) => {});

// // Update
// router.put("/:id", (req, res) => {});

// // Delete
// router.delete("/:id", (req, res) => {});

module.exports = router;
