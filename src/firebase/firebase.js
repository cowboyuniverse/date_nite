
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDtSphTP-7dV5qHjcq5HZtNblumojU7DA4",
    authDomain: "dating-app-302014.firebaseapp.com",
    projectId: "dating-app-302014",
    storageBucket: "dating-app-302014.appspot.com",
    messagingSenderId: "391577043705",
    appId: "1:391577043705:web:04d281ef7e4d64bbf29828",
    measurementId: "G-BEWG2CRJME"
}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore()

export default database
// const firebaseConfig = {
//     apiKey: " ",
//     authDomain: " ",
//     projectId: " ",
//     storageBucket: " ",
//     messagingSenderId: " ",
//     appId: " ",
//     measurementId: " "
// }