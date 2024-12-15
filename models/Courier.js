const db = require('../config/db');

const Courier = {
  create: (courier, callback) => {
    const query = 'INSERT INTO couriers (name, email, status, tel) VALUES (?, ?, ?, ?)';
    db.query(query, [courier.name, courier.email, courier.status, courier.tel], callback);
  },
  findById: (id, callback) => {
    db.query('SELECT * FROM couriers WHERE id = ?', [id], callback);
  },
  findAll: (callback) => {
    db.query('SELECT * FROM couriers', callback);
  },
  update: (id, courier, callback) => {
    const query = 'UPDATE couriers SET name = ?, email = ?, status = ?, tel = ? WHERE id = ?';
    db.query(query, [courier.name, courier.email, courier.status, courier.tel, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM couriers WHERE id = ?', [id], callback);
  },
};

module.exports = Courier;
