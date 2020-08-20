const CategoriesModel = require('./categories.schema.js');

// make a collection

class CategoriesCollection {

  get(query) {
    return CategoriesModel.find(query);
  }

  create(text) {
    const newCategory = new CategoriesModel(text);
    return newCategory.save();
  }
  
  async delete(id) {
    try {
      await CategoriesModel.findByIdAndDelete(id);
    } catch(err) {
      return Promise.resolve(false);
    }
  }
  
  // Don't think this is quite right!
  async update(id) {
    try {
      await CategoriesModel.findByIdAndUpdate(id);
    } catch (err) {
      return Promise.resolve(false);
    }
  }
}
  

module.exports = CategoriesCollection;