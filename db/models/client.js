const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('client', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;