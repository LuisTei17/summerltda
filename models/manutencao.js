const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Manutencao = sequelize.define('Manutencao', {
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

module.exports = Manutencao;