const express = require('express')
const { patchJSON, generateThumbnail } = require('../controllers/featureController')
const { verifyToken } = require('../middleware/verifyToken')
const router = express.Router()

router.post('/create-thumbnail', verifyToken, generateThumbnail)
router.patch('/patch-object', verifyToken, patchJSON)

module.exports = router