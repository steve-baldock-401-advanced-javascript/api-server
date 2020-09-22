'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories.js');
const products = require('../models/products.js');
const todo = require('../models/todo.js');

function getModel(req, res, next) {
  let model = req.params.model;

  switch (model) {
    case 'todo':
      req.model = todo;
      next();
      return;
    case 'categories':
      req.model = categories;
      next();
      return;
    case 'products':
      req.model = products;
      next();
      return;
    default:
      next('Invalid Model');
      return;
  }
}

router.param('model', getModel);

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.put('/api/v1/:model/:id', handlePatch);
router.delete('/api/v1/:model/:id', handleDelete);

function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handlePost(req, res, next) {
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(record => res.json(record))
    .catch(next);
}

function handlePut(req, res, next) {
  let id = req.params.id;
  req.model
    .put(id, req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePatch(req, res, next) {
  let id = req.params.id;
  req.model
    .patch(id, req.body)
    .then(result => res.json(result))
    .catch(next);
}

async function handleDelete(req, res, next) {
  try {
    let id = req.params.id;
    const result = await req.model.delete(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
}


module.exports = router;