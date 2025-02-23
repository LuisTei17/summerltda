const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('summerbikes', 'root', 'p1cad1nh0', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;