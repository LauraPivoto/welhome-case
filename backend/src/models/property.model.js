const db = require('../config/database');

class Property {
    static getAll(callback) {
        db.query('SELECT * FROM property', callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO property SET ?', data, callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE property SET ? WHERE id = ?', [data, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM property WHERE id = ?', [id], callback);
    }
}

module.exports = Property;
