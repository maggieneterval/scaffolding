const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join('public')));
app.use(express.static(path.join('build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.listen(process.env.PORT || 8080);
