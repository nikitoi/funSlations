const express = require('express');
const fetch = require('node-fetch');
const FormData = require('form-data');
const indexRouter = require('./routes/index.js');
const translatorRouter = require('./routes/translator.js');

// Создание приложения express
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

const path = require('path');

// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(indexRouter);
app.use('/translator', translatorRouter);

// Запуск сервера по порту 3000
app.listen(3000);
