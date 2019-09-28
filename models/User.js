const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "A user must have a name"]
  },
  email: {
    type: String,
    required: [true, "A user must have a email"]
  },
  password: {
    type: String,
    required: [true, "A user must have a password"]
  },
  userType: {
    type: String,
    required: [true, "A user must have a user type"]
  },
  department: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  yearOfJoining: Number,
  accessToken: String
});

userSchema.statics = {
  authenticateUser: async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) throw new Error()
    const isMatched = bcrypt.compare(password, user.password)
    if (!isMatched) throw new Error()
    return user
  }
}

userSchema.methods = {
  toJSON: function () {
    const user = this.toObject()
    delete user.__v
    delete user.accessToken
    delete user.password
  },
  generateToken: async function () {
    const accessToken = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return accessToken
  }
}

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
    await this.save()
  }
  next()
})

const User = mongoose.model("user", userSchema);

module.exports = User;