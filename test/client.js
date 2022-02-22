'use strict';

const Tronapi = require('../lib');

const tronapiClient = new Tronapi({
  host: 'https://pro.tronapi.com',
  public_key: '',
  private_key: '',
});

module.exports = tronapiClient;