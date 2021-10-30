import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh5_4e0YgmXTaS0lknaGabt07fjdxCZiw",
  authDomain: "gma-data-fd9d3.firebaseapp.com",
  projectId: "gma-data-fd9d3",
  storageBucket: "gma-data-fd9d3.appspot.com",
  messagingSenderId: "505649942344",
  appId: "1:505649942344:web:c93fc73efcb28b42082d7d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
