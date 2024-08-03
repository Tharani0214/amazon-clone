import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIvD8dcges5lwYmz48TFNTDvhuGNh2v8c",
  authDomain: "clone-8aeaf.firebaseapp.com",
  projectId: "clone-8aeaf",
  storageBucket: "clone-8aeaf.appspot.com",
  messagingSenderId: "215447320964",
  appId: "1:215447320964:web:88507a88ea18e2e1f185d1",
  measurementId: "G-NP3197BQR5"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };

