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
    coin_code: 'USDT', // 固定为 USDT
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

### 收款地址

- 收款地址查询

> 接口文档：https://doc.tronapi.com/api/address/query.html

```js
  client.address.list().then((res)=> {
    console.info('res:', res); // 地址信息
  });
```

- 收款地址配置

> 接口文档：https://doc.tronapi.com/api/address/add.html

```js
  client.address.add('your wallet address').then((res)=> {
    console.info('res:', res); // 操作结果
  });
```

- 收款地址生成

> 接口文档：https://doc.tronapi.com/api/address/generate.html

```js
  client.address.generate().then((res)=> {
    console.info('res:', res); // 地址信息
  });
```

- 收款地址生成 & 替换

> 接口文档：https://doc.tronapi.com/api/address/generate_add.html

```js
  client.address.generate_add().then((res)=> {
    console.info('res:', res); // 地址信息
  });
```

### 账户

- 余额查询

> 接口文档：https://doc.tronapi.com/api/account/balance.html

```js
  client.account.balance().then((res)=> {
    console.info('res:', res); // 账户信息
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

- 可通过 [官网](https://doc.tronapi.com) `右下角` 反馈功能和我们取得联系。
- telegram: jackslowfak