const Loja = require('../models/loja');

const createLoja = async (data) => {
  return await Loja.create(data);
};

const getAllLojas = async () => {
  return await Loja.findAll();
};

const getLojaById = async (id) => {
  return await Loja.findByPk(id);
};

const updateLoja = async (id, data) => {
  const loja = await Loja.findByPk(id);
  if (loja) {
    await loja.update(data);
    return loja;
  }
  return null;
};

const deleteLoja = async (id) => {
  const loja = await Loja.findByPk(id);
  if (loja) {
    await loja.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createLoja,
  getAllLojas,
  getLojaById,
  updateLoja,
  deleteLoja
};