/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v1.3 — firebase.js
   Firebase initialisation + global __FB bridge

   TIMING CONTRACT:
   - window.__fbReadyPromise is created by an inline <script> in index.html
     BEFORE this module loads. That script also sets window.__fbReadyResolve.
   - This module calls window.__fbReadyResolve(window.__FB) once Firebase
     is initialized, waking up app.js which is awaiting that promise.
   - A 'fbready' CustomEvent is also dispatched as a fallback signal.

   Why this approach:
   - ES modules are ALWAYS deferred — they execute after all plain scripts.
   - The inline script in index.html runs synchronously, creating the
     promise before any deferred execution begins.
   - app.js (plain script) finds window.__fbReadyPromise already populated
     and awaits it correctly.
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

/* Helper: resolve the promise created by the inline script in index.html */
function signalReady(fb) {
    /* Primary: resolve the promise */
    if (typeof window.__fbReadyResolve === 'function') {
        window.__fbReadyResolve(fb);
    }
    /* Secondary: DOM event (belt-and-suspenders) */
    try {
        document.dispatchEvent(new CustomEvent('fbready', { detail: fb }));
    } catch(e) {}
}

try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);
    const googleProvider = new GoogleAuthProvider();
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
            catch(e) {
                const path = url.split('/o/')[1]?.split('?')[0];
                return storageRef(storage, path ? decodeURIComponent(path) : url);
            }
        }
    };

    /* Auth state observer — fires before or after app.js is ready */
    onAuthStateChanged(auth, user => {
        if (typeof window.onFirebaseAuthState === 'function') {
            window.onFirebaseAuthState(user);
        } else {
            /* app.js not ready yet — buffer for pickup in startApp() */
            window.__pendingAuthUser = user;
        }
    });

    console.log('[LPOLVO] Firebase initialized ✓');
    signalReady(window.__FB);

} catch (e) {
    console.error('[LPOLVO] Firebase init FAILED:', e.message);
    window.__FB = { ready: false, error: e.message };
    /* Always resolve so app.js never hangs waiting for Firebase */
    signalReady(window.__FB);
}
