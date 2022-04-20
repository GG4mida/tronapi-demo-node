'use strict';

const client = require('./client');
const should = require('should');

describe('address.test.js', function () {

  describe('address.list()', function () {
    it('should address.list() works?', async function () {
      const res = await client.address.list();
      res.success.should.equal(true);
    });
  });

  describe('address.add()', function () {
    it('should address.add() works?', async function () {
      const address = 'TGeztTUmWpcgHp4BCs1j6fdpa3dsqX8gJB';
      const res = await client.address.add(address);
      res.success.should.equal(true);
      res.data.should.equal(true);
    });
  });

  describe('address.generate()', function () {
    it('should address.generate() works?', async function () {
      const res = await client.address.generate();
      res.success.should.equal(true);
      res.data.should.have.keys(
        'privateKey'
      );
    });
  });

  describe('address.generate_add()', function () {
    it('should address.generate_add() works?', async function () {
      const res = await client.address.generate_add();
      res.success.should.equal(true);
      res.data.should.have.keys(
        'privateKey'
      );
    });
  });
});
