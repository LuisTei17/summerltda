const Acessorio = require('../models/acessorio');

const createAcessorio = async (data) => {
  return await Acessorio.create(data);
};

const getAllAcessorios = async () => {
  return await Acessorio.findAll();
};

const getAcessorioById = async (id) => {
  return await Acessorio.findByPk(id);
};

const updateAcessorio = async (id, data) => {
  const acessorio = await Acessorio.findByPk(id);
  if (acessorio) {
    await acessorio.update(data);
    return acessorio;
  }
  return null;
};

const deleteAcessorio = async (id) => {
  const acessorio = await Acessorio.findByPk(id);
  if (acessorio) {
    await acessorio.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createAcessorio,
  getAllAcessorios,
  getAcessorioById,
  updateAcessorio,
  deleteAcessorio
};