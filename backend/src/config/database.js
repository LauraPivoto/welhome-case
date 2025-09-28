require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,  // agora certo
    database: process.env.DB_DATABASE   // agora certo
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.message);
        return;
    }
    console.log('✅ Conectado ao banco de dados');
});

module.exports = connection;
