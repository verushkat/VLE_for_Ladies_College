const firebase = require('../helpers/firebase');
let database = firebase.db;
let firebase_auth = require("../helpers/firebase-auth");
const uuidv1 = require("uuid/v1");
const dataProcessor = require("../helpers/data-processor");

const addMarks = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.body;
        let assignmentDatabase = database.ref("assignment");
        let child = assignmentDatabase.child(messageBody.studentId);
        messageBody.submitedDate = new Date().toLocaleDateString();
        child.push(messageBody);
        res.status(200).send("{\n" +
            "  \"status\": \"success\",\n" +
            "  \"message\": \"Student marks updated  successfully.\"\n" +
            "\n" +
            "}")
    }, function (reject) {
        res.status(401).send();
    });
};

const getAllMarks = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let studentId = req.query.studentId;
        let assignmentDatabase = database.ref("assignment/" + studentId);
        let marks = [];
        assignmentDatabase.once("value", function (snapshot) {
            snapshot.forEach((mark) => {
                marks.push(mark.val());
            });
            console.log(marks);
            res.send({
                "count": 2,
                "limit": -1,
                "offset": -1,
                "data": marks
            });
        });
    }, function (reject) {
        res.status(401).send();
    });
};


const addNotes = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let id = uuidv1();
        let noteDatabase = database.ref("notes").child(id);
        let messageBody = req.body;
        noteDatabase.set({
            "id": id,
            "noteName": messageBody.name,
            "noteURL": messageBody.url,
            "submittedDate": new Date().toLocaleDateString(),
            "subject": messageBody.subject,
            "grade": messageBody.grade,
            "type": messageBody.type
        });
        res.send({
            status: "Success",
            message: "Notes uploaded successfully."
        })
    }, function (reject) {
        res.status(401).send();
    });
};

const getAllNotes = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    let reqParams = req.query;
    console.log(reqParams);
    authPromise.then(function (result) {
        let noteDatabase = database.ref("notes");
        noteDatabase.once("value", function (snapshot) {
            let notes = [];
            snapshot.forEach((note) => {
                if(reqParams.section !== undefined) {
                    let tempGrade = note.val().grade.match(/\d/g);
                    if (dataProcessor.getSection(tempGrade.join("")).toLowerCase() === reqParams.section.toLowerCase()) {
                        notes.push(note.val());
                    }
                }else{
                    notes.push(note.val());
                }
            });
            res.send({
                "count": notes.length,
                "limit": -1,
                "offset": -1,
                "data": notes
            });
        });
    }, function (reject) {
        res.status(401).send();
    })
};

const deleteNotes = (req, res) => {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let messageBody = req.params;
        let studentChild = database.ref("notes").child(messageBody.id);
        studentChild.remove();
        res.send({
            "status": "success",
            "message": "Student deleted  successfully.",
            "details": null
        });
    }, function (reject) {
        res.status(401).send();
    });
};

module.exports = {
    addMarks,
    getAllMarks,
    addNotes,
    getAllNotes,
    deleteNotes
};
