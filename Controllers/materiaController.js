const { response, request } = require("express")
const { MateriaModel, TareaModel, AlumnoModel, Alumno_materiaModel } = require("../Models/indexModel")
const { Op, where } = require("sequelize");
const {db} = require("../Database/connect")

const getAllMaterias = async (req = request, res = response) => {
    try {
        const materias = await MateriaModel.findAll({
            include: [{
                model: TareaModel
            }, {
                model: AlumnoModel
            }]
        })
        res.status(200).json(materias)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


// Materias que no toma el alumno
const getAllMaterias_alumno = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const materias = db.query(`SELECT * from materia WHERE id NOT IN (SELECT id_materia from alumno_materia WHERE id_alumno = ${id})`).then(results => {
            res.status(200).json(results[0])
        });
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}

const getMateria = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const materia = await MateriaModel.findAll({
            where: { id }
        })
        if (materia == 0) {
            return res.status(400).json({
                msg: 'No se encontro la materia'
            });
        } else {

            res.status(200).json(materia)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const createMateria = async (req = request, res = response) => {
    try {
        await MateriaModel.create(req.body)
        res.status(200).json({
            "message": "¡Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateMateria = async (req = request, res = response) => {
    try {
        await MateriaModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({
            "message": "¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteMateria = async (req = request, res = response) => {
    try {
        await MateriaModel.destroy({
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
    getAllMaterias,
    getMateria,
    createMateria,
    updateMateria,
    deleteMateria,
    getAllMaterias_alumno
}