const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.listen(port, () => {
  console.log(`This app is listening to ${port}`);
});
