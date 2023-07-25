const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

var axios = require('axios');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/api', (req, res) => {
  var data = JSON.stringify({
    collection: 'chabooWords',
    database: 'chaboo',
    dataSource: 'chaboo',
  });

  var config = {
    method: 'post',
    url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rlror/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGO_API,
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      res.locals.words = response.data.documents;
      res.send(res.locals.words);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')),
);

// Catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
