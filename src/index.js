const express = require('express');
const { connect } = require('mongoose');
 const mongoose = require('mongoose');
const redis = require('redis');
//const { Client } = require('pg');
 
// init app
port = 3000; 
const app = express();
// connect to redis
const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', (err) => console.log('redis client error', err));
redisClient.on('connect', (err) => console.log('connected to redis...', err));
redisClient.connect();

console.log("🚀 Modification test !");


//connect to postgres
// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 5432;
// const DB_HOST = 'postgres';

// const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

// const client = new Client({
//   connectionString: URI,
// });

// client.connect().then(() => console.log('connected to postgres...')).catch((err) => console.log('failed', err))


//connect db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017;
const DB_HOST = 'mongo'
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URL).then(() => console.log('connect to db...')).catch((err) => console.log('failed', err))

app.get('/', (req, res) => {

    redisClient.set('products','producis...');
    res.send('<h1>Hello aigle    word! hiouat hi dev </h1>')
});
app.get('/data', async(req, res) => {

    const products = await redisClient.get('products')
    res.send(`<h1>Hello aigle    word! hiouat hi dev </h1> <h2>${products}</h2>`)
});
app.get('/about', (req, res) => res.send('<h1>About Us</h1>'));

app.listen(port, () => console.log(`Server is running on port ${port}`));  

