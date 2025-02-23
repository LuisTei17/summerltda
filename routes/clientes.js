const express = require('express');
const router = express.Router();
const clienteService = require('../services/clienteService');

// CRUD routes for Cliente
router.post('/', async (req, res) => {
  try {
    const cliente = await clienteService.createCliente(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.json(clientes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cliente = await clienteService.getClienteById(req.params.id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const cliente = await clienteService.updateCliente(req.params.id, req.body);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ error: 'Cliente not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const success = await clienteService.deleteCliente(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Cliente not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;