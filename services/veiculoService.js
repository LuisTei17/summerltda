const Veiculo = require('../models/veiculo');

const createVeiculo = async (data) => {
  return await Veiculo.create(data);
};

const getAllVeiculos = async () => {
  return await Veiculo.findAll();
};

const getVeiculoById = async (id) => {
  return await Veiculo.findByPk(id);
};

const updateVeiculo = async (id, data) => {
  const veiculo = await Veiculo.findByPk(id);
  if (veiculo) {
    await veiculo.update(data);
    return veiculo;
  }
  return null;
};

const deleteVeiculo = async (id) => {
  const veiculo = await Veiculo.findByPk(id);
  if (veiculo) {
    await veiculo.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createVeiculo,
  getAllVeiculos,
  getVeiculoById,
  updateVeiculo,
  deleteVeiculo
};