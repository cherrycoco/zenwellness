const express = require('express')
const app = express()
const path = require('path');

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(express.static(path.join(__dirname, '../../build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
 });
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../../build/index.html'));
 });

app.listen(3000, () => console.log('Example app listening on port 3000!'))