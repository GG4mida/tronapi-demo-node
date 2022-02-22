'use strict';

const client = require('./client');
const should = require('should');
const stringRandom = require('string-random');

describe('transaction.test.js', function () {
  describe('transaction.create()', function () {
    it('should return transaction data', async function () {
      const res = await client.transaction.create({
        amount: 100,
        currency: 'CNY',
        coin_code: 'FAU',
        order_id: stringRandom(12),
      });

      res.success.should.equal(true);
      res.data.should.have.keys(
        'token', 
        'amount', 
        'currency', 
        'coin_code', 
        'coin_amount', 
        'coin_address',
        'qrcode_url', 
        'cashier_url', 
        'signature', 
        'timeout'
      );
    });
  });

  describe('transaction.query()', function () {
    it('should return transaction info', async function () {
      const res = await client.transaction.query({
        token: '2cb78fae349641c692d1fd9ddf1da61f'
      });

      res.success.should.equal(false);
      res.data.should.equal('未查询到订单信息');
    });
  });
});
