'use strict';

// Server setup
const express = require('express');
require('dotenv').config();
const app = express();

// Importing Middleware files
const requestTime = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notfound = require('./middleware/404.js');
const servererror = require('./middleware/500.js');

// Routes for Categories
app.post('/categories', (req, res) => {});
app.get('/categories',  (req, res) => {
  res.send('These are categories');
});
app.get('/categories/:id', (req, res) => {
  res.send('These are category ids');
});
app.put('/categories/:id',  (req, res) => {
  res.send('We want to change something here');
});
app.delete('/categories/:id', (req, res) => {
  res.send('We want to delete something here');
});

// Routes for Products
app.post('/products', (req, res) => {
  console.log('Hello, is this thing running?');
  res.status(201).send('ok');
});
app.get('/products', (req, res) => {
  res.send(req.body);
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});
app.get('/products/:id', (req, res) => {
  console.log(req.body);
});
app.put('/products/:id', (req, res) => {
  console.log(req.body);
});
app.delete('/products/:id', (req, res) => {
  console.log(req.body);
});


// Global Middleware
app.use(express.json()); // step in front of ALL requests, inspect it for a body and parse as needed and include it on the request

// Middleware for lab
app.use(requestTime);
app.use(logger);


// 505 middleware to run as last "used" route
app.use(servererror);
// 404 middleware to run after all  other routes
app.use(notfound);

// turn on server for index.js
module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};



// example middleware 
// app.use(getBrowser)
// function getBrowser(req, res, next) {
  //   req.browser = req.headers['user-agent']; // user-agent - 
  //   next();
  // }