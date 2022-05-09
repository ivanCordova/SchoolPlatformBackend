const { Router } = require("express")
const { getAllMaterias, getMateria, createMateria, updateMateria, deleteMateria } = require("../Controllers/materiaController")

const router = Router()

router.get('/', getAllMaterias)
router.get('/:id', getMateria)
router.post("/",createMateria),
router.put('/:id', updateMateria)
router.delete("/:id", deleteMateria)

module.exports = router