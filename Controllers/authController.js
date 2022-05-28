const { response, request } = require("express")
const { compare } = require("../helper/handleBcrypt")
const { AlumnoModel, MaestroModel } = require("../Models/indexModel")



const loginAuthAlumno = async (req = request, res = response) => {
    try {
        const { correo, contrasenia } = req.body

        switch (req.query.tp) {
            case "alumno":
                console.log("entro")
                const alumno = await AlumnoModel.findOne({ where: { correo } })

                if (alumno == null) {
                    res.status(404).json({ message: "Usuario o contraseña no validos" })
                } else {

                    const checkPassword = await compare(contrasenia, alumno.contrasenia)
                    if (checkPassword) {
                        res.status(200).json(alumno)
                    } else {
                        res.status(404).json(alumno)
                    }
                }

                break;
            case "maestro":
                const maestro = await MaestroModel.findOne({ where: { correo } })

                if (maestro == null) {
                    res.status(404).json({ message: "Usuario o contraseña no validos" })
                } else {

                    const checkPassword = await compare(contrasenia, maestro.contrasenia)
                    if (checkPassword) {
                        res.status(200).json(maestro)
                    } else {
                        res.status(404).json({ message: "Usuario o contraseña no validos" })
                    }
                }
                break;
            default:
                break;
        }


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    loginAuthAlumno
}