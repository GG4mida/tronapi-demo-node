'use strict';

const Tronapi = require('../lib');

const tronapiClient = new Tronapi({
  public_key: '', // your public key
  private_key: '', // your private key
});

module.exports = tronapiClient;