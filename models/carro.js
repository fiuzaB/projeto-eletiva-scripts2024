const Sequelize = require('sequelize');
const connection = require('../database/database');
const Marca = require('./marca');

const Carro = connection.define('carro', {
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.DATE,
        allowNull: false
    },
    precoMin: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    precoPadrao: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
});

Carro.belongsTo(Marca);

Carro.sync({ alter: true });

module.exports = Carro;