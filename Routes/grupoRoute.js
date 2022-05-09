const { Router } = require("express")
const {getAllGrupos} = require("../Controllers/grupoController")

const router = Router()

router.get('/', getAllGrupos)


module.exports = router