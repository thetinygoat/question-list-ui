import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpTntWIWJCG-oMvm9MgystgdsO4DLdwoE',
  authDomain: 'question-list-a4a77.firebaseapp.com',
  databaseURL: 'https://question-list-a4a77.firebaseio.com',
  projectId: 'question-list-a4a77',
  storageBucket: 'question-list-a4a77.appspot.com',
  messagingSenderId: '728809510469',
  appId: '1:728809510469:web:a5052cdc624428f720352c',
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
