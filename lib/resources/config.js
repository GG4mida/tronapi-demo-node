'use strict';

const PATH_ACCOUNT = {
  BALANCE: 'account/balance',
}

const PATH_ADDRESS = {
  ADD: 'address/add',
  LIST: 'address/list',
  GENERATE: 'address/generate',
  GENERATE_ADD: 'address/generate_add'
}

const PATH_TRANSACTION = {
  CREATE: 'transaction/create',
  QUERY: 'transaction/query'
}

const METHOD = {
  POST: 'POST',
  GET: 'GET'
}

module.exports = {
  PATH_ACCOUNT,
  PATH_ADDRESS,
  PATH_TRANSACTION,
  METHOD
}