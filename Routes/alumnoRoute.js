const { Router } = require("express")
const { getAllAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno, getAllAlumnosTareas } = require("../Controllers/alumnoController")

const router = Router()
//  /:id
router.get('/', getAllAlumnos)
router.get('/:id', getAlumno)
router.post("/",createAlumno),
router.put('/:id', updateAlumno)
router.delete("/:id", deleteAlumno)


module.exports = router