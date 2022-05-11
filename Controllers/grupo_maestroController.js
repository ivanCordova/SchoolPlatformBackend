const { response, request } = require("express")
const {Grupo_MaestroModel} = require("../Models/indexModel")


const getAllGrupo_Maestro = async (req = request, res = response) => {
    try {
        const grupo_maestro = await Grupo_MaestroModel.findAll()
        res.status(200).json(grupo_maestro)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getGrupo_Maestro = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const grupo_maestro = await Grupo_MaestroModel.findAll({
            where:{id}
        })
        if(grupo_maestro == 0){
            return res.status(400).json({
                msg :'No se encontro al alumno_materia'
            });
        }else{

            res.status(200).json(grupo_maestro)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createGrupo_Maestro = async (req = request, res = response) => {
    try {
        await Grupo_MaestroModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateGrupo_Maestro = async (req = request, res = response) => {
    try {
        await Grupo_MaestroModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteGrupo_Maestro = async (req = request, res = response) => {
    try {
        await Grupo_MaestroModel.destroy({
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
    getAllGrupo_Maestro,
    getGrupo_Maestro,
    createGrupo_Maestro,
    updateGrupo_Maestro,
    deleteGrupo_Maestro
}