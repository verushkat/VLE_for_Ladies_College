const router = require('express').Router();
const assignmentHandler = require('../controllers/route-handlers/assignment-handler');

router.post('/marks',assignmentHandler.addMarks);

router.get('/evaluations',assignmentHandler.getAllMarks);

router.post("/notes",assignmentHandler.addNotes);

router.get("/notes",assignmentHandler.getAllNotes);

router.delete("/notes/:id",assignmentHandler.deleteNotes);

module.exports = router;
