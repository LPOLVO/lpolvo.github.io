/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — auth.js
   Firebase Authentication: state handler, login, signup,
   Google sign-in, sign-out, password reset, user profile loading
   ═══════════════════════════════════════════════════════════════════ */

/* ── UTILITY: synchronous data URI → Blob conversion.
   fetch(dataURI) hangs permanently on Chrome for Android (GitHub Pages).
   This replaces every fetch(data:...) → res.blob() call in auth flows. ── */
function _authDataURItoBlob(dataURI) {
    const parts = dataURI.split(',');
    const mime  = parts[0].match(/:(.*?);/)[1];
    const bstr  = atob(parts[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], { type: mime });
}

/* ── FIREBASE / AUTH ── */
async function onFirebaseAuthState(user) {
    state.currentUser = user;
    if (user) {
        document.getElementById('navSignBtn').style.display = 'none';
        document.getElementById('navAvatarBtn').classList.add('show');
        const isNewUser = await loadUserProfile(user);
        updateAvatarUI();
        document.getElementById('sidebarUserCard').classList.add('show');
        document.getElementById('sidebarSignIn').style.display = 'none';
        document.getElementById('sidebarSignOut').style.display = '';
        loadNotifications();
        // v1.2: Show onboarding for new users who haven't completed it yet
        const onboardedKey = 'lp_onboarded_' + user.uid;
        if (isNewUser && !localStorage.getItem(onboardedKey)) {
            // New user — show full onboarding
            showOnboarding();
        } else if (!localStorage.getItem(onboardedKey) && state.userProfile && !state.userProfile.onboarded) {
            // Existing Firestore user who never completed onboarding
            showOnboarding();
        } else {
            state.onboardingComplete = true;
        }
    } else {
        document.getElementById('navSignBtn').style.display = '';
        document.getElementById('navAvatarBtn').classList.remove('show');
        document.getElementById('sidebarUserCard').classList.remove('show');
        document.getElementById('sidebarSignIn').style.display = '';
        document.getElementById('sidebarSignOut').style.display = 'none';
        state.userProfile = null;
    }
    if (state.page === 'profile') buildProfilePage();
    if (state.page === 'dash') buildDashPage();
}

async function loadUserProfile(user) {
    const fb = window.__FB;
    if (!fb || !fb.ready) return false;
    let isNewUser = false;
    try {
        const ref = fb.doc(fb.db, 'users', user.uid);
        const snap = await fb.getDoc(ref);
        if (snap.exists()) {
            state.userProfile = snap.data();
            if (state.userProfile.language) {
                state.language = state.userProfile.language;
                localStorage.setItem('lp_lang', state.userProfile.language);
                applyLanguageDirection();
            }
            isNewUser = false;
        } else {
            // Create a minimal profile — onboarding will fill in the rest
            const profile = {
                uid: user.uid,
                displayName: user.displayName || 'User',
                handle: '',
                email: user.email,
                bio: '',
                avatar: user.photoURL || '',
                banner: '',
                views: 0,
                scripts: 0,
                followers: 0,
                following: 0,
                favorites: [],
                badges: ['pioneer'],
                createdAt: fb.serverTimestamp(),
                theme: state.theme,
                language: state.language,
                age: '',
                onboarded: false,
                level: 1,
                xp: 0,
                totalLikes: 0,
                totalCopies: 0,
                achievements: [],
                settings: { notifications: true, publicProfile: true },
            };
            await fb.setDoc(ref, profile);
            state.userProfile = profile;
            isNewUser = true;
            // Post community activity for new user
            const newName = user.displayName || 'A new user';
            postCommunityActivity('joined', `🟢 <strong>${escHtml(newName)}</strong> joined LPOLVO HUB`).catch(() => {});
        }
        if (state.userProfile.avatar) localStorage.setItem('lp_avatar_' + user.uid, state.userProfile.avatar);
        if (state.userProfile.displayName) localStorage.setItem('lp_name_' + user.uid, state.userProfile.displayName);
        if (state.userProfile.banner) localStorage.setItem('lp_banner_' + user.uid, state.userProfile.banner);

        const name = state.userProfile.displayName || user.displayName || 'User';
        const sn = document.getElementById('sidebarUserName');
        const se = document.getElementById('sidebarUserEmail');
        if (sn) sn.textContent = name;
        if (se) se.textContent = user.email || '';
        const savedAvatar = localStorage.getItem('lp_avatar_' + user.uid);
        const sa = document.getElementById('sidebarAvatar');
        if (sa) {
            if (savedAvatar) sa.innerHTML =
                `<img src="${savedAvatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
            else sa.textContent = name[0].toUpperCase();
        }
    } catch (e) { console.error('[LPOLVO] loadUserProfile:', e.message); }
    return isNewUser;
}

function updateAvatarUI() {
    const user = state.currentUser;
    if (!user) return;
    const savedAvatar = localStorage.getItem('lp_avatar_' + user.uid);
    const name = localStorage.getItem('lp_name_' + user.uid) || user.displayName || 'U';
    const ab = document.getElementById('navAvatarBtn');
    if (ab) {
        if (savedAvatar) ab.innerHTML =
            `<img src="${savedAvatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
        else ab.textContent = name[0].toUpperCase();
    }
}


/* ── AUTH ACTIONS ── */
function openAuthModal(mode = 'login') {
    document.getElementById('auth-modal').classList.add('show');
    switchAuthMode(mode);
    playClick();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.remove('show');
    ['loginEmail', 'loginPassword', 'regName', 'regEmail', 'regPassword', 'resetEmail'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    ['loginError', 'regError', 'regSuccess', 'resetError', 'resetSuccess'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
    });
}

function switchAuthMode(mode) {
    ['login', 'register', 'reset'].forEach(m => {
        const form = document.getElementById(m + 'Form');
        const tab = document.getElementById('authTab' + m.charAt(0).toUpperCase() + m.slice(1));
        if (form) form.classList.toggle('active', m === mode);
        if (tab) tab.classList.toggle('active', m === mode);
    });
    const resetTab = document.getElementById('authTabReset');
    if (resetTab) resetTab.style.display = mode === 'reset' ? '' : 'none';
    playClick();
}

async function doLogin() {
    const fb = window.__FB;
    if (!fb?.ready) { showToast(getTranslation('firebaseNotConnected'), 'error'); return; }
    const email = document.getElementById('loginEmail').value.trim();
    const pw = document.getElementById('loginPassword').value;
    const err = document.getElementById('loginError');
    const btn = document.getElementById('loginBtn');
    if (!email || !pw) { if (err) err.textContent = 'Please fill all fields.'; return; }
    btn.disabled = true;
    btn.textContent = getTranslation('signingIn');
    if (err) err.textContent = '';
    try {
        // reCAPTCHA Enterprise — verify before auth attempt
        const captcha = await assertReCaptcha('LOGIN', err);
        if (!captcha.ok) { return; }

        await fb.signInWithEmailAndPassword(fb.auth, email, pw);
        closeAuthModal();
        showToast(getTranslation('welcomeBack2'), 'success');
        playSuccess();
    } catch (e) { if (err) err.textContent = friendlyAuthError(e.code);
        playError(); } finally { btn.disabled = false;
        btn.textContent = getTranslation('signInBtn'); }
}

async function doRegister() {
    const fb = window.__FB;
    if (!fb?.ready) { showToast(getTranslation('firebaseNotConnected'), 'error'); return; }
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pw = document.getElementById('regPassword').value;
    const err = document.getElementById('regError');
    const suc = document.getElementById('regSuccess');
    const btn = document.getElementById('regBtn');
    if (!name || !email || !pw) { if (err) err.textContent = 'Please fill all fields.'; return; }
    if (pw.length < 6) { if (err) err.textContent = getTranslation('passwordMinLength'); return; }
    btn.disabled = true;
    btn.textContent = getTranslation('creatingAccount');
    if (err) err.textContent = '';
    try {
        // reCAPTCHA Enterprise — verify before account creation
        const captcha = await assertReCaptcha('REGISTER', err);
        if (!captcha.ok) { return; }

        const cred = await fb.createUserWithEmailAndPassword(fb.auth, email, pw);
        await fb.updateProfile(cred.user, { displayName: name });
        if (suc) suc.textContent = getTranslation('accountCreated');
        setTimeout(() => { closeAuthModal();
            showToast(getTranslation('accountCreatedToast'), 'success');
            playSuccess(); }, 1000);
    } catch (e) { if (err) err.textContent = friendlyAuthError(e.code);
        playError(); } finally { btn.disabled = false;
        btn.textContent = getTranslation('registerBtn'); }
}

async function doGoogleLogin() {
    const fb = window.__FB;
    if (!fb?.ready) { showToast(getTranslation('firebaseNotConnected'), 'error'); return; }
    try {
        await fb.signInWithPopup(fb.auth, fb.googleProvider);
        closeAuthModal();
        showToast(getTranslation('signedInGoogle'), 'success');
        playSuccess();
    } catch (e) {
        if (e.code !== 'auth/popup-closed-by-user') { showToast(friendlyAuthError(e.code), 'error');
            playError(); }
    }
}

async function doPasswordReset() {
    const fb = window.__FB;
    if (!fb?.ready) return;
    const email = document.getElementById('resetEmail').value.trim();
    const err = document.getElementById('resetError');
    const suc = document.getElementById('resetSuccess');
    if (!email) { if (err) err.textContent = getTranslation('enterEmail'); return; }
    try {
        // reCAPTCHA Enterprise — verify before sending reset email
        const captcha = await assertReCaptcha('PASSWORD_RESET', err);
        if (!captcha.ok) { return; }

        await fb.sendPasswordResetEmail(fb.auth, email);
        if (suc) suc.textContent = getTranslation('resetLinkSent');
        if (err) err.textContent = '';
        playSuccess();
    } catch (e) { if (err) err.textContent = friendlyAuthError(e.code);
        playError(); }
}

async function doSignOut() {
    const fb = window.__FB;
    if (!fb?.ready) return;
    try {
        await fb.signOut(fb.auth);
        showToast(getTranslation('signedOutSoon'), 'info');
        if (state.page === 'profile' || state.page === 'dash') navigate('home');
    } catch (e) { showToast(getTranslation('signOutError'), 'error'); }
}

function friendlyAuthError(code) {
    const msgs = {
        'auth/invalid-email': 'Invalid email address.',
        'auth/user-not-found': 'No account with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/email-already-in-use': 'Email already registered. Try logging in.',
        'auth/weak-password': 'Password is too weak.',
        'auth/too-many-requests': 'Too many attempts. Try again later.',
        'auth/network-request-failed': 'Network error. Check your connection.',
        'auth/popup-blocked': 'Popup blocked. Allow popups and try again.',
        'auth/invalid-credential': 'Invalid email or password.',
    };
    return msgs[code] || 'An error occurred. Please try again.';
}


/* ── ONBOARDING ── */
function showOnboarding() {
    state.onboardingStep = 0;
    state.onboardingData = {};
    document.getElementById('onboarding-modal').classList.add('show');
    updateOnboardingStep();
}

function updateOnboardingStep() {
    const step = state.onboardingStep;
    document.querySelectorAll('.onboarding-step').forEach(el => el.classList.toggle('active', parseInt(el.dataset.step) === step));
    document.querySelectorAll('.onboarding-dot').forEach(el => {
        const s = parseInt(el.dataset.step);
        el.classList.toggle('active', s === step);
        el.classList.toggle('done', s < step);
    });
    const title = document.getElementById('onboardingTitle');
    const sub = document.getElementById('onboardingSub');
    const prev = document.getElementById('onboardingPrev');
    const next = document.getElementById('onboardingNext');
    const stepTitles = ['Welcome', 'Age', 'Profile Picture', 'Banner', 'Username'];
    const stepSubs = [
        'Welcome to LPOLVO HUB v1.2',
        'Step 1 of 5 — Age',
        'Step 2 of 5 — Profile Picture (Optional)',
        'Step 3 of 5 — Banner (Optional)',
        'Step 4 of 5 — Choose Username'
    ];
    if (title) title.textContent = stepTitles[step] || 'Setup';
    if (sub) sub.textContent = stepSubs[step] || '';
    if (prev) prev.style.display = step === 0 ? 'none' : 'block';
    if (next) {
        next.textContent = step === 4 ? (getTranslation('finish') || 'Finish') : (getTranslation('continue') || 'Continue');
        if (step === 1) {
            const age = document.getElementById('onboardingAge');
            next.disabled = !age || !age.value;
        } else if (step === 4) {
            const username = document.getElementById('onboardingUsername');
            const val = username ? username.value.trim() : '';
            next.disabled = val.length < 3 || !/^[a-zA-Z0-9_]+$/.test(val);
        } else {
            next.disabled = false;
        }
    }
}

function validateUsername(val) {
    if (!val || val.length < 3) return { valid: false, msg: 'Username must be at least 3 characters.' };
    if (val.length > 20) return { valid: false, msg: 'Username must be 20 characters or less.' };
    if (!/^[a-zA-Z0-9_]+$/.test(val)) return { valid: false, msg: 'Only letters, numbers, and underscores allowed.' };
    // Block invisible / zero-width chars
    if (/[\u200B-\u200D\uFEFF\u00AD\u034F\u2060]/.test(val)) return { valid: false, msg: 'Invalid characters detected.' };
    // Block decorative unicode
    if (/[^\x00-\x7F]/.test(val)) return { valid: false, msg: 'Only standard characters allowed.' };
    return { valid: true, msg: '✓ Username looks good!' };
}

function onboardingNext() {
    const step = state.onboardingStep;
    if (step === 0) { state.onboardingStep++; updateOnboardingStep(); return; }
    if (step === 1) {
        const age = document.getElementById('onboardingAge').value;
        if (!age) return;
        state.onboardingData.age = age;
        state.onboardingStep++;
        updateOnboardingStep();
        return;
    }
    if (step === 2) { state.onboardingStep++; updateOnboardingStep(); return; }
    if (step === 3) { state.onboardingStep++; updateOnboardingStep(); return; }
    if (step === 4) {
        const username = document.getElementById('onboardingUsername').value.trim();
        const check = validateUsername(username);
        if (!check.valid) {
            const el = document.getElementById('onboardingUsernameCheck');
            if (el) { el.textContent = check.msg; el.className = 'onboarding-username-check invalid'; }
            return;
        }
        const nextBtn = document.getElementById('onboardingNext');
        if (nextBtn) nextBtn.disabled = true;
        checkUsernameUnique(username).then(unique => {
            if (!unique) {
                const el = document.getElementById('onboardingUsernameCheck');
                if (el) { el.textContent = getTranslation('usernameTaken') || 'This username is already taken.'; el.className = 'onboarding-username-check invalid'; }
                if (nextBtn) nextBtn.disabled = false;
                return;
            }
            state.onboardingData.username = username;
            finishOnboarding();
        });
    }
}

function onboardingPrev() {
    if (state.onboardingStep > 0) { state.onboardingStep--; updateOnboardingStep(); }
}

function onOnboardingAvatarChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast(getTranslation('imageTooLarge'), 'error'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const max = 200;
            let w = img.width,
                h = img.height;
            if (w > max || h > max) { if (w > h) { h = Math.round(h * max / w);
                    w = max; } else { w = Math.round(w * max / h);
                    h = max; } }
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const compressed = canvas.toDataURL('image/jpeg', 0.7);
            state.onboardingData.avatar = compressed;
            document.getElementById('onboardingAvatarPreview').innerHTML =
                `<img src="${compressed}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
        };
        img.src = dataUrl;
    };
    reader.readAsDataURL(file);
}

function onOnboardingBannerChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast(getTranslation('imageTooLarge'), 'error'); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
        const dataUrl = e.target.result;
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const max = 600;
            let w = img.width,
                h = img.height;
            if (w > max || h > max) { if (w > h) { h = Math.round(h * max / w);
                    w = max; } else { w = Math.round(w * max / h);
                    h = max; } }
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            const compressed = canvas.toDataURL('image/jpeg', 0.75);
            state.onboardingData.banner = compressed;
            const preview = document.getElementById('onboardingBannerPreview');
            preview.innerHTML =
                `<img src="${compressed}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);">`;
        };
        img.src = dataUrl;
    };
    reader.readAsDataURL(file);
}

async function checkUsernameUnique(username) {
    const fb = window.__FB;
    if (!fb?.ready) return true;
    try {
        const lower = username.toLowerCase();
        // Check usernames collection first (fast lookup)
        const handleSnap = await fb.getDoc(fb.doc(fb.db, 'usernames', lower));
        if (handleSnap.exists()) return false;
        // Also check users collection
        const q = fb.query(fb.collection(fb.db, 'users'), fb.where('handle', '==', lower));
        const snap = await fb.getDocs(q);
        return snap.empty;
    } catch (e) { return true; }
}

async function finishOnboarding() {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    const nextBtn = document.getElementById('onboardingNext');
    if (nextBtn) { nextBtn.disabled = true; nextBtn.textContent = 'Saving…'; }
    try {
        const data = state.onboardingData;
        const uid = state.currentUser.uid;
        let avatarURL = data.avatar || state.userProfile?.avatar || '';
        let bannerURL = data.banner || '';

        // Upload avatar to Firebase Storage if it's a data URL
        if (data.avatar && data.avatar.startsWith('data:') && fb.storage) {
            try {
                const avatarRef = fb.storageRef(fb.storage, `avatars/${uid}/avatar.jpg`);
                // Synchronous conversion — fetch(dataURI) hangs on Chrome for Android
                const blob = _authDataURItoBlob(data.avatar);
                await fb.uploadBytes(avatarRef, blob);
                avatarURL = await fb.getDownloadURL(avatarRef);
            } catch (uploadErr) { console.warn('[LPOLVO] Avatar upload failed, using data URL'); }
        }

        // Upload banner to Firebase Storage if it's a data URL
        if (data.banner && data.banner.startsWith('data:') && fb.storage) {
            try {
                const bannerRef = fb.storageRef(fb.storage, `banners/${uid}/banner.jpg`);
                // Synchronous conversion — fetch(dataURI) hangs on Chrome for Android
                const blob = _authDataURItoBlob(data.banner);
                await fb.uploadBytes(bannerRef, blob);
                bannerURL = await fb.getDownloadURL(bannerRef);
            } catch (uploadErr) { console.warn('[LPOLVO] Banner upload failed, using data URL'); }
        }

        const username = data.username || state.currentUser.displayName || 'User';
        const updates = {
            displayName: username,
            handle: username.toLowerCase(),
            avatar: avatarURL,
            banner: bannerURL,
            age: data.age || '',
            onboarded: true,
            bio: 'Roblox script enthusiast 🎮',
            achievements: ['first_login'],
            settings: { notifications: true, publicProfile: true },
            favorites: [],
            recentlyViewed: [],
            stats: { views: 0, uploads: 0, likes: 0, copies: 0 },
            updatedAt: fb.serverTimestamp(),
        };

        // Reserve username in a separate collection to ensure uniqueness
        const handleRef = fb.doc(fb.db, 'usernames', username.toLowerCase());
        await fb.setDoc(handleRef, { uid: uid, username: username });

        await fb.setDoc(fb.doc(fb.db, 'users', uid), updates, { merge: true });
        if (avatarURL) localStorage.setItem('lp_avatar_' + uid, avatarURL);
        if (bannerURL) localStorage.setItem('lp_banner_' + uid, bannerURL);
        localStorage.setItem('lp_name_' + uid, username);
        state.userProfile = { ...state.userProfile, ...updates };
        localStorage.setItem('lp_onboarded_' + uid, 'true');
        state.onboardingComplete = true;
        document.getElementById('onboarding-modal').classList.remove('show');
        updateAvatarUI();
        // Award first_login achievement
        await awardBadge('first_login');
        // Show premium welcome animation
        showWelcomeAnimation(username);
    } catch (e) {
        console.error('[LPOLVO] finishOnboarding:', e);
        showToast('Setup failed. Please try again.', 'error');
        playError();
        if (nextBtn) { nextBtn.disabled = false; nextBtn.textContent = 'Finish'; }
    }
}

function showWelcomeAnimation(username) {
    const overlay = document.getElementById('welcome-overlay');
    const titleEl = document.getElementById('welcomeTitle');
    const subEl = document.getElementById('welcomeSub');
    if (!overlay) {
        // Fallback
        showToast('Welcome to LPOLVO HUB! 🎉', 'success');
        playSuccess();
        if (state.page === 'profile') buildProfilePage();
        if (state.page === 'dash') buildDashPage();
        return;
    }
    if (titleEl) titleEl.textContent = '✨ Welcome, ' + (username || 'Explorer') + '!';
    if (subEl) subEl.textContent = 'Your LPOLVO HUB journey starts now 🚀';
    overlay.classList.add('show');
    playSuccess();
    setTimeout(() => {
        overlay.style.animation = 'welcomeFadeOut 0.7s ease forwards';
        setTimeout(() => {
            overlay.classList.remove('show');
            overlay.style.animation = '';
            showToast('Welcome to LPOLVO HUB! 🎉', 'success');
            if (state.page === 'profile') buildProfilePage();
            if (state.page === 'dash') buildDashPage();
        }, 700);
    }, 2800);
}

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('onboardingUsername');
    if (usernameInput) {
        let usernameCheckTimer = null;
        usernameInput.addEventListener('input', function() {
            const val = this.value.trim();
            const checkEl = document.getElementById('onboardingUsernameCheck');
            const nextBtn = document.getElementById('onboardingNext');
            const check = validateUsername(val);
            if (!check.valid) {
                if (checkEl) { checkEl.textContent = check.msg; checkEl.className = 'onboarding-username-check invalid'; }
                this.classList.add('error');
                if (nextBtn) nextBtn.disabled = true;
                return;
            }
            this.classList.remove('error');
            if (checkEl) { checkEl.textContent = 'Checking…'; checkEl.className = 'onboarding-username-check'; }
            if (nextBtn) nextBtn.disabled = true;
            clearTimeout(usernameCheckTimer);
            usernameCheckTimer = setTimeout(async () => {
                const unique = await checkUsernameUnique(val);
                if (unique) {
                    if (checkEl) { checkEl.textContent = getTranslation('usernameAvailable') || '✓ Username available!'; checkEl.className = 'onboarding-username-check valid'; }
                    this.classList.remove('error');
                    if (nextBtn) nextBtn.disabled = false;
                } else {
                    if (checkEl) { checkEl.textContent = getTranslation('usernameTaken') || 'This username is already taken.'; checkEl.className = 'onboarding-username-check invalid'; }
                    this.classList.add('error');
                    if (nextBtn) nextBtn.disabled = true;
                }
            }, 500);
        });
    }
    const ageSelect = document.getElementById('onboardingAge');
    if (ageSelect) {
        ageSelect.addEventListener('change', function() {
            const nextBtn = document.getElementById('onboardingNext');
            if (nextBtn) nextBtn.disabled = !this.value;
        });
    }
});


