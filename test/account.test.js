'use strict';

const client = require('./client');
const should = require('should');

describe('account.test.js', function () {
  describe('account.balance()', function () {
    it('should account.balance() works?', async function () {
      const res = await client.account.balance();
      res.success.should.equal(true);
    });
  });
});
