/* import { Sequelize } from "sequelize/types"; */
const {Sequelize} = require('sequelize');
const db = new Sequelize("DB_ESCUELA", "root", "123456",{
    host:"localhost",
    dialect:"mysql"
})

module.exports ={
    db
}