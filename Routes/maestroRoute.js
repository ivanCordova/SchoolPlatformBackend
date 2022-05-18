const { Router } = require("express")
const {getAllMaestros, getMaestro, createMaestro, updateMaestro, deleteMaestro, upload} = require("../Controllers/maestroController")


const router = Router()
//  /:id
router.get('/', getAllMaestros)
router.get('/:id', getMaestro)
router.post("/", upload,createMaestro),
router.put('/:id', updateMaestro)
router.delete("/:id", deleteMaestro)

module.exports = router