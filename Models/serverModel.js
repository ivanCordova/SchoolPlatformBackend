const express = require('express')
const cors = require("cors")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.alumnosPath = process.env.alumnosPath
        this.grupoPath = process.env.grupoPath
        this.maestrosPath = process.env.maestrosPath
        this.materiasPath = process.env.materiasPath
        this.tareasPath = process.env.tareasPath
        this.entregasPath = process.env.entregasPath
        this.alumnoMateriaPath = process.env.alumnoMateriaPath
        this.materiaMaestroPath = process.env.materiaMaestroPath
        this.grupoMaestroPath = process.env.grupoMaestroPath

        // Middlewares
        this.middlewares()
        //  Rutas de aplicación 
        this.routes()
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        //Exponemos el directorio publico 
        this.app.use(express.static("Public"))
        //Parse y lectura del body
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.alumnosPath, require("../Routes/alumnoRoute"))
        this.app.use(this.grupoPath, require("../Routes/grupoRoute"))
        this.app.use(this.maestrosPath, require("../Routes/maestroRoute"))
        this.app.use(this.materiasPath, require("../Routes/materiaRoute"))
        this.app.use(this.tareasPath, require("../Routes/tareaRoute"))
        this.app.use(this.entregasPath, require("../Routes/entregaRoute"))
        this.app.use(this.alumnoMateriaPath, require("../Routes/alumno_materiaRoute"))
        this.app.use(this.materiaMaestroPath, require("../Routes/materia_maestroRoute"))
        this.app.use(this.grupoMaestroPath, require("../Routes/grupo_maestroRoute"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port)
        })
    }
}

module.exports = Server;