const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")

const Grupo_MaestroModel = db.define("grupo",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    id_grupo: {type: DataTypes.INTEGER, allowNull: false},
    id_maestro: {type: DataTypes.INTEGER, allowNull: false}
},{
    tableName: "grupo_maestro"
})

module.exports = {
    Grupo_MaestroModel
}