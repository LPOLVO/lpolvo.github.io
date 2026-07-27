/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — app.js
   Application orchestrator: constants, state, navigation,
   dashboard, settings, static content, helpers, loading, init
   ═══════════════════════════════════════════════════════════════════ */

/* ── CONSTANTS ── */
const CATEGORIES = [
    { id: 'combat', icon: '⚔️', name: 'Combat' },
    { id: 'farm', icon: '🌾', name: 'Farm' },
    { id: 'speed', icon: '🚀', name: 'Speed' },
    { id: 'esp', icon: '👁️', name: 'ESP' },
    { id: 'teleport', icon: '🌀', name: 'Teleport' },
    { id: 'troll', icon: '😈', name: 'Troll' },
    { id: 'utility', icon: '🛠️', name: 'Utility' },
    { id: 'gui', icon: '🖥️', name: 'GUI' },
    { id: 'auto', icon: '🤖', name: 'Auto' },
    { id: 'other', icon: '📦', name: 'Other' },
];

const EXECUTORS = [
    { name: 'Arceus X', icon: '⚡', platform: 'Mobile — Android', free: true },
    { name: 'Delta', icon: '△', platform: 'Mobile — iOS/Android', free: true },
    { name: 'Fluxus', icon: '🌊', platform: 'PC — Windows', free: true },
    { name: 'KRNL', icon: '🔑', platform: 'PC — Windows', free: true },
    { name: 'Synapse Z', icon: '⚡', platform: 'Mobile', free: true },
    { name: 'Hydrogen', icon: '💧', platform: 'Mobile — Android', free: true },
    { name: 'Solara', icon: '☀️', platform: 'PC — Windows', free: true },
    { name: 'Xeno', icon: '👽', platform: 'Mobile', free: true },
];

const HOW_IT_WORKS = [
    { num: '01', title: 'Find a Script', desc: 'Browse our growing library of premium Roblox scripts sorted by game, popularity, and category.' },
    { num: '02', title: 'Copy the Script', desc: 'One-tap copy the script code to your clipboard. No extra steps needed.' },
    { num: '03', title: 'Run in Executor', desc: 'Paste the script into your favorite executor and enjoy the features.' },
];

const NEWS_DATA = {
    en: [
        { badge: 'major update', badgeClass: 'news-badge-update', date: 'Jul 2026', title: '🚀 LPOLVO HUB v1.3 — Community Expansion',
            desc: 'Version 1.3 focuses on three pillars: backend reliability, community features, and performance. Profile Save and Script Upload have been completely reconstructed at the backend level. Live Community Activity, Trending System, and Profile Completion are all live.' },
        { badge: 'fix', badgeClass: 'news-badge-fix', date: 'Jul 2026', title: '🔧 Profile Save — Backend Reconstruction',
            desc: 'The Profile Save system has been rebuilt from the ground up. The root cause — updateDoc failing when the document did not yet exist — has been fixed by switching to setDoc with merge:true. Storage uploads now have proper error recovery. The Save button will never remain stuck on "Saving…" again.' },
        { badge: 'fix', badgeClass: 'news-badge-fix', date: 'Jul 2026', title: '🔧 Script Upload — Backend Reconstruction',
            desc: 'Script Upload has been reconstructed with the same approach. Thumbnail upload failures no longer block the upload. Badge award calls are now fire-and-forget so they never hang the submit flow. A 60-second safety timer also guarantees the button always re-enables.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: '🟢 Live Community Activity Feed',
            desc: 'A real-time community feed now lives on the home page. Every script upload, profile update, achievement unlock, theme change, and more appears instantly with elegant slide-in animations and relative timestamps. Powered by Firestore real-time listeners.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: '🔥 Trending System',
            desc: 'A dynamic Trending section now ranks the top 3 scripts using a weighted score combining views, likes, favorites, copies, and a recency decay factor. Gold 🥇, Silver 🥈, and Bronze 🥉 medals feature animated glow effects and update automatically as scripts gain popularity.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: '📊 Profile Completion',
            desc: 'Each user now has a Profile Completion percentage visible on their profile. The animated progress bar tracks 7 milestones: Display Name, Username, Bio, Profile Picture, Banner, First Script, and Custom Theme. Reaching 100% unlocks the Perfectionist badge.' },
        { badge: 'update', badgeClass: 'news-badge-update', date: 'Jul 2026', title: '⚡ Firebase Performance Optimization',
            desc: 'Reduced duplicate Firestore reads and writes throughout the platform. localStorage caching is used more aggressively for avatar, banner, and name data. Badge award operations are now non-blocking. Firestore writes use setDoc(merge:true) as the standard pattern for all user documents.' },
        { badge: 'fix', badgeClass: 'news-badge-fix', date: 'Jul 2026', title: '🛡 Stability & Error Handling',
            desc: 'All async flows now have safety timers that guarantee buttons are never permanently disabled. Firebase permission errors display a clear, actionable message instead of hanging silently. Non-critical operations (badge awards, activity logging) are isolated from main flows.' },
        { badge: 'update', badgeClass: 'news-badge-update', date: 'Jul 2026', title: '🎉 LPOLVO HUB v1.2 — Complete User System Overhaul (Historical)',
            desc: 'Version 1.2 rebuilt every user-facing system from the ground up to be fully functional and production-ready. Real saves, real uploads, real data — everything worked.' },
        { badge: 'update', badgeClass: 'news-badge-update', date: 'Jul 2026', title: 'LPOLVO HUB V1 — Original Public Release (Historical)',
            desc: 'After extensive internal development, LPOLVO HUB V1 was officially launched. This marked the first public release with all core systems fully operational.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: 'Complete Localization System',
            desc: 'V1 introduces a professional localization system supporting English, French, and Arabic. Every element of the interface is fully translated.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: 'Full Arabic Support with RTL',
            desc: 'Arabic speakers now enjoy a fully native experience with proper RTL layout, Arabic typography, and culturally natural translations throughout the entire platform.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: 'Full French Support',
            desc: 'French-speaking users now have a completely localized experience with professional, native-quality translations across all pages and features.' },
        { badge: 'update', badgeClass: 'news-badge-update', date: 'Jul 2026', title: 'Dynamic Translation — No Reload',
            desc: 'Switching language instantly updates every element on the page — nav, themes, descriptions, buttons, toasts — without any page reload.' },
        { badge: 'new', badgeClass: 'news-badge-new', date: 'Jul 2026', title: 'Theme Name Localization',
            desc: 'All 52+ theme names and descriptions are now fully translated into Arabic and French, including Infinity Throne, The Omniscient Eye, Genesis Protocol, and all rarities.' },
        { badge: 'update', badgeClass: 'news-badge-update', date: 'Jul 2026', title: 'UI Refinements & Better Performance',
            desc: 'Cards, buttons, menus and animations received polish passes. Optimized rendering loops for lower resource usage across all device types.' },
        { badge: 'fix', badgeClass: 'news-badge-fix', date: 'Jul 2026', title: 'General Bug Fixes',
            desc: 'Resolved various interaction issues, improved Firebase reliability, and fixed several layout inconsistencies in RTL mode.' },
    ],
    ar: [
        { badge: 'تحديث', badgeClass: 'news-badge-update', date: 'يوليو 2026', title: 'LPOLVO HUB V1 — الإصدار الرسمي',
            desc: 'بعد فترة طويلة من التطوير الداخلي، أصبح LPOLVO HUB V1 رسميًا متاحًا للعموم. هذا هو أول إصدار عام مع اكتمال جميع الأنظمة الأساسية.' },
        { badge: 'جديد', badgeClass: 'news-badge-new', date: 'يوليو 2026', title: 'نظام التعريب الكامل',
            desc: 'يُقدّم الإصدار V1 نظام توطين احترافي يدعم الإنجليزية والفرنسية والعربية. كل عنصر في الواجهة مترجم بالكامل.' },
        { badge: 'جديد', badgeClass: 'news-badge-new', date: 'يوليو 2026', title: 'دعم العربية الكامل مع RTL',
            desc: 'يتمتع المستخدمون الناطقون بالعربية الآن بتجربة أصيلة مع تخطيط RTL الصحيح وخطوط عربية وترجمات طبيعية في جميع أنحاء المنصة.' },
        { badge: 'جديد', badgeClass: 'news-badge-new', date: 'يوليو 2026', title: 'دعم الفرنسية الكامل',
            desc: 'يتمتع المستخدمون الناطقون بالفرنسية بتجربة محلّية بالكامل مع ترجمات احترافية عالية الجودة في جميع الصفحات والميزات.' },
        { badge: 'تحديث', badgeClass: 'news-badge-update', date: 'يوليو 2026', title: 'ترجمة فورية — بدون إعادة تحميل',
            desc: 'تبديل اللغة يُحدّث فورًا كل عنصر في الصفحة — التنقل، المظاهر، الأوصاف، الأزرار — دون أي إعادة تحميل.' },
        { badge: 'جديد', badgeClass: 'news-badge-new', date: 'يوليو 2026', title: 'ترجمة أسماء المظاهر',
            desc: 'جميع أسماء المظاهر 52+ وأوصافها مترجمة الآن إلى العربية والفرنسية، بما في ذلك عرش اللانهاية وعين كليّ المعرفة وبروتوكول التكوين.' },
        { badge: 'تحديث', badgeClass: 'news-badge-update', date: 'يوليو 2026', title: 'تحسينات الواجهة والأداء',
            desc: 'حصلت البطاقات والأزرار والقوائم والرسوم المتحركة على تحسينات. حلقات عرض محسّنة لاستخدام موارد أقل على جميع أنواع الأجهزة.' },
        { badge: 'إصلاح', badgeClass: 'news-badge-fix', date: 'يوليو 2026', title: 'إصلاحات عامة',
            desc: 'حل مشكلات تفاعل متعددة، وتحسين موثوقية Firebase، وإصلاح عدة تناقضات في التخطيط في وضع RTL.' },
    ],
    fr: [
        { badge: 'mise à jour', badgeClass: 'news-badge-update', date: 'Juil 2026', title: 'LPOLVO HUB V1 — Sortie Officielle',
            desc: 'Après un long développement interne, LPOLVO HUB V1 est officiellement disponible. Ceci marque la première sortie publique avec tous les systèmes principaux opérationnels.' },
        { badge: 'nouveau', badgeClass: 'news-badge-new', date: 'Juil 2026', title: 'Système de Localisation Complet',
            desc: 'V1 introduit un système de localisation professionnel supportant l\'anglais, le français et l\'arabe. Chaque élément de l\'interface est entièrement traduit.' },
        { badge: 'nouveau', badgeClass: 'news-badge-new', date: 'Juil 2026', title: 'Support Arabe Complet avec RTL',
            desc: 'Les arabophones bénéficient désormais d\'une expérience entièrement native avec une mise en page RTL correcte et des traductions culturellement naturelles.' },
        { badge: 'nouveau', badgeClass: 'news-badge-new', date: 'Juil 2026', title: 'Support Français Complet',
            desc: 'Les francophones disposent maintenant d\'une expérience entièrement localisée avec des traductions professionnelles et natives sur toutes les pages.' },
        { badge: 'mise à jour', badgeClass: 'news-badge-update', date: 'Juil 2026', title: 'Traduction Dynamique — Sans Rechargement',
            desc: 'Changer de langue met instantanément à jour chaque élément de la page — navigation, thèmes, descriptions, boutons — sans aucun rechargement.' },
        { badge: 'nouveau', badgeClass: 'news-badge-new', date: 'Juil 2026', title: 'Localisation des Noms de Thèmes',
            desc: 'Tous les noms et descriptions des 52+ thèmes sont maintenant entièrement traduits en arabe et en français, incluant Trône de l\'Infini et L\'Œil Omniscient.' },
        { badge: 'mise à jour', badgeClass: 'news-badge-update', date: 'Juil 2026', title: 'Améliorations UI & Performances',
            desc: 'Les cartes, boutons, menus et animations ont été polis. Boucles de rendu optimisées pour une utilisation réduite des ressources sur tous les appareils.' },
        { badge: 'correctif', badgeClass: 'news-badge-fix', date: 'Juil 2026', title: 'Corrections Générales',
            desc: 'Résolution de divers problèmes d\'interaction, amélioration de la fiabilité Firebase et correction d\'incohérences de mise en page en mode RTL.' },
    ],
};
// Backward compatible NEWS reference (used by buildNews if not updated)
const NEWS = NEWS_DATA.en;

const FAQS = [
    { q: 'Are the scripts safe to use?',
    a: 'All scripts submitted go through community review. Use at your own discretion and always test in a safe environment first.' },
    { q: 'How do I run scripts on mobile?',
    a: 'Download a mobile executor like Arceus X or Delta, then paste the copied script code into the executor and run it.' },
    { q: 'What is a keyless script?',
    a: 'A keyless script does not require you to complete key verification steps. It runs immediately after pasting.' },
    { q: 'Can I submit my own script?',
    a: 'Yes! Tap the "+ Add Script" button, fill in the details and paste your Lua code. Your script will be live immediately.' },
    { q: 'Why is a script not working?',
    a: 'Scripts may break after Roblox updates. Check for newer versions, or report the issue using the Report button on the script.' },
    { q: 'Is LPOLVO HUB free?',
    a: 'Yes, LPOLVO HUB is completely free. No subscriptions, no paywalls.' },
];

const TICKER_ITEMS = [
    '🚀 LPOLVO HUB V1 — Official Public Release!', '🌐 Now with Full Arabic & French Support',
    '🔥 52+ immersive themes with dynamic backgrounds', '⭐ Submit your script today',
    '🌙 Complete RTL support for Arabic', '🎨 Each theme has unique particles & sounds',
    '👑 Creator profiles now live!', '🎮 100% compatible with mobile executors',
    '🌟 Dynamic Translation — no page reload needed', '⚡ Infinity Throne: OMNIPOTENT rarity'
];


/* ── STATE ── */
let state = {
    page: 'home',
    theme: localStorage.getItem('lp_theme') || 'lpolvo',
    language: localStorage.getItem('lp_lang') || 'en',
    currentUser: null,
    userProfile: null,
    homeSort: 'new',
    scriptsSort: 'all',
    scriptsFilter: '',
    notifUnread: 0,
    scripts: [],
    scriptsLoaded: false,
    profileTab: 'scripts',
    notifPanelOpen: false,
    searchOpen: false,
    pendingAvatar: null,
    pendingThumb: null,
    pendingBanner: null,
    onboardingStep: 0,
    onboardingData: {},
    onboardingComplete: false,
    uploadProgress: 0,
    themeTransitioning: false,
    bgAnimFrame: null,
    overlayAnimFrame: null,
    matrixAnimFrame: null,
    originCleanup: null,
    originVisibilityCleanup: null,
};

let SETTINGS = {
    sounds: JSON.parse(localStorage.getItem('lp_sounds') ?? 'true'),
    particles: JSON.parse(localStorage.getItem('lp_particles') ?? 'true'),
    notifications: JSON.parse(localStorage.getItem('lp_notifs') ?? 'true'),
    reducedMotion: JSON.parse(localStorage.getItem('lp_reducedMotion') ?? 'false'),
    ambientMusic: JSON.parse(localStorage.getItem('lp_ambientMusic') ?? 'false'),
};


/* ── NAVIGATION ── */
function navigate(page) {
    if (state.page === page) return;
    const oldPage = document.getElementById('page-' + state.page);
    const newPage = document.getElementById('page-' + page);
    if (!newPage) return;
    if (oldPage) oldPage.classList.remove('active');
    newPage.classList.add('active');
    state.page = page;
    document.querySelectorAll('.bottom-nav-item').forEach(el => el.classList.toggle('active', el.dataset.page ===
        page));
    document.querySelectorAll('.sidebar-nav-item[data-page]').forEach(el => el.classList.toggle('active', el
        .dataset.page === page));
    if (page === 'profile') buildProfilePage();
    if (page === 'dash') buildDashPage();
    if (page === 'settings') buildSettings();
    if (page === 'scripts') buildScriptsPage();
    playNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, null, '#' + page);
}

function handleHashChange() {
    const hash = location.hash.replace('#', '');
    const validPages = ['home', 'scripts', 'profile', 'dash', 'settings'];
    if (validPages.includes(hash)) navigate(hash);
}


/* ── DASHBOARD ── */
function buildDashPage() {
    const content = document.getElementById('dashContent');
    if (!content) return;
    if (!state.currentUser) {
        content.innerHTML =
            `<div class="empty-state" style="min-height:60vh;"><div class="empty-icon-wrap"><div class="empty-stars"><span class="empty-star">✦</span><span class="empty-star">✦</span><span class="empty-star">✦</span><span class="empty-star">✦</span></div>📊</div>
        <div class="empty-state-title">${getTranslation('signInToView')}</div>
        <div class="empty-state-sub">${getTranslation('dashboardDescription')}</div>
        <button class="empty-state-cta" onclick="openAuthModal('login')">${getTranslation('signIn')} / Create Account</button></div>`;
        return;
    }
    const user = state.currentUser;
    const profile = state.userProfile || {};
    const name = profile.displayName || user.displayName || 'User';
    const hour = new Date().getHours();
    const greeting = hour < 12 ? getTranslation('goodMorning') : hour < 18 ? getTranslation('goodAfternoon') : getTranslation('goodEvening');
    const theme = THEMES.find(t => t.id === state.theme);
    const savedAvatar = localStorage.getItem('lp_avatar_' + user.uid);
    const xp = profile.xp || 120;
    const maxXp = 1000;
    const level = Math.floor(xp / maxXp) + 1;
    const xpPct = ((xp % maxXp) / maxXp) * 100;
    content.innerHTML =
        `<div class="dashboard-header"><div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">
    <div style="width:56px;height:56px;border-radius:50%;background:var(--btn-grad);color:#fff;font-weight:800;font-size:1rem;display:flex;align-items:center;justify-content:center;border:2px solid var(--glass-border);overflow:hidden;flex-shrink:0;">${savedAvatar ? `<img src="${savedAvatar}" style="width:100%;height:100%;object-fit:cover;">` : name[0].toUpperCase()}</div>
    <div><div class="dashboard-greeting">${greeting}, 👋</div><div class="dashboard-username">${escHtml(name)}</div>
    <div class="dashboard-level-badge">⭐ ${getTranslation('levelLabel')} ${level} · ${profile.badges?.includes('creator') ? getTranslation('creatorBadge') : getTranslation('pioneerBadge')}</div></div></div>
    <div class="dashboard-xp-row"><div style="font-size:0.7rem;color:var(--text3);">XP</div>
    <div class="dashboard-xp-bar-wrap"><div class="dashboard-xp-bar" style="width:${xpPct.toFixed(0)}%;"></div></div>
    <div class="dashboard-xp-label">${xp} / ${maxXp}</div></div></div>
    <div class="dashboard-stats-grid"><div class="dash-stat-card"><div class="dash-stat-icon" style="background:rgba(14,165,233,0.15);color:#0ea5e9;">👁️</div>
    <div class="dash-stat-label">${getTranslation('totalViews')}</div><div class="dash-stat-value">${formatNum(profile.views || 0)}</div>
    <div class="dash-stat-change up">${getTranslation('views')}</div></div>
    <div class="dash-stat-card"><div class="dash-stat-icon" style="background:rgba(236,72,153,0.15);color:#ec4899;">📜</div>
    <div class="dash-stat-label">${getTranslation('myScripts')}</div><div class="dash-stat-value">${profile.scripts || 0}</div>
    <div class="dash-stat-change up">${profile.scripts > 0 ? getTranslation('uploadedStatus') : getTranslation('submitFirst')}</div></div>
    <div class="dash-stat-card"><div class="dash-stat-icon" style="background:rgba(168,85,247,0.15);color:#a855f7;">👥</div>
    <div class="dash-stat-label">${getTranslation('followers')}</div><div class="dash-stat-value">${profile.followers || 0}</div>
    <div class="dash-stat-change up">${getTranslation('growing')}</div></div>
    <div class="dash-stat-card"><div class="dash-stat-icon" style="background:rgba(34,197,94,0.15);color:#22c55e;">⭐</div>
    <div class="dash-stat-label">${getTranslation('favoritesLabel')}</div><div class="dash-stat-value">${(profile.favorites || []).length}</div>
    <div class="dash-stat-change up">${getTranslation('scriptsSaved')}</div></div></div>
    <div class="dashboard-section"><div class="dashboard-section-title">⚡ ${getTranslation('quickActions')}</div>
    <div class="dash-quick-actions"><div class="dash-quick-btn" onclick="openUploadModal()"><div class="dash-quick-icon">⬆️</div><div class="dash-quick-label">${getTranslation('uploadLabel')}</div></div>
    <div class="dash-quick-btn" onclick="navigate('scripts')"><div class="dash-quick-icon">🔍</div><div class="dash-quick-label">${getTranslation('browseScripts')}</div></div>
    <div class="dash-quick-btn" onclick="navigate('settings')"><div class="dash-quick-icon">🎨</div><div class="dash-quick-label">${getTranslation('changeTheme')}</div></div>
    <div class="dash-quick-btn" onclick="openSearch()"><div class="dash-quick-icon">🔎</div><div class="dash-quick-label">${getTranslation('search')}</div></div>
    <div class="dash-quick-btn" onclick="navigate('profile')"><div class="dash-quick-icon">👤</div><div class="dash-quick-label">${getTranslation('myProfile')}</div></div></div></div>
    <div class="dashboard-section"><div class="dashboard-section-title">🎨 ${getTranslation('currentTheme')}</div>
    <div style="background:var(--card);border:1px solid var(--card-border);border-radius:var(--radius-lg);padding:14px;display:flex;align-items:center;gap:12px;">
    <div style="width:40px;height:40px;border-radius:10px;background:var(--btn-grad);flex-shrink:0;box-shadow:0 2px 10px var(--glow2);"></div>
     <div><div style="font-weight:700;color:var(--text);">${getThemeName(state.theme)}</div><div style="font-size:0.7rem;color:var(--text3);">${getThemeDesc(state.theme)}</div></div>
    <button onclick="navigate('settings')" style="margin-left:auto;height:30px;padding:0 12px;border-radius:8px;background:var(--bg3);border:1px solid var(--border);color:var(--text2);font-size:0.7rem;cursor:pointer;">${getTranslation('changeBtn')}</button></div></div>
    <div class="dashboard-section"><div class="dashboard-section-title">⭐ ${getTranslation('favoriteScripts')}</div>
    ${(profile.favorites || []).length === 0 ? `<div class="empty-state" style="min-height:140px;"><div class="empty-icon-wrap">⭐</div><div class="empty-state-title">${getTranslation('noFavsYet')}</div><div class="empty-state-sub">${getTranslation('scriptsWillAppear')}</div></div>` :
    (() => { const favScripts = state.scripts.filter(s => (profile.favorites||[]).includes(s.id)).slice(0, 3);
        return favScripts.length > 0 ? `<div class="scripts-grid">${favScripts.map(s => buildScriptCard(s)).join('')}</div>` :
            `<div style="color:var(--text3);font-size:0.8rem;padding:8px 0;">Loading favorites...</div>`; })()}</div>
    <div class="dashboard-section"><div class="dashboard-section-title">🕐 ${getTranslation('recentlyViewed')}</div>
    ${(() => { const recentKey = 'lp_recent_' + (user.uid || ''); const recent = JSON.parse(localStorage.getItem(recentKey) || '[]');
        const recentScripts = recent.map(id => state.scripts.find(s => s.id === id)).filter(Boolean).slice(0, 3);
        if (recentScripts.length === 0) { return `<div class="empty-state" style="min-height:140px;"><div class="empty-icon-wrap">🕐</div><div class="empty-state-title">Nothing viewed yet</div><div class="empty-state-sub">Scripts you open will appear here.</div></div>`; }
        return `<div class="scripts-grid">${recentScripts.map(s => buildScriptCard(s)).join('')}</div>`; })()}</div>
    <div class="dashboard-section" id="dashActivitySection"><div class="dashboard-section-title">📋 ${getTranslation('recentActivity')}</div><div id="dashActivity" style="color:var(--text3);font-size:0.8rem;">${getTranslation('loading')}</div></div>
    <div class="dashboard-section"><div class="dashboard-section-title">👤 ${getTranslation('settingsAccount')}</div>
    <div class="account-section"><div class="account-row"><div><div class="account-row-label">Email</div><div class="account-row-value">${escHtml(user.email || '')}</div></div></div>
    <div class="account-row"><div><div class="account-row-label">Display Name</div><div class="account-row-value">${escHtml(name)}</div></div><button class="account-row-edit" onclick="openEditModal()">Edit</button></div>
    <div class="account-row"><div><div class="account-row-label">Account Status</div><div class="account-row-value" style="color:var(--success);">✓ Verified &amp; Active</div></div></div></div></div>
    <div style="padding:0 16px 8px;"><div style="font-size:0.7rem;font-weight:700;color:var(--error);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:8px;">⚠️ Danger Zone</div></div>
    <button class="signout-btn" onclick="doSignOut()">🚪 Sign Out</button><div style="height:16px;"></div>`;
    loadDashActivity();
}

async function loadDashActivity() {
    const fb = window.__FB;
    if (!fb?.ready || !state.currentUser) return;
    const el = document.getElementById('dashActivity');
    if (!el) return;
    try {
        const q = fb.query(fb.collection(fb.db, 'users', state.currentUser.uid, 'activity'), fb.orderBy('createdAt',
            'desc'), fb.limit(5));
        const snap = await fb.getDocs(q);
        const acts = snap.docs.map(d => d.data());
        if (acts.length === 0) { el.innerHTML =
                `<div style="color:var(--text3);font-size:0.8rem;padding:8px 0;">${getTranslation('noActivity')}</div>`; return; }
        el.innerHTML =
            `<div class="activity-list">${acts.map(a => `<div class="activity-item"><div class="activity-icon">${a.icon || '✦'}</div>
        <div class="activity-info"><div class="activity-text">${a.text || ''}</div><div class="activity-time">${formatTime(a.createdAt)}</div></div></div>`).join('')}</div>`;
    } catch (e) {}
}


/* ── SETTINGS ── */
function buildSettings() {
    const el = document.getElementById('settingsContent');
    if (!el) return;
    const langEntries = Object.entries(LANGUAGES);
    const currentLang = state.language || 'en';
    el.innerHTML =
        `<div class="settings-section"><div class="settings-section-title">${getTranslation('settingsLang')}</div>
    <div class="settings-card"><div class="settings-row" style="flex-wrap:wrap;gap:8px;padding:14px;">
    <div class="lang-grid" style="width:100%;">${langEntries.map(([code, data]) => `<div class="lang-pill ${code === currentLang ? 'active' : ''}" data-lang="${code}" onclick="setLanguage('${code}')">${data.flag} ${data.name}</div>`).join('')}</div></div></div></div>
    <div class="settings-section"><div class="settings-section-title">${getTranslation('settingsAppearance')}</div>
    <div class="settings-card"><div class="settings-row" onclick="toggleSetting('particles')"><div class="settings-row-icon">✨</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('bgAnimLabel')}</div>
    <div class="settings-row-desc">${getTranslation('bgAnimDesc')}</div></div>
    <div class="settings-toggle ${SETTINGS.particles ? 'on' : ''}" id="toggle-particles"><div class="settings-toggle-knob"></div></div></div>
    <div class="settings-row" onclick="toggleSetting('reducedMotion')"><div class="settings-row-icon">🌀</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('reduceMotionLabel')}</div>
    <div class="settings-row-desc">${getTranslation('reduceMotionDesc')}</div></div>
    <div class="settings-toggle ${SETTINGS.reducedMotion ? 'on' : ''}" id="toggle-reducedMotion"><div class="settings-toggle-knob"></div></div></div></div></div>
    <div class="settings-section"><div class="settings-section-title">${getTranslation('settingsSound')}</div>
    <div class="settings-card"><div class="settings-row" onclick="toggleSetting('sounds')"><div class="settings-row-icon">🔊</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('soundLabel')}</div>
    <div class="settings-row-desc">${getTranslation('soundDesc')}</div></div>
    <div class="settings-toggle ${SETTINGS.sounds ? 'on' : ''}" id="toggle-sounds"><div class="settings-toggle-knob"></div></div></div>
    <div class="settings-row ${state.theme !== 'absolutesingularity' ? 'settings-row-disabled' : ''}" onclick="if(state.theme==='absolutesingularity'){toggleAmbientMusic();}else{showToast('🜂 Activate Absolute Singularity theme first','info');}"><div class="settings-row-icon">🎵</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('ambientMusicLabel')}</div>
    <div class="settings-row-desc">${getTranslation('ambientMusicDesc')}</div></div>
    <div class="settings-toggle ${SETTINGS.ambientMusic ? 'on' : ''}" id="toggle-ambientMusic"><div class="settings-toggle-knob"></div></div></div></div></div>
    <div class="settings-section"><div class="settings-section-title">${getTranslation('settingsNotifs')}</div>
    <div class="settings-card"><div class="settings-row" onclick="toggleSetting('notifications')"><div class="settings-row-icon">🔔</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('notifsLabel')}</div>
    <div class="settings-row-desc">${getTranslation('notifsDesc')}</div></div>
    <div class="settings-toggle ${SETTINGS.notifications ? 'on' : ''}" id="toggle-notifications"><div class="settings-toggle-knob"></div></div></div></div></div>
    <div class="settings-section"><div class="settings-section-title">${getTranslation('themeOptionsLabel')} — ${THEMES.length}</div>
    <div class="theme-grid">${THEMES.map(t => `<div class="theme-btn ${state.theme === t.id ? 'active' : ''}" data-theme="${t.id}" ${t.op ? 'data-op="true"' : ''} ${t.sss ? 'data-sss="true"' : ''} ${t.mythic ? 'data-mythic="true"' : ''} ${t.transcendent ? 'data-transcendent="true"' : ''} ${t.omniscient ? 'data-omniscient="true"' : ''} ${t.omnipotent ? 'data-omnipotent="true"' : ''} ${t.absolute ? 'data-absolute="true"' : ''} onclick="applyTheme('${t.id}');buildSettings();">
    <div class="theme-swatch" style="background:${t.color};box-shadow:0 2px 8px ${t.color}44;"></div>
    <div><div class="theme-btn-name">${getThemeName(t.id)}</div><div class="theme-btn-desc">${getThemeDesc(t.id)}</div></div></div>`).join('')}</div></div>
    ${state.currentUser ? `<div class="settings-section"><div class="settings-section-title">${getTranslation('settingsAccount')}</div>
    <div class="settings-card"><div class="settings-row" onclick="openEditModal()"><div class="settings-row-icon">✏️</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('editProfile')}</div>
    <div class="settings-row-desc">${getTranslation('editProfileDesc')}</div></div>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></div>
    <div class="settings-row" onclick="doSignOut()"><div class="settings-row-icon" style="background:rgba(239,68,68,0.1);">🚪</div>
    <div class="settings-row-info"><div class="settings-row-label" style="color:var(--error);">${getTranslation('signOut')}</div>
    <div class="settings-row-desc">${getTranslation('signOutDesc')}</div></div></div></div></div>` :
    `<div class="settings-section"><div class="settings-card"><div class="settings-row" onclick="openAuthModal('login')"><div class="settings-row-icon">🔐</div>
    <div class="settings-row-info"><div class="settings-row-label">${getTranslation('signIn')}</div>
    <div class="settings-row-desc">${getTranslation('signInDesc')}</div></div></div></div></div>`}
     <div class="settings-section"><div class="settings-section-title">${getTranslation('settingsAbout')}</div>
     <div class="settings-card"><div class="settings-row" onclick="openAboutModal()"><div class="settings-row-icon">ℹ️</div>
     <div class="settings-row-info"><div class="settings-row-label">${getTranslation('aboutLPOLVO')}</div>
     <div class="settings-row-desc">V1 · ${getTranslation('premiumPlatform')}</div></div></div></div></div>
     `;
}

function toggleSetting(key) {
    SETTINGS[key] = !SETTINGS[key];
    localStorage.setItem('lp_' + key, JSON.stringify(SETTINGS[key]));
    const toggle = document.getElementById('toggle-' + key);
    if (toggle) toggle.classList.toggle('on', SETTINGS[key]);
    playClick();
}

/* ══════════════════════════════════════════════════════════════════════
   🎵 ABSOLUTE SINGULARITY — Ambient Music Engine
      Pure Web Audio synthesis. No external files. Zero bandwidth.
      Loops seamlessly. Volume: whisper-level luxury.
══════════════════════════════════════════════════════════════════════ */
var _absAmbient = null; /* { ctx, nodes[], stopped } */

function startAbsoluteAmbient() {
    if (_absAmbient && !_absAmbient.stopped) return; /* already running */
    stopAbsoluteAmbient();

    var actx;
    try { actx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return; }
    if (actx.state === 'suspended') actx.resume().catch(function(){});

    var masterGain = actx.createGain();
    masterGain.gain.setValueAtTime(0, actx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.0006, actx.currentTime + 4);
    masterGain.connect(actx.destination);

    var nodes = [masterGain];

    /* ── Deep quantum drone (432 Hz base) ── */
    function makePad(freq, detune, vol, type, attack, duration) {
        var osc = actx.createOscillator();
        var gain = actx.createGain();
        var filter = actx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 900 + Math.random() * 400;
        filter.Q.value = 0.8;
        osc.type = type || 'sine';
        osc.frequency.value = freq;
        osc.detune.value = detune || 0;
        gain.gain.setValueAtTime(0, actx.currentTime);
        gain.gain.linearRampToValueAtTime(vol, actx.currentTime + (attack || 3));
        osc.connect(filter); filter.connect(gain); gain.connect(masterGain);
        osc.start(actx.currentTime);
        nodes.push(osc, gain, filter);
        return { osc: osc, gain: gain };
    }

    /* Fundamental 432 Hz (A natural tuning — cosmic/sacred) */
    var pad1 = makePad(432, 0, 0.22, 'sine', 4);
    /* Perfect fifth above — 648 Hz */
    var pad2 = makePad(648, -6, 0.12, 'sine', 6);
    /* Sub bass 216 Hz (octave below) */
    var pad3 = makePad(216, 0, 0.28, 'sine', 5);
    /* Shimmer layer 864 Hz (two octaves up, very faint) */
    var pad4 = makePad(864, 4, 0.06, 'sine', 8);
    /* Quantum violet harmonic 540 Hz */
    var pad5 = makePad(540, 2, 0.09, 'sine', 7);
    /* Crystal texture — slight detune creates beating */
    var pad6 = makePad(432, 7, 0.08, 'triangle', 5);
    /* Deep sub pulse 108 Hz */
    var pad7 = makePad(108, 0, 0.18, 'sine', 6);

    /* ── Slow LFO modulating the main pad volume (breathing) ── */
    var lfo = actx.createOscillator();
    var lfoGain = actx.createGain();
    lfo.frequency.value = 0.08; /* one breath every ~12 seconds */
    lfoGain.gain.value = 0.07;
    lfo.connect(lfoGain);
    lfoGain.connect(pad1.gain.gain);
    lfoGain.connect(pad3.gain.gain);
    lfo.start(actx.currentTime);
    nodes.push(lfo, lfoGain);

    /* ── Slower LFO for shimmer layer ── */
    var lfo2 = actx.createOscillator();
    var lfoGain2 = actx.createGain();
    lfo2.frequency.value = 0.13;
    lfoGain2.gain.value = 0.04;
    lfo2.connect(lfoGain2);
    lfoGain2.connect(pad4.gain.gain);
    lfo2.start(actx.currentTime);
    nodes.push(lfo2, lfoGain2);

    /* ── Very rare crystal chime tones ── */
    var chimeInterval = setInterval(function() {
        if (!_absAmbient || _absAmbient.stopped) { clearInterval(chimeInterval); return; }
        try {
            var chimePitches = [1080, 1296, 864, 1620, 2160];
            var freq2 = chimePitches[Math.floor(Math.random() * chimePitches.length)];
            var osc2 = actx.createOscillator();
            var env = actx.createGain();
            osc2.type = 'sine';
            osc2.frequency.value = freq2;
            env.gain.setValueAtTime(0, actx.currentTime);
            env.gain.linearRampToValueAtTime(0.00028, actx.currentTime + .06);
            env.gain.exponentialRampToValueAtTime(0.00001, actx.currentTime + 3.5);
            osc2.connect(env); env.connect(actx.destination);
            osc2.start(actx.currentTime);
            osc2.stop(actx.currentTime + 4);
        } catch(e) {}
    }, 6000 + Math.random() * 9000);
    nodes.push({ chimeInterval: chimeInterval }); /* store for cleanup */

    /* ── Fade-out helper ── */
    function fadeOut(cb) {
        masterGain.gain.setValueAtTime(masterGain.gain.value, actx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0, actx.currentTime + 2.5);
        setTimeout(function() {
            nodes.forEach(function(n) {
                if (!n) return;
                if (n.chimeInterval) { clearInterval(n.chimeInterval); return; }
                try { if (n.stop) n.stop(); } catch(e) {}
                try { if (n.disconnect) n.disconnect(); } catch(e) {}
            });
            try { actx.close(); } catch(e) {}
            if (cb) cb();
        }, 2600);
    }

    _absAmbient = {
        ctx: actx,
        nodes: nodes,
        stopped: false,
        fadeOut: fadeOut,
        chimeInterval: chimeInterval
    };
}

function stopAbsoluteAmbient() {
    if (!_absAmbient) return;
    _absAmbient.stopped = true;
    clearInterval(_absAmbient.chimeInterval);
    if (_absAmbient.fadeOut) {
        _absAmbient.fadeOut(function() { _absAmbient = null; });
    } else {
        _absAmbient.nodes.forEach(function(n) {
            if (!n) return;
            if (n.chimeInterval) { clearInterval(n.chimeInterval); return; }
            try { if (n.stop) n.stop(); } catch(e) {}
            try { if (n.disconnect) n.disconnect(); } catch(e) {}
        });
        try { _absAmbient.ctx.close(); } catch(e) {}
        _absAmbient = null;
    }
}

function toggleAmbientMusic() {
    if (state.theme !== 'absolutesingularity') return;
    SETTINGS.ambientMusic = !SETTINGS.ambientMusic;
    localStorage.setItem('lp_ambientMusic', JSON.stringify(SETTINGS.ambientMusic));
    var toggle = document.getElementById('toggle-ambientMusic');
    if (toggle) toggle.classList.toggle('on', SETTINGS.ambientMusic);
    if (SETTINGS.ambientMusic) {
        startAbsoluteAmbient();
    } else {
        stopAbsoluteAmbient();
    }
    playClick();
}


/* ── STATIC CONTENT ── */
 function buildCategories() {
    const el = document.getElementById('categoriesContainer');
    if (!el) return;
    // Map category id to translation key
    const catKeyMap = {combat:'catCombat',farm:'catFarm',speed:'catSpeed',esp:'catEsp',
        teleport:'catTeleport',troll:'catTroll',utility:'catUtility',
        gui:'catGui',auto:'catAuto',other:'catOther'};
    el.innerHTML = CATEGORIES.map(c => {
        const name = getTranslation(catKeyMap[c.id]) || c.name;
        return `<div class="cat-pill" onclick="navigate('scripts');state.scriptsFilter='${c.id}';buildScriptsPage();playClick();">
        <div class="cat-pill-icon">${c.icon}</div><div class="cat-pill-name">${name}</div></div>`;
    }).join('');
}

function buildExecutors() {
    const el = document.getElementById('executorGrid');
    if (!el) return;
    const freeLabel = getTranslation('free') || 'Free';
    const execLabel = getTranslation('executor') || 'Executor';
    el.innerHTML = EXECUTORS.map(e =>
        `<div class="executor-card"><div class="executor-icon">${e.icon}</div><div><div class="executor-name">${e.name}</div>
        <div class="executor-platform">${e.platform}</div></div>${e.free ? `<div class="executor-badge">${freeLabel.toUpperCase()}</div>` : ''}</div>`
    ).join('');
}

function buildNews() {
    const el = document.getElementById('newsList');
    if (!el) return;
    const lang = state.language || 'en';
    const newsItems = NEWS_DATA[lang] || NEWS_DATA.en;
    el.innerHTML = newsItems.map(n =>
        `<div class="news-card"><div class="news-card-header"><span class="news-badge ${n.badgeClass}">${n.badge.toUpperCase()}</span>
        <span class="news-date">${n.date}</span></div><div class="news-title">${n.title}</div><div class="news-desc">${n.desc}</div></div>`
    ).join('');
}

function buildFAQ() {
    const el = document.getElementById('faqList');
    if (!el) return;
    // Use localized FAQ data
    const faqKeys = [
        {q:'faqSafe',a:'faqSafeAns'},{q:'faqMobile',a:'faqMobileAns'},
        {q:'faqKeyless',a:'faqKeylessAns'},{q:'faqSubmit',a:'faqSubmitAns'},
        {q:'faqBroken',a:'faqBrokenAns'},{q:'faqFree',a:'faqFreeAns'}
    ];
    el.innerHTML = faqKeys.map(k =>
        `<div class="faq-item" onclick="toggleFaq(this)"><div class="faq-question">${getTranslation(k.q)}<div class="faq-chevron">▾</div></div>
        <div class="faq-answer">${getTranslation(k.a)}</div></div>`
    ).join('');
}

function toggleFaq(el) { el.classList.toggle('open');
    playClick(); }

function buildHowItWorks() {
    const el = document.getElementById('howStepsList');
    if (!el) return;
    // Use localized how-it-works data
    const steps = [
        {num:'01',title:'howFind',desc:'howFindDesc'},
        {num:'02',title:'howCopy',desc:'howCopyDesc'},
        {num:'03',title:'howRun',desc:'howRunDesc'}
    ];
    el.innerHTML = steps.map(s =>
        `<div class="how-step"><div class="how-step-num">${s.num}</div><div><div class="how-step-title">${getTranslation(s.title)}</div>
        <div class="how-step-desc">${getTranslation(s.desc)}</div></div></div>`
    ).join('');
}

const TICKER_ITEMS_LOCALIZED = {
    en: [
        '🚀 LPOLVO HUB V1 — Official Public Release!',
        '🌐 Full Arabic & French Support',
        '🔥 52+ immersive themes with dynamic backgrounds',
        '⭐ Submit your script today',
        '🌙 Complete RTL support for Arabic',
        '🎨 Each theme has unique particles & sounds',
        '👑 Creator profiles now live!',
        '🎮 100% compatible with mobile executors',
        '🌟 Dynamic Translation — no page reload needed',
        '⚡ Infinity Throne: OMNIPOTENT rarity'
    ],
    ar: [
        '🚀 LPOLVO HUB V1 — الإصدار الرسمي!',
        '🌐 دعم كامل للعربية والفرنسية',
        '🔥 أكثر من 52 مظهراً بخلفيات حية',
        '⭐ أرسل سكريبتك اليوم',
        '🌙 دعم RTL كامل للغة العربية',
        '🎨 كل مظهر له جسيمات وأصوات فريدة',
        '👑 ملفات المنشئين متاحة الآن!',
        '🎮 متوافق 100٪ مع منفذي الجوال',
        '🌟 ترجمة فورية — بدون إعادة تحميل',
        '⚡ عرش اللانهاية: ندرة كليّ القدرة'
    ],
    fr: [
        '🚀 LPOLVO HUB V1 — Sortie Officielle!',
        '🌐 Support Complet Arabe & Français',
        '🔥 52+ thèmes immersifs avec arrière-plans dynamiques',
        '⭐ Soumettez votre script aujourd\'hui',
        '🌙 Support RTL complet pour l\'arabe',
        '🎨 Chaque thème a des particules et sons uniques',
        '👑 Profils créateurs maintenant disponibles!',
        '🎮 100% compatible avec les exécuteurs mobiles',
        '🌟 Traduction Dynamique — sans rechargement',
        '⚡ Trône de l\'Infini: Rareté Omnipotente'
    ]
};

function buildTicker() {
    const el = document.getElementById('tickerInner');
    if (!el) return;
    const lang = state.language || 'en';
    const baseItems = TICKER_ITEMS_LOCALIZED[lang] || TICKER_ITEMS_LOCALIZED.en;
    const items = [...baseItems, ...baseItems];
    el.innerHTML = items.map(t => `<span class="ticker-item"><span class="ticker-dot"></span>${t}</span>`).join('');
}


/* ── SIDEBAR ── */
function openSidebar() { document.getElementById('sidebar').classList.add('open');
    document.getElementById('sidebar-overlay').classList.add('show');
    playClick(); }

function closeSidebar() { document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('show'); }

function openProfileMenu() { if (state.currentUser) navigate('profile'); else openAuthModal('login');
    playClick(); }

function toggleNotifPanel() {
    const panel = document.getElementById('notifPanel');
    state.notifPanelOpen = !state.notifPanelOpen;
    panel.classList.toggle('show', state.notifPanelOpen);
    if (state.notifPanelOpen) loadNotifications();
    playClick();
    if (state.notifPanelOpen) { setTimeout(() => { document.addEventListener('click', closeNotifPanelOutside, {
                once: true }); }, 100); }
}

function closeNotifPanelOutside(e) {
    const panel = document.getElementById('notifPanel');
    const btn = document.getElementById('navNotifBtn');
    if (panel && !panel.contains(e.target) && !btn.contains(e.target)) { panel.classList.remove('show');
        state.notifPanelOpen = false; }
}


/* ── TOAST ── */
function showToast(msg, type = 'info', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML =
        `<div class="toast-icon">${icons[type]||'ℹ'}</div><div class="toast-msg">${msg}</div><button class="toast-close" onclick="dismissToast(this.parentElement)">✕</button>`;
    container.appendChild(toast);
    setTimeout(() => dismissToast(toast), duration);
}

function dismissToast(el) { if (!el?.parentNode) return;
    el.classList.add('out');
    setTimeout(() => el?.parentNode?.removeChild(el), 350); }


/* ── ABOUT ── */
 function openAboutModal() {
    document.getElementById('about-modal').classList.add('show');
    // Update about modal with current language
    const aboutVer = document.getElementById('aboutVersionText');
    if (aboutVer) aboutVer.textContent = getTranslation('versionLabel') || 'v1.3 — Community Expansion';
    const aboutDesc = document.getElementById('aboutDescText');
    if (aboutDesc) aboutDesc.textContent = getTranslation('aboutLpolvoDesc');
    const aboutGotIt = document.querySelector('#about-modal button[onclick*="closeAboutModal"]');
    if (aboutGotIt) aboutGotIt.textContent = getTranslation('gotIt');
    playClick();
}

function closeAboutModal() { document.getElementById('about-modal').classList.remove('show'); }


/* ── HELPERS ── */
function formatNum(n) {
    if (n === undefined || n === null) return '0';
    if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'K';
    return String(n);
}

function formatTime(ts) {
    if (!ts) return '';
    const date = ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
    const now = new Date();
    const diff = now - date;
    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    if (diff < 2592000000) return Math.floor(diff / 86400000) + 'd ago';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function escHtml(str) {
    if (!str) return '';
    return str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function hexToRgb(hex) {
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '65,105,225';
}

function buildEmptyState({ icon, title, quote, subtitle, cta, ctaAction }) {
    return `<div class="empty-state"><div class="empty-icon-wrap"><div class="empty-stars"><span class="empty-star">✦</span><span class="empty-star">✦</span><span class="empty-star">✦</span><span class="empty-star">✦</span></div>${icon}</div>
    <div class="empty-state-title">${title}</div>${quote ? `<div class="empty-state-quote">${quote}</div>` : ''}
    ${subtitle ? `<div class="empty-state-sub">${subtitle}</div>` : ''}
    ${cta && ctaAction ? `<button class="empty-state-cta" onclick="${ctaAction}">${cta}</button>` : ''}</div>`;
}


/* ── LOADING ── */
function runLoading() {
    try {
        const bar = document.getElementById('loadingBar');
        const text = document.getElementById('loadingText');
        const steps = [
            { pct: 25, msg: 'Loading assets...' },
            { pct: 55, msg: 'Connecting Firebase...' },
            { pct: 80, msg: 'Fetching data...' },
            { pct: 100, msg: 'Ready!' }
        ];
        let i = 0;
        function step() {
            try {
                if (i >= steps.length) { setTimeout(finishLoading, 300); return; }
                const s = steps[i++];
                if (bar) bar.style.width = s.pct + '%';
                if (text) text.textContent = s.msg;
                setTimeout(step, i < steps.length ? 400 : 200);
            } catch (e) { finishLoading(); }
        }
        setTimeout(step, 150);
    } catch (e) { finishLoading(); }
}

function finishLoading() {
    try {
        const ls = document.getElementById('loading-screen');
        const appEl = document.getElementById('app');
        if (ls) { ls.classList.add('hide'); setTimeout(() => { try { ls.style.display = 'none'; } catch(e){} }, 700); }
        if (appEl) { appEl.style.display = ''; appEl.style.visibility = 'visible'; }
    } catch (e) {}
}


/* ── INIT ── */
function init() {
    applyTheme(state.theme, false);
    applyLanguageDirection();
    buildTicker();
    buildCategories();
    buildHowItWorks();
    buildExecutors();
    buildNews();
    buildFAQ();
    initScrollTop();
    initIntersectionObserver();
    loadScripts().then(() => { buildTopCreators(); buildTrendingSection(); });
    loadRealStats();
    startCommunityFeedListener();
    if (window.__pendingAuthUser !== undefined) { onFirebaseAuthState(window.__pendingAuthUser);
        delete window.__pendingAuthUser; }
    window.onFirebaseAuthState = onFirebaseAuthState;
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    const so = document.getElementById('searchOverlay');
    if (so) so.addEventListener('click', e => { if (e.target === so) closeSearch(); });
    let lastHover = 0;
    document.addEventListener('mouseover', e => {
        if (Date.now() - lastHover < 200) return;
        if (e.target.matches(
                'button, .sort-btn, .cat-pill, .script-card, .creator-card, .dash-quick-btn, .theme-btn, .lang-pill'
                )) { lastHover = Date.now();
            playHover(); }
    }, { passive: true });
    console.log('[LPOLVO HUB v1.3] Initialized ✓');
    console.log('[LPOLVO HUB] Theme:', state.theme, 'Language:', state.language);
    setTimeout(() => playThemeAmbient(), 1000);
    /* Resume/pause ambient when tab visibility changes */
    document.addEventListener('visibilitychange', function() {
        if (state.theme !== 'absolutesingularity' || !SETTINGS.ambientMusic) return;
        if (document.hidden) {
            if (_absAmbient && _absAmbient.ctx) try { _absAmbient.ctx.suspend(); } catch(e) {}
        } else {
            if (_absAmbient && _absAmbient.ctx) try { _absAmbient.ctx.resume(); } catch(e) {}
            else startAbsoluteAmbient();
        }
    });
    /* Auto-start if user left with ambient ON and returns to absolute theme */
    if (state.theme === 'absolutesingularity' && SETTINGS.ambientMusic) {
        setTimeout(function() { startAbsoluteAmbient(); }, 1200);
    }
}

function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => { btn.classList.toggle('show', window.scrollY > 400); }, { passive: true });
}

function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.style
                .animationPlayState = 'running'; }); }, { threshold: 0.1 });
    document.querySelectorAll('.how-step, .script-card, .creator-card').forEach(el => { el.style
            .animationPlayState = 'paused';
        obs.observe(el); });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearch();
        closeAuthModal();
        closeScriptModal();
        closeUploadModal();
        closeEditModal();
        closeAboutModal();
        closeSidebar();
        if (state.notifPanelOpen) { document.getElementById('notifPanel').classList.remove('show');
            state.notifPanelOpen = false; }
    }
    if (e.ctrlKey && e.key === 'k') { e.preventDefault();
        openSearch(); }
    if (e.ctrlKey && e.key === '/') { e.preventDefault();
        openSearch(); }
});


/* ── STARTUP — robust against already-loaded document and JS errors ── */
// Hard failsafe: force loading screen away after 8 s no matter what
var _loadingFailsafe = setTimeout(finishLoading, 8000);

function startApp() {
    clearTimeout(_loadingFailsafe);
    try { runLoading(); } catch (e) { finishLoading(); }
    setTimeout(function () { try { init(); } catch (e) { console.error('[LPOLVO] Init error:', e); finishLoading(); } }, 1200);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}
    </script>
