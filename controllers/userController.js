const User = require("./../models/User");
const {validationResult} = require('express-validator')

module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body
    try {
      const user = await User.authenticateUser(email, password)
      if (!user) return res.status(401).send({ statusCode: 401, message: 'Invalid credentials' })
      const accessToken = await user.generateToken()
      res.send({ statusCode: 200, user, accessToken: `Bearer ${accessToken}`, expiresIn: '24h' })
    } catch (err) {
      console.error(err)
      res.status(500).send({ statusCode: 500, message: 'Server Error' })
    }
  },
  createUser: async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).send({ statusCode: 400, message: errors.array()})
    try {
     let user = await User.findOne({ email: req.body.email })
     if (user) return res.status(400).send({ stausCode: 400, message: 'Email already exists' })
     user = new User(req.body)
     await user.save()
     const accessToken = await user.generateToken()
      res.status(201).send({
        statusCode: 201,
        user,
        accessToken: `Bearer ${accessToken}`,
        expiresIn: '24h'
      });
    } catch (err) {
      res.status(500).send({ statusCode: 500, message: err.message })
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.status(200).json({
        status: "success",
        data: {
          user: updatedUser
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
        message: "user record deleted"
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err
      });
    }
  }
};
