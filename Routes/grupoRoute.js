const { Router } = require("express")
const {grupoAlumnoGet, grupo_MaestroGet} = require("../Controllers/grupoController")

const router = Router()

router.get('/Alumnos', grupoAlumnoGet)
router.get('/Maestros',grupo_MaestroGet)


module.exports = router