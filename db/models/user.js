const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const Promise = require('bluebird');
const db = require('../index');

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  },
  password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL
}, {
	indexes: [{fields: ['email'], unique: true,}],
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate (plaintext) {
      return new Promise ((resolve, reject) => {
        bcrypt.compare(plaintext, this.password_digest, (err, result) => {
          err ? reject(err) : resolve(result);
        });
      });
    }
  }
});

function setEmailAndPassword (user) {
  user.email = user.email.toLowerCase();
  return new Promise((resolve, reject) => {
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) reject(err);
      user.set('password_digest', hash);
      resolve(user);
    });
  });
}

module.exports = User;
