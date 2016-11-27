const express = require('express');
const authRouter = express.Router();
const passport = require('passport');
const passportLocal = require('passport-local');
const User = require('../../db/models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(
  (id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user)
      })
      .catch(err => {
        done(err);
      });
  }
);

passport.use(new passportLocal.Strategy) (
  (email, password, done) => {
    User.findOne({where: {email}})
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Login incorrect' })
        }
        return user.authenticate(password)
          .then(ok => {
            if (!ok) {        
              return done(null, false, { message: 'Login incorrect' })
            }
            done(null, user);
          });
      })
      .catch(done);
  }
);

authRouter.get('/current-user', (req, res) => res.send(req.user))

authRouter.post('/:strategy/login', (req, res, next) =>
  passport.authenticate(req.params.strategy, {
    successRedirect: '/'
  })(req, res, next)
);

authRouter.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/api/auth/current-user');
});

module.exports = authRouter;
