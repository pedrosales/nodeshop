const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connecta com mongo
mongoose.connect('mongodb+srv://sa:P3dr09673@api1972-sd6wj.gcp.mongodb.net/test?retryWrites=true&w=majority');

// Carrega rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;