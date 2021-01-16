const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
  const { token } = req.headers
  if (!token) {
    return res.status(403).json({ authorized: false, error: 'Token is required.' })
  }
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) { return res.status(401).send({ authorized: false, error: 'Verification failed or token has expired.' }) }
    req.user = decoded
    next()
  })
}
