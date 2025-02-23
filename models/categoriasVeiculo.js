const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const CategoriasVeiculo = sequelize.define('CategoriasVeiculos', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true
});

module.exports = CategoriasVeiculo;