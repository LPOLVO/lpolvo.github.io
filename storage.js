/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — storage.js
   Badge awards, achievement checks, script sharing/reporting
   ═══════════════════════════════════════════════════════════════════ */

async function awardBadge(badgeId) {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    try {
        const now = Date.now();
        // Use setDoc merge:true so it works even if the user doc doesn't exist
        await fb.setDoc(fb.doc(fb.db, 'users', state.currentUser.uid), {
            badges: fb.arrayUnion(badgeId),
            achievements: fb.arrayUnion(badgeId),
            [`achievementDates`]: { [badgeId]: now },
        }, { merge: true });
        if (!state.userProfile) state.userProfile = {};
        if (!state.userProfile.badges) state.userProfile.badges = [];
        if (!state.userProfile.achievements) state.userProfile.achievements = [];
        if (!state.userProfile.badges.includes(badgeId)) state.userProfile.badges.push(badgeId);
        if (!state.userProfile.achievements.includes(badgeId)) state.userProfile.achievements.push(badgeId);
        const bd = BADGES_DEF.find(b => b.id === badgeId);
        if (bd) {
            showToast(`🏆 Achievement Unlocked: ${bd.icon} ${bd.name}!`, 'success');
            const uname = state.userProfile?.displayName || state.currentUser?.displayName || 'Someone';
            postCommunityActivity('achievement', `⭐ <strong>${escHtml(uname)}</strong> unlocked achievement: ${bd.icon} ${escHtml(bd.name)}`).catch(() => {});
        }
    } catch (e) { console.warn('[LPOLVO] awardBadge failed:', badgeId, e.message); }
}

// Check and award achievements based on current profile state
async function checkAchievements() {
    if (!state.currentUser || !state.userProfile) return;
    const ach = state.userProfile.achievements || [];
    const views = state.userProfile.views || 0;
    const scripts = state.userProfile.scripts || 0;
    const likes = state.userProfile.totalLikes || 0;
    // 100 views achievement
    if (views >= 100 && !ach.includes('views_100')) await awardBadge('views_100');
    // 10 scripts achievement
    if (scripts >= 10 && !ach.includes('scripts_10')) await awardBadge('scripts_10');
    // 100 likes achievement
    if (likes >= 100 && !ach.includes('likes_100')) await awardBadge('likes_100');
}

function shareScript(id, name) {
    const url = `${location.origin}${location.pathname}#scripts`;
    if (navigator.share) { navigator.share({ title: name + ' — LPOLVO HUB', url }); } else { navigator.clipboard
            ?.writeText(url);
        showToast(getTranslation('linkCopied'), 'info'); }
    playClick();
}

function reportScript(id) { showToast(getTranslation('reportSubmitted'), 'info');
    playClick(); }

