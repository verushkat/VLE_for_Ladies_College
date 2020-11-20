const router = require('express').Router();
const reportHandler = require('../controllers/route-handlers/report-handler');

router.post('/generate',reportHandler.generateReport);


module.exports = router;
