import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseCredentials = {
  apiKey: "AIzaSyDleDnFIDBI67-8G0n5q7HvlXJ2LuKMnjo",
  authDomain: "nextjs-firebase-94a10.firebaseapp.com",
  projectId: "nextjs-firebase-94a10",
}

//If an firebase app hasn't already been created
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseCredentials)
}

export default firebase;
