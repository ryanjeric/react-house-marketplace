import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDp8w76cJtif8sxs_JxagCTtOnkbj8jng",
  authDomain: "house-marketplace-app-ca768.firebaseapp.com",
  projectId: "house-marketplace-app-ca768",
  storageBucket: "house-marketplace-app-ca768.appspot.com",
  messagingSenderId: "947295381112",
  appId: "1:947295381112:web:4176790b6d5d7954226f8d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
