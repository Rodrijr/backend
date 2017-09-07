'use strict';
const mongoose = require('mongoose');
const lote = {
  type: 'object',
  properties: {
    product: {
      type: 'string'
    },
    realPrice: {
      type: 'number',
    },
    suggectedPrice: {
      type: 'number',
    },
    quantity: {
      type: 'number',
    }
  },
  required: [
    'product',
    'realPrice',
    'suggectedPrice',
    'quantity'
  ],
}

const connection = mongoose.createConnection('mongodb://localhost:27017/ferreteria');
const loteSchema = new mongoose.Schema(lote.properties);
const Lote = connection.model('Lote', loteSchema);

module.exports = { Lote, loteSchema };