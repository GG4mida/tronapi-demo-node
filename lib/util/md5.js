const Crypto = require('crypto');

const md5 = function(data) {
  const md5 = Crypto.createHash('md5');
  const hash = md5.update(data).digest('hex');
  return hash;
};

module.exports = md5;
