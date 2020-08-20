'use strict';

// Server setup
const express = require('express');
require('dotenv').config();
const app = express();

// Import Product and Category Routes
const categoryRoutes = require('./routes/categories.js');
const productRoutes = require('./routes/products.js');


// Importing Middleware files
const requestTime = require('./middleware/timestamp.js');
const logger = require('./middleware/logger.js');
const notfound = require('./middleware/404.js');
const servererror = require('./middleware/500.js');

// Global Middleware - Before ALL requests to parse body
app.use(express.json()); 

// Middleware for lab
app.use(requestTime);
app.use(logger);

// Custom Routes imported above
app.use('/api/vi', categoryRoutes);
app.use('/api/vi', productRoutes);


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
