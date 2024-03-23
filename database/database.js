const Sequelize = require('sequelize');

const connection = new Sequelize('fiuza', 'fiuza', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;