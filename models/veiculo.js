const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const CategoriaVeiculo = require('./categoriasVeiculo');
const Loja = require('./loja');

const Veiculo = sequelize.define('Veiculo', {
  imagem: {
    type: DataTypes.STRING,
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  chassi: {
    type: DataTypes.STRING,
    allowNull: true
  },
  km_rodado: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rastreador: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  fornecedor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nota_fiscal: {
    type: DataTypes.STRING,
    allowNull: false
  },
  custo: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoriaId: {
    type: DataTypes.INTEGER,
    references: {
      model: CategoriaVeiculo,
      key: 'id'
    }
  },
  lojaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Loja,
      key: 'id'
    }
  }
}, {
  timestamps: true
});

Veiculo.belongsTo(CategoriaVeiculo, { foreignKey: 'categoriaId' });
Veiculo.belongsTo(Loja, { foreignKey: 'lojaId' });

module.exports = Veiculo;