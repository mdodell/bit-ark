const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.go = functions.https.onRequest((request, response) => {
    const shortUrl = request.url.substring(1);

    db.collection('links').where('urlCode', '==', shortUrl).get().then(data => {
        if(!data.empty){
            response.redirect(data.docs[0].data().originalUrl);
        } else {
            response.redirect("/page-not-found");
        }
    });

});
