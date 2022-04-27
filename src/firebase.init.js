// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6N41P4wsecQdZRR-l94e_QlV4hACPMyU",
  authDomain: "genius-car-service-bde87.firebaseapp.com",
  projectId: "genius-car-service-bde87",
  storageBucket: "genius-car-service-bde87.appspot.com",
  messagingSenderId: "463566765172",
  appId: "1:463566765172:web:4c96c580223fe4a4c92521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth