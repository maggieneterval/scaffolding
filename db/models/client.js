const Sequelize = require('sequelize');
const db = require('../index');

const Client = db.define('client', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dob: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  sex: {
    type: Sequelize.STRING,
    validate: {
      isIn: [['male', 'female']],
    }
  },
  reasonForVisit: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: [0,1000]
    }
  },
  medications: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: [0,1000]
    }
  },
  hospitalizations: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: [0,1000]
    }
  },
  asthma: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  diabetes: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  heartDisease: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  highBloodPressure: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  kidneyDisease: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  seizures: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  stroke: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
});

module.exports = Client;