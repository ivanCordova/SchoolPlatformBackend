const { response, request } = require("express")
const {AlumnoModel} = require("../Models/indexModel")
const {GrupoModel} = require("../Models/indexModel")



const getAllAlumnos = async (req = request, res = response) => {
    try {
        const alumnos = await AlumnoModel.findAll({
            include: GrupoModel
        })
        res.json(alumnos)
    } catch (error) {
        res.json({message: error.message})
    }
}

const getAlumno = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const alumnos = await AlumnoModel.findAll({
            where:{id},
            include: GrupoModel
        })
        res.json(alumnos)
    } catch (error) {
        res.json({message: error.message})
    }
}

const createAlumno = async (req = request, res = response) => {
    try {
        await AlumnoModel.create(req.body)
        res.json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateAlumno = async (req = request, res = response) => {
    try {
        await AlumnoModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteAlumno = async (req = request, res = response) => {
    try {
        await AlumnoModel.destroy({
            where: {id: req.params.id}
        })
        res.json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}



module.exports = {
    getAllAlumnos,
    getAlumno,
    createAlumno,
    updateAlumno,
    deleteAlumno
}
