const { Router } = require("express")
const { getAllEntregas } = require("../Controllers/entregaController")

const router = Router()


router.get("/",getAllEntregas)
/* router.get('/', getAllAlumnos)
router.get('/:id', getAlumno)
router.post("/",createAlumno),
router.put('/:id', updateAlumno)
router.delete("/:id", deleteAlumno) */

module.exports = router