'use strict';

const assert = require('assert');
const axios = require('axios');
const { Account, Transaction, Address } = require('./resources');
 
class Tronapi {
  host = '';
  public_key = '';
  private_key = '';

  transaction = null;
  account = null;
  address = null;

  get fetcher() {
    const instance = axios.create();
    instance.interceptors.response.use(resp => {
      return resp?.data || {};
    });
    return instance;
  }

  constructor(options) {
    const { host = 'https://pro.tronapi.com', public_key = '', private_key = '' } = options;

    assert.notEqual('', host, 'host is required');
    assert.notEqual('', public_key, 'public_key is required');
    assert.notEqual('', private_key, 'private_key is required');

    this.host = host;
    this.public_key = public_key;
    this.private_key = private_key;

    this.account = new Account(this);
    this.address = new Address(this);
    this.transaction = new Transaction(this);
  }

  request(method, path, data = {}) {
    const url = this._buildUrl(path);
    return this.fetcher({
      url,
      data,
      params: data,
      method,
      timeout: 3000,
      responseType: 'json',
    }).catch(error => {
      throw error;
    });
  }

  _buildUrl(path) {
    return `${this.host}/api/${path}`;
  }
}

 module.exports = Tronapi;