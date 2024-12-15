const db = require('../config/db');

const Order = {
  create: (order, callback) => {
    const query = 'INSERT INTO orders (client_id, courier_id, pickup_address, delivery_address, status, date, type) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [order.client_id, order.courier_id, order.pickup_address, order.delivery_address, order.status, order.date, order.type], callback);
  },
  
  findById: (id, callback) => {
    db.query('SELECT * FROM orders WHERE id = ?', [id], callback);
  },
  
  findAll: (callback) => {
    db.query('SELECT * FROM orders', callback);
  },
  
  update: (id, order, callback) => {
    const query = 'UPDATE orders SET client_id = ?, courier_id = ?, pickup_address = ?, delivery_address = ?, status = ?, date = ?, type = ? WHERE id = ?';
    db.query(query, [order.client_id, order.courier_id, order.pickup_address, order.delivery_address, order.status, order.date, order.type, id], callback);
  },
  
  delete: (id, callback) => {
    db.query('DELETE FROM orders WHERE id = ?', [id], callback);
  },
};

module.exports = Order;
