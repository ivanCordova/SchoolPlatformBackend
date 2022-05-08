const { response, request } = require("express")
const {AlumnoModel} = require("../Models/alumnoModel")



const alumnosGet = async (req = request, res = response) => {
    try {
        const alumnos = await AlumnoModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json({message: error.message})
    }
}



module.exports = {
    alumnosGet
}
