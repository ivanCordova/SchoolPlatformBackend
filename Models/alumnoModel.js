const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const AlumnoModel = db.define("alumno",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    nombre: {type: DataTypes.STRING, allowNull: false},
    fecha_nacimiento: {type: DataTypes.DATE, allowNull: false},
    imagen: {type: DataTypes.STRING, allowNull: false},
    correo: {type: DataTypes.STRING, allowNull: false},
    id_grupo: {type: DataTypes.INTEGER, allowNull: false},
    contrasenia: {type: DataTypes.STRING, allowNull: false}
},{
    tableName: "alumno"
})


module.exports = {
    AlumnoModel
}