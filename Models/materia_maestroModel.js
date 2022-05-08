const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const Materia_maestroModel = db.define("materia_maestro",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    id_materia: {type: DataTypes.INTEGER, allowNull: false},
    id_maestro: {type: DataTypes.INTEGER, allowNull: false}
},{
    tableName: "materia_maestro"
})

module.exports = {
    Materia_maestroModel
}