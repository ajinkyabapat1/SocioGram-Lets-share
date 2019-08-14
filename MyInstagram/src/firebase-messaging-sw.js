
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var config = {
  apiKey: "AIzaSyCm4IrOM0XMQAA-26OE7uyM5EzP4HXkTPI",
  authDomain: "instagram-4b834.firebaseapp.com",
  databaseURL: "https://instagram-4b834.firebaseio.com",
  projectId: "instagram-4b834",
  storageBucket: "instagram-4b834.appspot.com",
  messagingSenderId: "726246956477"
};
firebase.initializeApp(config);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
