const { Router } = require("express")
const { check } = require('express-validator')
const {loginUser, createUser, updateUser, deleteUser} = require('../controllers/userController')
const router = Router();

// GET /api/user/
router.get("/", loginUser)

// POST /api/user
router.post("/", [
  check('name', 'Name is required').not().isEmpty(),
  check('email', 'Email is required').not().isEmpty(),
  check('email', 'Email is invalid').isEmail(),
  check('password', 'Password is required').not().isEmpty(),
  check('password', 'Password length must be minimum 8 characters').isLength({ min: 8 }),
  check('userType', 'User type is required').not().isEmpty()
], createUser);

router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
