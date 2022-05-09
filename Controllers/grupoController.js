const { response, request } = require("express")
const {AlumnoModel,GrupoModel, MaestroModel, Grupo_MaestroModel} = require("../Models/indexModel")


const getAllGrupos = async (req = request, res = response) => {
    try {
        const grupos = await GrupoModel.findAll({
            include: {
                model: Grupo_MaestroModel,
                through: { attributes: [] }
            }
            
        })
        res.json(grupos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}


module.exports = {
    getAllGrupos
}