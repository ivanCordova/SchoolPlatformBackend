const { response, request } = require("express")
const { AlumnoModel, TareaModel, EntregasModel, MateriaModel } = require("../Models/indexModel")
const { GrupoModel } = require("../Models/indexModel")



const getAllAlumnos = async (req = request, res = response) => {
    try {
        const alumnos = async () => {
            switch (req.query.extra) {
                case "grupo":
                    return await AlumnoModel.findAll({ include: GrupoModel })
                    break;
                case "tarea":
                    return await AlumnoModel.findAll({ include: TareaModel })
                    break;
                case "materia":
                    return await AlumnoModel.findAll({ include: MateriaModel })
                    break;
                case "all":
                    return await AlumnoModel.findAll({ include: { all: true } })
                    break;
                default:
                    return await AlumnoModel.findAll()
                    break;
            }
        }

        //const alumnos = await AlumnoModel.findAll()
        res.status(200).json(await alumnos())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAlumno = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const alumnos = await AlumnoModel.findAll({
            where: { id },
            include: {
                model: GrupoModel
            }
        })
        if (alumnos == 0) {
            return res.status(400).json({
                msg: 'No se encontro al alumno'
            });
        } else {

            res.status(200).json(alumnos)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createAlumno = async (req = request, res = response) => {
    try {
        await AlumnoModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateAlumno = async (req = request, res = response) => {
    try {
        await AlumnoModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteAlumno = async (req = request, res = response) => {
    try {
        await AlumnoModel.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({
            "message": "¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}





module.exports = {
    getAllAlumnos,
    getAlumno,
    createAlumno,
    updateAlumno,
    deleteAlumno
}
