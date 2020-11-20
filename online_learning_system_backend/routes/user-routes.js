const router = require('express').Router();
const userHandler = require('../controllers/route-handlers/user-handler');


router.post("/", userHandler.getUserDetails);


module.exports = router;


