const express = require('express')
const { loginAuthAlumno } = require('../Controllers/authController')
const router = express.Router()


//TODO: Login !
router.post('/', loginAuthAlumno)

module.exports = router