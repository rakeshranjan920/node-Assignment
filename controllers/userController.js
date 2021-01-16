const jwt = require('jsonwebtoken')
const User = require('../model/userModel');
exports.userLogin = (req, res) => {
  const username = req.body.username.toLowerCase()
  const jwtSecret = 'secret'
  const token = jwt.sign({ username: username }, jwtSecret,
    {expiresIn: 21600 })
  req.headers['token'] = token
  res.status(200).send({ user: username, authorized: true, token: token })
}

exports.saveAddress = async (req, res, next) => {
  const username = req.user.username
  const address = req.body.address
  const user = await User.create({
    username, address
  });
  res.status(200).json({ succes: true, user})
}