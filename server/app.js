const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/api/clients', (req, res) => {
  //post client data to db
  console.log('req.body: ', req.body);
  res.sendStatus(201);
})

app.listen(process.env.PORT || 8080);
