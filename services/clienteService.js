const Cliente = require('../models/cliente');

const createCliente = async (data) => {
  return await Cliente.create(data);
};

const getAllClientes = async () => {
  return await Cliente.findAll();
};

const getClienteById = async (id) => {
  return await Cliente.findByPk(id);
};

const updateCliente = async (id, data) => {
  const cliente = await Cliente.findByPk(id);
  if (cliente) {
    await cliente.update(data);
    return cliente;
  }
  return null;
};

const deleteCliente = async (id) => {
  const cliente = await Cliente.findByPk(id);
  if (cliente) {
    await cliente.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  deleteCliente
};