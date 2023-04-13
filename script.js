import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const { ipcRenderer } = require('electron');

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
const auth = getAuth();

// Renderer process tasks
window.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful login
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle login error
        console.log(error);
      });
  });
});

// IPC communication between main and renderer processes
ipcRenderer.on('message-from-main', (event, arg) => {
  // Handle message from main process
});

ipcRenderer.send('message-to-main', 'Hello from renderer process!');
