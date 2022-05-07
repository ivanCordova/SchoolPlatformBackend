require("dotenv").config(); //Variables de entorno dotenv
const Server = require("./Models/serverModel");

const server = new Server()

server.listen()
