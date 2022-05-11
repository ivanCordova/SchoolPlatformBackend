const { Router } = require("express")
const { getAllGrupo_Maestro, getGrupo_Maestro, createGrupo_Maestro, updateGrupo_Maestro, deleteGrupo_Maestro } = require("../Controllers/grupo_maestroController")

const router = Router()

router.get('/', getAllGrupo_Maestro)
router.get('/:id', getGrupo_Maestro)
router.post("/",createGrupo_Maestro),
router.put('/:id', updateGrupo_Maestro)
router.delete("/:id", deleteGrupo_Maestro)

module.exports = router