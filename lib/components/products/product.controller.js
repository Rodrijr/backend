'use strict';
const { validateObject } = require('./../../utils/validate-data');
const { ProductModel } = require('./products.model');
const { productSchema } = require('./products.model');

async function createProduct(req, res, next) {
  try {

    await validateObject(productSchema, req.body);
    const product = new ProductModel(req.body);
    res.send(await product.save(req.body));
  }
  catch (error) {
    next(error)
  }
}

async function getProducts(req, res, next) {
  try {
    const products = await ProductModel.find({}, { __v: 0 });
    res.send(products);
  } catch (error) {
    next(error)
  }
}
async function getProduct(req, res, next) {
  try {
    const products = await ProductModel.findOne({ _id: req.params.productID }, { __v: 0 });
    res.send(products);
  } catch (error) {
    next(error)
  }
}
async function updateProduct(req, res, next) {
  try {
    await ProductModel
      .findOneAndUpdate(
      { _id: req.params.productID },
      req.body,
      { upsert: true, returnNewDocument: true }).exec();
    const product = await ProductModel.findOne({ _id: req.params.productID }, { __v: 0 });
    res.send(product);
  } catch (error) {
    next(error)
  }
}
async function deleteProduct(req, res, next) {
  try {
    const product = await ProductModel.findOne({ _id: req.params.productID }, { __v: 0 });
    await ProductModel.deleteOne({ _id: req.params.productID });
    res.send(product);
  } catch (error) {
    next(error)
  }
}
module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
}
