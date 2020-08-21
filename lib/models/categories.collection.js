'use strict';

const schema = require('./categories.schema.js');
const dataModel = require('./model.js');

// make a collection

class CategoriesCollection extends dataModel {}

  

module.exports = new CategoriesCollection(schema);