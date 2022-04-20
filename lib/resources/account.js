'use strict';

const md5 = require('../util/md5');
const { PATH_ACCOUNT, METHOD } = require('./config');

class Account {
  client = null;

  constructor(client) {
    this.client = client;
  }

  balance() {
    const signatureStr = this.client.public_key + this.client.private_key;
    const signature = md5(signatureStr).toLowerCase();
    const data = {
      public_key: this.client.public_key,
      signature
    }
    return this.client.request(METHOD.GET, PATH_ACCOUNT.BALANCE, data);
  }
}

module.exports = Account;