const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Status = sequelize.define('Status', {
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

module.exports = Status;