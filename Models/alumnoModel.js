const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const AlumnoModel = db.define("alumno",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    nombre: {type: DataTypes.STRING, allowNull: true},
    fecha_nacimiento: {type: DataTypes.DATE, allowNull: true},
    imagen: {type: DataTypes.STRING, allowNull: true},
    correo: {type: DataTypes.STRING, allowNull: true},
    id_grupo: {type: DataTypes.INTEGER, allowNull: true},
    contrasenia: {type: DataTypes.STRING, allowNull: true}
},{
    tableName: "alumno"
})


module.exports = {
    AlumnoModel
}