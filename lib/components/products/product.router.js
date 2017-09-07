'use strict';
const express = require('express');
const productController = require('./product.controller');
const { notImplemented } = require('./../../utils/not-implemented');
const api = express.Router();

api.route('/product')
  .post(productController.createProduct)
  .get(productController.getProducts)
  .put(notImplemented)
  .delete(notImplemented);
api.route('/product/:productID')
  .get(productController.getProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)
  .post(notImplemented);

module.exports = api