/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — profile.js
   Profile page rendering, tabs, edit modal, save workflow,
   avatar/banner upload, profile completion widget
   ═══════════════════════════════════════════════════════════════════ */

/* ── PROFILE PAGE ── */
function buildProfilePage() {
    const el = document.getElementById('profileContent');
    if (!el) return;
    if (!state.currentUser) {
        el.innerHTML =
            `<div class="empty-state" style="min-height:60vh;"><div class="empty-icon-wrap"><div class="empty-stars"><span class="empty-star">✦</span><span class="empty-star">✦</span><span class="empty-star">✦</span><span class="empty-star">✦</span></div>👤</div>
        <div class="empty-state-title">${getTranslation('signInToView')}</div>
        <div class="empty-state-sub">${getTranslation('profileDescription')}</div>
        <button class="empty-state-cta" onclick="openAuthModal('login')">${getTranslation('signIn')} / Create Account</button></div>`;
        return;
    }
    const user = state.currentUser;
    const profile = state.userProfile || {};
    const name = profile.displayName || user.displayName || 'User';
    const handle = profile.handle || 'user';
    const bio = profile.bio || 'Roblox script enthusiast 🎮';
    const savedAvatar = localStorage.getItem('lp_avatar_' + user.uid) || profile.avatar || '';
    const savedBanner = localStorage.getItem('lp_banner_' + user.uid) || profile.banner || '';
    const bannerColor = getComputedStyle(document.documentElement).getPropertyValue('--btn-grad').trim();
    const joinDate = profile.createdAt?.seconds ? new Date(profile.createdAt.seconds * 1000).toLocaleDateString(
        'en-US', { month: 'short', year: 'numeric' }) : 'Recently';
    const badges = profile.badges || ['pioneer'];
    const isVerified = badges.includes('verified') || badges.length >= 3;
    const level = profile.level || 1;
    el.innerHTML =
        `<div class="profile-banner" style="background:${bannerColor};"><div class="profile-banner-overlay"></div>
    ${savedBanner ? `<img src="${savedBanner}" class="profile-banner-img" alt="Banner">` : ''}
    <button class="profile-banner-edit" onclick="openEditModal()">${getTranslation('editBanner')}</button></div>
    <div class="profile-info"><div style="display:flex;align-items:flex-end;gap:12px;margin-top:-52px;margin-bottom:10px;">
    <div class="profile-avatar" onclick="document.getElementById('avatarFileInput').click()" style="width:80px;height:80px;">${savedAvatar ? `<img src="${savedAvatar}" alt="${escHtml(name)}">` : name[0].toUpperCase()}
    <div class="profile-avatar-edit-btn">📷</div></div><button class="profile-edit-btn" onclick="openEditModal()">✏️ Edit Profile</button></div>
    <div class="profile-name-row"><div class="profile-name">${escHtml(name)}</div>${isVerified ? '<div class="profile-verified" title="Verified">✓</div>' : ''}</div>
    <div class="profile-handle">@${escHtml(handle)}</div><div class="profile-bio">${escHtml(bio)}</div>
    <div class="profile-meta"><div class="profile-meta-item">📅 Joined ${joinDate}</div>
    <div class="profile-meta-item">🌐 LPOLVO HUB</div><div class="profile-meta-item">🎮 ${getTranslation('robloxCreator')}</div>
    <div class="profile-meta-item">⭐ Level ${level}</div></div></div>
    <div class="profile-stats-row" style="margin:0 0;"><div class="profile-stat-item"><div class="profile-stat-num">${profile.scripts || 0}</div><div class="profile-stat-label">${getTranslation('scriptsLabel')}</div></div>
    <div class="profile-stat-item"><div class="profile-stat-num">${formatNum(profile.views || 0)}</div><div class="profile-stat-label">${getTranslation('views')}</div></div>
    <div class="profile-stat-item"><div class="profile-stat-num">${profile.followers || 0}</div><div class="profile-stat-label">${getTranslation('followers')}</div></div>
    <div class="profile-stat-item"><div class="profile-stat-num">${profile.following || 0}</div><div class="profile-stat-label">Following</div></div></div>
    <div class="profile-tabs" style="margin:0;"><div class="profile-tab active" onclick="switchProfileTab('scripts', this)">📜 Scripts</div>
    <div class="profile-tab" onclick="switchProfileTab('stats', this)">📊 Stats</div>
    <div class="profile-tab" onclick="switchProfileTab('activity', this)">⚡ Activity</div>
    <div class="profile-tab" onclick="switchProfileTab('badges', this)">🏅 Badges</div></div>
    <div id="profileCompletionWidget" style="padding:0 16px;margin-top:12px;"></div>
    <div class="profile-tab-content" id="profileTabContent">${buildProfileTabScripts(user, profile)}</div>`;
    // Render profile completion widget after DOM is built
    setTimeout(() => buildProfileCompletion(document.getElementById('profileCompletionWidget')), 0);
}

function switchProfileTab(tab, el) {
    state.profileTab = tab;
    document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');
    const content = document.getElementById('profileTabContent');
    if (!content) return;
    const user = state.currentUser;
    const profile = state.userProfile || {};
    playClick();
    if (tab === 'scripts') content.innerHTML = buildProfileTabScripts(user, profile);
    else if (tab === 'stats') content.innerHTML = buildProfileTabStats(profile);
    else if (tab === 'activity') buildProfileTabActivity(content);
    else if (tab === 'badges') content.innerHTML = buildProfileTabBadges(profile);
}

function buildProfileTabScripts(user, profile) {
    const myScripts = state.scripts.filter(s => s.authorId === user?.uid);
    if (myScripts.length === 0) {
        return buildEmptyState({ icon: '📜', title: getTranslation('noScripts'), quote: '"' + getTranslation(
                'beFirst') + '"', subtitle: getTranslation('yourScriptsHere'), cta: getTranslation(
                'submitScript'), ctaAction: 'openUploadModal()' });
    }
    return `<div class="scripts-grid" style="padding:0 16px 16px;">${myScripts.map(s => buildScriptCard(s)).join('')}</div>`;
}

function buildProfileTabStats(profile) {
    const favCount = (profile.favorites || []).length;
    return `<div style="padding:16px;"><div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:16px;">${[
        { icon:'👁️', label:'Total Views', value: formatNum(profile.views||0), color:'#0ea5e9' },
        { icon:'📜', label:'Scripts', value: profile.scripts||0, color:'#ec4899' },
        { icon:'❤️', label:'Total Likes', value: formatNum(profile.totalLikes||0), color:'#ef4444' },
        { icon:'⭐', label:'Favorites', value: favCount, color:'#f59e0b' },
        { icon:'📋', label:'Copies', value: formatNum(profile.totalCopies||0), color:'#8b5cf6' },
        { icon:'🏆', label:'Level', value: profile.level||1, color:'#fbbf24' },
    ].map(s => `<div class="dash-stat-card"><div class="dash-stat-icon" style="background:rgba(${hexToRgb(s.color)},0.15);color:${s.color};">${s.icon}</div>
    <div class="dash-stat-label">${s.label}</div><div class="dash-stat-value">${s.value}</div></div>`).join('')}</div>
    <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:14px;">
    <div style="font-size:0.76rem;font-weight:600;color:var(--text3);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.08em;">Favorite Scripts</div>
    ${favCount === 0 ? `<div style="color:var(--text3);font-size:0.8rem;">No favorites yet. Save scripts you love!</div>` :
    (() => { const favScripts = state.scripts.filter(s => (profile.favorites||[]).includes(s.id)).slice(0, 5);
        return favScripts.length > 0 ? favScripts.map(s => `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:0.8rem;color:var(--text);cursor:pointer;" onclick="openScriptDetail('${s.id}')">${escHtml(s.name)}</div>`).join('') :
            `<div style="color:var(--text3);font-size:0.8rem;">No favorites found locally.</div>`; })()}</div></div>`;
}

async function buildProfileTabActivity(container) {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) { container.innerHTML =
            `<div class="empty-state"><div class="empty-state-title">${getTranslation('signInToSeeActivity')}</div></div>`; return; }
    container.innerHTML = `<div style="padding:16px;color:var(--text3);font-size:0.8rem;">${getTranslation('loadingActivity')}</div>`;
    try {
        const q = fb.query(fb.collection(fb.db, 'users', state.currentUser.uid, 'activity'), fb.orderBy('createdAt',
            'desc'), fb.limit(20));
        const snap = await fb.getDocs(q);
        const activities = snap.docs.map(d => d.data());
        if (activities.length === 0) { container.innerHTML =
                `<div class="empty-state" style="min-height:200px;"><div class="empty-icon-wrap">⚡</div><div class="empty-state-title">${getTranslation('noActivityYet')}</div><div class="empty-state-sub">${getTranslation('activityWillAppear')}</div></div>`; return; }
        container.innerHTML =
            `<div class="activity-list" style="padding:0 16px;">${activities.map(a => `<div class="activity-item"><div class="activity-icon">${a.icon || '✦'}</div>
        <div class="activity-info"><div class="activity-text">${a.text || ''}</div><div class="activity-time">${formatTime(a.createdAt)}</div></div></div>`).join('')}</div>`;
    } catch (e) { container.innerHTML =
        `<div style="padding:16px;color:var(--text3);">${getTranslation('couldNotLoad')}</div>`; }
}

function buildProfileTabBadges(profile) {
    const earned = profile.badges || ['pioneer'];
    return `<div style="padding:16px;"><div style="font-size:0.76rem;color:var(--text3);margin-bottom:12px;">${getTranslation('earnBadges')}</div>
    <div class="badges-grid">${BADGES_DEF.map(b => `<div class="badge-card ${earned.includes(b.id) ? 'earned' : ''}" title="${escHtml(b.desc)}">
    <div class="badge-card-icon">${b.icon}</div><div class="badge-card-name">${escHtml(b.name)}</div></div>`).join('')}</div></div>`;
}

function viewUserProfile(uid) {
    if (uid === state.currentUser?.uid) { navigate('profile'); return; }
    showToast(getTranslation('userProfilesSoon'), 'info');
}


/* ── EDIT PROFILE ── */
function openEditModal() {
    if (!state.currentUser) { openAuthModal('login'); return; }
    const profile = state.userProfile || {};
    const name = profile.displayName || state.currentUser.displayName || '';
    const bio = profile.bio || '';
    const handle = profile.handle || '';
    const savedAvatar = localStorage.getItem('lp_avatar_' + state.currentUser.uid) || profile.avatar || '';
    const savedBanner = localStorage.getItem('lp_banner_' + state.currentUser.uid) || profile.banner || '';
    document.getElementById('editName').value = name;
    document.getElementById('editBio').value = bio;
    document.getElementById('editHandle').value = handle;
    const preview = document.getElementById('editAvatarPreview');
    if (preview) {
        if (savedAvatar) preview.innerHTML =
            `<img src="${savedAvatar}" style="width:100%;height:100%;object-fit:cover;">`;
        else preview.textContent = name[0] || 'U';
    }
    const bannerPreview = document.getElementById('editBannerPreview');
    if (bannerPreview) {
        if (savedBanner) bannerPreview.innerHTML =
            `<img src="${savedBanner}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);">`;
        else bannerPreview.innerHTML =
            `<span style="display:flex;flex-direction:column;align-items:center;gap:4px;"><span style="font-size:1.6rem;">🖼️</span><span style="font-size:0.65rem;">Tap to change banner</span></span>`;
    }
    document.getElementById('editError').textContent = '';
    document.getElementById('editSuccess').textContent = '';
    document.getElementById('edit-modal').classList.add('show');
    playClick();
}

function closeEditModal() { document.getElementById('edit-modal').classList.remove('show'); }

function onAvatarFileChange(event) {
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
            const preview = document.getElementById('editAvatarPreview');
            if (preview) preview.innerHTML =
                `<img src="${compressed}" style="width:100%;height:100%;object-fit:cover;">`;
            state.pendingAvatar = compressed;
        };
        img.src = dataUrl;
    };
    reader.readAsDataURL(file);
}

function onEditBannerChange(event) {
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
            const preview = document.getElementById('editBannerPreview');
            if (preview) preview.innerHTML =
                `<img src="${compressed}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);">`;
            state.pendingBanner = compressed;
        };
        img.src = dataUrl;
    };
    reader.readAsDataURL(file);
}

async function doSaveProfile() {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    const name = document.getElementById('editName').value.trim();
    const bio = document.getElementById('editBio').value.trim();
    const handle = document.getElementById('editHandle').value.trim().replace(/[^a-zA-Z0-9_]/g, '').toLowerCase().substring(0, 20);
    const errEl = document.getElementById('editError');
    const sucEl = document.getElementById('editSuccess');
    const btn = document.getElementById('editSaveBtn');
    if (!name) { if (errEl) errEl.textContent = getTranslation('displayNameRequired') || 'Display name is required.'; return; }
    if (errEl) errEl.textContent = '';
    if (sucEl) sucEl.textContent = '';
    btn.disabled = true;
    btn.textContent = getTranslation('saving') || 'Saving…';
    // Safety timeout — always re-enable button after 30s no matter what
    const safetyTimer = setTimeout(() => {
        btn.disabled = false;
        btn.textContent = getTranslation('saveChanges') || 'Save Changes';
        if (errEl && !errEl.textContent) errEl.textContent = 'Request timed out. Please try again.';
    }, 30000);
    try {
        const uid = state.currentUser.uid;
        let avatarURL = state.userProfile?.avatar || '';
        let bannerURL = state.userProfile?.banner || '';

        // Upload new avatar if pending
        if (state.pendingAvatar && state.pendingAvatar.startsWith('data:')) {
            try {
                if (fb.storage) {
                    const ref = fb.storageRef(fb.storage, `avatars/${uid}/avatar.jpg`);
                    const res = await fetch(state.pendingAvatar);
                    const blob = await res.blob();
                    await fb.uploadBytes(ref, blob);
                    avatarURL = await fb.getDownloadURL(ref);
                } else { avatarURL = state.pendingAvatar; }
            } catch (uploadErr) {
                console.warn('[LPOLVO] Avatar upload failed, using data URL:', uploadErr.message);
                avatarURL = state.pendingAvatar;
            }
        }

        // Upload new banner if pending
        if (state.pendingBanner && state.pendingBanner.startsWith('data:')) {
            try {
                if (fb.storage) {
                    const ref = fb.storageRef(fb.storage, `banners/${uid}/banner.jpg`);
                    const res = await fetch(state.pendingBanner);
                    const blob = await res.blob();
                    await fb.uploadBytes(ref, blob);
                    bannerURL = await fb.getDownloadURL(ref);
                } else { bannerURL = state.pendingBanner; }
            } catch (uploadErr) {
                console.warn('[LPOLVO] Banner upload failed, using data URL:', uploadErr.message);
                bannerURL = state.pendingBanner;
            }
        }

        const finalHandle = handle || state.userProfile?.handle || uid.substring(0, 12);
        const updates = {
            displayName: name,
            bio: bio || '',
            handle: finalHandle,
            avatar: avatarURL,
            banner: bannerURL,
            updatedAt: fb.serverTimestamp(),
        };
        // Use setDoc with merge:true as the primary write — works even if doc doesn't exist
        await fb.setDoc(fb.doc(fb.db, 'users', uid), updates, { merge: true });
        // Update Firebase Auth profile (non-critical, ignore failure)
        try { await fb.updateProfile(state.currentUser, { displayName: name, photoURL: avatarURL || undefined }); } catch {}
        // Update local cache
        localStorage.setItem('lp_name_' + uid, name);
        if (avatarURL) localStorage.setItem('lp_avatar_' + uid, avatarURL);
        if (bannerURL) localStorage.setItem('lp_banner_' + uid, bannerURL);
        if (!state.userProfile) state.userProfile = {};
        Object.assign(state.userProfile, { ...updates, updatedAt: { seconds: Date.now() / 1000 } });
        state.pendingAvatar = null;
        state.pendingBanner = null;
        updateAvatarUI();
        // Fire community activity event (non-blocking)
        postCommunityActivity('profile_update', `👑 <strong>${escHtml(name)}</strong> updated their profile`).catch(() => {});
        clearTimeout(safetyTimer);
        if (sucEl) sucEl.textContent = getTranslation('profileSaved') || '✓ Profile saved!';
        showToast(getTranslation('profileUpdated') || 'Profile updated! ✓', 'success');
        playSuccess();
        setTimeout(() => { closeEditModal(); buildProfilePage(); }, 900);
    } catch (e) {
        clearTimeout(safetyTimer);
        console.error('[LPOLVO] doSaveProfile error:', e.code || e.message, e);
        const msg = e.code === 'permission-denied'
            ? 'Permission denied. Please sign out and sign in again.'
            : (getTranslation('profileSaveFailed') || 'Failed to save. Please try again.');
        if (errEl) errEl.textContent = msg;
        playError();
    } finally {
        clearTimeout(safetyTimer);
        btn.disabled = false;
        btn.textContent = getTranslation('saveChanges') || 'Save Changes';
    }
}

