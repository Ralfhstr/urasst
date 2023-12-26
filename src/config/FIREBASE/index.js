import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCS3LEedPFM2h8XFTkK3w9D5OEDeL2mhgg",
    authDomain: "urasst-8e371.firebaseapp.com",
    databaseURL: "https://urasst-8e371-default-rtdb.firebaseio.com",
    projectId: "urasst-8e371",
    storageBucket: "urasst-8e371.appspot.com",
    messagingSenderId: "848324121724",
    appId: "1:848324121724:web:23813e5126fcff9a60a5f9"
    // apiKey: "AIzaSyDnpz3e-LJ7m119KX4bFNiumdSXrDSsLqg",
    // authDomain: "urasst-6ce16.firebaseapp.com",
    // projectId: "urasst-6ce16",
    // storageBucket: "urasst-6ce16.appspot.com",
    // messagingSenderId: "1076875020497",
    // appId: "1:1076875020497:web:b1ee347b034511e394ddf0"
});

const FIREBASE = firebase;

export default FIREBASE;