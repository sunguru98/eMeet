const jwt = require('jsonwebtoken')
const User = require('../models/User')

const authenticate = async (req, res, next) => {
  const accessToken = req.headers('Authorization')
  try {
    if (!accessToken) throw new Error()
    accessToken = accessToken.replace('Bearer ', '')
    const payload = await jwt.verify(accessToken, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: payload._id, accessToken })
    if (!user) throw new Error()]
    req.user = user
    req.accessToken = accessToken
    next()
  } catch (err) {
    res.status(401).send({ statusCode: 401, message: 'Invalid Authentication' })
  }
}

module.exports = authenticate