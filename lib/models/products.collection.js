'use strict';


const schema = require('./products.schema.js');
const dataModel = require('./models/model.js');



class ProductsCollection extends dataModel { }


module.exports = new ProductsCollection(schema);