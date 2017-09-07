"use strict";
const saleSchema = require("./sales.model");
const { validateObject } = require('./../../utils/validate-data');
const { registryProductSale } = require('./../saleProduct/sale-product.controller');
function calculateCost(body) {
  let totalPrice = 0;
  try {
    body.saleProducts.forEach((saleProduct) => {
      totalPrice += parseFloat(saleProduct.salePrice);
    })
    return totalPrice;
  }
  catch (error) {
    throw {
      statusCode: 400,
      content: {
        title: 'Bad Request',
        message: 'Products should be an array and contains salePrice field.'
      }
    };
  }
}
async function saveSale(req, res, next) {
  try {
    let sale = req.body;
    await validateObject(saleSchema, sale);
    sale.totalCost = await calculateCost(sale);
    await sale.saleProducts.forEach((saleProduct) => {
      registryProductSale(saleProduct, sale.user);
    });
    res.send({ message: 'success' });
  }
  catch (error) {
    next(error)
  }
}

module.exports = { saveSale };