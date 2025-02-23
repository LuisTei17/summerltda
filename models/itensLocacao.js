const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Veiculos = require('./veiculo');
const Justificativa = require('./justificativa');
const Socorro = require('./socorro');
const Manutencao = require('./manutencao');
const Status = require('./status');

const ItensLocacao = sequelize.define('ItensLocacao', {
  veiculoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Veiculos,
      key: 'id'
    }
  },
  tempo_contratado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horario_contratado: {
    type: DataTypes.DATE,
    allowNull: false
  },
  horario_chegada_estimado: {
    type: DataTypes.DATE,
    allowNull: false
  },
  horario_chegada: {
    type: DataTypes.DATE,
    allowNull: true
  },
  justificativaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Justificativa,
      key: 'id'
    },
    allowNull: true
  },
  socorroId: {
    type: DataTypes.INTEGER,
    references: {
      model: Socorro,
      key: 'id'
    },
    allowNull: true
  },
  manutencaoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Manutencao,
      key: 'id'
    },
    allowNull: true
  },
  motivo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  statusId: {
    type: DataTypes.INTEGER,
    references: {
      model: Status,
      key: 'id'
    }
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valor_hora: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  valor_item: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true
});

ItensLocacao.belongsTo(Veiculos, { foreignKey: 'veiculoId' });
ItensLocacao.belongsTo(Justificativa, { foreignKey: 'justificativaId' });
ItensLocacao.belongsTo(Socorro, { foreignKey: 'socorroId' });
ItensLocacao.belongsTo(Manutencao, { foreignKey: 'manutencaoId' });
ItensLocacao.belongsTo(Status, { foreignKey: 'statusId' });

module.exports = ItensLocacao;