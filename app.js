const Sequelize = require('sequelize');
const express = require('express');

const sequelize = new Sequelize({
    dialect: 'mysql',
    storage: './database.mysql'
});

const app = express(); //Inicializamos el express, para manejar las rutas

//Usamos un router para las rutas, es una manera de aislar por asi decirlo, cada una de las rutas, para que pueda usar sus propios middlewares en el caso de necesitarlo
app.use('/book', require('./routes/book'));
