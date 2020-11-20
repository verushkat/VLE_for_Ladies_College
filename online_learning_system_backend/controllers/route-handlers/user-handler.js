const firebase = require('../helpers/firebase');
const firebaseAuth = require('../helpers/firebase-auth');
const db = firebase.db;
const userDb = db.ref("user");


const getUserDetails = (req, res) => {
    let authPromise = firebaseAuth.getUserId(req);
    authPromise.then(function (result) {
        let email = req.body.email;
        userDb.once("value",function (snapshot) {
            snapshot.forEach(function (childSnap) {
                if(childSnap.val().email.toLowerCase() === email.toLowerCase()){
                    res.send(childSnap.val());
                }
            });
            res.send({
                email: email,
                type:"unknown",
                refId:null
            });
        });
    },function (reject) {
        res.status(401).send();
    });

};

module.exports = {
    getUserDetails
};
