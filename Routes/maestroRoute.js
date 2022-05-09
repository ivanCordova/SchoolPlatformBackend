const { Router } = require("express")
const {getAllMaestros} = require("../Controllers/maestroController")


const router = Router()
//  /:id
router.get('/', getAllMaestros)

module.exports = router