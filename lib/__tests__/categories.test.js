'use strict';

const server = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const categories = require('../models/categories.js');

const mockRequest = supergoose(server);

beforeEach(async () => {
  await categories.schema.deleteMany({});
});