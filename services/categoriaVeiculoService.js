const CategoriaVeiculo = require('../models/categoriaVeiculo');

const createCategoriaVeiculo = async (data) => {
  return await CategoriaVeiculo.create(data);
};

const getAllCategoriasVeiculo = async () => {
  return await CategoriaVeiculo.findAll();
};

const getCategoriaVeiculoById = async (id) => {
  return await CategoriaVeiculo.findByPk(id);
};

const updateCategoriaVeiculo = async (id, data) => {
  const categoria = await CategoriaVeiculo.findByPk(id);
  if (categoria) {
    await categoria.update(data);
    return categoria;
  }
  return null;
};

const deleteCategoriaVeiculo = async (id) => {
  const categoria = await CategoriaVeiculo.findByPk(id);
  if (categoria) {
    await categoria.destroy();
    return true;
  }
  return false;
};

module.exports = {
  createCategoriaVeiculo,
  getAllCategoriasVeiculo,
  getCategoriaVeiculoById,
  updateCategoriaVeiculo,
  deleteCategoriaVeiculo
};