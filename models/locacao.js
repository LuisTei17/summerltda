const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Funcionarios = require('./funcionario');
const Clientes = require('./cliente');
const ItensLocacao = require('./itensLocacao');

const Locacao = sequelize.define('Locacoes', {
  funcionarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Funcionarios,
      key: 'id'
    }
  },
  clienteId: {
    type: DataTypes.INTEGER,
    references: {
      model: Clientes,
      key: 'id'
    }
  },
  locacaoItemId: {
    type: DataTypes.INTEGER,
    references: {
      model: ItensLocacao,
      key: 'id'
    }
  },
  valor_total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  pix: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  debito: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  credito: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  dinheiro: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  desconto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  valor_cobrado: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true
});

Locacao.belongsTo(Funcionarios, { foreignKey: 'funcionarioId' });
Locacao.belongsTo(Clientes, { foreignKey: 'clienteId' });
Locacao.belongsTo(ItensLocacao, { foreignKey: 'locacaoItemId' });

module.exports = Locacao;