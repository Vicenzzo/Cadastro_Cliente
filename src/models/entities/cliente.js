const Sequelize = require('sequelize');
const database = require('./dborm');

const Cliente = database.Sequelize.define('cliente', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        alloNull: false, 
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.INTEGER, 
        alloNull: false
    },
    idade: {
        type: Sequelize.INTEGER
    }, 
    endereco: Sequelize.STRING
})
module.exports = {Cliente}