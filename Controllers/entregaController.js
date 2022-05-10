const { response, request } = require("express")
const { TareaModel, EntregasModel, AlumnoModel } = require("../Models/indexModel")


const getAllEntregas = async (req = request, res = response) => {
    try {
        const entregas = await EntregasModel.findAll({
            include:{
                model: AlumnoModel
            }
        })
        res.status(200).json(entregas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllEntregas
}