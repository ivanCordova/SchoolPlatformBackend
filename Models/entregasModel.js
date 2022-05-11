const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const EntregasModel = db.define("entregas",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    archivo: {type: DataTypes.STRING, allowNull: false},
    calificacion: {type: DataTypes.DECIMAL, allowNull: false},
    id_tarea: {type: DataTypes.INTEGER, allowNull: false},
    id_alumno: {type: DataTypes.INTEGER, allowNull: false}
},{
    tableName: "entregas"
})


module.exports = {
    EntregasModel
}