const ProductsModel = require('./products.schema.js');

// make a collection

class ProductsCollection {

  get(query) {
    return ProductsModel.find(query);
  }

  create(text) {
    const newProduct = new ProductsModel(text);
    return newProduct.save();
  }
  
  async delete(id) {
    try {
      await ProductsModel.findByIdAndDelete(id);
    } catch(err) {
      return Promise.resolve(false);
    }
  }
  
  // Don't think this is quite right!
  async update(id) {
    try {
      await ProductsModel.findByIdAndUpdate(id);
    } catch (err) {
      return Promise.resolve(false);
    }
  }
}
  

module.exports = ProductsCollection;