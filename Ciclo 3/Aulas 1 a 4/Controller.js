const express = require('express');
const cors = require('cors');

const models = require('./models')

// let cliente = models.Cliente;
// let itemPedido = models.ItemPedido;
// let pedido = models.Pedido;
// let servico = models.Servico; 


const app = express();
app.use(cors());

app.get('/', function (req, res) {
    res.send('Olá mundo')
});

app.get('/clientes', function (req, res) {
    res.send('Seja bem vindo(a) ao ServiceTI!')
});

app.get('/pedidos', function (req, res) {
    res.send('Esta é a área de pedidos! Vamos encher o carrinho?')
});

app.get('/servicos', async (req, res) => {
    await Servico.create({
        nome:'HTML/CSS',
        descricao: 'Páginas estáticas estilizadas',
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    res.send('Seviço criado com sucesso!')
});


let port = process.env.PORT || 3001;

app.listen(port, (req,res) => {
    console.log('Servidor Ativo: http://localhost:3001');
})