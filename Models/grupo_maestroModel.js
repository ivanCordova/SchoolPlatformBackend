const { DataTypes } = require('sequelize')
const { db } = require("../Database/connect")
const {GrupoModel} = require("../Models/grupoModel")
const {MaestroModel} = require("../Models/maestroModel")

const Grupo_MaestroModel = db.define("grupo",{
    id: {type: DataTypes.INTEGER, autoIncrement: true,primaryKey: true},
    id_grupo: {
        type: DataTypes.INTEGER,
        references:{
            model: GrupoModel,
            key: "id"
        },
        allowNull: false
    },
    id_maestro: {
        type: DataTypes.INTEGER,
        references:{
            model: MaestroModel,
            key: "id"
        },
        allowNull: false
    }
},{
    tableName: "grupo_maestro"
})

module.exports = {
    Grupo_MaestroModel
}