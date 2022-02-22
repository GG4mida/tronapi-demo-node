# Tronapi nodejs client.

这是 `tronapi` 的 `node.js` 开发包。用于简化商户接入 `tronapi` 的接口服务。

## 链接

- [接口文档](https://doc.tronapi.com)
- [商户登录](https://pro.tronapi.com)

## 安装

```bash
$ npm install tronapi-node --save
```

## 使用

```js
const Tronapi = require('tronapi-node');
const client = new Tronapi({
  public_key: 'your public key',
  private_key: 'your private key',
});
```

### 订单

- 订单创建

> 接口文档：https://doc.tronapi.com/api/transaction/create.html

```js
  client.transaction.create({
    amount: 100,
    currency: 'CNY', // CNY or USD
    coin_code: 'USDT', // USDT or FAU
    order_id: 'your order id',
  }).then((res)=> {
    console.info('res:', res); // 订单数据
  });
```

- 订单查询

> 接口文档：https://doc.tronapi.com/api/transaction/query.html

```js
  client.transaction.query({
    token: 'your transaction token'
  }).then((res)=> {
    console.info('res:', res); // 订单状态
  });
```

### 账户

- 账户查询

> 接口文档：https://doc.tronapi.com/api/wallet/query.html

```js
  client.account.query().then((res)=> {
    console.info('res:', res); // 账户信息
  });
```

- 提现申请

> 接口文档：https://doc.tronapi.com/api/wallet/withdrawal_create.html

```js
  client.account.withdrawal({
    amount: 99999,
    coin_code: 'USDT', // USDT or FAU
    address: 'TMjPvTqvtURND6Lm2xtzT9hbwHYeHnUUbh'
  }).then((res)=> {
    console.info('res:', res); // 提现信息
  });
```

- 提现查询

> 接口文档：https://doc.tronapi.com/api/wallet/withdrawal_query.html

```js
  client.account.withdrawal_query({
    token: 'your withdrawal token'
  }).then((res)=> {
    console.info('res:', res); // 提现状态
  });
```










## 测试

配置 `test/client.js` 中的 `public_key` & `private_key`，然后执行：

```bash
npm run test
```

or 

```bash
npm run test-cov
```

## 联系

可通过 [官网](https://doc.tronapi.com) `右下角` 反馈功能和我们取得联系。