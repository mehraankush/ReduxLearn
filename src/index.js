import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore'
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh2sRZosWLduNVQnMKKCteNU_0ij0yTFM",
  authDomain: "cart-app-b78b6.firebaseapp.com",
  projectId: "cart-app-b78b6",
  storageBucket: "cart-app-b78b6.appspot.com",
  messagingSenderId: "685704930869",
  appId: "1:685704930869:web:2ba5f8c0ba09c9f73a337c"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
