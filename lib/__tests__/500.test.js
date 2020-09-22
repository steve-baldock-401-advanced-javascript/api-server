'use strict';

require('@code-fellows/supergoose');

const errorTest2 = require('../middleware/500.js');

it ('should send me back a message', () => {
  console.log(errorTest2, 'this is working');
});