import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBMgjWEwYx0MriFDcRtZrScclGa9jpGdM0",
    authDomain: "tinder-clone-e059e.firebaseapp.com",
    projectId: "tinder-clone-e059e",
    storageBucket: "tinder-clone-e059e.appspot.com",
    messagingSenderId: "809162463288",
    appId: "1:809162463288:web:a28c2dba7bc5048e862ecd",
    measurementId: "G-D95CVQ1HH1"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebaseApp.firestore();

  export default database;
