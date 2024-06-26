const Sequelize = require('sequelize');
const connection = require('../database/database');
const Autor = require('./carro');
const Editora = require('./marca');
const Genero = require('./genero');

const Livro = connection.define('lojaCarros', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    paginas: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Livro.belongsTo(Autor);
Livro.belongsTo(Editora);
Livro.belongsTo(Genero);

//Livro.sync({force: true});

module.exports = Livro;