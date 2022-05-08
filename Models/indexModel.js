const { AlumnoModel } = require("./alumnoModel")
const { GrupoModel } = require("./grupoModel")
const { MaestroModel } = require("./maestroModel")
const { TareaModel } = require("./tareaModel")
const { MateriaModel } = require("./materiaModel")
const { EntregasModel } = require("./entregasModel")
const { Alumno_materiaModel } = require("./alumno_materiaModel")
const { Materia_maestroModel} = require("./materia_maestroModel")
const { Grupo_MaestroModel } = require("./grupo_maestroModel")


// alumno 1......* grupo
GrupoModel.hasMany(AlumnoModel, {foreignKey: "id_grupo"})
AlumnoModel.belongsTo(GrupoModel, {foreignKey: "id_grupo"})

//alumno*......*tarea
AlumnoModel.belongsToMany(TareaModel,{through: EntregasModel, foreignKey: "id_tarea"})
TareaModel.belongsToMany(AlumnoModel,{through: EntregasModel, foreignKey: "id_alumno"})

//alumno* ..... *materia
AlumnoModel.belongsToMany(MateriaModel,{through:Alumno_materiaModel, foreignKey:"id_materia"})
MateriaModel.belongsToMany(AlumnoModel,{through:Alumno_materiaModel, foreignKey:"id_alumno"})

//materia* ..... *maestro
MateriaModel.belongsToMany(MaestroModel,{through:Materia_maestroModel, foreignKey:"id_maestro"})
MaestroModel.belongsToMany(MateriaModel,{through:Materia_maestroModel, foreignKey: "id_materia"})

// grupo*.......*maestro
GrupoModel.belongsToMany(MaestroModel,{through: Grupo_MaestroModel, foreignKey: "id_maestro"})
MaestroModel.belongsToMany(GrupoModel,{through: Grupo_MaestroModel, foreignKey: "id_grupo"})


/* AlumnoModel.belongsTo(GrupoModel,{foreignKey: "id_grupo"})
GrupoModel.hasMany(AlumnoModel,{foreignKey: "id_grupo"}) */

module.exports = {
    AlumnoModel,
    GrupoModel,
    MaestroModel
}