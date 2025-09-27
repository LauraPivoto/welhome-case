const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.use(express.json());

require('dotenv').config();
const port = process.env.PORT || 3000;

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

async function testConnection() {
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.log("Conectou ao MySQL!");
        await connection.end();
    } catch (err) {
        console.error("Erro ao conectar:", err.message);
    }
}

testConnection();

async function query(sql, params) {
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(sql, params);
    await connection.end();
    return results;
}

function validateProperty({ title, address, status }) {
    if (!title || !address || !['active', 'inactive'].includes(status)) {
        return false;
    }
    return true;
}

app.get('/properties', async (req, res) => {
    try {
        const results = await query('SELECT * FROM property', []);
        if (results.length === 0) return res.status(404).json({ success: false, message: 'Nenhum imóvel encontrado' });
        res.json({ success: true, data: results });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erro ao consultar imóveis', error: err.message });
    }
});

app.post('/properties', async (req, res) => {
    const { title, address, status } = req.body;
    if (!validateProperty({ title, address, status })) {
        return res.status(400).json({ success: false, message: 'Dados inválidos.' });
    }

    try {
        const result = await query('INSERT INTO property (title, address, status) VALUES (?, ?, ?)', [title, address, status]);
        res.status(201).json({ success: true, data: { id: result.insertId, title, address, status } });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erro ao criar imóvel', error: err.message });
    }
});

app.put('/properties/:id', async (req, res) => {
    const id = req.params.id;
    const { title, address, status } = req.body;

    if (!validateProperty({ title, address, status })) {
        return res.status(400).json({ success: false, message: 'Dados inválidos.' });
    }

    try {
        const rows = await query('SELECT * FROM property WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ success: false, message: 'Propriedade não encontrada.' });

        await query('UPDATE property SET title = ?, address = ?, status = ? WHERE id = ?', [title, address, status, id]);
        res.json({ success: true, data: { id, title, address, status } });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erro ao atualizar a propriedade', error: err.message });
    }
});

app.delete('/properties/:id', async (req, res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) return res.status(400).json({ success: false, message: 'ID inválido.' });

    try {
        const rows = await query('SELECT * FROM property WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ success: false, message: 'Propriedade não encontrada.' });

        await query('DELETE FROM property WHERE id = ?', [id]);
        res.json({ success: true, message: 'Propriedade deletada com sucesso.', id });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Erro ao deletar a propriedade', error: err.message });
    }
});

app.listen(port, () => console.log(`Server rodando em http://localhost:${port}`));
