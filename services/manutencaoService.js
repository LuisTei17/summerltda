const Manutencao = require('../models/manutencao');

const createManutencao = async (data) => {
  return await Manutencao.create(data);
};

const getAllManutencoes = async () => {
  return await Manutencao.findAll();
};

const getManutencaoById = async (id) => {
  return await Manutencao.findByPk(id);
};

const updateManutencao = async (id, data) => {
  const manutencao = await Manutencao.findByPk(id);
  if (manutencao) {
    await manutencao.update(data);
    return manutencao;
  }
  return null;
};

const deleteManutencao = async (id) => {
  const manutencao = await Manutencao.findByPk(id);
  if (manutencao) {
    await manutencao.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createManutencao,
  getAllManutencoes,
  getManutencaoById,
  updateManutencao,
  deleteManutencao
};