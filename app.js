const express = require('express');
const path = require('path');
const session = require('express-session');
const connection = require('./database/database');
const checkLogin = require('./middleware/checkLogin');

// Models
const Usuario = require('./models/usuario');
const Autor = require('./models/carro');
const Editora = require('./models/marca');
const Genero = require('./models/genero');
const Livro = require('./models/livro');

// Import de rotas
const usuarioRoute = require('./routes/usuarioRoute');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Sessions
app.use(session({
    secret: 'lojaCarros',
    cookie: {
        maxAge: 1200000,
    },
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Banco de Dados
connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com sucesso');
    })
    .catch(erro => {
        console.log('Problemas de conexao.', erro);
    });

// Rotas
app.use('/usuarios', usuarioRoute);

app.use('/', checkLogin, (req, res, next) => {
    res.render('index');
});

// usuario bruno_2555@hotmail.com
// senha 102030

module.exports = app;
