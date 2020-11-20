const firebase = require('../helpers/firebase');


function getUserId(req) {
    let idToken = req.header("Authorization");
    let admin = firebase.admin;
    return new Promise(function (resolve, reject) {
        admin.auth().verifyIdToken(idToken)
            .then(function (decodedToken) {
                let uid = decodedToken.uid;
                resolve(uid);
            }).catch(function (error) {
            reject(error);
        });
    });


}

module.exports = {
    getUserId
};