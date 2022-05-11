const { Router } = require("express")
const { getAllMateria_Maestro, getMateria_Maestro, createMateria_Maestro, updateMateria_Maestro, deleteMateria_Maestro } = require("../Controllers/materia_maestroController")

const router = Router()

router.get('/', getAllMateria_Maestro)
router.get('/:id', getMateria_Maestro)
router.post("/",createMateria_Maestro),
router.put('/:id', updateMateria_Maestro)
router.delete("/:id", deleteMateria_Maestro)

module.exports = router