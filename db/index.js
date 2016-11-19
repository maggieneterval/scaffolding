const Sequelize = require('sequelize');

const db_url = process.env.DATABASE_URL || 'postgres://localhost:5432/patient_questionnaire';

const db = new Sequelize(db_url, {
  define: {
    timestamps: true
  }
});

module.exports = db;
