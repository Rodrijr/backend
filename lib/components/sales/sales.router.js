'use strict';
const express = require('express');
const saleController = require('./sales.controller');
const { notImplemented } = require('./../../utils/not-implemented');
const api = express.Router();
api.route('/sale')
  .get(notImplemented)
  .put(notImplemented)
  .post(saleController.saveSale)
  .delete(notImplemented);
module.exports = api