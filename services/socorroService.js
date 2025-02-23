const Socorro = require('../models/socorro');

const createSocorro = async (data) => {
  return await Socorro.create(data);
};

const getAllSocorros = async () => {
  return await Socorro.findAll();
};

const getSocorroById = async (id) => {
  return await Socorro.findByPk(id);
};

const updateSocorro = async (id, data) => {
  const socorro = await Socorro.findByPk(id);
  if (socorro) {
    await socorro.update(data);
    return socorro;
  }
  return null;
};

const deleteSocorro = async (id) => {
  const socorro = await Socorro.findByPk(id);
  if (socorro) {
    await socorro.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createSocorro,
  getAllSocorros,
  getSocorroById,
  updateSocorro,
  deleteSocorro
};