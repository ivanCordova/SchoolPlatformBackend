const { Router } = require("express")
const { getAllMaterias, getMateria, createMateria, updateMateria, deleteMateria, getAllMaterias_alumno } = require("../Controllers/materiaController")

const router = Router()

router.get('/', getAllMaterias)
router.get('/:id', getMateria)
router.get('/alumno/:id', getAllMaterias_alumno)
router.post("/",createMateria),
router.put('/:id', updateMateria)
router.delete("/:id", deleteMateria)

module.exports = router