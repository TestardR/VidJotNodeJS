if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://admin:Under3128@ds113003.mlab.com:13003/vidjotprod'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
