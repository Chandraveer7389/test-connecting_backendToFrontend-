require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const jokes = [
  {
    id: 1,
    element: "Why don't programmers like nature?",
    joke: "It has too many bugs."
  },
  {
    id: 2,
    element: "What's the object-oriented way to become wealthy?",
    joke: "Inheritance."
  },
  {
    id: 3,
    element: "Why did the scarecrow win an award?",
    joke: "Because he was outstanding in his field."
  },
  {
    id: 4,
    element: "How many programmers does it take to change a light bulb?",
    joke: "None. It's a hardware problem."
  },
  {
    id: 5,
    element: "Why was the JavaScript developer sad?",
    joke: "Because he didn't Node how to Express himself."
  }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/jokes', (req, res) => {

  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app http://localhost:${port}/`)
})
