export const backendEnv = {
    //url: 'https://dominio.com'
    url: 'http://localhost:5173/'
}

export const endpoints = {
    login: '/api/public/v1/user/login',
    getUser: '/api/public/v1/user/get',
    updateUser: '/api/public/v1/user/update',
    changePwd: '/api/public/v2/user/password/change'   
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0MsJLvYqlVVbo6saWtkt7B2WOFbyz93Y",
  authDomain: "authrural.firebaseapp.com",
  projectId: "authrural",
  storageBucket: "authrural.appspot.com",
  messagingSenderId: "486148154174",
  appId: "1:486148154174:web:396349591414b1bafc826f",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;