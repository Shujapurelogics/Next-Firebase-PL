import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseCredentials = {
  apiKey: "AIzaSyBtRIMLkSVfptH4ASinlEfnKhP-mBwUV24",
  authDomain: "react-register-12564.firebaseapp.com",
  projectId: "react-register-12564",
}

//If an firebase app hasn't already been created
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials)
}

export default firebase;
