'use stict';

module.exports = (req, res, next) => {
  req.requestTime = Date.now();
  res.status(200).send('success');
  next();
};
