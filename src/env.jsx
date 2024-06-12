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

// Importar solo los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0MsJLvYqlVVbo6saWtkt7B2WOFbyz93Y",
  authDomain: "authrural.firebaseapp.com",
  projectId: "authrural",
  storageBucket: "authrural.appspot.com",
  messagingSenderId: "486148154174",
  appId: "1:486148154174:web:396349591414b1bafc826f",
};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar el servicio de autenticación
const auth = getAuth(app);

// Proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };