/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — firebase.js
   Firebase initialisation + global __FB bridge
   ═══════════════════════════════════════════════════════════════════ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth, onAuthStateChanged, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,
    signOut, sendPasswordResetEmail, updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
    getFirestore, doc, setDoc, getDoc, updateDoc, collection, query,
    orderBy, limit, getDocs, serverTimestamp, increment, arrayUnion,
    arrayRemove, addDoc, where, onSnapshot, deleteDoc, writeBatch,
    getCountFromServer, runTransaction
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
    getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDC9jEHJNR1S71utPvytFZptuYzzh6C7sc",
    authDomain: "lpolvo-hub.firebaseapp.com",
    projectId: "lpolvo-hub",
    storageBucket: "lpolvo-hub.firebasestorage.app",
    messagingSenderId: "87518670310",
    appId: "1:87518670310:web:798c322820820f91017a27",
    measurementId: "G-FRCKKLZ493"
};

let app, auth, db, storage, googleProvider;
try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: 'select_account' });
    window.__FB = {
        ready: true, auth, db, storage, googleProvider,
        signInWithEmailAndPassword, createUserWithEmailAndPassword,
        signInWithPopup, signOut, sendPasswordResetEmail, updateProfile,
        onAuthStateChanged, doc, setDoc, getDoc, updateDoc,
        collection, query, orderBy, limit, getDocs, serverTimestamp,
        increment, arrayUnion, arrayRemove, addDoc, where, onSnapshot,
        deleteDoc, writeBatch, getCountFromServer, runTransaction,
        storageRef, uploadBytes, getDownloadURL, deleteObject,
        storageRefFromURL: (storage, url) => {
            try { return storageRef(storage, url); }
            catch { return storageRef(storage, url.split('/o/')[1]?.split('?')[0]
                ? decodeURIComponent(url.split('/o/')[1].split('?')[0]) : url); }
        }
    };
    onAuthStateChanged(auth, user => {
        if (window.onFirebaseAuthState) window.onFirebaseAuthState(user);
        else window.__pendingAuthUser = user;
    });
} catch (e) {
    console.error('[LPOLVO] Firebase init error:', e.message);
    window.__FB = { ready: false, error: e.message };
}
