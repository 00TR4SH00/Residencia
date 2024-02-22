import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA42bL_f5lJ8I2becHDHqcjXIW7mSxrwpE",
  authDomain: "residencia-32afe.firebaseapp.com",
  projectId: "residencia-32afe",
  storageBucket: "residencia-32afe.appspot.com",
  messagingSenderId: "234356583535",
  appId: "1:234356583535:web:05ac2155c6c6d03984f19a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firestore
const db = getFirestore(app);

// Función para añadir un diagnóstico
export const anadirDiagnostico = async (datosDiagnostico) => {
  await setDoc(doc(db, 'Diagnostico', datosDiagnostico.Folio), {
    ...datosDiagnostico
  });
};

// Función para obtener los datos de un diagnóstico por folio
export const obtenerDiagnosticoPorFolio = async (folio) => {
  const docRef = doc(db, 'Diagnostico', folio);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // El documento no existe
    console.log("No existe un diagnóstico con ese folio.");
    return null;
  }
};

export default { anadirDiagnostico, obtenerDiagnosticoPorFolio };
