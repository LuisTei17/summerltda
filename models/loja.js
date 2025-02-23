const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Loja = sequelize.define('Lojas', {
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Loja;