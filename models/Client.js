const db = require('../config/db');

const Client = {
  create: (client, callback) => {
    const query = 'INSERT INTO clients (name, email, tel) VALUES (?, ?, ?)';
    db.query(query, [client.name, client.email, client.tel], callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM clients WHERE id = ?', [id], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM clients', callback);
  },
  update: (id, client, callback) => {
    const query = 'UPDATE clients SET name = ?, email = ?, tel = ? WHERE id = ?';
    db.query(query, [client.name, client.email, client.tel, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM clients WHERE id = ?', [id], callback);
  },
};

module.exports = Client;
