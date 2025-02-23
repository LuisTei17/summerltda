const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Justificativa = sequelize.define('Justificativa', {
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

module.exports = Justificativa;