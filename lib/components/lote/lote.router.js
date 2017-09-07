'use strict';
const express = require('express');
const loteController = require('./lote.controller');
const { notImplemented } = require('./../../utils/not-implemented');
const api = express.Router();
api.route('/lote')
  .post(loteController.insertLote)
  .get(notImplemented)
  .put(notImplemented)
  .delete(notImplemented);

api.route('/lote/:productID')
  .get(loteController.getAllProductLotes)
  .post(notImplemented)
  .put(notImplemented)
  .delete(notImplemented);
module.exports = api