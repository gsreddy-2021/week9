const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAvv2YDvaVPYpinLaaCc32AH8jFrwohwig",
  authDomain: "kiei-451-6a40f.firebaseapp.com",
  projectId: "kiei-451-6a40f",
  storageBucket: "kiei-451-6a40f.appspot.com",
  messagingSenderId: "678177254416",
  appId: "1:678177254416:web:b29c5d9c7915c07604ee95"
}; // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase