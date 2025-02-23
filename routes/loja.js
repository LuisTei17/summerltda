const express = require('express');
const router = express.Router();
const Loja = require('../models/loja');

// CRUD routes for Loja
router.post('/', async (req, res) => {
  try {
    const loja = await Loja.create(req.body);
    res.status(201).json(loja);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const lojas = await Loja.findAll();
    res.json(lojas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const loja = await Loja.findByPk(req.params.id);
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
    const loja = await Loja.findByPk(req.params.id);
    if (loja) {
      await loja.update(req.body);
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
    const loja = await Loja.findByPk(req.params.id);
    if (loja) {
      await loja.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Loja not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;