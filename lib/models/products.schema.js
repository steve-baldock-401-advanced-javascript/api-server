'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String, default: 'no name', required: true },
  display_name: { type: String, default: 'no name', required: true},
  category: { type: String, required: true },
  description: { type: String, default: 'no description', required: true },
});

module.exports = mongoose.model('products', products);