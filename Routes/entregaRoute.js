const { Router } = require("express")
const { getAllEntregas, getEntrega, createEntrega, updateEntrega, deleteEntrega } = require("../Controllers/entregaController")

const router = Router()

router.get('/', getAllEntregas)
router.get('/:id', getEntrega)
router.post("/",createEntrega),
router.put('/:id', updateEntrega)
router.delete("/:id", deleteEntrega)

module.exports = router