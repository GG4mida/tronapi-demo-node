'use strict';

const PATH_ACCOUNT = {
  QUERY: 'wallet/query',
  WITHDRAWAL: 'wallet/withdrawal',
  WITHDRAWAL_QUERY: 'wallet/withdrawal/query'
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
  PATH_TRANSACTION,
  METHOD
}