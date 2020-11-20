const router = require('express').Router();
const healthHandler = require('../controllers/route-handlers/health-handler');


router.get("/",healthHandler.getHealth);

module.exports = router;


