const express = require('express');
const router = express.Router();
const CategoriaVeiculo = require('../models/categoriasVeiculo');

// CRUD routes for CategoriaVeiculo
router.post('/', async (req, res) => {
  try {
    const categoria = await CategoriaVeiculo.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const categorias = await CategoriaVeiculo.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoria = await CategoriaVeiculo.findByPk(req.params.id);
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
    const categoria = await CategoriaVeiculo.findByPk(req.params.id);
    if (categoria) {
      await categoria.update(req.body);
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
    const categoria = await CategoriaVeiculo.findByPk(req.params.id);
    if (categoria) {
      await categoria.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Categoria not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;