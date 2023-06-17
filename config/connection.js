require('dotenv').config();

const { Sequelize } = require('sequelize');

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASSWORD;

console.log('DB_NAME :: ', db_name);
console.log('DB_USER :: ', db_user);
console.log('DB_PASS :: ', db_pass);


const sequelize = new Sequelize(db_name, db_user, db_pass, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;