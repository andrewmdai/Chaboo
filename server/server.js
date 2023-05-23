const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const wordController = require('./controllers/wordController')

// const users = require('./routes/users')

const PORT = 3000;

//MongoDB password : 4lFU76XW1RG9hkVt

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://andrewmdai:4lFU76XW1RG9hkVt@chaboo.ffpeudp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function test() {
  // const data = await client.db().collection('chaboo').find({}).toArray();
  const data = await client.db().collection('chabooWords').find({}).toArray();
  // console.log('hello!')
  // console.log(data);
}

// test();

///

var axios = require('axios');
// var data = JSON.stringify({
//     "collection": "chabooWords",
//     "database": "chaboo",
//     "dataSource": "chaboo",
//     // "projection": {
//     //     "_id": 1
//     // }
// });
            
// var config = {
//     method: 'post',
//     url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rlror/endpoint/data/v1/action/find',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': 'l68HxTt3loOMm5K5g6IOzG1Ax5RQsNHNsOnkQxvQAMcPb9vJMufm1ZAPzCIpgM7b',
//     },
//     data: data
// };

// let words = [];
// let cache = [];

// axios(config)
//     .then(function (response) {
//         words = response.data.documents;
//         // console.log(JSON.stringify(response.data));
//         // console.log(response.data.documents)
//         // console.log(words)
//         words.forEach(element => cache.push(element))
//         console.log(cache)
//         // res.send(cache)
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


app.use(express.json());
// app.use(express.urlencoded());

app.use(express.static(path.resolve(__dirname, '../src')));

app.get('/api', (req, res) => {
  var data = JSON.stringify({
      "collection": "chabooWords",
      "database": "chaboo",
      "dataSource": "chaboo"
  });
              
  var config = {
      method: 'post',
      url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rlror/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'l68HxTt3loOMm5K5g6IOzG1Ax5RQsNHNsOnkQxvQAMcPb9vJMufm1ZAPzCIpgM7b',
      },
      data: data
  };
   
  axios(config)
      .then(function (response) {
          res.locals.words = response.data.documents;
          // console.log(res.locals.words)
          res.send(res.locals.words);
      })
      .catch(function (error) {
          console.log(error);
      });

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

// Chaboo words API key: l68HxTt3loOMm5K5g6IOzG1Ax5RQsNHNsOnkQxvQAMcPb9vJMufm1ZAPzCIpgM7b