'use strict';

//index wants stuff from server
const server = require('./lib/server.js');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/products';

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions);

// 
server.start();

// To Do List

// modularize category and product routes - Done
// Create mongoose schema and collections - Done
// connect index.js to Mongo with Mongoose - Done
// Require category and product router modules
// Create new category and product files with router module
// Router module should use express.Router
// Import and initialize Mongoose - 
// Create categories.schema.js and categories.collection.js - Done
// Schema file should define data model as a Mongoose schema - Working on what the object should include
// collection file should be a class that imports schema and exports - Done
// CRUD methods, coded to work with schema - Working
// read() performs a find() query in schema - Working
// Create() performs a save() query for new record - Working
// update() performs findOneByIDAndUpdate() operation for existing - Working
// delete() performs a findOneByIdAndDelete() for a new record - Working
// Testing - Unit tests for middleware
// Testing - Route tests for server - every route should respond with the right status code
// Testing - CRUD testing for collection classes
// Use Supergoose testing library to ensure that no data is persisted into a live database and that server need not be started



