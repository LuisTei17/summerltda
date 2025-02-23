const express = require('express');
const router = express.Router();
const acessorioService = require('../services/acessorioService');

// CRUD routes for Acessorio
router.post('/', async (req, res) => {
  try {
    const acessorio = await acessorioService.createAcessorio(req.body);
    res.status(201).json(acessorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const acessorios = await acessorioService.getAllAcessorios();
    res.json(acessorios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const acessorio = await acessorioService.getAcessorioById(req.params.id);
    if (acessorio) {
      res.json(acessorio);
    } else {
      res.status(404).json({ error: 'Acessorio not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const acessorio = await acessorioService.updateAcessorio(req.params.id, req.body);
    if (acessorio) {
      res.json(acessorio);
    } else {
      res.status(404).json({ error: 'Acessorio not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await acessorioService.deleteAcessorio(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Acessorio not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;