// Importar os módulos necessários do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';


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

export const registerAppointment = async (clienteId, nome, telefone, email, data, hora) => {
  try {
    // Adiciona um novo documento na coleção 'Agendamentos'
    const docRef = await addDoc(collection(db, 'Agendamentos'), {
      clienteId,
      nome,
      telefone,
      email,
      data,
      hora
    });
    console.log('Agendamento registrado com sucesso!', docRef.id);
  } catch (error) {
    console.error('Erro ao adicionar o agendamento:', error);
  }
};