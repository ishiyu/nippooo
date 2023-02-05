// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyA3grBCEEevU2T5Z2ti3jtsF1hxTCl2MEE',
  authDomain: 'nippooo-73cd8.firebaseapp.com',
  projectId: 'nippooo-73cd8',
  storageBucket: 'nippooo-73cd8.appspot.com',
  messagingSenderId: '736378432421',
  appId: '1:736378432421:web:23a792ae698d07be6d964c',
  measurementId: 'G-0NTBJN7LBF',
};

// init firebase
const app = initializeApp(firebaseConfig); // バックエンドのfirebaseを初期化する
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// const timestamp = firebase.firestore.FieldValue.serverTimestamp //firebaseのtimestamp

export {
  analytics, db, auth, storage, // timestamp
};
