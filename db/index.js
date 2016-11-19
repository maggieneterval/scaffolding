const Sequelize = require('sequelize');

//if not in production, run postgres locally and create db named 'patient_questionnaire'
const db_url = process.env.DATABASE_URL || 'postgres://localhost:5432/patient_questionnaire';

const db = new Sequelize(db_url, {
  define: {
    timestamps: true
  }
});

module.exports = db;
