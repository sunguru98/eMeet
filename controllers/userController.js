const UserCollection = require("./../models/User");

module.exports = {
  getRegister: async (req, res) => {
    try {
      const users = await UserCollection.find();
      res.status(200).json({
        status: "success",
        data: {
          users
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err
      });
    }
  },
  createUser: async (req, res) => {
    try {
      const newUser = await UserCollection.create(req.body);
      res.status(200).json({
        status: "success",
        data: {
          user: newUser
        }
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await UserCollection.findByIdAndUpdate(
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
      await UserCollection.findByIdAndDelete(req.params.id);
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
