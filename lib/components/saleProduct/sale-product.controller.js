'use strict';
const { validateObject } = require('./../../utils/validate-data');
const { saleProductSchema } = require('./sale-product.model');
const { reduceProductQuantity } = require('./../lote/lote.controller');
const { ReportModel } = require('./sale-product.model');
async function createSaleReport(productSale, user) {
  const report = {
    productName: productSale.product.name,
    productRealPrice: productSale.lote.realPrice,
    productSalePrice: productSale.salePrice,
    deltaPrice: productSale.salePrice - productSale.lote.realPrice,
    quantity: productSale.quantity,
    user: `${user.firstname} ${user.lastname}`,
    date: new Date()
  }
  const reportModel = new ReportModel(report)
  return await reportModel.save();
}
async function registryProductSale(productSale, user) {
  try {
    await validateObject(saleProductSchema, productSale);
    if (productSale.lote.realPrice <= productSale.salePrice) {
      await reduceProductQuantity(productSale.lote._id, productSale.quantity);
      return await createSaleReport(productSale, user)
    } else {
      throw {
        statusCode: 400,
        content: {
          title: 'Bad Request',
          message: `The ${productSale.product.name} sale price cannot be minor to: ${productSale.lote.realPrice}`
        }
      }
    }
  } catch (error) {
    throw error
  }
}
module.exports = {
  registryProductSale
}