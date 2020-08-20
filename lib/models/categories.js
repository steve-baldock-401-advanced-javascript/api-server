'use strict';

const express = require('express');

// Do I create a class for this?
// const categories = require('./categories.collection.js');

const router = express.Router();

router.get('/categories', getCategories);
router.post('/categories', postCategories);

function getCategories(req, res, next) {
  categories.get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function postCategories(req, res, next) {
  categories.post()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;


// app.post('/categories', (req, res) => {});
// app.get('/categories',  (req, res) => {
//   console.log(req.param);
//   console.log(req.query);
//   console.log(typeof req.param.id, req.param.id);
//   res.send('ok');
// });
// app.get('/categories/:id', (req, res) => {
//   console.log(req.param);
//   console.log(req.query);
//   console.log(typeof req.param.id, req.param.id);
//   res.send('ok');
// });
// app.put('/categories/:id',  (req, res) => {
//   res.send('We want to change something here');
// });
// app.delete('/categories/:id', (req, res) => {
//   res.send('We want to delete something here');
// });