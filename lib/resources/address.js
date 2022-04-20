'use strict';

const assert = require('assert');
const md5 = require('../util/md5');
const { PATH_ADDRESS, METHOD } = require('./config');

class Address {
  client = null;

  constructor(client) {
    this.client = client;
  }

  list() {
    const signatureStr = this.client.public_key + this.client.private_key;
    const signature = md5(signatureStr).toLowerCase();
    const data = {
      public_key: this.client.public_key,
      signature
    }
    return this.client.request(METHOD.GET, PATH_ADDRESS.LIST, data);
  }

  add(address) {
    assert.notEqual('', address, 'address is required');
    const signatureStr = this.client.public_key + address + this.client.private_key;
    const signature = md5(signatureStr).toLowerCase();
    const data = {
      public_key: this.client.public_key,
      address,
      signature
    }
    return this.client.request(METHOD.POST, PATH_ADDRESS.ADD, data);
  }

  generate() {
    const signatureStr =
      this.client.public_key +
      this.client.private_key;

    const signature = md5(signatureStr).toLowerCase();

    const data = {
      signature,
      public_key: this.client.public_key
    }

    return this.client.request(METHOD.POST, PATH_ADDRESS.GENERATE, data);
  }

  generate_add() {
    const signatureStr =
      this.client.public_key +
      this.client.private_key;

    const signature = md5(signatureStr).toLowerCase();

    const data = {
      signature,
      public_key: this.client.public_key
    }

    return this.client.request(METHOD.POST, PATH_ADDRESS.GENERATE_ADD, data);
  }
}

module.exports = Address;