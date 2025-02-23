const express = require('express');
const router = express.Router();
const socorroService = require('../services/socorroService');

// CRUD routes for Socorro
router.post('/', async (req, res) => {
  try {
    const socorro = await socorroService.createSocorro(req.body);
    res.status(201).json(socorro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const socorros = await socorroService.getAllSocorros();
    res.json(socorros);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const socorro = await socorroService.getSocorroById(req.params.id);
    if (socorro) {
      res.json(socorro);
    } else {
      res.status(404).json({ error: 'Socorro not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const socorro = await socorroService.updateSocorro(req.params.id, req.body);
    if (socorro) {
      res.json(socorro);
    } else {
      res.status(404).json({ error: 'Socorro not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await socorroService.deleteSocorro(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Socorro not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;