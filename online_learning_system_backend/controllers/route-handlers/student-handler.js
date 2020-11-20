const firebase = require('../helpers/firebase');
let database = firebase.db;
const uuidv1 = require("uuid/v1");
let studentRef = database.ref("student");
let firebase_auth = require("../helpers/firebase-auth");
let dataProcessor = require("../helpers/data-processor");

const getAllStudents = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        studentRef.once("value", function (snapshot) {
            let array = [];
            snapshot.forEach(function (student) {
                array.push(student.val())
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

const addStudent = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.body;
        let id = uuidv1();
        let studentChild = studentRef.child(id);
        let userChild = database.ref("user/" + id);
        let studentUserChild = database.ref("user/" + "S" + id);

        const userDb = database.ref("user");
        userDb.once("value", function (snapshot) {
            let invalidEmail = false;
            snapshot.forEach(function (childSnap) {
                if (childSnap.val().email.toLowerCase() === messageBody.email.toLowerCase() ||
                    childSnap.val().email.toLowerCase() === messageBody.parent.email.toLowerCase()) {
                    res.send({
                        "status": "failed",
                        "message": "Email Already exists",
                        "details": null
                    });
                    invalidEmail = true;
                }
            });

            if (!invalidEmail) {
                studentChild.set({
                    "name": messageBody.name,
                    "gender": messageBody.gender,
                    "grade": messageBody.grade,
                    //"address": messageBody.address,
                    "parent": messageBody.parent,
                    "section": dataProcessor.getSection(messageBody.grade),
                    "id": id,
                    "modified": Date.now(),
                    "email": messageBody.email
                });


                userChild.set({
                    "email": messageBody.parent.email,
                    "type": "parent",
                    "refId": id,
                    "section": dataProcessor.getSection(messageBody.grade)
                });
                studentUserChild.update({
                    "email": messageBody.email,
                    "type": "student",
                    "refId": "S" + id,
                    "section": dataProcessor.getSection(messageBody.grade),
                });
                res.send({
                    "status": "success",
                    "message": "Student added  successfully.",
                    "details": null
                });
            }
        });

    }, function (reject) {
        res.status(401).send();
    });

};

const updateStudent = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.body;
        let studentChild = database.ref("student/" + messageBody.id);
        let userChild = database.ref("user/" + messageBody.id);
        let studentUserChild = database.ref("user/" + "S" + messageBody.id.toString());


        const userDb = database.ref("user");
        userDb.once("value", function (snapshot) {
            studentChild.update({
                "id": messageBody.id,
                "name": messageBody.name,
                "gender": messageBody.gender,
                "grade": messageBody.grade,
                //"address": messageBody.address,
                "parent": messageBody.parent,
                "modified": Date.now(),
                "email": messageBody.email
            });

            userChild.update({
                "email": messageBody.parent.email,
                "type": "parent",
                "refId": messageBody.id
            });

            studentUserChild.update({
                "email": messageBody.email,
                "type": "student",
                "refId": "S" + messageBody.id.toString()
            });
            res.send({
                "status": "success",
                "message": "Student updated  successfully.",
                "details": null
            });

        });


    }, function (reject) {
        res.status(401).send();
    });
};

const deleteStudent = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.params;
        let studentChild = database.ref("student").child(messageBody.id);
        let userChild = database.ref("user").child(messageBody.id);
        studentChild.remove();
        userChild.remove();
        res.send({
            "status": "success",
            "message": "Student deleted  successfully.",
            "details": null
        });
    }, function (reject) {
        res.status(401).send();
    });

};

const getStudentById = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let studentId = req.params.id;
        studentRef.child(studentId).once("value", function (snapshot) {
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
    getAllStudents,
    addStudent,
    updateStudent,
    deleteStudent,
    getStudentById
};
