import firebase from 'firebase';

let config = { 
    apiKey: "AIzaSyDJYFUYSIKwe-MoXOMq1BVYDxinLZ7VxJY",
    authDomain: "coderschool-week3-assignment.firebaseapp.com",
    databaseURL: "https://coderschool-week3-assignment.firebaseio.com",
    projectId: "coderschool-week3-assignment",
    storageBucket: "coderschool-week3-assignment.appspot.com",
    messagingSenderId: "907760889152"
}
firebase.initializeApp(config);

const database = firebase.database(); 

export default database;