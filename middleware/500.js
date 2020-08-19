'use stict';

module.exports = (req,res,next) => {
  console.log('Server Error');
  res.status(500);
  res.send('Server Error');
  res.end();
};