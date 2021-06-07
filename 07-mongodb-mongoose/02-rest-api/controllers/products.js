const Product = require('../models/Product');

module.exports.productsBySubcategory = async function productsBySubcategory(ctx, next) {
  const {subcategory} = ctx.request.query;
  console.log(ctx.request.query); // тут пусто =( и тут проходит тест
  // 'если товаров не найдено - должен возвращаться пустой массив'
  const products = await Product.find({subcategory: subcategory});
  ctx.body = {products: products};
  next();
};

module.exports.productList = async function productList(ctx, next) {
  console.log(await Product.find({}));
  const products = await Product.find({});
  if (products.length === 0) ctx.body = {products: []};
  else ctx.body = {products: products};
};

module.exports.productById = async function productById(ctx, next) {
  console.log(ctx.request.query.id);
  if (ctx.request.query.id instanceof Product.Types.ObjectId ) {
    ctx.body = {product: await Product.find({id: ctx.request.params.id})};
  } else {
    ctx.response.status=400;
    throw new Error();
  }
};

