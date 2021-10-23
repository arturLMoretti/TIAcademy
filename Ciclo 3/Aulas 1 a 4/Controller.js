const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Olá mundo')
});

app.get('/clientes', (req, res) => {
    res.send('Seja bem vindo(a) ao ServiceTI!')
});

app.get('/servicos', (req, res) => {
    res.send('Esta é a área de Serviços! Sinta-se a vontade!')
});

app.get('/pedidos', (req, res) => {
    res.send('Esta é a área de pedidos! Vamos encher o carrinho?')
});

let port = process.env.PORT || 3001;

app.listen(port, (req,res) => {
    console.log('Servidor Ativo: http://localhost:3001');
})