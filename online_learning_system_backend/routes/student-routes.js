const router = require('express').Router();
const studentHandler = require('../controllers/route-handlers/student-handler');


router.post("/",studentHandler.addStudent);

router.put("/",studentHandler.updateStudent);

router.delete("/:id",studentHandler.deleteStudent);

router.get("/:id",studentHandler.getStudentById);

router.get("/",studentHandler.getAllStudents);

module.exports = router;


