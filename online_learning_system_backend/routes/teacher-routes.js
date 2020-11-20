const router = require('express').Router();
const teacherHandler = require('../controllers/route-handlers/teacher-handler');


router.post("/", teacherHandler.addTeacher);

router.put("/", teacherHandler.updateTeacher);

router.delete("/:id", teacherHandler.deleteTeacher);

router.get("/:id", teacherHandler.getTeacherById);

router.get("/", teacherHandler.getAllTeachers);

module.exports = router;


