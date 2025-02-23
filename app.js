// app.js
const express = require('express');
const fs = require('fs');

const clienteRoutes = require('./routes/clientes');
const categoriaVeiculoRoutes = require('./routes/categoriaVeiculo');
const veiculoRoutes = require('./routes/veiculo');
const lojaRoutes = require('./routes/loja');
const funcionarioRoutes = require('./routes/funcionario');

const app = express();
const port = 3000;
const logStream = fs.createWriteStream('logs/output.log', { flags: 'a' });
// Middleware to parse JSON bodies
app.use(express.json());

// Define a route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use cliente routes
app.use('/clientes', clienteRoutes);

// Use categoriaVeiculo routes
app.use('/categorias-veiculo', categoriaVeiculoRoutes);

// Use veiculo routes
app.use('/veiculos', veiculoRoutes);

// Use loja routes
app.use('/lojas', lojaRoutes);

// Use funcionario routes
app.use('/funcionarios', funcionarioRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

console.log = (message) => {
  logStream.write(`${new Date().toISOString()} - LOG: ${message}\n`);
  process.stdout.write(`${message}\n`);
};

console.error = (message) => {
  logStream.write(`${new Date().toISOString()} - ERROR: ${message}\n`);
  process.stderr.write(`${message}\n`);
};