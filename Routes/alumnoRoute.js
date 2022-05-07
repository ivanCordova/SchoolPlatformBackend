const { Router } = require("express")
const { alumnosGet } = require("../Controllers/alumnoController")

const router = Router()

router.get('/', alumnosGet)

module.exports = router