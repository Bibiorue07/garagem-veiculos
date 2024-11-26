//Alunas: Bianca Oruê e Vitória Lorramy

// importação da biblioteca Express
const express = require('express')

// criação de um app Express
const app = express();

// importação das rotas
const clienteRotas = require('./routes/cliente');
const veiculoRotas = require('./routes/veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 8080;

// rota raiz 
app.get('/', (req, res) => {
  res.send('Olá! Você esta na Garagem de Veiculos.')
});

// utilizando as rotas
app.use('/cliente', clienteRotas);
app.use('/veiculo', veiculoRotas);

// rodando 
app.listen(port, hostname, console.log('Servidor rodando...'));


