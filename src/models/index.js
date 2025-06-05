const sequelize = require('../config/database');
const Users = require( './users')
const Produtos = require('./produtos')

sequelize.sync({ alter: true})
    .then(() => console.log('tabela sincronizada com sucesso'))
    .catch((error) => console.error('Erro ao sincronizar tabela:', error));

    module.exports = {
        Users,
        Produtos
    };