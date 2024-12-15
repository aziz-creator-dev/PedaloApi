const Client = require('../models/Client');

/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: API for managing clients
 */

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Client created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Client created!
 *                 id:
 *                   type: integer
 *                   example: 1
 */
exports.createClient = (req, res) => {
  Client.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Client created!', id: result.insertId });
  });
};

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Get all clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: A list of clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 */
exports.getClients = (req, res) => {
  Client.findAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
};

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Get a client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The client ID
 *     responses:
 *       200:
 *         description: Client data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Client not found
 */
exports.getClientById = (req, res) => {
  Client.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.length) return res.status(404).json({ message: 'Client not found' });
    res.status(200).json(result[0]);
  });
};

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Update a client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The client ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Client updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Client updated!
 */
exports.updateClient = (req, res) => {
  Client.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Client updated!' });
  });
};

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Delete a client by ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The client ID
 *     responses:
 *       200:
 *         description: Client deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Client deleted!
 */
exports.deleteClient = (req, res) => {
  Client.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Client deleted!' });
  });
};
