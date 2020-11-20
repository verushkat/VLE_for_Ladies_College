
let admin = require("firebase-admin");
const path = require('path');


let serviceAccount = require(path.join(__dirname, '../../keys/firebase_key.json'));

/**
 * @description Initialize Firebase Admin SDK
 */



admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://online-learning-system-d9124.firebaseio.com/",
    storageBucket: "gs://online-learning-system-d9124.appspot.com"
});

let db = admin.database();


module.exports = {
    admin, db
};
