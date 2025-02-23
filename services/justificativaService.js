const Justificativa = require('../models/justificativa');

const createJustificativa = async (data) => {
  return await Justificativa.create(data);
};

const getAllJustificativas = async () => {
  return await Justificativa.findAll();
};

const getJustificativaById = async (id) => {
  return await Justificativa.findByPk(id);
};

const updateJustificativa = async (id, data) => {
  const justificativa = await Justificativa.findByPk(id);
  if (justificativa) {
    await justificativa.update(data);
    return justificativa;
  }
  return null;
};

const deleteJustificativa = async (id) => {
  const justificativa = await Justificativa.findByPk(id);
  if (justificativa) {
    await justificativa.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createJustificativa,
  getAllJustificativas,
  getJustificativaById,
  updateJustificativa,
  deleteJustificativa
};