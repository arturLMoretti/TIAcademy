const express = require('express');
const cors = require('cors');

const app = express;
app.request(cors());

let port = process.env.PORT || 3001;

app.listen(port, (req,res) => {
    console.log('Servidor Ativo: http://localhost:3001');
})