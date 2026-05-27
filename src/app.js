const express = require('express');
const app = express();

app.use(express.json());

// Route 1: Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'CI/CD Demo API is running!' });
});

// Route 2: Add two numbers
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: a + b });
});

// Route 3: Reverse a string
app.post('/reverse', (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'text field is required' });
  }
  res.json({ result: text.split('').reverse().join('') });
});

module.exports = app;
