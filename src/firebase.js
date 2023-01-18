import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7eApk1YjL0lHPEMt2EwDU3eBVCTfPTOc',
  authDomain: 'react-htpp-8c884.firebaseapp.com',
  databaseURL:
    'https://react-htpp-8c884-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-htpp-8c884',
  storageBucket: 'react-htpp-8c884.appspot.com',
  messagingSenderId: '255367216744',
  appId: '1:255367216744:web:f8d72299d44ab99b6c85dd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
