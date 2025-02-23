const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Socorro = sequelize.define('Socorro', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Socorro;