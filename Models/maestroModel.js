const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const MaestroModel = db.define("maestro",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    nombre: {type: DataTypes.STRING, allowNull: false},
    fecha_nacimiento: {type: DataTypes.DATE, allowNull: false},
    imagen: {type: DataTypes.STRING, allowNull: false},
    correo: {type: DataTypes.STRING, allowNull: false},
    contrasenia: {type: DataTypes.STRING, allowNull: false}
},{
    tableName: "maestro"
})


module.exports = {
    MaestroModel
}