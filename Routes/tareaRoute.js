const { Router } = require("express")
const { getAllTareas, getTarea, createTarea, updateTarea, deleteTarea } = require("../Controllers/tareaController")

const router = Router()


router.get("/",getAllTareas)
router.get("/:id",getTarea)
router.post("/",createTarea)
router.put('/:id', updateTarea)
router.delete("/:id", deleteTarea)
/* router.get('/', getAllAlumnos)
router.get('/:id', getAlumno)
router.post("/",createAlumno),
router.put('/:id', updateAlumno)
router.delete("/:id", deleteAlumno) */

module.exports = router