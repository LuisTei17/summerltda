const express = require('express');
const router = express.Router();
const veiculoService = require('../services/veiculoService');

// CRUD routes for Veiculo
router.post('/', async (req, res) => {
  try {
    const veiculo = await veiculoService.createVeiculo(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const veiculos = await veiculoService.getAllVeiculos();
    res.json(veiculos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const veiculo = await veiculoService.getVeiculoById(req.params.id);
    if (veiculo) {
      res.json(veiculo);
    } else {
      res.status(404).json({ error: 'Veiculo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const veiculo = await veiculoService.updateVeiculo(req.params.id, req.body);
    if (veiculo) {
      res.json(veiculo);
    } else {
      res.status(404).json({ error: 'Veiculo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await veiculoService.deleteVeiculo(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Veiculo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;