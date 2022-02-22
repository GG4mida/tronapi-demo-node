'use strict';

const client = require('./client');
const should = require('should');

describe('account.test.js', function () {
  describe('account.query()', function () {
    it('should return account info', async function () {
      const res = await client.account.query();

      res.success.should.equal(true);
      res.data.should.have.keys(
        'length'
      );
    });
  });

  describe('account.withdrawal()', function () {
    it('should return withdrawal data', async function () {
      const res = await client.account.withdrawal({
        amount: 99999,
        coin_code: 'FAU',
        address: 'TMjPvTqvtURND6Lm2xtzT9hbwHYeHnUUah'
      });

      res.success.should.equal(false);
      res.data.should.equal('提现金额不能高于钱包余额');
    });
  });

  describe('account.withdrawal_query()', function () {
    it('should return withdrawal info', async function () {
      const res = await client.account.withdrawal_query({
        token: '2cb78fae349641c692d1fd9ddf1da61f'
      });

      res.success.should.equal(false);
      res.data.should.equal('未查询到提现信息');
    });
  });
});
