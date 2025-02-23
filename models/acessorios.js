const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Lojas = require('./loja');

const Acessorios = sequelize.define('Acessorios', {
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  lojaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Lojas,
      key: 'id'
    }
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

Acessorios.belongsTo(Lojas, { foreignKey: 'lojaId' });

module.exports = Acessorios;