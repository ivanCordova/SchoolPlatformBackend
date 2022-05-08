const { response, request } = require("express")
const {AlumnoModel,GrupoModel, MaestroModel} = require("../Models/indexModel")

const grupoAlumnoGet = async (req = request, res = response) => {
    try {
        const grupos = await GrupoModel.findAll({
            include: {
                model: AlumnoModel
            }
        })
        res.json(grupos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

const grupo_MaestroGet = async (req = request, res = response) => {
    try {
        const grupos = await GrupoModel.findAll({
            include: {
                model: MaestroModel
            }
        })
        res.json(grupos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

module.exports = {
    grupoAlumnoGet,
    grupo_MaestroGet
}