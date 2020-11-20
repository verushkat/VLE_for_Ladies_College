
const firebase = require('../helpers/firebase');
var bucket = firebase.admin.storage().bucket();
const uuidv1 = require('uuid/v1');//this for unique id generation


async function uploadFile(filename, filepath) {
  // Uploads a local file to the bucket
  let uuid = uuidv1();

  return  bucket.upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,

    destination: filepath + filename.replace(/^.*[\\\/]/, ''),
    metadata: {
      contentType: filename.mimetype,
      cacheControl: 'public, max-age=31536000',
      metadata: {
        firebaseStorageDownloadTokens: uuid
      }
    },
  }).then((data) => {
      console.log(`uploaded ${filename.replace(/^.*[\\\/]/, '')}`);
      let file = data[0];
      return Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(filepath+filename.replace(/^.*[\\\/]/, '')) + "?alt=media&token=" + uuid);
   });

}