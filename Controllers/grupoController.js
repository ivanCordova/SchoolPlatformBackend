const { response, request } = require("express")
const {AlumnoModel,GrupoModel, MaestroModel, Grupo_MaestroModel} = require("../Models/indexModel")


const getAllGrupos = async (req = request, res = response) => {
    try {
        const grupos = await GrupoModel.findAll({
            include: {
                model: MaestroModel,
                through: { attributes: [] }
            }
            
        })
        res.status(200).json(grupos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

const getGrupo = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const grupo = await GrupoModel.findAll({
            where:{id},
            include: {
                model: MaestroModel,
                through: { attributes: [] }
            }
        })
        if(grupo == 0){
            return res.status(400).json({
                msg :'No se encontro al grupo'
            });
        }else{

            res.status(200).json(grupo)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createGrupo = async (req = request, res = response) => {
    try {
        await GrupoModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateGrupo = async (req = request, res = response) => {
    try {
        await GrupoModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteGrupo = async (req = request, res = response) => {
    try {
        await GrupoModel.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllGrupos,
    getGrupo,
    createGrupo,
    updateGrupo,
    deleteGrupo
}