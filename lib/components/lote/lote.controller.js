'use strict';
const { validateObject } = require('./../../utils/validate-data');
const { Lote } = require('./lote.model');
const { loteSchema } = require('./lote.model');

async function insertLote(req, res, next) {
  try {
    await validateObject(loteSchema, req.body);
    const lote = new Lote(req.body);
    res.send(await lote.save(req.body));
  }
  catch (error) {
    next(error)
  }
}

async function getAllProductLotes(req, res, next) {
  try {
    const lotes = await Lote.find({ product: req.params.productID }, { __v: 0 }).where('quantity').gt(0);
    res.send(lotes);
  } catch (error) {
    next(error)
  }
}
async function reduceProductQuantity(loteID, quantity) {
  return await Lote.findOneAndUpdate(
    { _id: loteID },
    { $inc: { quantity: -quantity } });
}
module.exports = {
  insertLote,
  getAllProductLotes,
  reduceProductQuantity
}
