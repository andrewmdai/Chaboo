import path from 'path';
import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, '../client'))); // Development
app.use(cors());


app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')), // Development
  // res.status(200).sendFile(path.resolve(__dirname, '../index.html')), // Production
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
  console.log(`Server online, listening on Port ${PORT}`);
});

export default app;