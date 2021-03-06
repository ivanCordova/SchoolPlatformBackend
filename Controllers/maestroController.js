const { response, request } = require("express")
const { encrypt } = require("../helper/handleBcrypt")
const {MaestroModel, Grupo_MaestroModel, GrupoModel, AlumnoModel, MateriaModel, Materia_maestroModel } = require("../Models/indexModel")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()} - ${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single("fotoMaestro")



const getAllMaestros = async (req = request, res = response) => {
    try {
        const maestros = await MaestroModel.findAll({
            include:[{
                model: GrupoModel,
                through: { attributes: [] } // no se incluyen los atributos de la relacion
                //attributes: ['nombre'] <- incluye los atributos del modelo principal
            },{
                model: MateriaModel,
                through: { attributes: [] } // no se incluyen los atributos de la relacion
                //attributes: ['nombre'] <- incluye los atributos del modelo principal
            }]
        })
        res.json(maestros)
    } catch (error) {
        res.json({message: error.message})
    }
}

const getMaestro = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const maestros = await MaestroModel.findAll({
            where:{id},
            include:[{
                model: GrupoModel,
                through: { attributes: [] } // no se incluyen los atributos de la relacion
                //attributes: ['nombre'] <- incluye los atributos del modelo principal
            },{
                model: MateriaModel,
                through: { attributes: [] } // no se incluyen los atributos de la relacion
                //attributes: ['nombre'] <- incluye los atributos del modelo principal
            }]
        })
        if(maestros == 0){
            return res.status(400).json({
                msg :'No se encontro al alumno'
            });
        }else{

            res.status(200).json(maestros)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const createMaestro = async (req = request, res = response) => {
    try {
        const {nombre, fecha_nacimiento, imagen, correo, contrasenia } = JSON.parse(req.body.datos)
        const passwordHash = await encrypt(contrasenia)
        const file = req.file
        await MaestroModel.create({
            nombre,
            fecha_nacimiento,
            imagen: file.filename,
            correo,
            contrasenia: passwordHash
        })
        res.status(200).json({
            "message": "??Registro creado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateMaestro = async (req = request, res = response) => {
    try {
        await MaestroModel.update(req.body,{
            where:{id: req.params.id}
        })
        res.status(200).json({
            "message": "??Registro actualizado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteMaestro = async (req = request, res = response) => {
    try {
        await MaestroModel.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json({
            "message": "??Registro eliminado correctamente!"
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllMaestros,
    getMaestro,
    createMaestro,
    updateMaestro,
    deleteMaestro,
    upload

}
