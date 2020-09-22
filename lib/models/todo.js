'use strict';


const schema = require('./todo-schema.js');
const dataModel = require('./model.js');

class Todo extends dataModel { }

module.exports = new Todo(schema);