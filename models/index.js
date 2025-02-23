const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('summerbikes', 'summerbikes', 'p1cad1nh0', {
  host: 'mysql.summerbikes.kinghost.net',
  dialect: 'mysql'
});

module.exports = sequelize;