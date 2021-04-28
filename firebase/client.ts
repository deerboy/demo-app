import firebase from 'firebase/app';
import 'firebase/auth'; // If you need it
import 'firebase/firestore'; // If you need it
import 'firebase/storage'; // If you need it

const clientCredentials = {
  apiKey: 'AIzaSyA8gE1ob9Nwqs4XvVCm9_IzE7xy67HoaL8',
  authDomain: 'hosininaritai-29e44.firebaseapp.com',
  projectId: 'hosininaritai-29e44',
  storageBucket: 'hosininaritai-29e44.appspot.com',
  messagingSenderId: '603804001225',
  appId: '1:603804001225:web:e70af0d4d484d821167e18',
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
