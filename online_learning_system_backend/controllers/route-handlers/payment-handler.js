const firebase = require('../helpers/firebase');
let database = firebase.db;
let firebase_auth = require("../helpers/firebase-auth");


function getAllValues(req, res) {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let paymentDb = database.ref("payment");
        paymentDb.once("value", function (snapshot) {
            res.send(snapshot.val());
        });
    },function (reject) {
        res.status(401).send();
    });
}

function saveValues(req, res) {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let paymentDb = database.ref("payment");
        paymentDb.update(req.body);
        res.send({
            "status": "success",
            "message": "Payment details updated successfully.",
            "details": null
        });
    },function (reject) {
        res.status(401).send();
    });
}

function savePayments(req, res) {
    let authPromise = firebase_auth.getUserId(req);
    authPromise.then(function (result) {
        let studentRef = database.ref("student/" + req.body.uid);
        let paymentRef = database.ref("payments");
        studentRef.once("value", function (snapshot) {
            let value = snapshot.val();
            paymentRef.push({
                "studentName": value.name,
                "section": value.section,
                "grade":value.grade,
                "id":value.id,
                "cardNumber":req.body.cardNumber,
                "expDate":req.body.expDate,
                "Amount":req.body.amount,
            });
        });

        res.send({
            "status": "success",
            "message": "Payment details updated successfully.",
            "details": null
        });
    },function (reject) {
        res.status(401).send();
    });
}

module.exports = {
    getAllValues,
    saveValues,
    savePayments
};
