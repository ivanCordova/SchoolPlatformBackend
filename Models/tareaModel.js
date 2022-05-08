const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const TareaModel = db.define("tarea",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    titulo: {type: DataTypes.STRING, allowNull: false},
    descripcion: {type: DataTypes.STRING, allowNull: false},
    id_grupo: {type: DataTypes.INTEGER, allowNull: false},
    id_materia: {type: DataTypes.INTEGER, allowNull: false},
    id_maestro: {type: DataTypes.INTEGER, allowNull: false}
},{
    tableName: "tarea"
})


module.exports = {
    TareaModel
}