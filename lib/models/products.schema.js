'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  // Need to define model for collection
  product: { type: String, default: 'general', required:
  true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('products', products);