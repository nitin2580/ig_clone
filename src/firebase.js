import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyC5DI6JzdoXkYIUSDnNhUynK9LN5oimgbo",
    authDomain: "instagram-react-99fee.firebaseapp.com",
    projectId: "instagram-react-99fee",
    storageBucket: "instagram-react-99fee.appspot.com",
    messagingSenderId: "181142219769",
    appId: "1:181142219769:web:37e622632def4c4b55ab28",
    measurementId: "G-N9CN6P6NLG"
};


const app = initializeApp(firebaseConfig);

const db= getFirestore(app);
const auth=firebase.auth();
const storage=firebase.storage();

export { db, auth, storage };

