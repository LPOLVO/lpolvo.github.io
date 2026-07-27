/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — search.js
   Search overlay: open/close, query, results rendering
   ═══════════════════════════════════════════════════════════════════ */

/* ── SEARCH ── */
function openSearch() {
    state.searchOpen = true;
    document.getElementById('searchOverlay').classList.add('show');
    setTimeout(() => document.getElementById('searchInput')?.focus(), 100);
    playClick();
}

function closeSearch() {
    state.searchOpen = false;
    document.getElementById('searchOverlay').classList.remove('show');
    const si = document.getElementById('searchInput');
    if (si) si.value = '';
    document.getElementById('searchResults').innerHTML =
    '<div class="search-empty">Start typing to search everything</div>';
}

function onSearchInput(e) {
    clearTimeout(searchTimeout);
    const query = e.target.value.trim();
    if (!query) { document.getElementById('searchResults').innerHTML =
            '<div class="search-empty">Start typing to search everything</div>'; return; }
    searchTimeout = setTimeout(() => performSearch(query), 250);
}

async function performSearch(q) {
    const results = document.getElementById('searchResults');
    if (!results) return;
    results.innerHTML = '<div class="search-empty">Searching...</div>';
    const ql = q.toLowerCase();
    let html = '';
    const scriptMatches = state.scripts.filter(s => (s.name || '').toLowerCase().includes(ql) || (s.game || '')
        .toLowerCase().includes(ql) || (s.category || '').toLowerCase().includes(ql) || (s.tags || []).some(t => t
            .toLowerCase().includes(ql)) || (s.desc || '').toLowerCase().includes(ql)).slice(0, 5);
    if (scriptMatches.length > 0) {
        html += '<div class="search-section-label">📜 Scripts</div>';
        html += scriptMatches.map(s =>
            `<div class="search-result-item" onclick="closeSearch();openScriptDetail('${s.id}')">
        <div class="search-result-icon">📜</div><div class="search-result-info"><div class="search-result-name">${escHtml(s.name || 'Untitled')}</div>
        <div class="search-result-sub">${escHtml(s.game || 'Unknown')} • ${formatNum(s.views||0)} views</div></div>
        ${s.free !== false ? '<span class="search-result-badge">FREE</span>' : ''}</div>`
        ).join('');
    }
    const catMatches = CATEGORIES.filter(c => c.name.toLowerCase().includes(ql));
    if (catMatches.length > 0) {
        html += '<div class="search-section-label">🎮 Categories</div>';
        html += catMatches.map(c =>
            `<div class="search-result-item" onclick="closeSearch();navigate('scripts')">
        <div class="search-result-icon">${c.icon}</div><div class="search-result-info"><div class="search-result-name">${c.name}</div>
        <div class="search-result-sub">Category</div></div></div>`
        ).join('');
    }
    const fb = window.__FB;
    if (fb?.ready) {
        try {
            const usersQ = fb.query(fb.collection(fb.db, 'users'), fb.orderBy('displayName'), fb.limit(30));
            const usersSnap = await fb.getDocs(usersQ);
            const users = usersSnap.docs.map(d => ({ id: d.id, ...d.data() })).filter(u => (u.displayName || '')
                .toLowerCase().includes(ql) || (u.handle || '').toLowerCase().includes(ql) || (u.bio || '')
                .toLowerCase().includes(ql)).slice(0, 4);
            if (users.length > 0) {
                html += '<div class="search-section-label">👤 Users</div>';
                html += users.map(u =>
                    `<div class="search-result-item" onclick="closeSearch();viewUserProfile('${u.id}')">
                <div class="search-result-icon" style="background:var(--btn-grad);color:#fff;font-weight:800;font-size:0.9rem;border-radius:50%;">${u.avatar ? `<img src="${u.avatar}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">` : (u.displayName||'U')[0].toUpperCase()}</div>
                <div class="search-result-info"><div class="search-result-name">${escHtml(u.displayName || 'User')}</div>
                <div class="search-result-sub">@${escHtml(u.handle || '')} • ${u.scripts||0} scripts</div></div>
                <span class="search-result-badge">${formatNum(u.views||0)} views</span></div>`
                ).join('');
            }
        } catch (e) {}
    }
    if (!html) { results.innerHTML =
            `<div class="search-empty">No results for "<strong>${escHtml(q)}</strong>"</div>`; } else { results
            .innerHTML = html; }
}

document.addEventListener('DOMContentLoaded', () => {
    const sp = document.getElementById('scriptsPageSearch');
    if (sp) sp.addEventListener('input', e => { state.scriptsFilter = e.target.value;
        buildScriptsPage(); });
    const si = document.getElementById('searchInput');
    if (si) si.addEventListener('input', onSearchInput);
});

