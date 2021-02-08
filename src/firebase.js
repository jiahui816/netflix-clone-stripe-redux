import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8DM8FW9tS-yTnO3Zx_poHNipYmqjfVl8",
  authDomain: "netflix-clone-stripe-redux.firebaseapp.com",
  projectId: "netflix-clone-stripe-redux",
  storageBucket: "netflix-clone-stripe-redux.appspot.com",
  messagingSenderId: "110131756531",
  appId: "1:110131756531:web:e5869523ebd15c57366686",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
