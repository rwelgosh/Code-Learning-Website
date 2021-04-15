// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBEe56Td7mBb0d8E3goxD5eMbrsEqBUzPE",
    authDomain: "code-learner-a4ad1.firebaseapp.com",
    projectId: "code-learner-a4ad1",
    storageBucket: "code-learner-a4ad1.appspot.com",
    messagingSenderId: "1084834715699",
    appId: "1:1084834715699:web:6ceb8432fcad5408d32b46",
    measurementId: "G-6LXMJNPW85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const dbListOfLangauges = firebase.database().ref().child('Language');

dbListOfLangauges.on('child_added', snap => console.log(snap.val()));