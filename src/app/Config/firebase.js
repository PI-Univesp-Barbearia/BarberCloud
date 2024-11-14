
// Importar os módulos necessários do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKfNJTIl6crlC9nsFAsQqp8yk4VHeodWg",
    authDomain: "barbercloud-671ef.firebaseapp.com",
    projectId: "barbercloud-671ef",
    storageBucket: "barbercloud-671ef.firebasestorage.app",
    messagingSenderId: "800508251629",
    appId: "1:800508251629:web:da00b2a64f49ff7da9ebe4",
    measurementId: "G-2RWYJZP9YC"
  };
  
// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar os serviços que você vai usar
export const auth = getAuth(app);
export const db = getFirestore(app);
// Exporte outros serviços se necessário