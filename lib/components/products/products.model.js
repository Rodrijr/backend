'use strict';
const mongoose = require('mongoose');
const product = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    code: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    brand: {
      type: 'string',
    }
  },
  required: [
    'name',
    'code',
    'description',
    'brand'
  ]
};
const connection = mongoose.createConnection('mongodb://localhost:27017/ferreteria');
const productSchema = new mongoose.Schema(product.properties);
const ProductModel = connection.model('Product', productSchema);

module.exports = { ProductModel, productSchema };