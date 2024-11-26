// import. das biblioetas
const express = require('express');

// manipular as rotas
const rotas = express.Router();

// rota raiz 
rotas.get("/", (req, res) => {
  res.send("Você está na raíz da rota cliente");
});

// rota post para atualizar os dados
rotas.post('/cliente/adicionar', (req, res) => {
  res.send('Dados adicionados com sucesso.');
});

// rota put para salvar os dados
rotas.put('/cliente/salvar', (req, res) => {
  res.send('Dados salvos com sucesso.');
});

//rota delete para excluir os dados
rotas.delete('/cliente/excluir', (req, res) => {
  res.send('Dados excluídos com sucesso.');
});

// exportar o código que manipula a rota para cliente
module.exports = rotas