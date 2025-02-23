const express = require('express');
const router = express.Router();
const justificativaService = require('../services/justificativaService');

// CRUD routes for Justificativa
router.post('/', async (req, res) => {
  try {
    const justificativa = await justificativaService.createJustificativa(req.body);
    res.status(201).json(justificativa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const justificativas = await justificativaService.getAllJustificativas();
    res.json(justificativas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const justificativa = await justificativaService.getJustificativaById(req.params.id);
    if (justificativa) {
      res.json(justificativa);
    } else {
      res.status(404).json({ error: 'Justificativa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const justificativa = await justificativaService.updateJustificativa(req.params.id, req.body);
    if (justificativa) {
      res.json(justificativa);
    } else {
      res.status(404).json({ error: 'Justificativa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await justificativaService.deleteJustificativa(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Justificativa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;