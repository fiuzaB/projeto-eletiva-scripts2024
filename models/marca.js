const Sequelize = require('sequelize');
const connection = require('../database/database');

const Marca = connection.define('marcas', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Marca.sync({ alter: true });

module.exports = Marca;