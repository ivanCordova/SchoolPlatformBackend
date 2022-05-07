const express = require('express')
const cors = require("cors")

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.alumnosPath = process.env.alumnosPath

        // Middlewares
        this.middlewares()
        //  Rutas de aplicación 
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use(cors())
        //Exponemos el directorio publico 
        this.app.use(express.static("Public"))
        //Parse y lectura del body
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.alumnosPath,require("../Routes/alumnoRoute"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port)
        })
    }
}

module.exports = Server;