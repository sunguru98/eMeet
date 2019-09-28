const { Router } = require("express");
const {
  getRegister,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");
const router = Router();

router.get("/", getRegister);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
