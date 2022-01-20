import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiiKAVmuuuGg5_PzpPgEBzi9zE_fxLwEc",
  authDomain: "telstra-health-e4d61.firebaseapp.com",
  projectId: "telstra-health-e4d61",
  storageBucket: "telstra-health-e4d61.appspot.com",
  messagingSenderId: "821532261127",
  appId: "1:821532261127:web:32f4b01d0881f74126e3a2",
  measurementId: "G-SME7DVDK1T"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();


export { db };
