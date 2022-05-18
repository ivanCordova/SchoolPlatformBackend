const { Router } = require("express")
const { getAllAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno, getAllAlumnosTareas, upload } = require("../Controllers/alumnoController")

const router = Router()
//  /:id
router.get('/', getAllAlumnos)
router.get('/:id', getAlumno)
router.post("/", upload, createAlumno),
router.put('/:id', updateAlumno)
router.delete("/:id", deleteAlumno)


module.exports = router