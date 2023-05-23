const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// const users = require('./routes/users')

const PORT = 3000;

app.use(express.json());
// app.use(express.urlencoded());

app.use(express.static(path.resolve(__dirname, '../src')));

const mongoURI =
    // ? 'mongodb://localhost/unit11test'
    // : 'mongodb://localhost/unit11dev';
mongoose.connect(mongoURI);

// app.use('/api/user', users);

app.get('/api', (req, res) => {
    res.send('hello world from exporesds!');
})

app.get('/about', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../src/about.html')));

app.get('/play', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../src/play.html')));


app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../src/index.html')));

// catch-all route handler for any requests to an unknown route
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
