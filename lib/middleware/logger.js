'use stict';

module.exports = (req, res, next) => {
  console.log(req.requestTime);
  next();
};