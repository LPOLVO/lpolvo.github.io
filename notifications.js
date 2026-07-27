/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — notifications.js
   Firestore data loading, notification panel, addActivity,
   mark-as-read, real-time stats
   ═══════════════════════════════════════════════════════════════════ */

async function loadRealStats() {
    const fb = window.__FB;
    if (!fb?.ready) return;
    try {
        const scriptsQ = fb.collection(fb.db, 'scripts');
        const scriptsSnap = await fb.getCountFromServer(scriptsQ);
        const sCount = scriptsSnap.data().count;
        document.getElementById('statScripts').textContent = formatNum(sCount || 0);
        const usersQ = fb.collection(fb.db, 'users');
        const usersSnap = await fb.getCountFromServer(usersQ);
        const uCount = usersSnap.data().count;
        document.getElementById('statUsers').textContent = formatNum(uCount || 0);
        const statsRef = fb.doc(fb.db, 'meta', 'stats');
        const statsSnap = await fb.getDoc(statsRef);
        const views = statsSnap.exists() ? statsSnap.data().totalViews || 0 : 0;
        document.getElementById('statViews').textContent = formatNum(views || 0);
        document.getElementById('aboutStatScripts').textContent = formatNum(sCount || 0);
        document.getElementById('aboutStatUsers').textContent = formatNum(uCount || 0);
    } catch (e) {}
}


async function loadNotifications() {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    try {
        const q = fb.query(fb.collection(fb.db, 'users', state.currentUser.uid, 'notifications'), fb.orderBy(
            'createdAt', 'desc'), fb.limit(20));
        const snap = await fb.getDocs(q);
        const notifs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        const unread = notifs.filter(n => !n.read).length;
        state.notifUnread = unread;
        document.getElementById('navNotifDot').classList.toggle('show', SETTINGS.notifications && unread > 0);
        const list = document.getElementById('notifList');
        if (!list) return;
        if (notifs.length === 0) { list.innerHTML = `<div class="notif-empty">${getTranslation('noNotifsYetIcon')}</div>`; return; }
        list.innerHTML = notifs.map(n =>
            `<div class="notif-item ${n.read ? '' : 'unread'}" onclick="markNotifRead('${n.id}', this)">
        <div class="notif-item-icon">${n.icon || '🔔'}</div>
        <div class="notif-item-info"><div class="notif-item-text">${n.text || ''}</div>
        <div class="notif-item-time">${formatTime(n.createdAt)}</div></div>${!n.read ? '<div class="notif-unread-dot"></div>' : ''}</div>`
        ).join('');
    } catch (e) {}
}

async function markNotifRead(id, el) {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    try {
        await fb.updateDoc(fb.doc(fb.db, 'users', state.currentUser.uid, 'notifications', id), { read: true });
        if (el) el.classList.remove('unread');
        const dot = el.querySelector('.notif-unread-dot');
        if (dot) dot.remove();
        state.notifUnread = Math.max(0, state.notifUnread - 1);
        document.getElementById('navNotifDot').classList.toggle('show', state.notifUnread > 0);
    } catch (e) {}
}

async function markAllNotifsRead() {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    try {
        const q = fb.query(fb.collection(fb.db, 'users', state.currentUser.uid, 'notifications'), fb.where('read',
            '==', false));
        const snap = await fb.getDocs(q);
        const batch = fb.writeBatch(fb.db);
        snap.docs.forEach(d => batch.update(d.ref, { read: true }));
        await batch.commit();
        state.notifUnread = 0;
        document.getElementById('navNotifDot').classList.remove('show');
        document.querySelectorAll('.notif-item').forEach(el => { el.classList.remove('unread'); const dot = el
                .querySelector('.notif-unread-dot'); if (dot) dot.remove(); });
        showToast(getTranslation('allNotifsRead'), 'info');
    } catch (e) {}
}

async function addActivity(uid, type, text) {
    const fb = window.__FB;
    if (!fb?.ready) return;
    try {
        const actRef = fb.collection(fb.db, 'users', uid, 'activity');
        const iconMap = { joined: '🎉', upload: '📜', view: '👁️', like: '❤️', theme: '🎨', comment: '💬',
            follow: '👥', copy: '📋' };
        await fb.addDoc(actRef, { type, text, icon: iconMap[type] || '✦', createdAt: fb.serverTimestamp() });
    } catch (e) {}
}

async function addNotification(uid, text, icon = '🔔') {
    const fb = window.__FB;
    if (!fb?.ready) return;
    try {
        await fb.addDoc(fb.collection(fb.db, 'users', uid, 'notifications'), { text, icon, read: false,
            createdAt: fb.serverTimestamp() });
    } catch (e) {}
}

