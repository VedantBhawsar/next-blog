import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-402212.firebaseapp.com",
  projectId: "blog-402212",
  storageBucket: "blog-402212.appspot.com",
  messagingSenderId: "610390957718",
  appId: "1:610390957718:web:b1cafac21dcb60896cacb7",
  measurementId: "G-ZT1HFS1BXK",
};

export const app = initializeApp(firebaseConfig);
