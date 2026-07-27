/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — firestore.js
   Firestore: loadRealStats, community activity feed,
   trending score calculation, profile completion
   ═══════════════════════════════════════════════════════════════════ */

/* ── COMMUNITY ACTIVITY FEED ── */
async function postCommunityActivity(type, text) {
    const fb = window.__FB;
    if (!fb?.ready) return;
    try {
        await fb.addDoc(fb.collection(fb.db, 'communityFeed'), {
            type,
            text,
            createdAt: fb.serverTimestamp(),
        });
    } catch (e) {}
}

let _communityUnsubscribe = null;
function startCommunityFeedListener() {
    const fb = window.__FB;
    if (!fb?.ready) return;
    if (_communityUnsubscribe) _communityUnsubscribe();
    try {
        const q = fb.query(fb.collection(fb.db, 'communityFeed'), fb.orderBy('createdAt', 'desc'), fb.limit(20));
        _communityUnsubscribe = fb.onSnapshot(q, (snap) => {
            const items = [];
            snap.forEach(doc => items.push({ id: doc.id, ...doc.data() }));
            renderCommunityFeed(items);
        }, () => {});
    } catch (e) {}
}

function renderCommunityFeed(items) {
    const el = document.getElementById('communityFeedList');
    if (!el) return;
    if (!items || items.length === 0) {
        el.innerHTML = `<div style="text-align:center;color:var(--text3);font-size:0.78rem;padding:20px;">No activity yet. Be the first! 🚀</div>`;
        return;
    }
    el.innerHTML = items.map(item => {
        const timeAgo = item.createdAt ? formatTime(item.createdAt) : 'Just now';
        return `<div class="community-feed-item" style="display:flex;align-items:flex-start;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);animation:fadeSlideIn 0.4s ease;">
            <div style="font-size:1.1rem;flex-shrink:0;margin-top:1px;">${getActivityIcon(item.type)}</div>
            <div style="flex:1;min-width:0;">
                <div style="font-family:var(--font-sans);font-size:0.8rem;color:var(--text2);line-height:1.4;">${item.text || ''}</div>
                <div style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text3);margin-top:3px;">${timeAgo}</div>
            </div>
        </div>`;
    }).join('');
}

function getActivityIcon(type) {
    const icons = {
        joined: '🟢', script_upload: '📜', achievement: '⭐', like: '❤️',
        milestone: '👁', profile_update: '👑', mythic_theme: '🔥', upload: '📜',
        copy: '📋', theme: '🎨', default: '✦'
    };
    return icons[type] || icons.default;
}


/* ── TRENDING SYSTEM ── */
function calcTrendingScore(s) {
    const views = s.views || 0;
    const likes = s.likes || 0;
    const favorites = s.favorites || 0;
    const copies = s.copies || 0;
    const ageHours = s.createdAt?.seconds ? (Date.now() / 1000 - s.createdAt.seconds) / 3600 : 9999;
    const recencyBoost = Math.max(0, 1 - ageHours / (7 * 24)); // decay over 7 days
    return (views * 1) + (likes * 3) + (favorites * 2) + (copies * 2) + (recencyBoost * 200);
}

function buildTrendingSection() {
    const el = document.getElementById('trendingList');
    if (!el) return;
    const scripts = [...state.scripts];
    if (scripts.length === 0) {
        el.innerHTML = `<div style="text-align:center;color:var(--text3);font-size:0.78rem;padding:20px 0;">Scripts will appear here as the community grows 🚀</div>`;
        return;
    }
    scripts.sort((a, b) => calcTrendingScore(b) - calcTrendingScore(a));
    const top = scripts.slice(0, 3);
    const medalData = [
        { rank: 1, emoji: '🥇', color: '#FFD700', label: 'GOLD', glow: 'rgba(255,215,0,0.35)' },
        { rank: 2, emoji: '🥈', color: '#C0C0C0', label: 'SILVER', glow: 'rgba(192,192,192,0.25)' },
        { rank: 3, emoji: '🥉', color: '#CD7F32', label: 'BRONZE', glow: 'rgba(205,127,50,0.25)' },
    ];
    el.innerHTML = top.map((s, i) => {
        const m = medalData[i];
        const score = Math.round(calcTrendingScore(s));
        return `<div onclick="openScriptDetail('${s.id}')" style="display:flex;align-items:center;gap:12px;padding:12px 14px;
            background:var(--card);border:1px solid ${m.color}55;border-radius:var(--radius);cursor:pointer;
            box-shadow:0 2px 16px ${m.glow};transition:var(--transition);margin-bottom:10px;position:relative;overflow:hidden;"
            onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform=''">
            <div style="position:absolute;inset:0;background:linear-gradient(135deg,${m.glow} 0%,transparent 60%);pointer-events:none;"></div>
            <div style="font-size:1.8rem;flex-shrink:0;animation:glow-pulse 2s ease-in-out infinite;filter:drop-shadow(0 0 6px ${m.color});">${m.emoji}</div>
            <div style="flex:1;min-width:0;">
                <div style="font-family:var(--font-display);font-size:0.88rem;font-weight:800;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escHtml(s.name)}</div>
                <div style="font-family:var(--font-sans);font-size:0.7rem;color:var(--text3);margin-top:2px;">${escHtml(s.game || '')} · by ${escHtml(s.authorName || 'Unknown')}</div>
                <div style="display:flex;gap:10px;margin-top:6px;">
                    <span style="font-size:0.65rem;color:var(--text3);">👁 ${formatNum(s.views||0)}</span>
                    <span style="font-size:0.65rem;color:var(--text3);">❤️ ${formatNum(s.likes||0)}</span>
                    <span style="font-size:0.65rem;color:var(--text3);">⭐ ${formatNum(s.favorites||0)}</span>
                </div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
                <div style="font-family:var(--font-mono);font-size:0.65rem;color:${m.color};font-weight:700;">${m.label}</div>
                <div style="font-family:var(--font-mono);font-size:0.62rem;color:var(--text3);margin-top:2px;">Score: ${formatNum(score)}</div>
            </div>
        </div>`;
    }).join('');
}


/* ── PROFILE COMPLETION ── */
function calcProfileCompletion(profile, user) {
    if (!profile && !user) return { pct: 0, items: [] };
    const p = profile || {};
    const items = [
        { key: 'username', label: '✔ Username set', done: !!(p.handle && p.handle.length > 1) },
        { key: 'displayName', label: '✔ Display name', done: !!(p.displayName && p.displayName !== 'User') },
        { key: 'bio', label: '✔ Bio written', done: !!(p.bio && p.bio.length > 5) },
        { key: 'avatar', label: '✔ Profile picture', done: !!(p.avatar) },
        { key: 'banner', label: '✔ Banner image', done: !!(p.banner) },
        { key: 'script', label: '✔ First script uploaded', done: (p.scripts || 0) >= 1 },
        { key: 'theme', label: '✔ Custom theme selected', done: !!(state.theme && state.theme !== 'lpolvo') },
    ];
    const done = items.filter(i => i.done).length;
    const pct = Math.round((done / items.length) * 100);
    return { pct, items, done, total: items.length };
}

function buildProfileCompletion(container) {
    if (!container) return;
    const { pct, items, done, total } = calcProfileCompletion(state.userProfile, state.currentUser);
    const barColor = pct === 100 ? '#22c55e' : pct >= 70 ? '#a855f7' : pct >= 40 ? '#0ea5e9' : 'var(--accent)';
    container.innerHTML = `
        <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px;margin-bottom:14px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="font-family:var(--font-display);font-size:0.88rem;font-weight:800;color:var(--text);">Profile Completion</div>
                <div style="font-family:var(--font-display);font-size:1rem;font-weight:900;color:${barColor};">${pct}%</div>
            </div>
            <div style="height:8px;background:var(--bg3);border-radius:999px;overflow:hidden;margin-bottom:12px;">
                <div style="height:100%;width:${pct}%;background:${barColor};border-radius:999px;transition:width 1s cubic-bezier(0.22,1,0.36,1);box-shadow:0 0 8px ${barColor}88;"></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                ${items.map(it => `<div style="font-family:var(--font-sans);font-size:0.72rem;color:${it.done ? barColor : 'var(--text3)'};display:flex;align-items:center;gap:5px;">
                    <span style="font-size:0.7rem;">${it.done ? '✅' : '⬜'}</span> ${it.label}
                </div>`).join('')}
            </div>
            ${pct === 100 ? `<div style="margin-top:12px;text-align:center;font-family:var(--font-display);font-size:0.8rem;font-weight:800;color:#22c55e;animation:glow-pulse 2s ease-in-out infinite;">🏆 Profile Complete! You've unlocked the Perfectionist badge!</div>` : ''}
        </div>`;
    if (pct === 100 && state.userProfile && !(state.userProfile.achievements||[]).includes('profile_complete')) {
        awardBadge('profile_complete').catch(() => {});
    }
}

