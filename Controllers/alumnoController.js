const { response, request } = require("express")
const { encrypt } = require("../helper/handleBcrypt")
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

        res.status(200).json(await alumnos())
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAlumno = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const alumnos = async () => {
            switch (req.query.extra) {
                case "grupo":
                    return await AlumnoModel.findAll({where: { id }, include: GrupoModel })
                    break;
                case "tarea":
                    return await AlumnoModel.findAll({where: { id }, include: TareaModel })
                    break;
                case "materia":
                    return await AlumnoModel.findAll({where: { id }, include: MateriaModel })
                    break;
                case "all":
                    return await AlumnoModel.findAll({where: { id }, include: { all: true } })
                    break;
                default:
                    return await AlumnoModel.findAll({where: { id }})
                    break;
            }
        }
        if ((await alumnos()) == 0) {
            return res.status(400).json({
                msg: 'No se encontro al alumno'
            });
        } else {

            res.status(200).json(await alumnos())
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



const createAlumno = async (req = request, res = response) => {
    try {
        const {nombre, fecha_nacimiento, imagen, correo, id_grupo, contrasenia } = req.body
        const passwordHash = await encrypt(contrasenia)
        await AlumnoModel.create({
            nombre,
            fecha_nacimiento,
            imagen,
            correo,
            id_grupo,
            contrasenia: passwordHash
        })
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
