const { response, request } = require("express")
const { TareaModel, GrupoModel, MateriaModel, MaestroModel, EntregasModel, AlumnoModel} = require("../Models/indexModel")

const getAllTareas = async (req = request, res = response) => {
    try {
        const tareas = await TareaModel.findAll({
            include:[{
                model: GrupoModel
            },{
                model: MateriaModel
            },{
                model: MaestroModel
            }]
        })
        res.status(200).json(tareas)
    } catch (error) {
        res.json({message: error.message})
    }
}

const getTarea = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const tareas = await TareaModel.findAll({
            where:{id},
            include:[{
                model: GrupoModel
            },{
                model: MateriaModel
            },{
                model: MaestroModel
            }]
        })
        res.status(200).json(tareas)
    } catch (error) {
        res.json({message: error.message})
    }
}

const createTarea = async (req = request, res = response) => {
    try {
        await TareaModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateTarea = async (req = request, res = response) => {
    try {
        await TareaModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteTarea = async (req = request, res = response) => {
    try {
        await TareaModel.destroy({
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
    getAllTareas,
    getTarea,
    createTarea,
    updateTarea,
    deleteTarea
}