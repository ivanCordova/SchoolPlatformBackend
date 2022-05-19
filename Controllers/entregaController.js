const { response, request } = require("express")
const {EntregasModel } = require("../Models/indexModel")
    

const getAllEntregas = async (req = request, res = response) => {
    try {
        const entregas = await EntregasModel.findAll()
        res.status(200).json(entregas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getEntrega = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const entrega = await EntregasModel.findAll({
            where:{id}
        })
        if(entrega == 0){
            return res.status(400).json({
                msg :'No se encontro al alumno_materia'
            });
        }else{

            res.status(200).json(entrega)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createEntrega = async (req = request, res = response) => {
    try {
        await EntregasModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateEntrega = async (req = request, res = response) => {
    try {
        await EntregasModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteEntrega = async (req = request, res = response) => {
    try {
        await EntregasModel.destroy({
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
    getAllEntregas,
    getEntrega,
    createEntrega,
    updateEntrega,
    deleteEntrega
}