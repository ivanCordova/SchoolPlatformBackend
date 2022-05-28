const { Router } = require("express")
const { getAllEntregas, getEntrega, createEntrega, updateEntrega, deleteEntrega, upload } = require("../Controllers/entregaController")

const router = Router()

router.get('/', getAllEntregas)
router.get('/:id', getEntrega)
router.post("/", upload, createEntrega),
router.put('/:id', updateEntrega)
router.delete("/:id", deleteEntrega)

module.exports = router