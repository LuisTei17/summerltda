const express = require('express');
const router = express.Router();
const funcionarioService = require('../services/funcionarioService');

// CRUD routes for Funcionario
router.post('/', async (req, res) => {
  try {
    const funcionario = await funcionarioService.createFuncionario(req.body);
    res.status(201).json(funcionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const funcionarios = await funcionarioService.getAllFuncionarios();
    res.json(funcionarios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const funcionario = await funcionarioService.getFuncionarioById(req.params.id);
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
    const funcionario = await funcionarioService.updateFuncionario(req.params.id, req.body);
    if (funcionario) {
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
    const success = await funcionarioService.deleteFuncionario(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Funcionario not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;