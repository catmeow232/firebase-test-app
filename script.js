// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAosuUU_9XnZsDznwP-Z9kAEjgUH-fvZd4",
  authDomain: "testmeow21.firebaseapp.com",
  projectId: "testmeow21",
  storageBucket: "testmeow21.appspot.com",
  messagingSenderId: "423163438916",
  appId: "1:423163438916:web:bb1b463a7f89b3da5d5911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Renderer process tasks
window.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword('user@example.com', 'password')
      .then((userCredential) => {
        // Handle successful login
      })
      .catch((error) => {
        // Handle login error
      });
  });
});

// IPC communication between main and renderer processes
ipcRenderer.on('message-from-main', (event, arg) => {
  // Handle message from main process
});

ipcRenderer.send('message-to-main', 'Hello from renderer process!');
  