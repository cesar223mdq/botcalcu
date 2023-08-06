const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;


app.use(bodyParser.json());

// Ruta para sumar dos números
app.post('/sumar', (req, res) => {
    const { numero1, numero2 } = req.body;
    const resultado = numero1 + numero2;
    res.json({ resultado });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
