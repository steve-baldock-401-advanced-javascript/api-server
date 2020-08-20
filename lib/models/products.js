
'use strict';

const express = require('express');

// Do I create a class for this?
// const products = require('./products.collection.js');

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', postProducts);

function getProducts(req, res, next) {
  products.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postProducts(req, res, next) {
  products.post()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;

// // Product Routes
// app.post('/products', (req, res) => {
//   console.log('Hello, is this thing running?');
//   res.status(201).send('ok');
// });
// app.get('/products', (req, res) => {
//   console.log(req.param);
//   console.log(req.query);
//   console.log(typeof req.param.id, req.param.id);
//   res.send('ok');
// });
// app.get('/products/:id', (req, res) => {
//   console.log(req.paramm);    
//   console.log(req.query);
//   console.log(typeof req.param.id, req.param.id);
//   res.send('ok');
// });
// app.put('/products/:id', (req, res) => {
//   console.log(req.body);
// });
// app.delete('/products/:id', (req, res) => {
//   console.log(req.body);
// });