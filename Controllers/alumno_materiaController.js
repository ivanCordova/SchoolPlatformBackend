const { response, request } = require("express")
const {Alumno_materiaModel} = require("../Models/indexModel")


const getAllAlumno_Materia = async (req = request, res = response) => {
    try {
        const alumnos_materia = await Alumno_materiaModel.findAll()
        res.status(200).json(alumnos_materia)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getAlumno_Materia = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const alumnos_materia = await Alumno_materiaModel.findAll({
            where:{id}
        })
        if(alumnos_materia == 0){
            return res.status(400).json({
                msg :'No se encontro al alumno_materia'
            });
        }else{

            res.status(200).json(alumnos_materia)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createAlumno_Materia = async (req = request, res = response) => {
    try {
        await Alumno_materiaModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateAlumno_Materia = async (req = request, res = response) => {
    try {
        await Alumno_materiaModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteAlumno_Materia = async (req = request, res = response) => {
    try {
        await Alumno_materiaModel.destroy({
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
    getAllAlumno_Materia,
    getAlumno_Materia,
    createAlumno_Materia,
    updateAlumno_Materia,
    deleteAlumno_Materia
}