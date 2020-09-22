'use strict';

const mongoose = require('mongoose');

const todo = mongoose.Schema({
  text: { type: String, required: true },
  assignee: { type: String },
  complete: { type: Boolean, default: false },
  difficult: { type: Number, default: 1 },
});

module.exports = mongoose.model('todo', todo);