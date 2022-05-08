const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const GrupoModel = db.define("grupo",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    nombre: {type: DataTypes.STRING, allowNull: false},
    aula: {type: DataTypes.INTEGER, allowNull: false}
},{
    tableName: "grupo"
})

module.exports = {
    GrupoModel
}