const url = 'mongodb://localhost:27017/main';
const mongoose = require('mongoose');
mongoose.connect(url);

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: Number,
});
const Movie = mongoose.model('Movie', MovieSchema);

const CategorySchema = new mongoose.Schema({
  title: String,
})
const Category = mongoose.model('Category', CategorySchema);

app.post('/movies', async (req, res) => {
  try {
    const movie = await Movie.create({ title: 'Matrix', year: 1999 });
    return res.status(201).send('movie created');
  } catch {
    return res.status(400).json('bad request');
  }
})

app.post('/categories', async (req, res) => {
  try {
    const category = await Category.create({ title: 'Sci-Fi' })
    return res.status(201).send('category created');
  } catch {
    return res.status(400).json('bad request');
  }
})

app.get('/', (req, res) => {
  res.send('This is the list of movies');
})

app.put('/changemovie', (req, res) => {
  res.send('movie changed');
})

app.delete('/delmovie', (req, res) => {
  res.send('movie was deleted');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
