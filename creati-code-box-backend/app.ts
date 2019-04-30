import express from 'express';

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!!');
});

app.listen(3000, function() {
  console.log('Start listening on port 3000!');
  console.log('http://localhost:3000');
});
