const express = require('express');
const router = express.Router();
const Funcionario = require('../models/funcionario');

// CRUD routes for Funcionario
router.post('/', async (req, res) => {
  try {
    const funcionario = await Funcionario.create(req.body);
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (funcionario) {
      res.json(funcionario);
    } else {
      res.status(404).json({ error: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (funcionario) {
      await funcionario.update(req.body);
      res.json(funcionario);
    } else {
      res.status(404).json({ error: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const funcionario = await Funcionario.findByPk(req.params.id);
    if (funcionario) {
      await funcionario.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;