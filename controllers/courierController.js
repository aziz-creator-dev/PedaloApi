const Courier = require('../models/Courier');

/**
 * @swagger
 * tags:
 *   name: Rider
 *   description: API for managing Riders
 */

/**
 * @swagger
 * /api/courier:
 *   post:
 *     description: Create a new courier
 *     parameters:
 *       - in: body
 *         name: courier
 *         description: The courier to create
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       201:
 *         description: Courier created
 *       500:
 *         description: Server error
 */
exports.createCourier = (req, res) => {
  Courier.create(req.body, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: 'Courier created!', id: result.insertId });
  });
};

/**
 * @swagger
 * /api/couriers:
 *   get:
 *     description: Get all couriers
 *     responses:
 *       200:
 *         description: A list of couriers
 *       500:
 *         description: Server error
 */
exports.getCouriers = (req, res) => {
  Courier.findAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.status(200).json(results);
  });
};

/**
 * @swagger
 * /api/courier/{id}:
 *   get:
 *     description: Get a courier by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the courier
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Courier found
 *       404:
 *         description: Courier not found
 *       500:
 *         description: Server error
 */
exports.getCourierById = (req, res) => {
  Courier.findById(req.params.id, (err, result) => {
    if (err) return res.status(500).json(err);
    if (!result.length) return res.status(404).json({ message: 'Courier not found' });
    res.status(200).json(result[0]);
  });
};

/**
 * @swagger
 * /api/courier/{id}:
 *   put:
 *     description: Update a courier by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the courier to update
 *         required: true
 *         type: integer
 *       - in: body
 *         name: courier
 *         description: The courier data to update
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       200:
 *         description: Courier updated
 *       500:
 *         description: Server error
 */
exports.updateCourier = (req, res) => {
  Courier.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Courier updated!' });
  });
};

/**
 * @swagger
 * /api/courier/{id}:
 *   delete:
 *     description: Delete a courier by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the courier to delete
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Courier deleted
 *       500:
 *         description: Server error
 */
exports.deleteCourier = (req, res) => {
  Courier.delete(req.params.id, (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Courier deleted!' });
  });
};
