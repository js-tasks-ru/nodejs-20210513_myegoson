const Product = require('../models/Product');

module.exports.productsBySubcategory = async function productsBySubcategory(ctx, next) {
  console.log(ctx.request.query);
  const {subcategory} = ctx.request.query;
  const products = await Product.find({subcategory: subcategory});
  if (products.length === 0) ctx.body = {products: []};
  else ctx.body = {products: products};
};

module.exports.productList = async function productList(ctx, next) {
  ctx.body = {};
};

module.exports.productById = async function productById(ctx, next) {
  ctx.body = {};
};

