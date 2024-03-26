// Importar as bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');

// Inicializar o aplicativo Express
const app = express();
const port = 3777;

// Middleware para analisar corpos de requisição
app.use(bodyParser.json());

// Dados fictícios de cardápio
let cardapio = [
    { id: 1, nome: 'Salgado', preco: 5.00 },
    { id: 2, nome: 'Suco', preco: 3.00 },
    { id: 3, nome: 'Sanduíche', preco: 7.50 }
];

// Dados fictícios de carrinho
let carrinho = [];

// Endpoint para listar itens do cardápio
app.get('/cardapio', (req, res) => {
    res.json(cardapio);
});

// Endpoint para adicionar itens ao carrinho
app.post('/carrinho', (req, res) => {
    const itemId = req.body.itemId;
    const item = cardapio.find(item => item.id === itemId);
    if (!item) {
        return res.status(404).json({ error: 'Item não encontrado no cardápio.' });
    }
    carrinho.push(item);
    res.json({ message: 'Item adicionado ao carrinho com sucesso.' });
});

// Endpoint para listar itens do carrinho
app.get('/carrinho', (req, res) => {
    res.json(carrinho);
});

// Endpoint para realizar um pedido
app.post('/pedido', (req, res) => {
    // Aqui você pode adicionar a lógica para processar o pedido, como calcular o total, registrar o pedido em um banco de dados, etc.
    // Por simplicidade, este exemplo apenas limpa o carrinho
    carrinho = [];
    res.json({ message: 'Pedido realizado com sucesso.' });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`API está rodando na porta ${port}`);
});

module.exports = app;