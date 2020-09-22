'use strict';

class DataModel {
  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }

  post(info) {
    return this.schema.create(info);
  }

  put(id, info) {
    return this.schema.findByIdAndUpdate(id, info, { new: true });
  }

  patch(id, info) {
    return this.schema.findByIdAndUpdate(id, info, { new: true });
  }

  update(record) {
    // tbd
  }

  delete(id) {
    return this.schema.findByIdAndDelete(id);
  }

}

module.exports = DataModel;