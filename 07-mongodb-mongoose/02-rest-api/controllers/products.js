const Product = require('../models/Product');

module.exports.productsBySubcategory = async function productsBySubcategory(ctx, next) {
  if (!ctx.request.query.subcategory) return next();
  const products = await Product.find({subcategory: ctx.request.query.subcategory});
  ctx.body = {products: products};
};

module.exports.productList = async function productList(ctx, next) {
  const products = await Product.find({});
  if (products.length === 0) ctx.body = {products: []};
  else ctx.body = {products: products};
};

module.exports.productById = async function productById(ctx, next) {
  if (ctx.request.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    const product = await Product.findOne({_id: ctx.request.params.id});

    if (!product) {
      return ctx.response.status=404;
    }

    ctx.body = {product: product};
  } else {
    ctx.response.status=400;
    return new Error();
  }
};

