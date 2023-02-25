// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIs49rGIzgboFuxhX-OYiWKdJadPa_Vyo",
  authDomain: "mywallet-d750a.firebaseapp.com",
  projectId: "mywallet-d750a",
  storageBucket: "mywallet-d750a.appspot.com",
  messagingSenderId: "301508930542",
  appId: "1:301508930542:web:b0a4872447204c69cf3cff",
  measurementId: "G-6ECKZ4685T",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export const auth = firebaseApp.auth();
export const database = firebaseApp.database();
export const storage = firebaseApp.storage();
