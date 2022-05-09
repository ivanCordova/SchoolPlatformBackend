const { Router } = require("express")
const {getAllGrupos, getGrupo, createGrupo, updateGrupo, deleteGrupo} = require("../Controllers/grupoController")

const router = Router()

router.get('/', getAllGrupos)
router.get('/:id', getGrupo)
router.post("/",createGrupo),
router.put('/:id', updateGrupo)
router.delete("/:id", deleteGrupo)


module.exports = router