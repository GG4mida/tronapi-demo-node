'use strict';

const assert = require('assert');
const md5 = require('../util/md5');
const { PATH_TRANSACTION, METHOD } = require('./config');

class Transaction {
  client = null;

  constructor(client) {
    this.client = client;
  }

  create(params) {
    const {
      amount = '',
      currency = '',
      coin_code = '',
      order_id = '',
      product_name = '',
      customer_id = '',
      notify_url = '',
      redirect_url = ''
    } = params;

    assert.notEqual('', amount, 'amount is required');
    assert.notEqual('', currency, 'currency is required');
    assert.notEqual('', coin_code, 'coin_code is required');
    assert.notEqual('', order_id, 'order_id is required');

    const signatureStr =
      amount +
      currency +
      coin_code +
      order_id +
      product_name +
      customer_id +
      notify_url +
      redirect_url +
      this.client.public_key +
      this.client.private_key;

    const signature = md5(signatureStr).toLowerCase();;

    const data = {
      amount,
      currency,
      coin_code,
      order_id,
      product_name,
      customer_id,
      notify_url,
      redirect_url,
      signature,
      public_key: this.client.public_key
    }

    return this.client.request(METHOD.POST, PATH_TRANSACTION.CREATE, data);
  }

  query(params) {
    const { token } = params;
    assert.notEqual('', token, 'token is required');
    const data = {
      token
    };
    return this.client.request(METHOD.GET, PATH_TRANSACTION.QUERY, data);
  }
}

module.exports = Transaction;