'use strict'
//https://gist.github.com/ksmithut/e126f7ddb40b760487a17e8b569a77b5
//docker-compose up --build

const express = require('express')
const { Client } = require('pg');
const connectionString = 'postgres://postgres:docker@172.17.0.2:5432/postgres';
const client = new Client({
    connectionString: connectionString
});
client.connect();

const { PORT = '3000' } = process.env
const app = express()

app.get('/', (req, res) => {
  res.status(200).send("I am Hung Ha");
});

app.get('/data', (req, res) => {
  client.query('SELECT * FROM users where id <> $1', [3], function (err, result) {
    if (err) {
        res.status(400).send(err);
    }
    console.log("Haha");
    res.status(200).send(result.rows);
  });
});

app.listen(PORT)