const express = require('express')
const { userLogin, saveAddress } = require('../controllers/userController')
const { verifyToken } = require('../middleware/verifyToken')
const router = express.Router()

router.post('/login', userLogin)
router.post('/save-address',verifyToken, saveAddress)

module.exports = router