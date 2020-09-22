'use strict';

// Server setup
const express = require('express');
require('dotenv').config();

// Importing Middleware files
const requestTime = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notfound = require('./middleware/404.js');
const servererror = require('./middleware/500.js');

// Custom Route Import
const apiRouter = require('./routes/api.js');

const app = express();

// Global Middleware - Before ALL requests to parse body
app.use(express.json()); 

// New API Route for both products and categories
app.use(apiRouter);

// Timestamp and Logger
app.use(requestTime);
app.use(logger);

// 505 middleware to run as last "used" route
app.use('*', servererror);
// 404 middleware to run after all  other routes
app.use(notfound);

// turn on server for index.js
module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
