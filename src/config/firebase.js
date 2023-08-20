import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCGIlzbT0foDEl35J3c9DtKR1fC7K_Tkaw",
    authDomain: "ecommerce-ad7ec.firebaseapp.com",
    databaseURL: "https://ecommerce-ad7ec-default-rtdb.firebaseio.com",
    projectId: "ecommerce-ad7ec",
    storageBucket: "ecommerce-ad7ec.appspot.com",
    messagingSenderId: "175707034692",
    appId: "1:175707034692:web:52590489b02e5433175811"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get services
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage };
export default app; 