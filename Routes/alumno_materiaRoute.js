const { Router } = require("express")
const { getAllAlumno_Materia, getAlumno_Materia, createAlumno_Materia, updateAlumno_Materia, deleteAlumno_Materia } = require("../Controllers/alumno_materiaController")

const router = Router()

router.get('/', getAllAlumno_Materia)
router.get('/:id', getAlumno_Materia)
router.post("/",createAlumno_Materia),
router.put('/:id', updateAlumno_Materia)
router.delete("/:id", deleteAlumno_Materia)

module.exports = router