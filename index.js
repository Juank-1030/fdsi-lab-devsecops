const express = require('express');
const app = express();
const API_TOKEN = process.env.API_TOKEN;

app.get('/reservas', (req, res) => {
    let id = req.query.id;
    let query = "SELECT * FROM reservas WHERE id = ?";
    res.send("Consulta segura preparada: " + query + " con valor: " + id);
});

app.listen(3000, () => console.log('Portal de reservas iniciado seguro'));