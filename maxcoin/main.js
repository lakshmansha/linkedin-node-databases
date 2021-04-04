/* eslint-disable no-unused-vars */

const CoinAPI = require("./services/CoinAPI");
const MongoBackend = require('./services/backend/MongoBackend');
const RedisBackend = require('./services/backend/RedisBackend');

async function runCoin() {
  const coinAPI = new CoinAPI();
  return coinAPI.fetch();
}

async function runMongo() {
  const mongoBackend = new MongoBackend();
  return mongoBackend.max();
}


async function runRedis() {
  const redisBackend = new RedisBackend();
  return redisBackend.max();
}

runRedis()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));
