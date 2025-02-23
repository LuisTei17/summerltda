const express = require('express');
const router = express.Router();
const lojaService = require('../services/lojaService');

// CRUD routes for Loja
router.post('/', async (req, res) => {
  try {
    const loja = await lojaService.createLoja(req.body);
    res.status(201).json(loja);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const lojas = await lojaService.getAllLojas();
    res.json(lojas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const loja = await lojaService.getLojaById(req.params.id);
    if (loja) {
      res.json(loja);
    } else {
      res.status(404).json({ error: 'Loja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const loja = await lojaService.updateLoja(req.params.id, req.body);
    if (loja) {
      res.json(loja);
    } else {
      res.status(404).json({ error: 'Loja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await lojaService.deleteLoja(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Loja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;