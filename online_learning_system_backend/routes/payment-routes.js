const router = require('express').Router();
const paymentHandler = require('../controllers/route-handlers/payment-handler');

router.get('/admin/',paymentHandler.getAllValues);

router.post('/admin/',paymentHandler.saveValues);

router.post('/parent/',paymentHandler.savePayments);


module.exports = router;
