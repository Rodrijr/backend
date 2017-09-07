'use strict';
const mongoose = require('mongoose');
const saleSchema = {
  type: 'object',
  properties: {
    saleProducts: {
      type: 'array',
      minItems: 1,
      items: {
        oneOf: [
          {
            type: 'object'
          }
        ]
      }
    },
    user: {
      type: 'object',
    }
  },
  required: [
    'saleProducts',
    'user'
  ]
}
module.exports = {
  saleSchema
};
