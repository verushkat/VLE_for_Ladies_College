const firebase = require('../helpers/firebase');
let database = firebase.db;
const uuidv1 = require("uuid/v1");
let teacherRef = database.ref("teacher");
let firebase_auth = require("../helpers/firebase-auth");

const getAllTeachers = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        teacherRef.once("value", function (snapshot) {
            let array = [];
            snapshot.forEach(function (teacher) {
                array.push(teacher.val())
            });
            res.send({
                "count": array.length,
                "limit": -1,
                "offset": -1,
                "data": array
            });

        });
    }, function (reject) {
        res.status(401).send();
    });
};

const addTeacher = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.body;
        let id = uuidv1();
        let teacherChild = teacherRef.child(id);
        let userChild = database.ref("user/" + id);

        const userDb = database.ref("user");
        userDb.once("value", function (snapshot) {
            let invalidEmail = false;
            snapshot.forEach(function (childSnap) {
                if (childSnap.val().email.toLowerCase() === messageBody.email.toLowerCase()) {
                    res.send({
                        "status": "failed",
                        "message": "Email Already exists",
                        "details": null
                    });
                    invalidEmail = true;
                }
            });
            if (!invalidEmail) {
                teacherChild.set({
                    "name": messageBody.name,
                    "email": messageBody.email,
                    "phone": messageBody.phone,
                    "subject": messageBody.subject,
                    "id": id,
                    "modified": Date.now(),
                });
                userChild.set({
                    "email": messageBody.email,
                    "type": "teacher",
                    "refId": id
                });
                res.send({
                    "status": "success",
                    "message": "Teacher added  successfully.",
                    "details": null
                });
            }
        });
    }, function (reject) {
        res.status(401).send();
    });

};

const updateTeacher = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.body;
        let teacherChild = database.ref("teacher/" + messageBody.id);
        let userChild = database.ref("user/" + messageBody.id);

        const userDb = database.ref("user");
        userDb.once("value", function (snapshot) {

            teacherChild.update({
                "name": messageBody.name,
                "email": messageBody.email,
                "phone": messageBody.phone,
                "id": messageBody.id,
                "modified": Date.now(),
                "subject": messageBody.subject,
            });
            userChild.update({
                "email": messageBody.email,
                "type": "teacher",
                "refId": messageBody.id
            });
            res.send({
                "status": "success",
                "message": "Teacher updated  successfully.",
                "details": null
            });


        });
    }, function (reject) {
        res.status(401).send();
    });
};

const deleteTeacher = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.params;
        let teacherChild = database.ref("teacher").child(messageBody.id);
        let userChild = database.ref("user").child(messageBody.id);
        userChild.remove();
        teacherChild.remove();
        res.send({
            "status": "success",
            "message": "Teacher deleted  successfully.",
            "details": null
        });
    }, function (reject) {
        res.status(401).send();
    });

};

const getTeacherById = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let teacherId = req.params.id;
        teacherRef.child(teacherId).once("value", function (snapshot) {
            if (snapshot.exists()) {
                res.send(snapshot.val());
            } else {
                res.send({
                    "error": {
                        "code": "BP-0001",
                        "message": "Record not found"
                    }
                });
            }
        })
    }, function (reject) {
        res.status(401).send();
    });
};

module.exports = {
    getAllTeachers,
    getTeacherById,
    addTeacher,
    updateTeacher,
    deleteTeacher
};
