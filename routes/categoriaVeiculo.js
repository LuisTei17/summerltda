const express = require('express');
const router = express.Router();
const categoriaVeiculoService = require('../services/categoriaVeiculoService');

// CRUD routes for CategoriaVeiculo
router.post('/', async (req, res) => {
  try {
    const categoria = await categoriaVeiculoService.createCategoriaVeiculo(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const categorias = await categoriaVeiculoService.getAllCategoriasVeiculo();
    res.json(categorias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoria = await categoriaVeiculoService.getCategoriaVeiculoById(req.params.id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoria = await categoriaVeiculoService.updateCategoriaVeiculo(req.params.id, req.body);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: 'Categoria not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await categoriaVeiculoService.deleteCategoriaVeiculo(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Categoria not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;