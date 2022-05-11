const { response, request } = require("express")
const {Materia_maestroModel} = require("../Models/indexModel")


const getAllMateria_Maestro = async (req = request, res = response) => {
    try {
        const materia_maestro = await Materia_maestroModel.findAll()
        res.status(200).json(materia_maestro)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getMateria_Maestro = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const materia_maestro = await Materia_maestroModel.findAll({
            where:{id}
        })
        if(materia_maestro == 0){
            return res.status(400).json({
                msg :'No se encontro al alumno_materia'
            });
        }else{

            res.status(200).json(materia_maestro)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createMateria_Maestro = async (req = request, res = response) => {
    try {
        await Materia_maestroModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateMateria_Maestro = async (req = request, res = response) => {
    try {
        await Materia_maestroModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteMateria_Maestro = async (req = request, res = response) => {
    try {
        await Materia_maestroModel.destroy({
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
    getAllMateria_Maestro,
    getMateria_Maestro,
    createMateria_Maestro,
    updateMateria_Maestro,
    deleteMateria_Maestro
}