const sequelize = require('./models/index');
const Clientes = require('./models/cliente');
const CategoriasVeiculo = require('./models/categoriasVeiculo');
const Veiculos = require('./models/veiculo');
const Lojas = require('./models/loja');
const Funcionarios = require('./models/funcionario');
const Status = require('./models/status');
const Manutencao = require('./models/manutencao');
const Justificativa = require('./models/justificativa');
const Socorro = require('./models/socorro');
const Acessorios = require('./models/acessorios');
const AcessoriosLocacao = require('./models/acessoriosLocacao');
const ItensLocacao = require('./models/itensLocacao');
const Locacao = require('./models/locacao');

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});