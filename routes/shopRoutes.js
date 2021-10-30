const express = require('express');

const shopController = require('../controllers/shopController');

const router = express.Router()

router.get('/', shopController.getShop);

router.get('/marbles', shopController.getMarbles);

router.get('/granites', shopController.getGranites);

router.get('/ceramic600x1200', shopController.getCeramic600x1200);
router.get('/ceramic600x600', shopController.getCeramic600x600);
router.get('/ceramic800x1600', shopController.getCeramic800x1600);

router.get('/cnc', shopController.getCnc);

module.exports = router;