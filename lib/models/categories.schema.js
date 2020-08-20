'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  // Need to define model for collection
  category: { type: String, default: 'general', required:
  true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('categories', categories);