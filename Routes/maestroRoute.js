const { Router } = require("express")
const {getAllMaestros, getMaestro, createMaestro, updateMaestro, deleteMaestro} = require("../Controllers/maestroController")


const router = Router()
//  /:id
router.get('/', getAllMaestros)
router.get('/:id', getMaestro)
router.post("/",createMaestro),
router.put('/:id', updateMaestro)
router.delete("/:id", deleteMaestro)

module.exports = router