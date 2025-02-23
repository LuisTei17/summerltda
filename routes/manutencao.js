const express = require('express');
const router = express.Router();
const manutencaoService = require('../services/manutencaoService');

// CRUD routes for Manutencao
router.post('/', async (req, res) => {
  try {
    const manutencao = await manutencaoService.createManutencao(req.body);
    res.status(201).json(manutencao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const manutencoes = await manutencaoService.getAllManutencoes();
    res.json(manutencoes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const manutencao = await manutencaoService.getManutencaoById(req.params.id);
    if (manutencao) {
      res.json(manutencao);
    } else {
      res.status(404).json({ error: 'Manutencao not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const manutencao = await manutencaoService.updateManutencao(req.params.id, req.body);
    if (manutencao) {
      res.json(manutencao);
    } else {
      res.status(404).json({ error: 'Manutencao not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await manutencaoService.deleteManutencao(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Manutencao not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;