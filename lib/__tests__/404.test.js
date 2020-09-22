'use strict';

require('@code-fellows/supergoose');

const errorTest = require('../middleware/404.js');

it ('should send me back a message', () => {
  console.log(errorTest, 'this is working');
});