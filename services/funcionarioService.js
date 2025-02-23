const Funcionario = require('../models/funcionario');

const createFuncionario = async (data) => {
  return await Funcionario.create(data);
};

const getAllFuncionarios = async () => {
  return await Funcionario.findAll();
};

const getFuncionarioById = async (id) => {
  return await Funcionario.findByPk(id);
};

const updateFuncionario = async (id, data) => {
  const funcionario = await Funcionario.findByPk(id);
  if (funcionario) {
    await funcionario.update(data);
    return funcionario;
  }
  return null;
};

const deleteFuncionario = async (id) => {
  const funcionario = await Funcionario.findByPk(id);
  if (funcionario) {
    await funcionario.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createFuncionario,
  getAllFuncionarios,
  getFuncionarioById,
  updateFuncionario,
  deleteFuncionario
};