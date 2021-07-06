const mongoose = require('mongoose');
const connection = require('../libs/connection');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },

  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  images: [String],

}, {
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function(doc, ret) {
      delete ret._id;
    },
  },
});

module.exports = connection.model('Product', productSchema);
