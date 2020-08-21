'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  id: { type: Number, default: 'undefined', required: true },
  name: { type: String, default: 'no name', required: true },
  display_name: { type: String, default: 'no name', require: true},
  description: { type: String, default: 'no description', require: true },
});

module.exports = mongoose.model('categories', categories);