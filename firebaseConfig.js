// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from '@firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9Z1uY5lhHL-gkRwEh68KGWHZ1O4Wt3wI",
  authDomain: "profile-db-41bd1.firebaseapp.com",
  projectId: "profile-db-41bd1",
  storageBucket: "profile-db-41bd1.appspot.com",
  messagingSenderId: "861111260046",
  appId: "1:861111260046:web:07f23156f38b0080a80adf",
  measurementId: "G-T3HDGCK8EB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from '@firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDv_h_y0XLFcS_ZdtMWuSbM6C6z7BD43yI",
//   authDomain: "auth-7e86f.firebaseapp.com",
//   projectId: "auth-7e86f",
//   storageBucket: "auth-7e86f.appspot.com",
//   messagingSenderId: "484234653981",
//   appId: "1:484234653981:web:0792a572d32cc0877b31f4",
//   measurementId: "G-RRME9Q589S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);