const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const Alumno_materiaModel = db.define("alumno_materia",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    calificacion: {type: DataTypes.DECIMAL, allowNull: false},
    id_alumno: {type: DataTypes.INTEGER, allowNull: false},
    id_materia: {type: DataTypes.INTEGER, allowNull: false}
},{
    tableName: "alumno_materia"
})

module.exports = {
    Alumno_materiaModel
}