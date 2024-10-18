const url = 'mongodb://localhost:27017/main';
const { MongoClient } = require('mongodb');
const client = new MongoClient(url);
client.connect();

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the list of movies');
})

app.post('/movies', async (req, res) => {
  try {
    await client.db('main').collection('movies').insertOne(req.body);
    return res.status(201).send('movie created');
  } catch {
    return res.status(400).json('bad request');
  }
})

app.put('/changemovie', (req, res) => {
  res.send('movie changed');
})

app.delete('/delmovie', (req, res) => {
  res.send('movie was deleted');
})

app.post('/categories', async (req, res) => {
  try {
    await client.db('main').collection('categories').insertOne(req.body);
    return res.status(201).send('category created');
  } catch {
    return res.status(400).json('bad request');
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
