const { AlumnoModel } = require("./alumnoModel")
const { GrupoModel } = require("./grupoModel")
const { MaestroModel } = require("./maestroModel")
const { Grupo_MaestroModel } = require("./grupo_maestroModel")

GrupoModel.hasMany(AlumnoModel, {foreignKey: "id_grupo"})
AlumnoModel.belongsTo(GrupoModel, {foreignKey: "id_grupo"})


GrupoModel.belongsToMany(MaestroModel,{through: Grupo_MaestroModel, foreignKey: "id_maestro"})
MaestroModel.belongsToMany(GrupoModel,{through: Grupo_MaestroModel, foreignKey: "id_grupo"})


/* AlumnoModel.belongsTo(GrupoModel,{foreignKey: "id_grupo"})
GrupoModel.hasMany(AlumnoModel,{foreignKey: "id_grupo"}) */

module.exports = {
    AlumnoModel,
    GrupoModel,
    MaestroModel
}