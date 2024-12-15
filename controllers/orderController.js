const Order = require('../models/Order');

/**
 * @swagger
 * tags:
 *   name: Order
 *   description: API for managing Orders
 */

/**
 * @swagger
 * /api/order:
 *   post:
 *     description: Create a new order
 *     parameters:
 *       - in: body
 *         name: order
 *         description: The order to create
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             product:
 *               type: string
 *             quantity:
 *               type: integer
 *             price:
 *               type: number
 *               format: float
 *     responses:
 *       201:
 *         description: Order created
 *       500:
 *         description: Server error
 */
exports.createOrder = (req, res) => {
  Order.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Order created!', id: result.insertId });
  });
};

/**
 * @swagger
 * /api/orders:
 *   get:
 *     description: Get all orders
 *     responses:
 *       200:
 *         description: A list of orders
 *       500:
 *         description: Server error
 */
exports.getOrders = (req, res) => {
  Order.findAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
};

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     description: Get an order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the order
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Order found
 *       404:
 *         description: Order not found
 *       500:
 *         description: Server error
 */
exports.getOrderById = (req, res) => {
  Order.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.length) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(result[0]);
  });
};

/**
 * @swagger
 * /api/order/{id}:
 *   put:
 *     description: Update an order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the order to update
 *         required: true
 *         type: integer
 *       - in: body
 *         name: order
 *         description: The order data to update
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             product:
 *               type: string
 *             quantity:
 *               type: integer
 *             price:
 *               type: number
 *               format: float
 *     responses:
 *       200:
 *         description: Order updated
 *       500:
 *         description: Server error
 */
exports.updateOrder = (req, res) => {
  Order.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Order updated!' });
  });
};

/**
 * @swagger
 * /api/order/{id}:
 *   delete:
 *     description: Delete an order by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the order to delete
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Order deleted
 *       500:
 *         description: Server error
 */
exports.deleteOrder = (req, res) => {
  Order.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Order deleted!' });
  });
};
