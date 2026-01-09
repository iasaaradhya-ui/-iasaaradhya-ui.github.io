// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 🔥 Your config
const firebaseConfig = {
  apiKey: "AIzaSyC4k4EhNS9jbJs7TjKU705uZ0oOtcXGabk",
  authDomain: "piano-cea95.firebaseapp.com",
  projectId: "piano-cea95",
  storageBucket: "piano-cea95.firebasestorage.app",
  messagingSenderId: "222706527640",
  appId: "1:222706527640:web:b7adf304a4f8accb878fed",
  measurementId: "G-DE93V7RN6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔐 Email login
async function login() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, emailInput, passwordInput);
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } catch (err) {
    alert(err.message);
  }
}

// 🌐 Google login
async function googleLogin() {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } catch (err) {
    alert(err.message);
  }
}

// 📊 Visitor counter
async function updateVisitorCount() {
  const counterRef = doc(db, "stats", "visits");
  const docSnap = await getDoc(counterRef);
  let count = docSnap.exists() ? docSnap.data().count + 1 : 1;
  await setDoc(counterRef, { count });
  document.getElementById("visitorCount").innerText = "Visitors: " + count;
}

// 🎥 Video gallery
function loadVideos() {
  const videosDiv = document.getElementById("videos");
  const videosCol = collection(db, "videos");
  onSnapshot(videosCol, (snapshot) => {
    videosDiv.innerHTML = "";
    snapshot.forEach(doc => {
      videosDiv.innerHTML += `<iframe src="https://www.youtube.com/embed/${doc.data().id}" allowfullscreen></iframe>`;
    });
  });
}

// Initialize functions on page load
window.onload = () => {
  updateVisitorCount();
  loadVideos();
};
