const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const MateriaModel = db.define("materia",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    nombre: {type: DataTypes.STRING, allowNull: false},
    descripcion: {type: DataTypes.INTEGER, allowNull: false},
    imagen: {type: DataTypes.STRING, allowNull: false}
},{
    tableName: "materia"
})

module.exports = {
    MateriaModel
}