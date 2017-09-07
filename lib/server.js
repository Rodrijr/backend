'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const LoteRoutes = require('./components/lote/lote.router');
const ProductRoutes = require('./components/products/product.router');
const SaleRoutes = require('./components/sales/sales.router');
const config = require('./config.json');
const mongoose = require('mongoose');
const https = require('https');
const { expressErrorHandler } = require('./utils/error-handler');
mongoose.Promise = Promise;
const connection = mongoose.createConnection('mongodb://localhost:27017/ferreteria');

app.use(bodyParser.json());
app.use('/', LoteRoutes);
app.use('/', ProductRoutes);
app.use('/', SaleRoutes);
app.get('/', (req, res) => {
  res.send('WELCOME TO FERRETERIA');
});
app.use(expressErrorHandler);

app.listen(config.port, () => {
  console.log(`The app is running in port ${config.port}`);
})
