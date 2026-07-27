/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — upload.js
   Script upload modal: open/close, progress, validation,
   Firestore write, Storage thumbnail upload, badge awards
   ═══════════════════════════════════════════════════════════════════ */

/* ── UPLOAD SCRIPT ── */
function openUploadModal() {
    if (!state.currentUser) { openAuthModal('login');
        showToast(getTranslation('pleaseSignIn'), 'info'); return; }
    document.getElementById('upload-modal').classList.add('show');
    document.getElementById('uploadProgressWrap').classList.remove('show');
    document.getElementById('uploadProgressBar').style.width = '0%';
    state.uploadProgress = 0;
    playClick();
}

function closeUploadModal() { document.getElementById('upload-modal').classList.remove('show'); }

function onThumbFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { showToast('Thumbnail must be smaller than 2MB', 'error'); return; }
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
            state.pendingThumb = compressed;
            const preview = document.getElementById('thumbPreview');
            const placeholder = document.getElementById('thumbPlaceholder');
            if (preview && placeholder) { placeholder.style.display = 'none';
                preview.innerHTML = `<img src="${compressed}" style="width:100%;height:100%;object-fit:cover;">`; }
        };
        img.src = dataUrl;
    };
    reader.readAsDataURL(file);
}

function updateUploadProgress(pct) {
    state.uploadProgress = pct;
    const wrap = document.getElementById('uploadProgressWrap');
    const bar = document.getElementById('uploadProgressBar');
    if (wrap) wrap.classList.add('show');
    if (bar) bar.style.width = pct + '%';
}

async function doUploadScript() {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) { showToast(getTranslation('signInFirst'), 'error'); return; }
    const name = document.getElementById('uploadName').value.trim();
    const game = document.getElementById('uploadGame').value.trim();
    const code = document.getElementById('uploadCode').value.trim();
    const category = document.getElementById('uploadCategory').value;
    const desc = document.getElementById('uploadDesc').value.trim();
    const tagsRaw = document.getElementById('uploadTags').value.trim();
    const free = document.getElementById('uploadFree').checked;
    const keyless = document.getElementById('uploadKeyless').checked;
    const isPublic = document.getElementById('uploadPublic').checked;
    const version = document.getElementById('uploadVersion').value.trim() || '1.0.0';
    const executor = document.getElementById('uploadExecutor').value;
    const thumbnail = state.pendingThumb || '';
    const errEl = document.getElementById('uploadError');
    const btn = document.getElementById('uploadBtn');
    if (!name) { if (errEl) errEl.textContent = getTranslation('scriptNameRequired'); return; }
    if (!game) { if (errEl) errEl.textContent = getTranslation('gameNameRequired'); return; }
    if (!code) { if (errEl) errEl.textContent = getTranslation('scriptCodeRequired'); return; }
    if (errEl) errEl.textContent = '';
    btn.disabled = true;
    btn.textContent = getTranslation('submitting');
    updateUploadProgress(10);
    // Safety timeout — always re-enable button after 60s
    const safetyTimer = setTimeout(() => {
        btn.disabled = false;
        btn.textContent = getTranslation('submitBtn') || 'Submit Script';
        if (errEl && !errEl.textContent) errEl.textContent = 'Request timed out. Please try again.';
        const pw = document.getElementById('uploadProgressWrap');
        if (pw) pw.classList.remove('show');
    }, 60000);
    try {
        const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim().toLowerCase()).filter(Boolean).slice(0, 6) : [];
        const profile = state.userProfile || {};
        const uid = state.currentUser.uid;

        // Upload thumbnail to Firebase Storage if it's a data URL
        let thumbURL = thumbnail;
        if (thumbnail && thumbnail.startsWith('data:') && fb.storage) {
            try {
                const tRef = fb.storageRef(fb.storage, `thumbnails/${uid}/${Date.now()}.jpg`);
                const res = await fetch(thumbnail);
                const blob = await res.blob();
                await fb.uploadBytes(tRef, blob);
                thumbURL = await fb.getDownloadURL(tRef);
            } catch (thumbErr) {
                console.warn('[LPOLVO] Thumbnail upload failed, using data URL:', thumbErr.message);
                thumbURL = thumbnail;
            }
        }
        updateUploadProgress(40);

        const scriptData = {
            name,
            game,
            code,
            category,
            desc: desc || '',
            tags,
            free,
            keyless,
            public: isPublic,
            version,
            executor,
            thumbnail: thumbURL,
            authorId: uid,
            authorName: profile.displayName || state.currentUser.displayName || 'Anonymous',
            authorAvatar: profile.avatar || state.currentUser.photoURL || '',
            views: 0,
            likes: 0,
            copies: 0,
            reports: 0,
            favorites: 0,
            status: 'active',
            createdAt: fb.serverTimestamp(),
        };

        updateUploadProgress(55);
        const docRef = await fb.addDoc(fb.collection(fb.db, 'scripts'), scriptData);
        updateUploadProgress(75);

        // Update user script counter (non-blocking on failure)
        const newScriptCount = (state.userProfile?.scripts || 0) + 1;
        try {
            await fb.setDoc(fb.doc(fb.db, 'users', uid), {
                scripts: fb.increment(1),
                'stats.uploads': fb.increment(1),
            }, { merge: true });
            if (state.userProfile) state.userProfile.scripts = newScriptCount;
        } catch (counterErr) {
            console.warn('[LPOLVO] Counter update failed:', counterErr.message);
            if (state.userProfile) state.userProfile.scripts = newScriptCount;
        }

        // Award badges — fire-and-forget, never block the upload
        if (newScriptCount === 1 && !(state.userProfile?.achievements || []).includes('first_upload')) {
            awardBadge('first_upload').catch(() => {});
        }
        if (newScriptCount >= 10 && !(state.userProfile?.achievements || []).includes('scripts_10')) {
            awardBadge('scripts_10').catch(() => {});
        }
        if (!(state.userProfile?.badges || []).includes('creator')) {
            awardBadge('creator').catch(() => {});
        }

        state.scripts.unshift({ id: docRef.id, ...scriptData, thumbnail: thumbURL, createdAt: { seconds: Date.now() / 1000 } });
        updateUploadProgress(100);

        // Fire community activity (non-blocking)
        addActivity(uid, 'upload', `Uploaded script: <strong>${escHtml(name)}</strong>`).catch(() => {});
        postCommunityActivity('script_upload', `📜 <strong>${escHtml(profile.displayName || 'Someone')}</strong> uploaded a new script: <em>${escHtml(name)}</em>`).catch(() => {});

        clearTimeout(safetyTimer);
        setTimeout(() => {
            closeUploadModal();
            showToast(getTranslation('scriptSubmitted') || 'Script uploaded successfully! 🎉', 'success');
            playUpload();
            ['uploadName', 'uploadGame', 'uploadCode', 'uploadDesc', 'uploadTags', 'uploadVersion'].forEach(
                id => { const el = document.getElementById(id); if (el) el.value = ''; });
            state.pendingThumb = null;
            const preview = document.getElementById('thumbPreview');
            const placeholder = document.getElementById('thumbPlaceholder');
            if (preview && placeholder) { preview.innerHTML = '';
                preview.appendChild(placeholder);
                placeholder.style.display = 'flex'; }
            const tfi = document.getElementById('thumbFileInput');
            if (tfi) tfi.value = '';
            const pw = document.getElementById('uploadProgressWrap');
            const pb = document.getElementById('uploadProgressBar');
            if (pw) pw.classList.remove('show');
            if (pb) pb.style.width = '0%';
            buildHomeScripts();
            buildScriptsPage();
            buildSpotlight();
            buildLeaderboard();
            buildTrendingSection();
        }, 500);
    } catch (e) {
        clearTimeout(safetyTimer);
        console.error('[LPOLVO] doUploadScript error:', e.code || e.message, e);
        const msg = e.code === 'permission-denied'
            ? 'Permission denied. Please sign out and sign in again.'
            : (getTranslation('scriptSubmitFailed') || 'Upload failed. Please try again.');
        if (errEl) errEl.textContent = msg;
        playError();
        const pw = document.getElementById('uploadProgressWrap');
        if (pw) pw.classList.remove('show');
    } finally {
        clearTimeout(safetyTimer);
        btn.disabled = false;
        btn.textContent = getTranslation('submitBtn') || 'Submit Script';
    }
}

function setSortHome(sort) { state.homeSort = sort;
    document.querySelectorAll('#homeSortRow .sort-btn').forEach(b => b.classList.toggle('active', b.dataset.sort ===
        sort));
    buildHomeScripts();
    playClick(); }

function setScriptsSort(sort) { state.scriptsSort = sort;
    document.querySelectorAll('#scriptsSortRow .sort-btn').forEach(b => b.classList.toggle('active', b.dataset.sort ===
        sort));
    buildScriptsPage();
    playClick(); }

