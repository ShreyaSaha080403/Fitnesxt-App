import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDfhV2AYXta322fNnHSc9dtUwY-uNs7sEI",
    authDomain: "fitnestx-app08.firebaseapp.com",
    projectId: "fitnestx-app08",
    storageBucket: "fitnestx-app08.firebasestorage.app",
    messagingSenderId: "404873222948",
    appId: "1:404873222948:web:944ff276fced408a0bb1b1",
    measurementId: "G-NW9PJTP99K"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };