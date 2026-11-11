const express = require('express');
const app = express();
const API_TOKEN = "ghp_1234567890abcdef1234567890abcdef1234";

app.get('/reservas', (req, res) => {
    let id = req.query.id;
>    let query = "SELECT * FROM reservas WHERE id=" + id;
    res.send("Consulta ejecutada: " + query);
});

app.listen(3000, () => console.log('Portal de reservas iniciado'));