import path from 'path';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
// import mongoose from 'mongoose';
import axios from 'axios';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(cors());

app.use('/api', (req, res) => {
  console.log('in api')
  var data = JSON.stringify({
    collection: 'chabooWords',
    database: 'chaboo',
    dataSource: 'chaboo',
  });

  var config = {
    method: 'get',
    url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rlror/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'process.env.MONGO_API',
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
      res.status(500).send({ error: 'An error occurred while fetching data from the API' });
    });
});

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../dist/index.html')),
);

// Catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
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
