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

// tarea 1......* grupo
GrupoModel.hasMany(TareaModel, {foreignKey: "id_grupo"})
TareaModel.belongsTo(GrupoModel, {foreignKey: "id_grupo"})

// tarea 1......* materia
MateriaModel.hasMany(TareaModel, {foreignKey: "id_materia"})
TareaModel.belongsTo(MateriaModel, {foreignKey: "id_materia"})

// tarea 1......* maestro
MaestroModel.hasMany(TareaModel, {foreignKey: "id_maestro"})
TareaModel.belongsTo(MaestroModel, {foreignKey: "id_maestro"})

//alumno* .... *tarea
AlumnoModel.belongsToMany(TareaModel,{through: EntregasModel, foreignKey: "id_alumno"})
TareaModel.belongsToMany(AlumnoModel,{through: EntregasModel, foreignKey: "id_tarea"})

//alumno* ..... *materia
AlumnoModel.belongsToMany(MateriaModel,{through:Alumno_materiaModel, foreignKey:"id_alumno"})
MateriaModel.belongsToMany(AlumnoModel,{through:Alumno_materiaModel, foreignKey:"id_materia"})

//materia* ..... *maestro
MateriaModel.belongsToMany(MaestroModel,{through:Materia_maestroModel, foreignKey:"id_materia"})
MaestroModel.belongsToMany(MateriaModel,{through:Materia_maestroModel, foreignKey: "id_maestro"})

// grupo*.......*maestro
GrupoModel.belongsToMany(MaestroModel,{through: Grupo_MaestroModel, foreignKey: "id_grupo"})
MaestroModel.belongsToMany(GrupoModel,{through: Grupo_MaestroModel, foreignKey: "id_maestro"})

module.exports = {
    AlumnoModel,
    GrupoModel,
    MaestroModel,
    TareaModel,
    MateriaModel,
    EntregasModel,
    Alumno_materiaModel,
    Materia_maestroModel,
    Grupo_MaestroModel
}