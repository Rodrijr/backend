'use strict';

const mongoose = require('mongoose');
const saleProductSchema = {
  type: 'object',
  properties: {
    product: {
      type: 'object'
    },
    lote: {
      type: 'object'
    },
    lotePrice: {
      type: 'number'
    },
    salePrice: {
      type: 'number'
    },
    quantity: {
      type: 'number'
    }
  },
  required: [
    "product",
    "lote",
    "salePrice",
    "quantity"
  ]
};

const report = {
  productName: {
    type: 'string'
  },
  productRealPrice: {
    type: 'number'
  },
  productSalePrice: {
    type: 'number'
  },
  deltaPrice: {
    type: 'number'
  },
  quantity: {
    type: 'number'
  },
  user: {
    type: 'string'
  },
  date: {
    type: 'string'
  }
}
const connection = mongoose.createConnection('mongodb://localhost:27017/ferreteria');
const ReportSchema = new mongoose.Schema(report);
const ReportModel = connection.model('Report', ReportSchema);

module.exports = { saleProductSchema, ReportModel, ReportSchema };