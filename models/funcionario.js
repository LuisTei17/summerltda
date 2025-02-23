const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Loja = require('./loja');

const Funcionario = sequelize.define('Funcionarios', {
  eh_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
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

Funcionario.belongsTo(Loja, { foreignKey: 'lojaId' });

module.exports = Funcionario;