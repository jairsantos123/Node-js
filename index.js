const express = require('express');

const app = express();

const porta = 3000

app.get('/', (req,res) => {
    res.send('Bem vindo a tela inicial do nosso site!');

});

app.get('/about', (req,res) => {
    res.send('A simple React app with components in separate files');

});


app.get('/api/produtos', (req,res) => {
    res.json([
        {
            "id": 1,
            "produto":"mouse",
            "estoque": 10,
        
        },
        {
            "id": 2,
            "produto":"smartphone",
            "estoque": 15,
        },
        {
            "id": 3,
            "produto":"bike",
            "estoque": 20,
        },
        {
            "id": 4,
            "produto":"bola",
            "estoque": 25,
        },

    
    ]);
});

app.get('/inspecionar', (req, res) => {
    console.log("nova requisição recebida!");
    console.log("metodo:", req.method);
    console.log("URL: ", req.url);
    console.log("cabeçalho: ", req.headers);

    res.send('Requisicao recebida! veja o terminal.');
});

app.listen(porta);