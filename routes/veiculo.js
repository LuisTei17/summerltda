const express = require('express');
const router = express.Router();
const Veiculo = require('../models/veiculo');

// CRUD routes for Veiculo
router.post('/', async (req, res) => {
  try {
    const veiculo = await Veiculo.create(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const veiculos = await Veiculo.findAll();
    res.json(veiculos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const veiculo = await Veiculo.findByPk(req.params.id);
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
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (veiculo) {
      await veiculo.update(req.body);
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
    const veiculo = await Veiculo.findByPk(req.params.id);
    if (veiculo) {
      await veiculo.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Veiculo not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;