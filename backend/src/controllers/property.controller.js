const Property = require('../models/property.model');

exports.listProperties = (req, res) => {
    Property.getAll((err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Erro ao listar imóveis' });
        res.json({ success: true, data: results });
    });
};

exports.addProperty = (req, res) => {
    const data = req.body;
    Property.create(data, (err, results) => {
        if (err) return res.status(400).json({ success: false, message: 'Erro ao adicionar imóvel' });
        res.status(201).json({ success: true, data });
    });
};

exports.updateProperty = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Property.update(id, data, (err, results) => {
        if (err) return res.status(400).json({ success: false, message: 'Erro ao atualizar imóvel' });
        res.json({ success: true, data: { id, ...data } });
    });
};

exports.deleteProperty = (req, res) => {
    const id = req.params.id;
    Property.delete(id, (err, results) => {
        if (err) return res.status(400).json({ success: false, message: 'Erro ao deletar imóvel' });
        res.status(204).send();
    });
};
