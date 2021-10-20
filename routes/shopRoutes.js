const express = require('express');

const shopController = require('../controllers/shopController');

const router = express.Router()

router.get('/', shopController.getShop);

router.get('/marbles', shopController.getMarbles);

router.get('/granites', shopController.getGranites);

router.get('/ceramic', shopController.getCeramic);

router.get('/cnc', shopController.getCnc);

module.exports = router;