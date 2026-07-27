/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — scripts.js
   Script loading from Firestore, home/library page rendering,
   detail modal, copy, like, favorite, delete, top creators
   ═══════════════════════════════════════════════════════════════════ */

async function loadScripts() {
    const fb = window.__FB;
    if (!fb?.ready) { state.scripts = [];
        state.scriptsLoaded = true;
        buildHomeScripts();
        buildScriptsPage(); return; }
    try {
        const q = fb.query(fb.collection(fb.db, 'scripts'), fb.orderBy('createdAt', 'desc'), fb.limit(50));
        const snap = await fb.getDocs(q);
        state.scripts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.scriptsLoaded = true;
        buildHomeScripts();
        buildScriptsPage();
        buildSpotlight();
        buildLeaderboard();
        buildTopCreators();
    } catch (e) { state.scripts = [];
        state.scriptsLoaded = true;
        buildHomeScripts();
        buildScriptsPage(); }
}


async function loadTopCreators() {
    const fb = window.__FB;
    if (!fb?.ready) { document.getElementById('creatorsScroll').innerHTML =
            `<div style="padding:16px;color:var(--text3);font-size:0.85rem;">${getTranslation('noCreators')}</div>`; return; }
    try {
        const q = fb.query(fb.collection(fb.db, 'users'), fb.orderBy('views', 'desc'), fb.limit(8));
        const snap = await fb.getDocs(q);
        const creators = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(u => (u.views || 0) > 0 || (u
            .scripts || 0) > 0);
        const el = document.getElementById('creatorsScroll');
        if (!el) return;
        if (creators.length === 0) { el.innerHTML =
                `<div style="padding:16px;color:var(--text3);font-size:0.85rem;">${getTranslation('noCreators')}</div>`; return; }
        el.innerHTML = creators.map((c, i) => {
            const savedAvatar = c.avatar || '';
            const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
            const rankMedal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + '';
            return `<div class="creator-card" onclick="viewUserProfile('${c.uid}')">
        <div class="creator-card-wrap"><div class="creator-card-avatar">${savedAvatar ? `<img src="${savedAvatar}" alt="${c.displayName}">` : (c.displayName || 'U')[0].toUpperCase()}</div>
        <div class="creator-rank-badge ${rankClass}">${rankMedal}</div>${c.verified ? '<div class="creator-verified">✓</div>' : ''}</div>
        <div class="creator-card-name">${escHtml(c.displayName || 'User')}</div>
        <div class="creator-card-scripts">${c.scripts || 0} scripts</div>
        <div class="creator-card-views">${formatNum(c.views || 0)} views</div></div>`;
        }).join('');
    } catch (e) {}
}



/* ── SCRIPT SYSTEM ── */
function buildHomeScripts() {
    const container = document.getElementById('homeScriptsList');
    if (!container) return;
    let scripts = [...state.scripts];
    if (state.homeSort === 'hot') scripts.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    else if (state.homeSort === 'top') scripts.sort((a, b) => (b.views || 0) - (a.views || 0));
    else if (state.homeSort === 'free') scripts = scripts.filter(s => s.free !== false);
    else scripts.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    scripts = scripts.slice(0, 6);
    if (scripts.length === 0) {
        container.innerHTML = buildEmptyState({ icon: '📜', title: getTranslation('noScripts'), quote: '"' +
                getTranslation('beFirst') + '"', subtitle: getTranslation('scriptsWillAppear'), cta: getTranslation(
                'submitScript'), ctaAction: 'openUploadModal()' });
        return;
    }
    container.innerHTML = scripts.map(s => buildScriptCard(s)).join('');
}

function buildScriptsPage() {
    const container = document.getElementById('scriptsPageList');
    if (!container) return;
    let scripts = [...state.scripts];
    const q = state.scriptsFilter.toLowerCase();
    if (q) scripts = scripts.filter(s => (s.name || '').toLowerCase().includes(q) || (s.game || '').toLowerCase()
        .includes(q) || (s.category || '').toLowerCase().includes(q) || (s.tags || []).some(t => t.toLowerCase()
            .includes(q)) || (s.desc || '').toLowerCase().includes(q));
    if (state.scriptsSort === 'hot') scripts.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    else if (state.scriptsSort === 'top') scripts.sort((a, b) => (b.views || 0) - (a.views || 0));
    else if (state.scriptsSort === 'free') scripts = scripts.filter(s => s.free !== false);
    else if (state.scriptsSort === 'new') scripts.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds ||
        0));
    document.getElementById('scriptsCountNum').textContent = scripts.length + ' ' + getTranslation(scripts.length !== 1 ? 'scriptsCountPlural' : 'scriptsCountSingle');
    if (scripts.length === 0) {
        container.innerHTML = buildEmptyState({ icon: '📜', title: getTranslation('noScripts'), quote: '"' +
                getTranslation('beFirst') + '"', subtitle: getTranslation('scriptsComingSoon'), cta: getTranslation(
                'submitScript'), ctaAction: 'openUploadModal()' });
        return;
    }
    container.innerHTML = scripts.map(s => buildScriptCard(s)).join('');
}

function buildScriptCard(s) {
    const avatarContent = s.authorAvatar ? `<img src="${s.authorAvatar}" alt="${escHtml(s.authorName || '')}">` : (
        s.authorName || 'U')[0].toUpperCase();
    const badges = [
        s.free !== false ? '<span class="badge badge-free">FREE</span>' : '',
        s.keyless ? '<span class="badge badge-new">KEYLESS</span>' : '',
        (s.views || 0) > 1000 ? '<span class="badge badge-hot">HOT</span>' : '',
        (s.views || 0) > 5000 ? '<span class="badge badge-top">TOP</span>' : '',
    ].filter(Boolean).join('');
    const tags = (s.tags || []).slice(0, 3).map(t => `<span class="tag-pill">${escHtml(t)}</span>`).join('');
    const catEmoji = (CATEGORIES.find(c => c.id === s.category) || CATEGORIES[0]).icon;
    const thumbHtml = s.thumbnail ? `<img src="${s.thumbnail}" alt="${escHtml(s.name)}">` :
        `<div style="font-size:2.2rem;color:var(--text3);">${catEmoji}</div>`;
    return `<div class="script-card" onclick="openScriptDetail('${s.id}')">
    <div class="script-card-thumb">${thumbHtml}<div class="script-card-thumb-overlay"></div>
    <div class="script-card-thumb-badge">${catEmoji} ${escHtml(s.game || 'Unknown')}</div></div>
    <div class="script-card-body"><div class="script-card-header">
    <div class="script-card-avatar">${avatarContent}</div>
    <div class="script-card-info"><div class="script-card-title">${escHtml(s.name || 'Untitled Script')}</div>
    <div class="script-card-game">${escHtml(s.authorName || 'Anonymous')}</div></div>
    <div class="script-card-badges">${badges}</div></div>${tags ? `<div class="script-card-tags">${tags}</div>` : ''}</div>
    <div class="script-card-footer"><div class="script-stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>${formatNum(s.views || 0)}</div>
    <div class="script-stat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>${formatNum(s.likes || 0)}</div>
    <div class="script-stat" style="color:var(--text3);">${formatTime(s.createdAt)}</div></div></div>`;
}

function buildSpotlight() {
    const el = document.getElementById('spotlightContainer');
    if (!el) return;
    const spotlightScripts = [...state.scripts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 1);
    if (spotlightScripts.length === 0) { el.innerHTML = buildEmptyState({ icon: '⭐', title: getTranslation(
                'noSpotlight'), quote: '"' + getTranslation('beFirst') + '"' }); return; }
    el.innerHTML = buildScriptCard(spotlightScripts[0]);
}

function buildLeaderboard() {
    const el = document.getElementById('leaderboardList');
    if (!el) return;
    const top = [...state.scripts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
    if (top.length === 0) { el.innerHTML = buildEmptyState({ icon: '🏆', title: getTranslation('leaderboardEmpty'),
            quote: '"' + getTranslation('beFirst') + '"' }); return; }
    el.innerHTML = top.map((s, i) => {
        const rankClass = i < 3 ? 'rank-' + (i + 1) : '';
        const avatarContent = s.authorAvatar ? `<img src="${s.authorAvatar}">` : (s.authorName || 'U')[0]
            .toUpperCase();
        return `<div class="leaderboard-item ${rankClass}" onclick="openScriptDetail('${s.id}')">
        <div class="leaderboard-rank">${i+1}</div><div class="leaderboard-avatar">${avatarContent}</div>
        <div class="leaderboard-info"><div class="leaderboard-name">${escHtml(s.name || 'Untitled')}</div>
        <div class="leaderboard-game">${escHtml(s.game || 'Unknown')}</div></div>
        <div class="leaderboard-stat"><div class="leaderboard-stat-num">${formatNum(s.views || 0)}</div>
        <div class="leaderboard-stat-label">Views</div></div></div>`;
    }).join('');
}


/* ── SCRIPT DETAIL ── */
async function openScriptDetail(id) {
    const fb = window.__FB;
    playClick();
    let script = state.scripts.find(s => s.id === id);
    if (!script && fb?.ready) { try { const snap = await fb.getDoc(fb.doc(fb.db, 'scripts', id)); if (snap.exists())
            script = { id: snap.id, ...snap.data() }; } catch (e) {} }
    if (!script) { showToast(getTranslation('scriptNotFound'), 'error'); return; }
    if (fb?.ready) { try { await fb.updateDoc(fb.doc(fb.db, 'scripts', id), { views: fb.increment(1) });
            script.views = (script.views || 0) + 1; } catch (e) {} }
    const recentKey = 'lp_recent' + (state.currentUser ? '_' + state.currentUser.uid : '');
    const recent = JSON.parse(localStorage.getItem(recentKey) || '[]');
    const filtered = recent.filter(r => r !== id);
    filtered.unshift(id);
    localStorage.setItem(recentKey, JSON.stringify(filtered.slice(0, 10)));
    const isFav = state.userProfile?.favorites?.includes(id);
    const content = document.getElementById('scriptModalContent');
    const catEmoji = (CATEGORIES.find(c => c.id === script.category) || CATEGORIES[0]).icon;
    const authorLink = script.authorId ? `onclick="viewUserProfile('${script.authorId}')"` : '';
    content.innerHTML =
        `<div class="script-modal-header"><div class="script-modal-title">${escHtml(script.name || 'Untitled')}</div>
    <div class="script-modal-game">${catEmoji} ${escHtml(script.game || 'Unknown Game')} • ${escHtml(script.category || 'other')} • ${script.version ? 'v'+escHtml(script.version) : ''}</div></div>
    <div class="script-modal-body">${script.desc ? `<div style="font-size:0.8rem;color:var(--text2);margin-bottom:12px;line-height:1.5;">${escHtml(script.desc)}</div>` : ''}
    <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px;">${script.free !== false ? '<span class="badge badge-free">FREE</span>' : ''}${script.keyless ? '<span class="badge badge-new">KEYLESS</span>' : ''}${(script.tags||[]).map(t => `<span class="tag-pill">${escHtml(t)}</span>`).join('')}</div>
    <div class="script-code-block" id="scriptCodeBlock">${escHtml(script.code || '-- Code not available')}</div>
    <button class="script-copy-btn" id="scriptCopyBtn" onclick="doCopyScript('${id}')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy Script</button>
    <div class="script-action-row"><button class="script-action-btn ${isFav ? 'active' : ''}" id="favScriptBtn" onclick="toggleFavoriteScript('${id}')">${isFav ? '❤️' : '🤍'} ${isFav ? 'Saved' : 'Save'}</button>
    <button class="script-action-btn" onclick="shareScript('${id}', '${escHtml(script.name||'')}')">📤 Share</button>
    <button class="script-action-btn" onclick="reportScript('${id}')">🚩 Report</button>
    ${state.currentUser && script.authorId === state.currentUser.uid ? `<button class="script-action-btn" style="color:#ef4444;border-color:#ef4444;" onclick="confirmDeleteScript('${id}', '${escHtml(script.name||'')}', '${escHtml(script.thumbnail||'')}')">🗑️ Delete</button>` : ''}</div>
    <div class="script-modal-stats"><div class="script-modal-stat"><div class="script-modal-stat-val">${formatNum(script.views || 0)}</div><div class="script-modal-stat-lbl">Views</div></div>
    <div class="script-modal-stat"><div class="script-modal-stat-val">${formatNum(script.likes || 0)}</div><div class="script-modal-stat-lbl">Likes</div></div>
    <div class="script-modal-stat"><div class="script-modal-stat-val">${script.copies || 0}</div><div class="script-modal-stat-lbl">Copies</div></div>
    <div class="script-modal-stat"><div class="script-modal-stat-val">${formatTime(script.createdAt)}</div><div class="script-modal-stat-lbl">Added</div></div></div>
    ${script.authorName ? `<div style="display:flex;align-items:center;gap:10px;margin-top:14px;padding-top:14px;border-top:1px solid var(--border);">
    <div style="width:36px;height:36px;border-radius:50%;background:var(--btn-grad);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;overflow:hidden;">${script.authorAvatar ? `<img src="${script.authorAvatar}" style="width:100%;height:100%;object-fit:cover;">` : (script.authorName||'U')[0].toUpperCase()}</div>
    <div><div style="font-size:0.8rem;font-weight:700;color:var(--text);">${escHtml(script.authorName)}</div><div style="font-size:0.65rem;color:var(--text3);">Script author</div></div>
    <button ${authorLink} style="margin-left:auto;height:28px;padding:0 10px;border-radius:8px;background:var(--bg3);border:1px solid var(--border);color:var(--text2);font-size:0.7rem;cursor:pointer;">View</button></div>` : ''}
    <div style="margin-top:14px;padding-top:14px;border-top:1px solid var(--border);"><div style="font-size:0.7rem;font-weight:600;color:var(--text3);margin-bottom:8px;">🔄 Related Scripts</div>
    ${state.scripts.filter(s => s.id !== id && (s.game === script.game || s.category === script.category)).slice(0, 3).map(s => `<div style="padding:8px 0;border-bottom:1px solid var(--border);font-size:0.78rem;color:var(--text);cursor:pointer;" onclick="closeScriptModal();setTimeout(()=>openScriptDetail('${s.id}'),200);">${escHtml(s.name)}</div>`).join('') || '<div style="color:var(--text3);font-size:0.75rem;">No related scripts found.</div>'}</div></div>`;
    document.getElementById('script-modal').classList.add('show');
}

function closeScriptModal() { document.getElementById('script-modal').classList.remove('show'); }

function confirmDeleteScript(id, name, thumbURL) {
    if (!state.currentUser) return;
    const confirmed = window.confirm(`Delete "${name}"?\n\nThis action cannot be undone.`);
    if (confirmed) doDeleteScript(id, thumbURL);
}

async function doDeleteScript(id, thumbURL) {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    try {
        const scriptRef = fb.doc(fb.db, 'scripts', id);
        const snap = await fb.getDoc(scriptRef);
        if (!snap.exists()) { showToast('Script not found.', 'error'); return; }
        const data = snap.data();
        // Only allow author to delete
        if (data.authorId !== state.currentUser.uid) { showToast('You can only delete your own scripts.', 'error'); return; }
        // Delete from Firestore
        await fb.deleteDoc(scriptRef);
        // Delete thumbnail from Storage if it's a Firebase Storage URL
        if (thumbURL && thumbURL.includes('firebasestorage.googleapis.com') && fb.storage) {
            try {
                const ref = fb.storageRefFromURL(fb.storage, thumbURL);
                await fb.deleteObject(ref);
            } catch (e) { console.warn('[LPOLVO] Could not delete thumbnail from storage:', e.message); }
        }
        // Decrement user script count
        try { await fb.setDoc(fb.doc(fb.db, 'users', state.currentUser.uid), { scripts: fb.increment(-1) }, { merge: true }); } catch (e) { console.warn('[LPOLVO] Script count decrement failed:', e.message); }
        if (state.userProfile) state.userProfile.scripts = Math.max(0, (state.userProfile.scripts || 1) - 1);
        // Remove from local cache
        state.scripts = state.scripts.filter(s => s.id !== id);
        closeScriptModal();
        showToast('Script deleted successfully.', 'success');
        playSuccess();
        // Refresh pages
        buildHomeScripts();
        buildScriptsPage();
        buildDashPage();
    } catch (e) {
        console.error('[LPOLVO] doDeleteScript:', e);
        showToast('Failed to delete script. Please try again.', 'error');
        playError();
    }
}

async function doCopyScript(id) {
    const script = state.scripts.find(s => s.id === id);
    const code = script?.code || '';
    if (!code) { showToast(getTranslation('noCodeToCopy'), 'error'); return; }
    try {
        await navigator.clipboard.writeText(code);
        showToast(getTranslation('scriptCopiedClipboard'), 'success');
        playCopy();
        const btn = document.getElementById('scriptCopyBtn');
        if (btn) { btn.innerHTML = getTranslation('copied');
            setTimeout(() => { btn.innerHTML =
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Script'; },
                1500); }
        const fb = window.__FB;
        if (fb?.ready) { try { await fb.updateDoc(fb.doc(fb.db, 'scripts', id), { copies: fb.increment(1) }); } catch (
            e) {} }
        if (state.currentUser && state.userProfile && !(state.userProfile.badges || []).includes('first_copy')) {
            awardBadge('first_copy'); }
        if (script.authorId && script.authorId !== state.currentUser?.uid) {
            await addNotification(script.authorId,
                `${state.userProfile?.displayName || 'Someone'} copied your script "${script.name}"`, '📋');
        }
        await addActivity(state.currentUser?.uid || 'anonymous', 'copy', `Copied script: ${script.name}`);
    } catch (e) {
        const ta = document.createElement('textarea');
        ta.value = code;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast(getTranslation('scriptCopiedShort'), 'success');
        playCopy();
    }
}

async function toggleFavoriteScript(id) {
    if (!state.currentUser) { openAuthModal('login'); return; }
    const fb = window.__FB;
    if (!fb?.ready) return;
    const isFav = (state.userProfile?.favorites || []).includes(id);
    const ref = fb.doc(fb.db, 'users', state.currentUser.uid);
    try {
        await fb.updateDoc(ref, { favorites: isFav ? fb.arrayRemove(id) : fb.arrayUnion(id) });
        if (!state.userProfile) state.userProfile = {};
        if (!state.userProfile.favorites) state.userProfile.favorites = [];
        if (isFav) { state.userProfile.favorites = state.userProfile.favorites.filter(f => f !== id); } else { state
                .userProfile.favorites.push(id); }
        const btn = document.getElementById('favScriptBtn');
        if (btn) { btn.innerHTML = isFav ? getTranslation('saveFav') : getTranslation('savedFav');
            btn.classList.toggle('active', !isFav); }
        showToast(isFav ? 'Removed from favorites' : 'Added to favorites ⭐', isFav ? 'info' : 'success');
        playLike();
    } catch (e) { showToast(getTranslation('couldNotUpdateFavs'), 'error'); }
}

// Alias: buildTopCreators → loadTopCreators
function buildTopCreators() { return loadTopCreators(); }
