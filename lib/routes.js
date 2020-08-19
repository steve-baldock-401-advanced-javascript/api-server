'use stict'

// this example takes the place of code formerly on server.js
const express = require('express');
const fruitRouter = express.Router();

fruitRouter.get('/fruit', (req, res) => {
  let output =  {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});

// this is a route example
fruitRouter.get('/fruit', (req, res) => { 
  let output = {
    type: req.query.type || 'unknown',
  };
  res.status(200).json(output);
});


// another example (colon here means the type is available as a variable - whatever you put in after the fruit/)
fruitRouter.get('/fruit/:type', (req, res) => {
  let output = {
    type: req.params.type, 
  };
  res.status(200).json(output);
});

// Post example
fruitRouter.post('/fruit', (req, res) => {
  console.log('What got added?', req.body);
  res.status(201).send('ok');
});

module.exports = fruitRouter;