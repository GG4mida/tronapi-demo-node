'use strict';

const assert = require('assert');
const md5 = require('../util/md5');
const { PATH_ACCOUNT, METHOD } = require('./config');

class Account {
  client = null;

  constructor(client) {
    this.client = client;
  }

  query() {
    const signatureStr = this.client.public_key + this.client.private_key;
    const signature = md5(signatureStr).toLowerCase();
    const data = {
      public_key: this.client.public_key,
      signature
    }
    return this.client.request(METHOD.GET, PATH_ACCOUNT.QUERY, data);
  }

  withdrawal(params) {
    const {
      amount = '',
      address = '',
      coin_code = '',
      notify_url = '',
    } = params;

    assert.notEqual('', amount, 'amount is required');
    assert.notEqual('', address, 'address is required');
    assert.notEqual('', coin_code, 'coin_code is required');

    const signatureStr =
      coin_code +
      amount + 
      address + 
      notify_url +
      this.client.public_key +
      this.client.private_key;

    const signature = md5(signatureStr).toLowerCase();

    const data = {
      amount,
      address,
      coin_code,
      notify_url,
      signature,
      public_key: this.client.public_key
    }

    return this.client.request(METHOD.POST, PATH_ACCOUNT.WITHDRAWAL, data);
  }

  withdrawal_query(params) {
    const { token } = params;
    assert.notEqual('', token, 'token is required');
    const data = {
      token
    };
    return this.client.request(METHOD.GET, PATH_ACCOUNT.WITHDRAWAL_QUERY, data);
  }
}

module.exports = Account;