const express = require('express');
const router = express.Router();
const courierController = require('../controllers/courierController');

router.post('/', courierController.createCourier);
router.get('/', courierController.getCouriers);
router.get('/:id', courierController.getCourierById);
router.put('/:id', courierController.updateCourier);
router.delete('/:id', courierController.deleteCourier);

module.exports = router;
