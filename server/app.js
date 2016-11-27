const express = require('express');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const cookieSession = require('cookie-session');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db');
const User = require('../db/models/client');
const apiRouter = require('./api');
const app = express();

//---------------------STORE SESSION ON COOKIE---------------------//

app.use(cookieSession)({
  name: 'session',
  keys: [process.env.SESSION_SECRET || 'an insecure secret key'],
});

//---------------------STATIC ROUTING---------------------//

app.use(express.static('public'));

//---------------------BODY PARSING MIDDLEWARE---------------------//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//---------------------PASSPORT MIDDLEWARE---------------------//

app.use(passport.initialize());
app.use(passport.session());

//---------------------API ROUTES---------------------//

app.use('/api', apiRouter);

//---------------------SERVE INDEX.HTML---------------------//

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//---------------------HANDLE ERRORS---------------------//

app.use((err, req, res) => {
  console.error(err.stack);
  res.sendStatus(500);
});

//---------------------SYNC DATABASE---------------------//

db.sync().then(() => {
  console.log('Let\'s go!');
  app.listen(process.env.PORT || 8080);
});
