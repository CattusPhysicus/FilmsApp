const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is the list of films')
})

app.post('/addfilm', (req, res) => {
  res.send('Film added')
})

app.put('/changefilm', (req, res) => {
  res.send('Film changed')
})

app.delete('/delfilm', (req, res) => {
  res.send('Film was deleted')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
