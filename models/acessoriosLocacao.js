const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Acessorios = require('./acessorios');
const Locacao = require('./locacao');

const AcessoriosLocacao = sequelize.define('AcessoriosLocacao', {
  acessorioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Acessorios,
      key: 'id'
    }
  },
  locacaoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Locacao,
      key: 'id'
    }
  }
}, {
  timestamps: true
});

AcessoriosLocacao.belongsTo(Acessorios, { foreignKey: 'acessorioId' });
AcessoriosLocacao.belongsTo(Locacao, { foreignKey: 'locacaoId' });

module.exports = AcessoriosLocacao;