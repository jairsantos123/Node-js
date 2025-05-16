const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Templete!');

});

app.get('/home', (req,res) => {
    res.send('Welcome to Our React Application');

});

app.get('/about', (req,res) => {
    res.send('A simple React app with components in separate files');

});

app.get('/features', (req,res) => {
    res.send('Component-Based');

});

app.get('/contact', (req,res) => {
    res.send('Email: info@example.com Phone: (123) 456-7890');

});


app.listen(3000, () => {
    console.log('Servidor rodando no http://localhost:3000')
});