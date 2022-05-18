const express = require('express')
const { upload, uploadFile } = require('../Controllers/uploadController')
const router = express.Router()


//TODO: Login !
router.post('/', upload ,uploadFile)

module.exports = router