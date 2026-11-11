const express = require('express');
const app = express();
const API_TOKEN = process.env.API_TOKEN;

app.get('/reservas', (req, res) => {
    let id = req.query.id || ""; 
    
    let idSanitizado = String(id).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    
    let query = "SELECT * FROM reservas WHERE id = ?";
    
    res.send("Consulta segura preparada: " + query + " con valor: " + idSanitizado);
});

app.listen(3000, () => console.log('Portal de reservas iniciado seguro'));