/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — themes.js
   Theme metadata, localizations, engine, and all canvas animations
   ═══════════════════════════════════════════════════════════════════ */

/* ── THEMES WITH METADATA ── */
const THEMES = [
    { id: 'lpolvo', name: 'LPOLVO Blue', desc: 'Default', color: '#4169e1', anim: 'particles' },
    { id: 'bloodmoon', name: 'Blood Moon 🌑🔴', desc: 'Dark Mystery', color: '#dc2626', anim: 'bloodmoon' },
    { id: 'bluemoon', name: 'Blue Moon 🌙🔵', desc: 'Calm Magic', color: '#60a5fa', anim: 'bluemoon' },
    { id: 'ramadan', name: 'Ramadan 🌙✨', desc: 'Peaceful Nights', color: '#fbbf24', anim: 'ramadan' },
    { id: 'eclipse', name: 'Eclipse 🌗', desc: 'Day & Night', color: '#fcd34d', anim: 'eclipse' },
    { id: 'dragon', name: 'Dragon 🐉', desc: 'Fire & Scales', color: '#ef4444', anim: 'dragon' },
    { id: 'phoenix', name: 'Phoenix 🔥', desc: 'Rebirth', color: '#f43f5e', anim: 'phoenix' },
    { id: 'aurora', name: 'Aurora 🌈', desc: 'Northern Lights', color: '#34d399', anim: 'aurora' },
    { id: 'cybercity', name: 'Cyber City 🌃', desc: 'Neon Lights', color: '#00d4ff', anim: 'cybercity' },
    { id: 'samurai', name: 'Samurai ⚔️', desc: 'Warrior Spirit', color: '#eab308', anim: 'samurai' },
    { id: 'egypt', name: 'Ancient Egypt 🏛️', desc: 'Pharaoh Legacy', color: '#f59e0b', anim: 'egypt' },
    { id: 'darkcastle', name: 'Dark Castle 🏰', desc: 'Gothic Shadows', color: '#6b7280', anim: 'darkcastle' },
    { id: 'angel', name: 'Angel 👼', desc: 'Divine Light', color: '#f0f0ff', anim: 'angel' },
    { id: 'demon', name: 'Demon 👿', desc: 'Infernal Power', color: '#ef4444', anim: 'demon' },
    { id: 'crystal', name: 'Crystal 💎', desc: 'Brilliant', color: '#67e8f9', anim: 'crystal' },
    { id: 'royalpalace', name: 'Royal Palace 👑', desc: 'Luxury', color: '#f59e0b', anim: 'royalpalace' },
    { id: 'underwater', name: 'Underwater 🌊', desc: 'Deep Blue', color: '#06b6d4', anim: 'underwater' },
    { id: 'dreamworld', name: 'Dream World 🌙', desc: 'Fantasy', color: '#c084fc', anim: 'dreamworld' },
    { id: 'fantasyforest', name: 'Fantasy Forest 🌳', desc: 'Enchanted', color: '#22c55e', anim: 'fantasyforest' },
    { id: 'timetravel', name: 'Time Travel ⏳', desc: 'Chrono', color: '#fcd34d', anim: 'timetravel' },
    { id: 'robotfuture', name: 'Robot Future 🤖', desc: 'Tech', color: '#00d4ff', anim: 'robotfuture' },
    { id: 'ai', name: 'AI Theme 🧠', desc: 'Intelligence', color: '#8b5cf6', anim: 'ai' },
    { id: 'quantum', name: 'Quantum ⚛️', desc: 'Physics', color: '#06b6d4', anim: 'quantum' },
    { id: 'galaxywar', name: 'Galaxy War 🌌', desc: 'Cosmic Battle', color: '#a855f7', anim: 'galaxywar' },
    { id: 'ancient', name: 'Ancient Civilization 🏺', desc: 'Mystery', color: '#d97706', anim: 'ancient' },
    { id: 'sakura', name: 'Sakura 🌸', desc: 'Cherry Blossom', color: '#f472b6', anim: 'sakura' },
    { id: 'ocean', name: 'Ocean 🌊', desc: 'Deep Sea', color: '#06b6d4', anim: 'ocean' },
    { id: 'hacker', name: 'Hacker 💻', desc: 'Matrix Rain', color: '#39ff14', anim: 'matrix' },
    { id: 'galaxy', name: 'Galaxy 🌌', desc: 'Deep Space', color: '#a855f7', anim: 'galaxy' },
    { id: 'fire', name: 'Fire 🔥', desc: 'Heat & Flames', color: '#ff6b35', anim: 'fire' },
    { id: 'moon', name: 'Moon 🌙', desc: 'Night Atmosphere', color: '#e2e8f0', anim: 'moon' },
    { id: 'sun', name: 'Sun ☀️', desc: 'Golden Light', color: '#fbbf24', anim: 'sun' },
    { id: 'midnight', name: 'Midnight', desc: 'Dark Indigo', color: '#6366f1', anim: 'midnight' },
    { id: 'gold', name: 'Luxury Gold', desc: 'Rich Gold', color: '#f59e0b', anim: 'gold' },
    { id: 'neon', name: 'Neon', desc: 'Neon Glow', color: '#00ff41', anim: 'neon' },
    { id: 'vaporwave', name: 'Vaporwave', desc: 'Retro 80s', color: '#ff71ce', anim: 'vaporwave' },
    { id: 'retro', name: 'Retro', desc: 'Vintage Warm', color: '#fbbf24', anim: 'retro' },
    { id: 'minimal', name: 'Minimal', desc: 'Clean Light', color: '#1a1a2e', anim: 'minimal' },
    { id: 'royal', name: 'Royal Blue', desc: 'Luxury Royal', color: '#3b82f6', anim: 'royal' },
    { id: 'space', name: 'Space', desc: 'Cosmic Void', color: '#a855f7', anim: 'space' },
    { id: 'matrix', name: 'Matrix', desc: 'Digital Rain', color: '#39ff14', anim: 'matrix' },
    { id: 'volcano', name: 'Volcano', desc: 'Lava Heat', color: '#ef4444', anim: 'volcano' },
    { id: 'lightning', name: 'Lightning', desc: 'Electric Storm', color: '#eab308', anim: 'lightning' },
    { id: 'purple', name: 'Purple', desc: 'Deep Violet', color: '#a855f7', anim: 'purple' },
    { id: 'reddevil', name: 'Red Devil', desc: 'Hellfire', color: '#ef4444', anim: 'reddevil' },
    { id: 'emerald', name: 'Emerald', desc: 'Deep Green', color: '#10b981', anim: 'emerald' },
    { id: 'rainbow', name: 'Rainbow', desc: 'Colorful', color: '#f472b6', anim: 'rainbow' },
    { id: 'dark', name: 'Dark', desc: 'Deep Shadow', color: '#818cf8', anim: 'dark' },
    { id: 'light', name: 'Light', desc: 'Clean Bright', color: '#4169e1', anim: 'light' },
    { id: 'cyberpunk', name: 'Cyberpunk', desc: 'Neon Future', color: '#ff00ff', anim: 'cyberpunk' },
    { id: 'glass', name: 'Glass', desc: 'Frosted', color: 'rgba(255,255,255,0.5)', anim: 'glass' },
    { id: 'cosmicvoid', name: 'Cosmic Void 🌌', desc: 'Black Hole Universe', color: '#00d4ff', anim: 'cosmicvoid' },
    { id: 'spiritblossom', name: 'Spirit Blossom 🌸', desc: 'Magical Petals', color: '#f472b6', anim: 'spiritblossom' },
    { id: 'thundergod', name: 'Thunder God ⚡', desc: 'Electric Storm', color: '#facc15', anim: 'thundergod' },
    { id: 'celestialkingdom', name: 'Celestial Kingdom 👑', desc: 'Divine Light', color: '#fde68a', anim: 'celestialkingdom' },
    { id: 'abyssalocean', name: 'Abyssal Ocean 🌊', desc: 'Deep Sea', color: '#22d3ee', anim: 'abyssalocean' },
    { id: 'frozenkingdom', name: 'Frozen Kingdom 🧊', desc: 'Ice & Snow', color: '#bae6fd', anim: 'frozenkingdom' },
    { id: 'meteorstorm', name: 'Meteor Storm ☄️', desc: 'Space Impact', color: '#fb923c', anim: 'meteorstorm' },
    { id: 'infernalcore', name: 'Infernal Core 🌋', desc: 'Molten Lava', color: '#f97316', anim: 'infernalcore' },
    { id: 'auroranova', name: 'Aurora Nova 🌈', desc: 'Northern Lights', color: '#2dd4bf', anim: 'auroranova' },
    { id: 'shadowrealm', name: 'Shadow Realm 🌑', desc: 'Dark Mystery', color: '#a78bfa', anim: 'shadowrealm' },
    { id: 'crystalcave', name: 'Crystal Cave 💎', desc: 'Sparkling Gems', color: '#67e8f9', anim: 'crystalcave' },
    { id: 'lunarwolf', name: 'Lunar Wolf 🐺', desc: 'Full Moon', color: '#e2e8f0', anim: 'lunarwolf' },
    { id: 'steampunk', name: 'Steampunk ⚙️', desc: 'Victorian Gears', color: '#d97706', anim: 'steampunk' },
    { id: 'phantomcarnival', name: 'Phantom Carnival 🎭', desc: 'Dreamlike Magic', color: '#e879f9', anim: 'phantomcarnival' },
    { id: 'timerift', name: 'Time Rift 🌌', desc: 'Portal Distortion', color: '#06b6d4', anim: 'timerift' },
    { id: 'bloodeclipse', name: 'Blood Eclipse 🌑', desc: 'Solar Corona of Death', color: '#ff1a3e', anim: 'bloodeclipse' },
    { id: 'dragonrealm', name: 'Dragon Realm 🐉', desc: 'Ancient Fire Caves', color: '#ff6a00', anim: 'dragonrealm' },
    { id: 'thunderstorm', name: 'Thunder Storm ⚡', desc: 'Electric Apocalypse', color: '#ffe135', anim: 'thunderstorm' },
    { id: 'spiritsakura', name: 'Spirit Sakura 🌸', desc: 'Ethereal Petal World', color: '#ff88bb', anim: 'spiritsakura' },
    { id: 'frozenempire', name: 'Frozen Empire 🧊', desc: 'Ice Citadel Domain', color: '#88ddff', anim: 'frozenempire' },
    { id: 'aurorasky', name: 'Aurora Sky 🌌', desc: 'Sky Aurora Dance', color: '#00ffc8', anim: 'aurorasky' },
    { id: 'moonkingdom', name: 'Moon Kingdom 🌙', desc: 'Lunar Palace', color: '#d4cfff', anim: 'moonkingdom' },
    { id: 'sunkingdom', name: 'Sun Kingdom ☀️', desc: 'Solar Realm', color: '#ffcc00', anim: 'sunkingdom' },
    { id: 'dreamuniverse', name: 'Dream Universe 🌠', desc: 'Cosmic Dreamscape', color: '#cc88ff', anim: 'dreamuniverse' },
    { id: 'phantomrealm', name: 'Phantom Realm 👻', desc: 'Ghostly Dimension', color: '#aaaaff', anim: 'phantomrealm' },
    { id: 'divineheaven', name: 'Divine Heaven ✨', desc: 'Celestial Paradise', color: '#ffffff', anim: 'divineheaven' },
    { id: 'voidwalker', name: 'Void Walker 🌌', desc: 'Interdimensional Drift', color: '#00ffff', anim: 'voidwalker' },
    { id: 'abysscore', name: 'Abyss Core 🌊', desc: 'Oceanic Depths', color: '#0099dd', anim: 'abysscore' },
    { id: 'solarflare', name: 'Solar Flare ☀️', desc: 'Star Plasma Burst', color: '#ff8800', anim: 'solarflare' },
    { id: 'nebulacore', name: 'Nebula Core 🌠', desc: 'Stellar Nursery', color: '#ff44cc', anim: 'nebulacore' },
    { id: 'shadowking', name: 'Shadow King 👑', desc: 'Dark Sovereign', color: '#9966ff', anim: 'shadowking' },
    { id: 'goldenempire', name: 'Golden Empire 💛', desc: 'Ancient Gold Dynasty', color: '#ffd700', anim: 'goldenempire' },
    { id: 'crystalheart', name: 'Crystal Heart 💎', desc: 'Rose Crystal Core', color: '#ff66cc', anim: 'crystalheart' },
    { id: 'cosmicfire', name: 'Cosmic Fire 🌋', desc: 'Space Lava River', color: '#ff3366', anim: 'cosmicfire' },
    { id: 'eternaldusk', name: 'Eternal Dusk 🌅', desc: 'Endless Twilight', color: '#cc77ff', anim: 'eternaldusk' },
    { id: 'emeraldabyss', name: 'Emerald Abyss 💚', desc: 'Glowing Green Deep', color: '#00ff88', anim: 'emeraldabyss' },
    { id: 'rubyinferno', name: 'Ruby Inferno 🔥', desc: 'Crimson Hellfire', color: '#ff2200', anim: 'rubyinferno' },
    /* OP LEGENDARY */
    { id: 'celestialascension', name: '⭐ Celestial Ascension 👑', desc: 'Heavenly Kingdom Above the Clouds', color: '#ffe87a', anim: 'celestialascension', op: true },
    { id: 'blackholesingularity', name: '🔥 Black Hole Singularity 🕳️', desc: 'Gravity & Space Distortion', color: '#9b5de5', anim: 'blackholesingularity', op: true },
    { id: 'crimsonapocalypse', name: '⭐ Crimson Apocalypse ☄️', desc: 'End of the World', color: '#ff3300', anim: 'crimsonapocalypse', op: true },
    { id: 'frozeneternity', name: '🔥 Frozen Eternity ❄️', desc: 'Infinite Frozen Kingdom', color: '#a8d8ff', anim: 'frozeneternity', op: true },
    { id: 'neoncybernexus', name: '⭐ Neon Cyber Nexus 🤖', desc: 'Cyberpunk City Holograms', color: '#00f0ff', anim: 'neoncybernexus', op: true },
    { id: 'phantomnightmare', name: '🔥 Phantom Nightmare 👻', desc: 'Dark Ghosts & Purple Mist', color: '#9b4dca', anim: 'phantomnightmare', op: true },
    { id: 'dragonemperor', name: '⭐ Dragon Emperor 🐉', desc: 'Ancient Dragons & Golden Fire', color: '#ffb700', anim: 'dragonemperor', op: true },
    { id: 'universecreator', name: '🔥 Universe Creator 🌌', desc: 'Galaxies & Stars Being Born', color: '#6ee7f7', anim: 'universecreator', op: true },
    { id: 'divineocean', name: '⭐ Divine Ocean 🌊', desc: 'Crystal Waters & Glowing Life', color: '#00cfcf', anim: 'divineocean', op: true },
    { id: 'infernalking', name: '🔥 Infernal King 🔥', desc: 'Volcanoes & Demonic Fire', color: '#ff4400', anim: 'infernalking', op: true },
    { id: 'sakuraheaven', name: '⭐ Sakura Heaven 🌸', desc: 'Massive Sakura Trees & Shrines', color: '#ffaad4', anim: 'sakuraheaven', op: true },
    { id: 'infinitydimension', name: '🔥 Infinity Dimension ♾️', desc: 'Reality Bending & Portals', color: '#00ff99', anim: 'infinitydimension', op: true },
    /* SSS+ ULTIMATE */
    { id: 'arabianlegacy', name: 'Arabian Legacy', desc: 'Desert Majesty & Islamic Golden Age', color: '#d4a017', anim: 'arabianlegacy', op: true, sss: true },
    /* SSS+ ULTIMATE #102 */
    { id: 'moroccanlegacy', name: 'Moroccan Legacy', desc: 'Royal Kingdom & Desert Mystique', color: '#c1121f', anim: 'moroccanlegacy', op: true, sss: true },
    /* SSS+ ULTIMATE #103 */
    { id: 'godsdomain', name: "God's Domain", desc: "Celestial Heaven & Divine Supremacy", color: '#f5d67a', anim: 'godsdomain', op: true, sss: true },
    /* SSS+ ULTIMATE #104 */
    { id: 'genesisprotocol', name: 'Genesis Protocol 🌌', desc: 'The Birth of Reality Itself', color: '#4af0ff', anim: 'genesisprotocol', op: true, sss: true },
    /* SSS+ ULTIMATE #105 */
    { id: 'chronoinfinity', name: 'Chrono Infinity ⏳', desc: 'Master of Time Itself', color: '#d4af37', anim: 'chronoinfinity', op: true, sss: true },
    /* ✶ MYTHIC #106 */
    { id: 'elysium', name: 'Elysium', desc: 'Paradise Beyond Heaven, Space & Time', color: '#c77dff', anim: 'elysium', op: true, sss: true, mythic: true },
    /* 💠 MYTHIC #107 */
    { id: 'aetherdominion', name: 'Aether Dominion', desc: 'Where Pure Energy Controls Reality', color: '#00e5ff', anim: 'aetherdominion', op: true, sss: true, mythic: true },
    /* ✨ TRANSCENDENT #108 */
    { id: 'theabsolute', name: 'The Absolute', desc: 'The Point Where Existence Ends', color: '#ffffff', anim: 'theabsolute', op: true, sss: true, mythic: true, transcendent: true },
    /* ✦ TRANSCENDENT #109 */
    { id: 'eternalnexus', name: '∞ Eternal Nexus', desc: 'Where Every Reality Intersects', color: '#78e7ff', anim: 'eternalnexus', op: true, sss: true, mythic: true, transcendent: true },
    /* 👁️ OMNISCIENT #110 — above every existing rarity */
    { id: 'omniscienteye', name: 'The Omniscient Eye', desc: 'The Consciousness of LPOLVO HUB', color: '#fff1a8', anim: 'omniscienteye', op: true, sss: true, mythic: true, transcendent: true, omniscient: true },
    /* ⚜ OMNIPOTENT #111 — the absolute pinnacle of LPOLVO HUB */
    { id: 'infinitythrone', name: 'Infinity Throne', desc: 'The Realm Where Existence Is Written', color: '#e8d5ff', anim: 'infinitythrone', op: true, sss: true, mythic: true, transcendent: true, omniscient: true, omnipotent: true },
    /* 🜂 ABSOLUTE #112 — a new generation begins */
    { id: 'absolutesingularity', name: '🜂 The Absolute Singularity', desc: 'Reality Has Been Replaced. You Are Beyond.', color: '#7CF9FF', anim: 'absolutesingularity', op: true, sss: true, mythic: true, transcendent: true, omniscient: true, omnipotent: true, absolute: true },
];

const BADGES_DEF = [
    { id: 'pioneer', icon: '🌟', name: 'Pioneer', desc: 'Joined LPOLVO HUB' },
    { id: 'first_login', icon: '🚀', name: 'First Login', desc: 'Completed your first login & setup' },
    { id: 'first_upload', icon: '📤', name: 'First Upload', desc: 'Uploaded your first script' },
    { id: 'first_copy', icon: '📋', name: '1st Copy', desc: 'Copied your first script' },
    { id: 'script_fan', icon: '🔥', name: 'Script Fan', desc: 'Opened 10 scripts' },
    { id: 'creator', icon: '👑', name: 'Creator', desc: 'Uploaded a script' },
    { id: 'scripts_10', icon: '📚', name: 'Prolific', desc: 'Uploaded 10 scripts' },
    { id: 'views_100', icon: '👁️', name: '100 Views', desc: 'Received 100 total views' },
    { id: 'likes_100', icon: '💖', name: '100 Likes', desc: 'Received 100 total likes' },
    { id: 'commenter', icon: '💬', name: 'Commenter', desc: 'Left a comment' },
    { id: 'liker', icon: '❤️', name: 'Liker', desc: 'Liked 5 scripts' },
    { id: 'sharpshooter', icon: '🎯', name: 'Sharpshooter', desc: 'Shared a script' },
    { id: 'diamond', icon: '💎', name: 'Diamond', desc: 'Favorite 10 scripts' },
    { id: 'explorer', icon: '🗺️', name: 'Explorer', desc: 'Visited 10 different script pages' },
    { id: 'theme_collector', icon: '🎨', name: 'Theme Collector', desc: 'Changed theme 5 times' },
    { id: 'verified', icon: '✅', name: 'Verified', desc: 'Verified Creator' },
    { id: 'top_creator', icon: '🏆', name: 'Top Creator', desc: 'Reached top 10 creators' },
    { id: 'popular', icon: '📈', name: 'Popular', desc: 'Script reached 1000 views' },
];

/* ── THEME NAME LOCALIZATIONS ── */
const THEME_NAMES = {
    ar: {
        lpolvo:'LPOLVO الأزرق', bloodmoon:'قمر الدم 🌑🔴', bluemoon:'القمر الأزرق 🌙🔵',
        ramadan:'رمضان 🌙✨', eclipse:'كسوف 🌗', dragon:'التنين 🐉',
        phoenix:'الفينيق 🔥', aurora:'الأورا 🌈', cybercity:'المدينة السيبرانية 🌃',
        samurai:'الساموراي ⚔️', egypt:'مصر القديمة 🏛️', darkcastle:'القلعة المظلمة 🏰',
        angel:'الملاك 👼', demon:'الشيطان 👿', crystal:'الكريستال 💎',
        royalpalace:'القصر الملكي 👑', underwater:'تحت الماء 🌊', dreamworld:'عالم الأحلام 🌙',
        fantasyforest:'الغابة الخيالية 🌳', timetravel:'السفر عبر الزمن ⏳',
        robotfuture:'مستقبل الروبوت 🤖', ai:'الذكاء الاصطناعي 🧠',
        quantum:'الكم ⚛️', galaxywar:'حرب المجرات 🌌', ancient:'الحضارة القديمة 🏺',
        sakura:'الساكورا 🌸', ocean:'المحيط 🌊', hacker:'الهاكر 💻',
        galaxy:'المجرة 🌌', fire:'النار 🔥', moon:'القمر 🌙', sun:'الشمس ☀️',
        midnight:'منتصف الليل', gold:'الذهب الفاخر', neon:'النيون',
        vaporwave:'موجة البخار', retro:'ريترو', minimal:'بسيط',
        royal:'الأزرق الملكي', space:'الفضاء', matrix:'المصفوفة',
        volcano:'البركان', lightning:'البرق', purple:'البنفسجي',
        reddevil:'الشيطان الأحمر', emerald:'الزمرد', rainbow:'قوس قزح',
        dark:'داكن', light:'فاتح', cyberpunk:'سايبربانك', glass:'زجاج',
        cosmicvoid:'الفراغ الكوني 🌌', spiritblossom:'روح الزهرة 🌸',
        thundergod:'إله الرعد ⚡', celestialkingdom:'المملكة السماوية 👑',
        abyssalocean:'محيط الهاوية 🌊', frozenkingdom:'المملكة المجمدة 🧊',
        meteorstorm:'عاصفة النيازك ☄️', infernalcore:'نواة الجحيم 🌋',
        auroranova:'أورا نوفا 🌈', shadowrealm:'عالم الظلام 🌑',
        crystalcave:'كهف الكريستال 💎', lunarwolf:'ذئب القمر 🐺',
        steampunk:'ستيمبانك ⚙️', phantomcarnival:'كرنفال الشبح 🎭',
        timerift:'شق الزمن 🌌', bloodeclipse:'كسوف الدم 🌑',
        dragonrealm:'عالم التنانين 🐉', thunderstorm:'العاصفة الرعدية ⚡',
        spiritsakura:'روح الساكورا 🌸', frozenempire:'الإمبراطورية المجمدة 🧊',
        aurorasky:'سماء الأورا 🌌', moonkingdom:'مملكة القمر 🌙',
        sunkingdom:'مملكة الشمس ☀️', dreamuniverse:'كون الأحلام 🌠',
        phantomrealm:'عالم الشبح 👻', divineheaven:'الجنة الإلهية ✨',
        voidwalker:'سالك الفراغ 🌌', abysscore:'نواة الهاوية 🌊',
        solarflare:'الانفجار الشمسي ☀️', nebulacore:'نواة السديم 🌠',
        shadowking:'ملك الظلال 👑', goldenempire:'الإمبراطورية الذهبية 💛',
        crystalheart:'قلب الكريستال 💎', cosmicfire:'النار الكونية 🌋',
        eternaldusk:'الغسق الأبدي 🌅', emeraldabyss:'هاوية الزمرد 💚',
        rubyinferno:'جهنم الياقوت 🔥',
        celestialascension:'⭐ الصعود السماوي 👑', blackholesingularity:'🔥 انفراد الثقب الأسود 🕳️',
        crimsonapocalypse:'⭐ نهاية القرمزي ☄️', frozeneternity:'🔥 الأبدية المجمدة ❄️',
        neoncybernexus:'⭐ نيكسوس النيون 🤖', phantomnightmare:'🔥 كابوس الشبح 👻',
        dragonemperor:'⭐ إمبراطور التنين 🐉', universecreator:'🔥 خالق الكون 🌌',
        divineocean:'⭐ المحيط الإلهي 🌊', infernalking:'🔥 ملك الجحيم 🔥',
        sakuraheaven:'⭐ جنة الساكورا 🌸', infinitydimension:'🔥 بُعد اللانهاية ♾️',
        arabianlegacy:'الإرث العربي', moroccanlegacy:'الإرث المغربي',
        godsdomain:'مجال الإله', genesisprotocol:'بروتوكول التكوين 🌌',
        chronoinfinity:'كرونو لانهاية ⏳', elysium:'إيليزيوم',
        aetherdominion:'سيادة الأثير', theabsolute:'المطلق',
        eternalnexus:'∞ النيكسوس الأبدي', omniscienteye:'عين كليّ المعرفة',
        infinitythrone:'عرش اللانهاية',
        absolutesingularity:'🜂 الانفراد المطلق',
    },
    fr: {
        lpolvo:'LPOLVO Bleu', bloodmoon:'Lune de Sang 🌑🔴', bluemoon:'Lune Bleue 🌙🔵',
        ramadan:'Ramadan 🌙✨', eclipse:'Éclipse 🌗', dragon:'Dragon 🐉',
        phoenix:'Phénix 🔥', aurora:'Aurore 🌈', cybercity:'Cyber Cité 🌃',
        samurai:'Samouraï ⚔️', egypt:'Égypte Antique 🏛️', darkcastle:'Château Sombre 🏰',
        angel:'Ange 👼', demon:'Démon 👿', crystal:'Cristal 💎',
        royalpalace:'Palais Royal 👑', underwater:'Sous-Marin 🌊', dreamworld:'Monde des Rêves 🌙',
        fantasyforest:'Forêt Fantastique 🌳', timetravel:'Voyage dans le Temps ⏳',
        robotfuture:'Futur Robot 🤖', ai:'IA 🧠', quantum:'Quantique ⚛️',
        galaxywar:'Guerre des Galaxies 🌌', ancient:'Civilisation Ancienne 🏺',
        sakura:'Sakura 🌸', ocean:'Océan 🌊', hacker:'Hacker 💻',
        galaxy:'Galaxie 🌌', fire:'Feu 🔥', moon:'Lune 🌙', sun:'Soleil ☀️',
        midnight:'Minuit', gold:'Or de Luxe', neon:'Néon',
        vaporwave:'Vaporwave', retro:'Rétro', minimal:'Minimal',
        royal:'Bleu Royal', space:'Espace', matrix:'Matrix',
        volcano:'Volcan', lightning:'Foudre', purple:'Violet',
        reddevil:'Diable Rouge', emerald:'Émeraude', rainbow:'Arc-en-Ciel',
        dark:'Sombre', light:'Clair', cyberpunk:'Cyberpunk', glass:'Verre',
        cosmicvoid:'Vide Cosmique 🌌', spiritblossom:'Esprit Floral 🌸',
        thundergod:'Dieu du Tonnerre ⚡', celestialkingdom:'Royaume Céleste 👑',
        abyssalocean:'Océan Abyssal 🌊', frozenkingdom:'Royaume Glacé 🧊',
        meteorstorm:'Tempête de Météores ☄️', infernalcore:'Noyau Infernal 🌋',
        auroranova:'Aurora Nova 🌈', shadowrealm:'Royaume des Ombres 🌑',
        crystalcave:'Grotte de Cristal 💎', lunarwolf:'Loup Lunaire 🐺',
        steampunk:'Steampunk ⚙️', phantomcarnival:'Carnaval Fantôme 🎭',
        timerift:'Fissure Temporelle 🌌', bloodeclipse:'Éclipse de Sang 🌑',
        dragonrealm:'Royaume des Dragons 🐉', thunderstorm:'Tempête ⚡',
        spiritsakura:'Sakura Spirituel 🌸', frozenempire:'Empire Glacé 🧊',
        aurorasky:'Ciel Aurora 🌌', moonkingdom:'Royaume de la Lune 🌙',
        sunkingdom:'Royaume du Soleil ☀️', dreamuniverse:'Univers des Rêves 🌠',
        phantomrealm:'Royaume Fantôme 👻', divineheaven:'Ciel Divin ✨',
        voidwalker:'Marcheur du Vide 🌌', abysscore:'Noyau Abyssal 🌊',
        solarflare:'Éruption Solaire ☀️', nebulacore:'Noyau Nébuleux 🌠',
        shadowking:'Roi des Ombres 👑', goldenempire:'Empire Doré 💛',
        crystalheart:'Cœur de Cristal 💎', cosmicfire:'Feu Cosmique 🌋',
        eternaldusk:'Crépuscule Éternel 🌅', emeraldabyss:'Abîme Émeraude 💚',
        rubyinferno:'Enfer de Rubis 🔥',
        celestialascension:'⭐ Ascension Céleste 👑', blackholesingularity:'🔥 Singularité Trou Noir 🕳️',
        crimsonapocalypse:'⭐ Apocalypse Cramoisi ☄️', frozeneternity:'🔥 Éternité Gelée ❄️',
        neoncybernexus:'⭐ Néon Cyber Nexus 🤖', phantomnightmare:'🔥 Cauchemar Fantôme 👻',
        dragonemperor:"⭐ Empereur Dragon 🐉", universecreator:'🔥 Créateur Universel 🌌',
        divineocean:'⭐ Océan Divin 🌊', infernalking:'🔥 Roi Infernal 🔥',
        sakuraheaven:'⭐ Paradis Sakura 🌸', infinitydimension:'🔥 Dimension Infinie ♾️',
        arabianlegacy:'Héritage Arabe', moroccanlegacy:'Héritage Marocain',
        godsdomain:'Domaine des Dieux', genesisprotocol:'Protocole de la Genèse 🌌',
        chronoinfinity:'Chrono Infini ⏳', elysium:'Élysée',
        aetherdominion:'Dominion Éthéré', theabsolute:"L'Absolu",
        eternalnexus:'∞ Nexus Éternel', omniscienteye:"L'Œil Omniscient",
        infinitythrone:"Trône de l'Infini",
        absolutesingularity:'🜂 La Singularité Absolue',
    }
};

/* ── THEME DESC LOCALIZATIONS ── */
const THEME_DESCS = {
    ar: {
        lpolvo:'افتراضي', bloodmoon:'غموض داكن', bluemoon:'سحر هادئ',
        ramadan:'ليالٍ هادئة', eclipse:'النهار والليل', dragon:'نار وحراشف',
        phoenix:'البعث', aurora:'الأضواء الشمالية', cybercity:'أضواء النيون',
        samurai:'روح المحارب', egypt:'إرث الفرعون', darkcastle:'ظلال قوطية',
        angel:'الضوء الإلهي', demon:'قوة جهنمية', crystal:'ساطع',
        royalpalace:'فاخر', underwater:'أزرق عميق', dreamworld:'خيال',
        fantasyforest:'مسحور', timetravel:'زمني', robotfuture:'تقنية',
        ai:'ذكاء', quantum:'فيزياء', galaxywar:'معركة كونية', ancient:'غموض',
        sakura:'زهر الكرز', ocean:'أعماق البحر', hacker:'مطر المصفوفة',
        galaxy:'الفضاء العميق', fire:'حرارة ولهب', moon:'أجواء الليل',
        sun:'ضوء ذهبي', midnight:'نيلي داكن', gold:'ذهب فاخر',
        neon:'توهج النيون', vaporwave:'ريترو الثمانينيات', retro:'دفء كلاسيكي',
        minimal:'ضوء نظيف', royal:'ملكي فاخر', space:'الفضاء الكوني',
        matrix:'المطر الرقمي', volcano:'حرارة الحمم', lightning:'عاصفة كهربائية',
        purple:'بنفسجي عميق', reddevil:'نار الجحيم', emerald:'أخضر عميق',
        rainbow:'ملوّن', dark:'ظل عميق', light:'مضيء نظيف',
        cyberpunk:'مستقبل النيون', glass:'مثلج',
        celestialascension:'المملكة السماوية فوق الغيوم', blackholesingularity:'الجاذبية وتشويه الفضاء',
        crimsonapocalypse:'نهاية العالم', frozeneternity:'المملكة المجمدة اللانهائية',
        neoncybernexus:'هولوغرامات المدينة السيبرانية', phantomnightmare:'أشباح داكنة وضباب بنفسجي',
        dragonemperor:'تنانين قديمة ونار ذهبية', universecreator:'المجرات والنجوم في طور الولادة',
        divineocean:'مياه كريستالية وحياة مضيئة', infernalking:'براكين ونار شيطانية',
        sakuraheaven:'أشجار الساكورا العملاقة والأضرحة', infinitydimension:'تشويه الواقع والبوابات',
        arabianlegacy:'عظمة الصحراء والعصر الذهبي الإسلامي', moroccanlegacy:'المملكة الملكية وغموض الصحراء',
        godsdomain:'السماء السماوية والسمو الإلهي', genesisprotocol:'ميلاد الواقع ذاته',
        chronoinfinity:'سيد الزمن ذاته', elysium:'الجنة الخارجة عن الجنة والفضاء والزمن',
        aetherdominion:'حيث تتحكم الطاقة النقية في الواقع', theabsolute:'النقطة التي ينتهي عندها الوجود',
        eternalnexus:'حيث يتقاطع كل واقع', omniscienteye:'وعي LPOLVO HUB',
        infinitythrone:'العالم الذي يُكتب فيه الوجود',
        absolutesingularity:'لقد تم استبدال الواقع. أنت ما وراء كل شيء.',
    },
    fr: {
        lpolvo:'Par défaut', bloodmoon:'Mystère Sombre', bluemoon:'Magie Calme',
        ramadan:'Nuits Paisibles', eclipse:'Jour & Nuit', dragon:'Feu & Écailles',
        phoenix:'Renaissance', aurora:'Aurores Boréales', cybercity:'Lumières Néon',
        samurai:"Esprit du Guerrier", egypt:'Héritage du Pharaon', darkcastle:'Ombres Gothiques',
        angel:'Lumière Divine', demon:'Puissance Infernale', crystal:'Brillant',
        royalpalace:'Luxe', underwater:'Bleu Profond', dreamworld:'Fantaisie',
        fantasyforest:'Enchanté', timetravel:'Chrono', robotfuture:'Technologie',
        ai:'Intelligence', quantum:'Physique', galaxywar:'Bataille Cosmique', ancient:'Mystère',
        sakura:'Fleur de Cerisier', ocean:'Fond Marin', hacker:'Pluie Matrix',
        galaxy:'Espace Profond', fire:'Chaleur & Flammes', moon:'Atmosphère Nocturne',
        sun:'Lumière Dorée', midnight:'Indigo Sombre', gold:"Or Précieux",
        neon:'Lueur Néon', vaporwave:'Rétro 80s', retro:'Chaleur Vintage',
        minimal:'Lumière Épurée', royal:'Royal Luxueux', space:'Vide Cosmique',
        matrix:'Pluie Numérique', volcano:'Chaleur Volcanique', lightning:'Tempête Électrique',
        purple:'Violet Profond', reddevil:"Feu de l'Enfer", emerald:'Vert Profond',
        rainbow:'Coloré', dark:'Ombre Profonde', light:'Lumineux Épuré',
        cyberpunk:'Futur Néon', glass:'Givré',
        celestialascension:'Royaume Céleste Au-dessus des Nuages', blackholesingularity:'Gravité & Distorsion Spatiale',
        crimsonapocalypse:'Fin du Monde', frozeneternity:'Royaume Glacé Infini',
        neoncybernexus:'Hologrammes Cyberpunk', phantomnightmare:'Fantômes Sombres & Brume Violette',
        dragonemperor:'Dragons Anciens & Feu Doré', universecreator:'Galaxies & Étoiles en Formation',
        divineocean:'Eaux de Cristal & Vie Lumineuse', infernalking:'Volcans & Feu Démoniaque',
        sakuraheaven:'Grands Cerisiers & Sanctuaires', infinitydimension:'Réalité Distordue & Portails',
        arabianlegacy:"Majesté du Désert & Âge d'Or Islamique", moroccanlegacy:'Royaume Royal & Mystique du Désert',
        godsdomain:'Ciel Céleste & Suprématie Divine', genesisprotocol:'La Naissance de la Réalité Elle-Même',
        chronoinfinity:'Maître du Temps Lui-Même', elysium:"Paradis Au-delà du Ciel, de l'Espace & du Temps",
        aetherdominion:"Là Où l'Énergie Pure Contrôle la Réalité", theabsolute:"Le Point Où l'Existence Prend Fin",
        eternalnexus:'Là Où Chaque Réalité Se Croise', omniscienteye:'La Conscience de LPOLVO HUB',
        infinitythrone:"Le Royaume Où l'Existence Est Écrite",
        absolutesingularity:'La Réalité A Été Remplacée. Tu Es Au-Delà.',
    }
};

function getThemeName(themeId) {
    const lang = state.language || 'en';
    if (lang === 'en') { const t = THEMES.find(x=>x.id===themeId); return t ? t.name : themeId; }
    return (THEME_NAMES[lang] && THEME_NAMES[lang][themeId]) || (THEMES.find(x=>x.id===themeId)||{}).name || themeId;
}

function getThemeDesc(themeId) {
    const lang = state.language || 'en';
    if (lang === 'en') { const t = THEMES.find(x=>x.id===themeId); return t ? t.desc : ''; }
    return (THEME_DESCS[lang] && THEME_DESCS[lang][themeId]) || (THEMES.find(x=>x.id===themeId)||{}).desc || '';
}

const LANGUAGES = {
    en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
    fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
};


/* ── THEME ENGINE ── */
function applyTheme(themeId, withSound = true) {
    if (state.themeTransitioning) return;
    const previousTheme = state.theme;
    state.themeTransitioning = true;
    state.theme = themeId;
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('lp_theme', themeId);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.toggle('active', b.dataset.theme === themeId));

    // Trigger transition effect
    const overlay = document.getElementById('overlayCanvas');
    if (overlay) {
        overlay.classList.add('show');
        setTimeout(() => {
            overlay.classList.remove('show');
            const ctx = overlay.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, overlay.width, overlay.height);
        }, 800);
    }

    // Start theme animation
    const theme = THEMES.find(t => t.id === themeId);
    startThemeAnimation(theme?.anim || 'particles');
    if (themeId === 'aetherdominion' && previousTheme !== themeId && withSound) {
        runAetherDominionActivation();
    }
    if (themeId === 'theabsolute' && previousTheme !== themeId && withSound) {
        runTheAbsoluteActivation();
    }
    if (themeId === 'eternalnexus' && previousTheme !== themeId && withSound) {
        runEternalNexusActivation();
    }
    if (themeId === 'omniscienteye' && previousTheme !== themeId && withSound) {
        runOmniscientActivation();
    }
    if (themeId === 'infinitythrone' && previousTheme !== themeId && withSound) {
        runInfinityThroneActivation();
    }
    if (themeId === 'absolutesingularity' && previousTheme !== themeId && withSound) {
        runAbsoluteSingularityActivation();
    }

    /* ── Ambient music: start if entering ABSOLUTE, stop if leaving ── */
    if (themeId === 'absolutesingularity' && SETTINGS.ambientMusic) {
        setTimeout(function() { startAbsoluteAmbient(); }, 600);
    } else if (themeId !== 'absolutesingularity' && previousTheme === 'absolutesingularity') {
        stopAbsoluteAmbient();
    }

    if (withSound) {
        playThemeSwitch();
        setTimeout(() => playThemeAmbient(), 300);
    }
    applyLanguageDirection();

    // Post community activity for rare theme selections (non-blocking)
    if (theme && (theme.mythic || theme.transcendent || theme.omniscient || theme.omnipotent || theme.absolute) && previousTheme !== themeId) {
        const uname = state.userProfile?.displayName || state.currentUser?.displayName || 'Someone';
        const themeName = theme.name || themeId;
        postCommunityActivity('mythic_theme', `🔥 <strong>${escHtml(uname)}</strong> activated <em>${escHtml(themeName)}</em> theme`).catch(() => {});
    }

    setTimeout(() => { state.themeTransitioning = false; }, 800);
}

function startThemeAnimation(type) {
    if (state.originCleanup) {
        state.originCleanup();
        state.originCleanup = null;
    }
    if (state.originVisibilityCleanup) {
        state.originVisibilityCleanup();
        state.originVisibilityCleanup = null;
    }
    if (state.bgAnimFrame) { cancelAnimationFrame(state.bgAnimFrame);
        state.bgAnimFrame = null; }
    if (state.matrixAnimFrame) { cancelAnimationFrame(state.matrixAnimFrame);
        state.matrixAnimFrame = null; }

    const mc = document.getElementById('matrixCanvas');
    if (mc) mc.classList.remove('visible');

    if (!SETTINGS.particles || SETTINGS.reducedMotion) {
        clearCanvas('bgCanvas');
        return;
    }

    const animMap = {
        particles: runParticlesAnimation,
        fire: runFireAnimation,
        moon: runMoonAnimation,
        sun: runSunAnimation,
        eclipse: runEclipseAnimation,
        matrix: runMatrixAnimation,
        sakura: runSakuraAnimation,
        galaxy: runGalaxyAnimation,
        ocean: runOceanAnimation,
        dragon: runDragonAnimation,
        aurora: runAuroraAnimation,
        cybercity: runCyberCityAnimation,
        volcano: runVolcanoAnimation,
        lightning: runLightningAnimation,
        bloodmoon: runBloodMoonAnimation,
        bluemoon: runBlueMoonAnimation,
        ramadan: runRamadanAnimation,
        phoenix: runPhoenixAnimation,
        samurai: runSamuraiAnimation,
        egypt: runEgyptAnimation,
        darkcastle: runDarkCastleAnimation,
        angel: runAngelAnimation,
        demon: runDemonAnimation,
        crystal: runCrystalAnimation,
        royalpalace: runRoyalPalaceAnimation,
        underwater: runUnderwaterAnimation,
        dreamworld: runDreamWorldAnimation,
        fantasyforest: runFantasyForestAnimation,
        timetravel: runTimeTravelAnimation,
        robotfuture: runRobotFutureAnimation,
        ai: runAIAnimation,
        quantum: runQuantumAnimation,
        galaxywar: runGalaxyWarAnimation,
        ancient: runAncientAnimation,
        neon: runNeonAnimation,
        vaporwave: runVaporwaveAnimation,
        retro: runRetroAnimation,
        minimal: runMinimalAnimation,
        royal: runRoyalAnimation,
        space: runSpaceAnimation,
        purple: runPurpleAnimation,
        reddevil: runRedDevilAnimation,
        emerald: runEmeraldAnimation,
        rainbow: runRainbowAnimation,
        dark: runDarkAnimation,
        light: runLightAnimation,
        cyberpunk: runCyberpunkAnimation,
        glass: runGlassAnimation,
        midnight: runMidnightAnimation,
        gold: runGoldAnimation,
        cosmicvoid: runCosmicVoidAnimation,
        spiritblossom: runSpiritBlossomAnimation,
        thundergod: runThunderGodAnimation,
        celestialkingdom: runCelestialKingdomAnimation,
        abyssalocean: runAbyssalOceanAnimation,
        frozenkingdom: runFrozenKingdomAnimation,
        meteorstorm: runMeteorStormAnimation,
        infernalcore: runInfernalCoreAnimation,
        auroranova: runAuroraNovaAnimation,
        shadowrealm: runShadowRealmAnimation,
        crystalcave: runCrystalCaveAnimation,
        lunarwolf: runLunarWolfAnimation,
        steampunk: runSteampunkAnimation,
        phantomcarnival: runPhantomCarnivalAnimation,
        timerift: runTimeRiftAnimation,
        bloodeclipse: runBloodEclipseAnimation,
        dragonrealm: runDragonRealmAnimation,
        thunderstorm: runThunderStormAnimation,
        spiritsakura: runSpiritSakuraAnimation,
        frozenempire: runFrozenEmpireAnimation,
        aurorasky: runAuroraSkyAnimation,
        moonkingdom: runMoonKingdomAnimation,
        sunkingdom: runSunKingdomAnimation,
        dreamuniverse: runDreamUniverseAnimation,
        phantomrealm: runPhantomRealmAnimation,
        divineheaven: runDivineHeavenAnimation,
        voidwalker: runVoidWalkerAnimation,
        abysscore: runAbyssCoreAnimation,
        solarflare: runSolarFlareAnimation,
        nebulacore: runNebulaCoreAnimation,
        shadowking: runShadowKingAnimation,
        goldenempire: runGoldenEmpireAnimation,
        crystalheart: runCrystalHeartAnimation,
        cosmicfire: runCosmicFireAnimation,
        eternaldusk: runEternalDuskAnimation,
        emeraldabyss: runEmeraldAbyssAnimation,
        rubyinferno: runRubyInfernoAnimation,
        celestialascension: runCelestialAscensionAnimation,
        blackholesingularity: runBlackHoleSingularityAnimation,
        crimsonapocalypse: runCrimsonApocalypseAnimation,
        frozeneternity: runFrozenEternityAnimation,
        neoncybernexus: runNeonCyberNexusAnimation,
        phantomnightmare: runPhantomNightmareAnimation,
        dragonemperor: runDragonEmperorAnimation,
        universecreator: runUniverseCreatorAnimation,
        divineocean: runDivineOceanAnimation,
        infernalking: runInfernalKingAnimation,
        sakuraheaven: runSakuraHeavenAnimation,
        infinitydimension: runInfinityDimensionAnimation,
        arabianlegacy: runArabianLegacyAnimation,
        moroccanlegacy: runMoroccanLegacyAnimation,
        godsdomain: runGodsDomainAnimation,
        genesisprotocol: runGenesisProtocolAnimation,
        chronoinfinity: runChronoInfinityAnimation,
        elysium: runElysiumAnimation,
        aetherdominion: runAetherDominionAnimation,
        theabsolute: runTheAbsoluteAnimation,
        eternalnexus: runEternalNexusAnimation,
        omniscienteye: runOmniscientEyeAnimation,
        infinitythrone: runInfinityThroneAnimation,
        absolutesingularity: runAbsoluteSingularityAnimation,
    };

    const fn = animMap[type] || runParticlesAnimation;
    fn();
}

function clearCanvas(id) {
    const c = document.getElementById(id);
    if (!c) return;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
}

function setupCanvas(id, w, h) {
    const c = document.getElementById(id);
    if (!c) return null;
    c.width = w || window.innerWidth;
    c.height = h || window.innerHeight;
    return c.getContext('2d');
}


/* ── THEME ANIMATIONS ── */

function runParticlesAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight;
    const count = Math.min(60, Math.floor(W * H / 18000));
    const pts = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        a: Math.random() * 0.5 + 0.15
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const col = getComputedStyle(document.documentElement).getPropertyValue('--particles').trim() ||
            'rgba(65,105,225,0.4)';
        pts.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = col;
            ctx.globalAlpha = p.a;
            ctx.fill();
            ctx.globalAlpha = 1;
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;
        });
        for (let i = 0; i < pts.length; i++) {
            for (let j = i + 1; j < pts.length; j++) {
                const dx = pts[i].x - pts[j].x,
                    dy = pts[i].y - pts[j].y;
                const d = Math.sqrt(dx * dx + dy * dy);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = col;
                    ctx.globalAlpha = (1 - d / 120) * 0.12;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runFireAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const sparks = Array.from({ length: 80 }, () => ({
        x: Math.random() * W,
        y: H + Math.random() * 50,
        vy: -(Math.random() * 2.5 + 0.5),
        vx: (Math.random() - 0.5) * 1.2,
        r: Math.random() * 4 + 1,
        life: 1.0,
        decay: Math.random() * 0.01 + 0.004
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        if (t % 3 === 0) {
            const grad = ctx.createRadialGradient(W * 0.5, H * 0.7, 0, W * 0.5, H * 0.7, W * 0.6);
            grad.addColorStop(0, 'rgba(255,107,53,0.02)');
            grad.addColorStop(0.5, 'rgba(255,60,20,0.01)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, W, H);
        }
        sparks.forEach(s => {
            const r = Math.round(255);
            const g = Math.round(80 + 120 * s.life);
            const b = Math.round(20 * s.life);
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r * (0.5 + 0.5 * s.life), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${s.life * 0.7})`;
            ctx.fill();
            const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
            grad.addColorStop(0, `rgba(255,200,100,${s.life * 0.1})`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
            ctx.fill();
            s.x += s.vx + (Math.random() - 0.5) * 0.4;
            s.y += s.vy;
            s.life -= s.decay;
            if (s.life <= 0) {
                s.x = Math.random() * W;
                s.y = H + 10 + Math.random() * 40;
                s.vy = -(Math.random() * 2.5 + 0.5);
                s.vx = (Math.random() - 0.5) * 1.2;
                s.r = Math.random() * 4 + 1;
                s.life = 1.0;
            }
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runMoonAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.6 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005
    }));
    const clouds = Array.from({ length: 4 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.4 + H * 0.1,
        w: Math.random() * 200 + 100,
        h: Math.random() * 30 + 15,
        speed: Math.random() * 0.2 + 0.1,
        a: Math.random() * 0.15 + 0.05
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const moonX = W * 0.8,
            moonY = H * 0.15,
            moonR = Math.min(W, H) * 0.12;
        const grad = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR);
        grad.addColorStop(0, 'rgba(255,255,240,0.9)');
        grad.addColorStop(0.7, 'rgba(220,220,230,0.8)');
        grad.addColorStop(1, 'rgba(180,180,200,0.2)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(200,200,210,0.15)';
        ctx.beginPath();
        ctx.arc(moonX - moonR * 0.25, moonY - moonR * 0.2, moonR * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(moonX + moonR * 0.3, moonY + moonR * 0.15, moonR * 0.1, 0, Math.PI * 2);
        ctx.fill();
        const glow = ctx.createRadialGradient(moonX, moonY, moonR * 0.5, moonX, moonY, moonR * 3);
        glow.addColorStop(0, 'rgba(200,210,255,0.08)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR * 3, 0, Math.PI * 2);
        ctx.fill();
        stars.forEach(s => {
            const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.twinkle + s.twinkle));
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fill();
            s.y += s.speed;
            if (s.y > H) { s.y = 0;
                s.x = Math.random() * W; }
        });
        clouds.forEach(c => {
            ctx.fillStyle = `rgba(180,200,220,${c.a})`;
            ctx.beginPath();
            ctx.ellipse(c.x, c.y, c.w * 0.5, c.h * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();
            c.x += c.speed;
            if (c.x > W + c.w) c.x = -c.w;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runSunAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const rays = 24;
    const dust = Array.from({ length: 50 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.3 + 0.1,
        vy: -(Math.random() * 0.3 + 0.05),
        vx: (Math.random() - 0.5) * 0.1,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const sunX = W * 0.2,
            sunY = H * 0.2,
            sunR = Math.min(W, H) * 0.1;
        const sky = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, Math.max(W, H) * 0.8);
        sky.addColorStop(0, 'rgba(255,200,100,0.12)');
        sky.addColorStop(0.3, 'rgba(255,180,80,0.06)');
        sky.addColorStop(1, 'rgba(255,150,50,0.01)');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < rays; i++) {
            const angle = (i / rays) * Math.PI * 2 + t * 0.002;
            const r1 = sunR * 0.8,
                r2 = sunR * 1.8 + Math.sin(t * 0.01 + i) * sunR * 0.3;
            ctx.beginPath();
            ctx.moveTo(sunX + Math.cos(angle) * r1, sunY + Math.sin(angle) * r1);
            ctx.lineTo(sunX + Math.cos(angle + 0.04) * r2, sunY + Math.sin(angle + 0.04) * r2);
            ctx.lineTo(sunX + Math.cos(angle - 0.04) * r2, sunY + Math.sin(angle - 0.04) * r2);
            ctx.closePath();
            ctx.fillStyle = `rgba(255,220,150,${0.04 + 0.03 * Math.sin(t * 0.005 + i)})`;
            ctx.fill();
        }
        const core = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR);
        core.addColorStop(0, 'rgba(255,240,200,0.7)');
        core.addColorStop(0.5, 'rgba(255,220,170,0.5)');
        core.addColorStop(1, 'rgba(255,200,120,0.1)');
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
        ctx.fill();
        dust.forEach(d => {
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,230,180,${d.a * (0.5 + 0.5 * Math.sin(t * 0.01 + d.phase))})`;
            ctx.fill();
            d.x += d.vx + Math.sin(t * 0.005 + d.phase) * 0.15;
            d.y += d.vy;
            if (d.y < -10) { d.y = H + 10;
                d.x = Math.random() * W; }
            if (d.x < -10) d.x = W + 10;
            if (d.x > W + 10) d.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runEclipseAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const stars = Array.from({ length: 80 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.5 + 0.1,
        twinkle: Math.random() * Math.PI * 2
    }));
    const goldParticles = Array.from({ length: 30 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const cx = W * 0.5,
            cy = H * 0.35,
            r = Math.min(W, H) * 0.12;
        const grad1 = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
        grad1.addColorStop(0, 'rgba(255,220,100,0.8)');
        grad1.addColorStop(0.7, 'rgba(255,180,60,0.6)');
        grad1.addColorStop(1, 'rgba(200,150,50,0.2)');
        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        const grad2 = ctx.createRadialGradient(cx + r * 0.2, cy - r * 0.2, 0, cx, cy, r);
        grad2.addColorStop(0, 'rgba(200,210,230,0.7)');
        grad2.addColorStop(0.7, 'rgba(150,170,200,0.5)');
        grad2.addColorStop(1, 'rgba(100,120,150,0.1)');
        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.arc(cx + r * 0.4, cy - r * 0.1, r * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(255,200,100,${0.15 + 0.05 * Math.sin(t * 0.01)})`;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(cx, cy, r * 1.1, 0, Math.PI * 2);
        ctx.stroke();
        goldParticles.forEach(p => {
            const alpha = p.a * (0.5 + 0.5 * Math.sin(t * 0.02 + p.phase));
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,220,150,${alpha})`;
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.01 + p.phase) * 0.1;
            p.y += p.vy + Math.cos(t * 0.01 + p.phase) * 0.1;
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
            if (p.y < -10) p.y = H + 10;
            if (p.y > H + 10) p.y = -10;
        });
        stars.forEach(s => {
            const alpha = s.a * (0.5 + 0.5 * Math.sin(t * 0.015 + s.twinkle));
            ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runMatrixAnimation() {
    const mc = document.getElementById('matrixCanvas');
    if (!mc) { runParticlesAnimation(); return; }
    mc.width = window.innerWidth;
    mc.height = window.innerHeight;
    mc.classList.add('visible');
    const ctx = mc.getContext('2d');
    const W = mc.width,
        H = mc.height;
    const cols = Math.floor(W / 16);
    const drops = Array(cols).fill(0).map(() => Math.random() * -H / 16);
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF';

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0,5,0,0.04)';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#39ff14';
        ctx.font = '14px JetBrains Mono, monospace';
        drops.forEach((y, i) => {
            const ch = chars[Math.floor(Math.random() * chars.length)];
            const alpha = 0.2 + 0.8 * (y * 16 / H);
            ctx.globalAlpha = Math.min(alpha, 0.6);
            ctx.fillText(ch, i * 16, y * 16);
            ctx.globalAlpha = 1;
            if (y * 16 > H && Math.random() > 0.98) drops[i] = 0;
            drops[i] += 0.4 + Math.random() * 0.3;
        });
        state.matrixAnimFrame = requestAnimationFrame(drawMatrix);
    }
    drawMatrix();
    runParticlesAnimation();
}

function runSakuraAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight;
    const petals = Array.from({ length: 45 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H - H,
        r: Math.random() * 6 + 3,
        vx: (Math.random() - 0.5) * 0.8,
        vy: Math.random() * 1.2 + 0.4,
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.04,
        a: Math.random() * 0.5 + 0.3,
        color: ['#f472b6', '#ec4899', '#f9a8d4', '#fbcfe8', '#f472b6'][Math.floor(Math.random() * 5)]
    }));

    function drawPetal(ctx, x, y, r, rot, a, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);
        ctx.globalAlpha = a;
        ctx.beginPath();
        ctx.ellipse(0, -r / 2, r * 0.55, r, 0, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
        ctx.globalAlpha = 1;
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createRadialGradient(W * 0.5, H * 0.3, 0, W * 0.5, H * 0.3, Math.max(W, H) * 0.7);
        grad.addColorStop(0, 'rgba(244,114,182,0.04)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        petals.forEach(p => {
            drawPetal(ctx, p.x, p.y, p.r, p.rot, p.a, p.color);
            p.x += p.vx + Math.sin(Date.now() / 2000 + p.y * 0.01) * 0.4;
            p.y += p.vy;
            p.rot += p.rotSpeed;
            if (p.y > H + 20) { p.y = -20;
                p.x = Math.random() * W;
                p.vx = (Math.random() - 0.5) * 0.8;
                p.vy = Math.random() * 1.2 + 0.4; }
        });
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runGalaxyAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const stars = Array.from({ length: 200 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.3,
        a: Math.random() * 0.7 + 0.1,
        twinkle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.005,
        color: ['#a855f7', '#7c3aed', '#d8b4fe', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 5)]
    }));
    const nebulas = Array.from({ length: 3 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 150 + 100,
        color: ['rgba(168,85,247,0.04)', 'rgba(236,72,153,0.03)', 'rgba(139,92,246,0.04)'][Math.floor(Math
            .random() * 3)]
    }));
    let shootingStar = { active: false, x: 0, y: 0, vx: 0, vy: 0, life: 0 };

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        nebulas.forEach(n => {
            const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
            grad.addColorStop(0, n.color);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
            ctx.fill();
        });
        stars.forEach(s => {
            const alpha = s.a * (0.4 + 0.6 * Math.sin(t * 0.02 + s.twinkle));
            ctx.fillStyle = s.color;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            s.y += s.speed;
            if (s.y > H) { s.y = 0;
                s.x = Math.random() * W; }
        });
        if (!shootingStar.active && Math.random() < 0.001) {
            shootingStar.active = true;
            shootingStar.x = Math.random() * W * 0.5;
            shootingStar.y = Math.random() * H * 0.3;
            shootingStar.vx = 6 + Math.random() * 4;
            shootingStar.vy = 3 + Math.random() * 2;
            shootingStar.life = 1.0;
        }
        if (shootingStar.active) {
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(shootingStar.x - shootingStar.vx * 2, shootingStar.y - shootingStar.vy * 2);
            ctx.strokeStyle = `rgba(255,255,255,${shootingStar.life * 0.8})`;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.fillStyle = `rgba(255,255,255,${shootingStar.life})`;
            ctx.beginPath();
            ctx.arc(shootingStar.x, shootingStar.y, 2, 0, Math.PI * 2);
            ctx.fill();
            shootingStar.x += shootingStar.vx;
            shootingStar.y += shootingStar.vy;
            shootingStar.life -= 0.02;
            if (shootingStar.life <= 0 || shootingStar.x > W || shootingStar.y > H) { shootingStar.active =
                false; }
        }
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runOceanAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const bubbles = Array.from({ length: 30 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 4 + 1,
        vy: -(Math.random() * 0.5 + 0.2),
        vx: (Math.random() - 0.5) * 0.2,
        a: Math.random() * 0.3 + 0.1
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(6,182,212,0.02)');
        grad.addColorStop(0.5, 'rgba(6,182,212,0.04)');
        grad.addColorStop(1, 'rgba(6,182,212,0.06)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let wave = 0; wave < 4; wave++) {
            ctx.beginPath();
            const yBase = H * (0.2 + wave * 0.2) + Math.sin(t * 0.02 + wave * 1.2) * 15;
            const amp = 15 + wave * 4;
            ctx.moveTo(0, yBase);
            for (let x = 0; x <= W; x += 3) {
                const y = yBase + Math.sin((x / W) * 3 * Math.PI + t * 0.04 + wave * 1.5) * amp +
                    Math.sin((x / W) * 5 * Math.PI + t * 0.025) * (amp * 0.3);
                ctx.lineTo(x, y);
            }
            ctx.lineTo(W, H);
            ctx.lineTo(0, H);
            ctx.closePath();
            ctx.fillStyle = `rgba(6,182,212,${0.03 - wave * 0.005})`;
            ctx.fill();
        }
        bubbles.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(6,182,212,${b.a * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.fillStyle = `rgba(6,182,212,${b.a * 0.1})`;
            ctx.fill();
            b.x += b.vx + Math.sin(t * 0.02 + b.y * 0.01) * 0.1;
            b.y += b.vy;
            if (b.y < -10) { b.y = H + 10;
                b.x = Math.random() * W; }
            if (b.x < -10) b.x = W + 10;
            if (b.x > W + 10) b.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runDragonAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const fireParticles = Array.from({ length: 50 }, () => ({
        x: Math.random() * W,
        y: H * 0.7 + Math.random() * H * 0.3,
        r: Math.random() * 5 + 2,
        vy: -(Math.random() * 2 + 0.5),
        vx: (Math.random() - 0.5) * 0.8,
        life: 1.0,
        decay: Math.random() * 0.008 + 0.004
    }));
    const scales = Array.from({ length: 30 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 8 + 4,
        a: Math.random() * 0.05 + 0.02,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        scales.forEach(s => {
            const alpha = s.a * (0.5 + 0.5 * Math.sin(t * 0.01 + s.phase));
            ctx.strokeStyle = `rgba(239,68,68,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2;
                ctx.arc(s.x + Math.cos(angle) * s.r, s.y + Math.sin(angle) * s.r, s.r * 0.4, 0, Math.PI * 2);
            }
            ctx.stroke();
        });
        fireParticles.forEach(p => {
            const r = Math.round(255);
            const g = Math.round(80 + 120 * p.life);
            const b = Math.round(20 * p.life);
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * (0.3 + 0.7 * p.life), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${p.life * 0.6})`;
            ctx.fill();
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2);
            grad.addColorStop(0, `rgba(255,150,50,${p.life * 0.08})`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 2, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + (Math.random() - 0.5) * 0.3;
            p.y += p.vy;
            p.life -= p.decay;
            if (p.life <= 0) {
                p.x = Math.random() * W;
                p.y = H * 0.7 + Math.random() * H * 0.3;
                p.vy = -(Math.random() * 2 + 0.5);
                p.vx = (Math.random() - 0.5) * 0.8;
                p.r = Math.random() * 5 + 2;
                p.life = 1.0;
            }
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runAuroraAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const waves = 4;
    const colors = ['rgba(52,211,153,0.04)', 'rgba(16,185,129,0.03)', 'rgba(110,231,183,0.02)',
        'rgba(167,243,208,0.02)'
    ];

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        for (let w = 0; w < waves; w++) {
            ctx.beginPath();
            const yBase = H * (0.1 + w * 0.2) + Math.sin(t * 0.015 + w * 0.8) * 30;
            const amp = 60 + w * 15;
            ctx.moveTo(0, yBase);
            for (let x = 0; x <= W; x += 2) {
                const y = yBase + Math.sin((x / W) * 4 * Math.PI + t * 0.025 + w * 1.2) * amp +
                    Math.sin((x / W) * 6 * Math.PI + t * 0.015 + w * 0.6) * (amp * 0.4);
                ctx.lineTo(x, y);
            }
            ctx.lineTo(W, H);
            ctx.lineTo(0, H);
            ctx.closePath();
            ctx.fillStyle = colors[w % colors.length];
            ctx.fill();
        }
        for (let i = 0; i < 20; i++) {
            const x = (i / 20) * W + Math.sin(t * 0.01 + i) * 20;
            const y = H * 0.2 + Math.sin(t * 0.02 + i * 0.5) * 50 + Math.sin(t * 0.01 + i * 0.3) * 30;
            const grad = ctx.createRadialGradient(x, y, 0, x, y, 15);
            grad.addColorStop(0, `rgba(52,211,153,${0.03 + 0.02 * Math.sin(t * 0.02 + i)})`);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, 15, 0, Math.PI * 2);
            ctx.fill();
        }
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runCyberCityAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const buildings = Array.from({ length: 20 }, (_, i) => ({
        x: (i / 20) * W + Math.random() * 10,
        w: W / 20 + Math.random() * 15,
        h: H * (0.2 + Math.random() * 0.4),
        color: `hsl(${200 + Math.random() * 40}, 80%, ${20 + Math.random() * 20}%)`
    }));
    const windows = Array.from({ length: 40 }, () => ({
        bx: Math.floor(Math.random() * 20),
        wx: Math.random() * 15,
        wy: Math.random() * 30 + 10,
        on: Math.random() > 0.5,
        blink: Math.random() * 10
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const sky = ctx.createLinearGradient(0, 0, 0, H * 0.3);
        sky.addColorStop(0, 'rgba(0,212,255,0.05)');
        sky.addColorStop(1, 'rgba(0,0,0,0.2)');
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, W, H * 0.3);
        buildings.forEach((b, i) => {
            ctx.fillStyle = b.color;
            ctx.fillRect(b.x, H - b.h, b.w, b.h);
            const cols = Math.floor(b.w / 8);
            const rows = Math.floor(b.h / 10);
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const idx = i * rows + r;
                    const win = windows[idx % windows.length];
                    const on = win ? (win.on && (Math.floor(t / 60) % 3 !== 0)) : false;
                    ctx.fillStyle = on ? 'rgba(255,200,100,0.6)' : 'rgba(50,60,80,0.3)';
                    ctx.fillRect(b.x + c * 8 + 2, H - b.h + r * 10 + 3, 4, 5);
                }
            }
        });
        ctx.strokeStyle = `rgba(0,212,255,${0.03 + 0.01 * Math.sin(t * 0.01)})`;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < 20; i++) {
            const x = (i / 20) * W;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
            ctx.stroke();
        }
        for (let i = 0; i < 10; i++) {
            const y = (i / 10) * H;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
        }
        for (let i = 0; i < 30; i++) {
            const x = (i / 30) * W + Math.sin(t * 0.02 + i) * 20;
            const y = (i * 37) % H;
            ctx.fillStyle = `rgba(0,212,255,${0.02 + 0.02 * Math.sin(t * 0.03 + i)})`;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fill();
        }
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runBloodMoonAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.3 + 0.1,
        vy: -(Math.random() * 0.2 + 0.05),
        vx: (Math.random() - 0.5) * 0.1
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const moonX = W * 0.75,
            moonY = H * 0.12,
            moonR = Math.min(W, H) * 0.1;
        const grad = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR);
        grad.addColorStop(0, 'rgba(220,38,38,0.9)');
        grad.addColorStop(0.5, 'rgba(180,20,20,0.7)');
        grad.addColorStop(1, 'rgba(100,10,10,0.2)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
        ctx.fill();
        const glow = ctx.createRadialGradient(moonX, moonY, moonR * 0.5, moonX, moonY, moonR * 4);
        glow.addColorStop(0, 'rgba(220,38,38,0.08)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR * 4, 0, Math.PI * 2);
        ctx.fill();
        particles.forEach(p => {
            ctx.fillStyle = `rgba(180,20,20,${p.a * 0.4})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.01 + p.y * 0.01) * 0.2;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runBlueMoonAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2
    }));
    const clouds = Array.from({ length: 5 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.3 + H * 0.1,
        w: Math.random() * 250 + 120,
        h: Math.random() * 35 + 20,
        speed: Math.random() * 0.15 + 0.08,
        a: Math.random() * 0.1 + 0.04
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const moonX = W * 0.8,
            moonY = H * 0.15,
            moonR = Math.min(W, H) * 0.11;
        const grad = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR);
        grad.addColorStop(0, 'rgba(100,180,255,0.9)');
        grad.addColorStop(0.6, 'rgba(70,150,230,0.8)');
        grad.addColorStop(1, 'rgba(40,100,180,0.2)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
        ctx.fill();
        const glow = ctx.createRadialGradient(moonX, moonY, moonR * 0.5, moonX, moonY, moonR * 4);
        glow.addColorStop(0, 'rgba(100,180,255,0.06)');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR * 4, 0, Math.PI * 2);
        ctx.fill();
        stars.forEach(s => {
            const alpha = s.a * (0.5 + 0.5 * Math.sin(t * 0.02 + s.twinkle));
            ctx.fillStyle = `rgba(200,220,255,${alpha * 0.7})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
        });
        clouds.forEach(c => {
            ctx.fillStyle = `rgba(150,190,230,${c.a})`;
            ctx.beginPath();
            ctx.ellipse(c.x, c.y, c.w * 0.5, c.h * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();
            c.x += c.speed;
            if (c.x > W + c.w) c.x = -c.w;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runRamadanAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const lanterns = Array.from({ length: 12 }, (_, i) => ({
        x: (i / 12) * W + Math.random() * 20,
        y: H * (0.1 + Math.random() * 0.3),
        r: Math.random() * 15 + 10,
        a: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
        color: `hsl(${40 + Math.random() * 20}, 80%, ${50 + Math.random() * 30}%)`
    }));
    const stars = Array.from({ length: 80 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.4 + 0.1,
        twinkle: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const moonX = W * 0.85,
            moonY = H * 0.1,
            moonR = Math.min(W, H) * 0.06;
        const grad = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR);
        grad.addColorStop(0, 'rgba(255,230,180,0.8)');
        grad.addColorStop(0.7, 'rgba(255,210,150,0.6)');
        grad.addColorStop(1, 'rgba(200,160,100,0.1)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
        ctx.fill();
        stars.forEach(s => {
            const alpha = s.a * (0.5 + 0.5 * Math.sin(t * 0.015 + s.twinkle));
            ctx.fillStyle = `rgba(255,230,180,${alpha * 0.7})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fill();
        });
        lanterns.forEach(l => {
            const flicker = 0.8 + 0.2 * Math.sin(t * 0.03 + l.phase);
            const grad2 = ctx.createRadialGradient(l.x, l.y, 0, l.x, l.y, l.r * flicker);
            grad2.addColorStop(0, `rgba(255,200,100,${l.a * 0.5})`);
            grad2.addColorStop(0.5, `rgba(255,180,80,${l.a * 0.3})`);
            grad2.addColorStop(1, 'transparent');
            ctx.fillStyle = grad2;
            ctx.beginPath();
            ctx.arc(l.x, l.y, l.r * flicker, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = l.color;
            ctx.globalAlpha = l.a * 0.3;
            ctx.beginPath();
            ctx.arc(l.x, l.y, l.r * 0.15, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runPhoenixAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 70 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 3 + 1,
        a: Math.random() * 0.4 + 0.1,
        vy: -(Math.random() * 0.8 + 0.2),
        vx: (Math.random() - 0.5) * 0.3,
        life: Math.random() * 0.5 + 0.5,
        color: ['#f43f5e', '#fb7185', '#fda4af', '#e11d48', '#be123c'][Math.floor(Math.random() * 5)]
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const cx = W * 0.5,
            cy = H * 0.5;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * 0.4);
        grad.addColorStop(0, 'rgba(244,63,94,0.03)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(W, H) * 0.4, 0, Math.PI * 2);
        ctx.fill();
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 + t * 0.005;
            const r = 50 + 20 * Math.sin(t * 0.01 + i);
            const x = cx + Math.cos(angle) * r;
            const y = cy + Math.sin(angle) * r * 0.4;
            const grad2 = ctx.createRadialGradient(x, y, 0, x, y, 30);
            grad2.addColorStop(0, `rgba(244,63,94,${0.03 + 0.02 * Math.sin(t * 0.02 + i)})`);
            grad2.addColorStop(1, 'transparent');
            ctx.fillStyle = grad2;
            ctx.beginPath();
            ctx.arc(x, y, 30, 0, Math.PI * 2);
            ctx.fill();
        }
        particles.forEach(p => {
            const alpha = p.a * (0.5 + 0.5 * p.life);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha * 0.5;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            p.x += p.vx + Math.sin(t * 0.02 + p.y * 0.01) * 0.2;
            p.y += p.vy;
            p.life -= 0.003;
            if (p.life <= 0 || p.y < -20) {
                p.x = Math.random() * W;
                p.y = H + 20;
                p.vy = -(Math.random() * 0.8 + 0.2);
                p.vx = (Math.random() - 0.5) * 0.3;
                p.life = 0.5 + Math.random() * 0.5;
                p.r = Math.random() * 3 + 1;
            }
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runSamuraiAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.2 + 0.05,
        vy: -(Math.random() * 0.15 + 0.02),
        vx: (Math.random() - 0.5) * 0.05,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(234,179,8,0.02)');
        grad.addColorStop(0.5, 'rgba(200,150,50,0.01)');
        grad.addColorStop(1, 'rgba(100,80,20,0.02)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 8; i++) {
            const x = (i / 8) * W + Math.sin(t * 0.003 + i) * 10;
            ctx.strokeStyle = `rgba(234,179,8,${0.02 + 0.01 * Math.sin(t * 0.005 + i)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x + 30, H);
            ctx.stroke();
        }
        particles.forEach(p => {
            ctx.fillStyle = `rgba(234,179,8,${p.a * 0.3})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.01 + p.phase) * 0.05;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runEgyptAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.2 + 0.05,
        vy: -(Math.random() * 0.1 + 0.02),
        vx: (Math.random() - 0.5) * 0.08,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(245,158,11,0.03)');
        grad.addColorStop(0.5, 'rgba(200,140,50,0.02)');
        grad.addColorStop(1, 'rgba(150,100,30,0.03)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 5; i++) {
            const x = (i / 5) * W + 20;
            const h = H * (0.3 + 0.2 * Math.sin(t * 0.005 + i * 0.7));
            ctx.strokeStyle = `rgba(245,158,11,${0.03 + 0.02 * Math.sin(t * 0.004 + i)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, H);
            ctx.quadraticCurveTo(x + 20, H - h * 0.4, x + 10, H - h);
            ctx.quadraticCurveTo(x - 10, H - h * 0.4, x, H);
            ctx.stroke();
        }
        particles.forEach(p => {
            ctx.fillStyle = `rgba(245,158,11,${p.a * 0.3})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.008 + p.phase) * 0.1;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runDarkCastleAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.15 + 0.05,
        vy: -(Math.random() * 0.1 + 0.02),
        vx: (Math.random() - 0.5) * 0.05
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.6);
        grad.addColorStop(0, 'rgba(107,114,128,0.01)');
        grad.addColorStop(1, 'rgba(0,0,0,0.04)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 6; i++) {
            const x = (i / 6) * W + 30;
            const h = H * (0.1 + 0.15 * (i % 3 + 1));
            ctx.fillStyle = `rgba(30,30,40,${0.02 + 0.01 * (i % 3)})`;
            ctx.fillRect(x, H - h, 15, h);
            ctx.fillRect(x + 20, H - h * 0.6, 10, h * 0.6);
        }
        particles.forEach(p => {
            ctx.fillStyle = `rgba(150,150,180,${p.a * 0.3})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.005 + p.y * 0.01) * 0.1;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runAngelAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.3 + 0.1,
        vy: -(Math.random() * 0.15 + 0.03),
        vx: (Math.random() - 0.5) * 0.05,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createRadialGradient(W * 0.5, H * 0.3, 0, W * 0.5, H * 0.3, Math.max(W, H) * 0.5);
        grad.addColorStop(0, 'rgba(240,240,255,0.04)');
        grad.addColorStop(1, 'rgba(200,200,230,0.01)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2 + t * 0.003;
            const r = 80 + 20 * Math.sin(t * 0.008 + i);
            const x = W * 0.5 + Math.cos(angle) * r;
            const y = H * 0.3 + Math.sin(angle) * r * 0.3;
            const grad2 = ctx.createRadialGradient(x, y, 0, x, y, 40);
            grad2.addColorStop(0, `rgba(240,240,255,${0.02 + 0.01 * Math.sin(t * 0.01 + i)})`);
            grad2.addColorStop(1, 'transparent');
            ctx.fillStyle = grad2;
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.fill();
        }
        particles.forEach(p => {
            ctx.fillStyle = `rgba(240,240,255,${p.a * 0.5})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.01 + p.phase) * 0.08;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runDemonAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 3 + 1,
        a: Math.random() * 0.3 + 0.1,
        vy: -(Math.random() * 0.3 + 0.05),
        vx: (Math.random() - 0.5) * 0.1,
        life: 0.5 + Math.random() * 0.5
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.4);
        grad.addColorStop(0, 'rgba(239,68,68,0.02)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 3; i++) {
            const angle = (i / 3) * Math.PI * 2 + t * 0.005;
            const r = 60 + 30 * Math.sin(t * 0.01 + i);
            const x = W * 0.5 + Math.cos(angle) * r;
            const y = H * 0.5 + Math.sin(angle) * r * 0.3;
            const grad2 = ctx.createRadialGradient(x, y, 0, x, y, 50);
            grad2.addColorStop(0, `rgba(239,68,68,${0.03 + 0.02 * Math.sin(t * 0.015 + i)})`);
            grad2.addColorStop(1, 'transparent');
            ctx.fillStyle = grad2;
            ctx.beginPath();
            ctx.arc(x, y, 50, 0, Math.PI * 2);
            ctx.fill();
        }
        particles.forEach(p => {
            const alpha = p.a * (0.5 + 0.5 * p.life);
            ctx.fillStyle = `rgba(200,30,30,${alpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.02 + p.y * 0.01) * 0.2;
            p.y += p.vy;
            p.life -= 0.002;
            if (p.life <= 0 || p.y < -20) {
                p.x = Math.random() * W;
                p.y = H + 20;
                p.vy = -(Math.random() * 0.3 + 0.05);
                p.vx = (Math.random() - 0.5) * 0.1;
                p.life = 0.5 + Math.random() * 0.5;
                p.r = Math.random() * 3 + 1;
            }
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runCrystalAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.3 + 0.1,
        vy: -(Math.random() * 0.1 + 0.02),
        vx: (Math.random() - 0.5) * 0.05,
        phase: Math.random() * Math.PI * 2,
        color: ['#67e8f9', '#a5f3fc', '#22d3ee', '#f0abfc', '#c084fc'][Math.floor(Math.random() * 5)]
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createRadialGradient(W * 0.5, H * 0.4, 0, W * 0.5, H * 0.4, Math.max(W, H) * 0.5);
        grad.addColorStop(0, 'rgba(103,232,249,0.03)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.a * 0.4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            p.x += p.vx + Math.sin(t * 0.01 + p.phase) * 0.08;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runRoyalPalaceAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 35 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.25 + 0.05,
        vy: -(Math.random() * 0.08 + 0.015),
        vx: (Math.random() - 0.5) * 0.04,
        phase: Math.random() * Math.PI * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(245,158,11,0.02)');
        grad.addColorStop(0.5, 'rgba(200,150,50,0.01)');
        grad.addColorStop(1, 'rgba(100,80,20,0.02)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 4; i++) {
            const x = (i / 4) * W + 30;
            const w = 20 + 10 * (i % 2);
            const h = H * (0.3 + 0.15 * (i % 3 + 1));
            ctx.fillStyle = `rgba(245,158,11,${0.02 + 0.01 * (i % 3)})`;
            ctx.fillRect(x, H - h, w, h);
            ctx.fillRect(x + w + 5, H - h * 0.7, w * 0.5, h * 0.7);
        }
        particles.forEach(p => {
            ctx.fillStyle = `rgba(245,158,11,${p.a * 0.3})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx + Math.sin(t * 0.008 + p.phase) * 0.06;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runUnderwaterAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const bubbles = Array.from({ length: 35 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 4 + 1,
        vy: -(Math.random() * 0.4 + 0.15),
        vx: (Math.random() - 0.5) * 0.1,
        a: Math.random() * 0.2 + 0.05
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(6,182,212,0.02)');
        grad.addColorStop(0.5, 'rgba(6,182,212,0.03)');
        grad.addColorStop(1, 'rgba(6,182,212,0.05)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let wave = 0; wave < 3; wave++) {
            ctx.beginPath();
            const yBase = H * (0.15 + wave * 0.25) + Math.sin(t * 0.015 + wave * 1.5) * 12;
            const amp = 12 + wave * 3;
            ctx.moveTo(0, yBase);
            for (let x = 0; x <= W; x += 3) {
                const y = yBase + Math.sin((x / W) * 3 * Math.PI + t * 0.03 + wave * 1.8) * amp;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(W, H);
            ctx.lineTo(0, H);
            ctx.closePath();
            ctx.fillStyle = `rgba(6,182,212,${0.02 - wave * 0.004})`;
            ctx.fill();
        }
        bubbles.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(6,182,212,${b.a * 0.4})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.fillStyle = `rgba(6,182,212,${b.a * 0.1})`;
            ctx.fill();
            b.x += b.vx + Math.sin(t * 0.02 + b.y * 0.01) * 0.1;
            b.y += b.vy;
            if (b.y < -10) { b.y = H + 10;
                b.x = Math.random() * W; }
            if (b.x < -10) b.x = W + 10;
            if (b.x > W + 10) b.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runDreamWorldAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 50 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 3 + 1,
        a: Math.random() * 0.3 + 0.1,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
        color: ['#c084fc', '#a855f7', '#d8b4fe', '#f0abfc', '#8b5cf6'][Math.floor(Math.random() * 5)]
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createRadialGradient(W * 0.5, H * 0.5, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.5);
        grad.addColorStop(0, 'rgba(192,132,252,0.03)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        particles.forEach(p => {
            const alpha = p.a * (0.5 + 0.5 * Math.sin(t * 0.015 + p.phase));
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha * 0.4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            p.x += p.vx + Math.sin(t * 0.01 + p.phase) * 0.1;
            p.y += p.vy + Math.cos(t * 0.01 + p.phase) * 0.1;
            if (p.x < -20) p.x = W + 20;
            if (p.x > W + 20) p.x = -20;
            if (p.y < -20) p.y = H + 20;
            if (p.y > H + 20) p.y = -20;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

function runFantasyForestAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const particles = Array.from({ length: 45 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.25 + 0.05,
        vy: -(Math.random() * 0.08 + 0.015),
        vx: (Math.random() - 0.5) * 0.04,
        phase: Math.random() * Math.PI * 2,
        color: ['#22c55e', '#4ade80', '#86efac', '#16a34a', '#34d399'][Math.floor(Math.random() * 5)]
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0, 0, 0, H);
        grad.addColorStop(0, 'rgba(34,197,94,0.02)');
        grad.addColorStop(0.5, 'rgba(34,197,94,0.03)');
        grad.addColorStop(1, 'rgba(34,197,94,0.04)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        for (let i = 0; i < 5; i++) {
            const x = (i / 5) * W + Math.sin(t * 0.005 + i * 0.5) * 20;
            const h = H * (0.2 + 0.15 * Math.sin(t * 0.008 + i * 0.7) + 0.1);
            ctx.fillStyle = `rgba(34,197,94,${0.01 + 0.01 * (i % 3)})`;
            ctx.beginPath();
            ctx.moveTo(x - 15, H);
            ctx.quadraticCurveTo(x - 20, H - h * 0.6, x, H - h);
            ctx.quadraticCurveTo(x + 20, H - h * 0.6, x + 15, H);
            ctx.fill();
        }
        particles.forEach(p => {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.a * 0.3;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
            p.x += p.vx + Math.sin(t * 0.008 + p.phase) * 0.06;
            p.y += p.vy;
            if (p.y < -10) { p.y = H + 10;
                p.x = Math.random() * W; }
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
        });
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}

/* ── Additional theme animations (simplified stubs for completeness) ── */
function runTimeTravelAnimation() { runParticlesAnimation(); }

function runRobotFutureAnimation() { runCyberCityAnimation(); }

function runAIAnimation() { runParticlesAnimation(); }

function runQuantumAnimation() { runParticlesAnimation(); }

function runGalaxyWarAnimation() { runGalaxyAnimation(); }

function runAncientAnimation() { runEgyptAnimation(); }

function runVolcanoAnimation() { runFireAnimation(); }

function runLightningAnimation() { runStormAnimation(); }

function runNeonAnimation() { runMatrixAnimation(); }

function runVaporwaveAnimation() { runParticlesAnimation(); }

function runRetroAnimation() { runParticlesAnimation(); }

function runMinimalAnimation() { runParticlesAnimation(); }

function runRoyalAnimation() { runParticlesAnimation(); }

function runSpaceAnimation() { runGalaxyAnimation(); }

function runPurpleAnimation() { runParticlesAnimation(); }

function runRedDevilAnimation() { runFireAnimation(); }

function runEmeraldAnimation() { runOceanAnimation(); }

function runRainbowAnimation() { runParticlesAnimation(); }

function runDarkAnimation() { runParticlesAnimation(); }

function runLightAnimation() { runParticlesAnimation(); }

function runCyberpunkAnimation() { runCyberCityAnimation(); }

function runGlassAnimation() { runParticlesAnimation(); }

function runMidnightAnimation() { runParticlesAnimation(); }

function runGoldAnimation() { runParticlesAnimation(); }

/* ── SPECIAL THEME ANIMATIONS ── */

function runCosmicVoidAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const stars = Array.from({length: 130}, () => ({
        angle: Math.random() * Math.PI * 2,
        dist: 30 + Math.random() * Math.min(W, H) * 0.46,
        speed: Math.random() * 0.0018 + 0.0006,
        r: Math.random() * 1.6 + 0.3,
        hue: Math.random() < 0.35 ? 180 + Math.random() * 40 : 260 + Math.random() * 60,
        a: Math.random() * 0.7 + 0.3
    }));
    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const rg = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.min(W,H)*0.5);
        rg.addColorStop(0, 'rgba(0,0,0,0.35)');
        rg.addColorStop(0.4, 'rgba(0,5,20,0.05)');
        rg.addColorStop(1, 'rgba(0,30,60,0.03)');
        ctx.fillStyle = rg; ctx.fillRect(0,0,W,H);
        const ring = ctx.createRadialGradient(W/2,H/2,Math.min(W,H)*0.04,W/2,H/2,Math.min(W,H)*0.14);
        ring.addColorStop(0,'rgba(0,0,0,0.5)');
        ring.addColorStop(0.5,'rgba(0,200,255,0.07)');
        ring.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=ring; ctx.beginPath(); ctx.arc(W/2,H/2,Math.min(W,H)*0.14,0,Math.PI*2); ctx.fill();
        stars.forEach(s => {
            const pull = 1 + 0.8 / (s.dist / 30 + 0.5);
            s.angle += s.speed * pull;
            s.dist = Math.max(12, s.dist - 0.06 * pull);
            if (s.dist < 14) { s.dist = 30 + Math.random()*Math.min(W,H)*0.46; s.angle = Math.random()*Math.PI*2; }
            const x = W/2 + Math.cos(s.angle)*s.dist, y = H/2 + Math.sin(s.angle)*s.dist;
            ctx.beginPath(); ctx.arc(x,y,s.r,0,Math.PI*2);
            ctx.fillStyle = `hsla(${s.hue},85%,82%,${s.a})`; ctx.fill();
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W=window.innerWidth; H=window.innerHeight; ctx.canvas.width=W; ctx.canvas.height=H; }, {passive:true});
    draw();
}

function runSpiritBlossomAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const petals = Array.from({length: 70}, () => ({
        x: Math.random()*W, y: Math.random()*H - H,
        vx: (Math.random()-0.5)*0.6, vy: Math.random()*1.2+0.4,
        r: Math.random()*7+3, a: Math.random()*0.6+0.2,
        rot: Math.random()*Math.PI*2, rotV: (Math.random()-0.5)*0.04,
        hue: 310+Math.random()*40, sw: Math.random()*0.03+0.01, sp: Math.random()*Math.PI*2
    }));
    const orbs = Array.from({length: 12}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.2, vy: (Math.random()-0.5)*0.15,
        r: Math.random()*30+15, a: Math.random()*0.12+0.03
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        orbs.forEach(o => {
            const g = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r);
            g.addColorStop(0,`rgba(244,114,182,${o.a})`); g.addColorStop(1,'rgba(244,114,182,0)');
            ctx.fillStyle=g; ctx.beginPath(); ctx.arc(o.x,o.y,o.r,0,Math.PI*2); ctx.fill();
            o.x+=o.vx; o.y+=o.vy;
            if(o.x<-50)o.x=W+50; if(o.x>W+50)o.x=-50;
            if(o.y<-50)o.y=H+50; if(o.y>H+50)o.y=-50;
        });
        petals.forEach(p => {
            ctx.save();
            ctx.translate(p.x + Math.sin(t*p.sw+p.sp)*18, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = p.a;
            const pg = ctx.createRadialGradient(0,0,0,0,0,p.r);
            pg.addColorStop(0,`hsla(${p.hue},90%,80%,0.9)`);
            pg.addColorStop(1,`hsla(${p.hue},80%,70%,0)`);
            ctx.fillStyle=pg;
            ctx.beginPath();
            ctx.ellipse(0,0,p.r,p.r*0.55,0,0,Math.PI*2);
            ctx.fill();
            ctx.globalAlpha=1; ctx.restore();
            p.y+=p.vy; p.x+=p.vx; p.rot+=p.rotV;
            if(p.y>H+20){p.y=-20; p.x=Math.random()*W;}
            if(p.x<-20)p.x=W+20; if(p.x>W+20)p.x=-20;
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runThunderGodAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const rain = Array.from({length: 180}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        len: Math.random()*18+8, speed: Math.random()*9+5, a: Math.random()*0.18+0.04
    }));
    let flashAlpha = 0, boltTimer = 0, bolt = null;
    function makeBolt(x) {
        const pts = [{x,y:0}];
        let cx=x, cy=0;
        while(cy<H){cy+=Math.random()*40+20; cx+=(Math.random()-0.5)*60; pts.push({x:cx,y:cy});}
        return pts;
    }
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0,0,0,H);
        grad.addColorStop(0,'rgba(5,8,25,0.12)'); grad.addColorStop(1,'rgba(2,5,15,0.18)');
        ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
        rain.forEach(r => {
            ctx.beginPath(); ctx.moveTo(r.x,r.y); ctx.lineTo(r.x+r.speed*0.1,r.y+r.len);
            ctx.strokeStyle=`rgba(148,200,255,${r.a})`; ctx.lineWidth=0.5; ctx.stroke();
            r.y+=r.speed; r.x+=r.speed*0.08;
            if(r.y>H){r.y=-10;r.x=Math.random()*W;} if(r.x>W)r.x=0;
        });
        boltTimer++;
        if (boltTimer > (Math.random()*120+60) || flashAlpha > 0.02) {
            if (!bolt) { bolt = makeBolt(Math.random()*W*0.8+W*0.1); flashAlpha=0.15; boltTimer=0; }
        }
        if (flashAlpha > 0.001) {
            ctx.fillStyle=`rgba(220,240,255,${flashAlpha})`; ctx.fillRect(0,0,W,H); flashAlpha*=0.82;
        }
        if (bolt) {
            ctx.beginPath(); ctx.moveTo(bolt[0].x,bolt[0].y);
            bolt.forEach(p=>ctx.lineTo(p.x,p.y));
            ctx.strokeStyle=`rgba(255,255,150,${Math.min(flashAlpha*8,0.9)})`; ctx.lineWidth=2.5; ctx.stroke();
            ctx.strokeStyle=`rgba(200,220,255,${Math.min(flashAlpha*4,0.5)})`; ctx.lineWidth=6; ctx.stroke();
            if (flashAlpha < 0.01) bolt = null;
        }
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runCelestialKingdomAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const motes = Array.from({length: 80}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.25, vy: -(Math.random()*0.4+0.1),
        r: Math.random()*2.5+0.5, a: Math.random()*0.7+0.3,
        hue: 40+Math.random()*30, phase: Math.random()*Math.PI*2
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const rays = 7;
        for (let i=0;i<rays;i++) {
            const a = (i/rays)*Math.PI*2 + t*0.002;
            const x2 = W/2 + Math.cos(a)*W*0.8, y2 = -50 + Math.sin(a)*50;
            const lg = ctx.createLinearGradient(W/2,-60,x2,y2);
            lg.addColorStop(0,`rgba(253,230,138,0.06)`); lg.addColorStop(1,'rgba(253,230,138,0)');
            ctx.fillStyle=lg; ctx.beginPath();
            ctx.moveTo(W/2,-60);
            ctx.lineTo(W/2+Math.cos(a-0.06)*W, Math.sin(a-0.06)*H*0.7);
            ctx.lineTo(W/2+Math.cos(a+0.06)*W, Math.sin(a+0.06)*H*0.7);
            ctx.closePath(); ctx.fill();
        }
        const glow = ctx.createRadialGradient(W/2,-20,0,W/2,-20,H*0.55);
        glow.addColorStop(0,'rgba(253,230,138,0.07)'); glow.addColorStop(1,'rgba(253,230,138,0)');
        ctx.fillStyle=glow; ctx.fillRect(0,0,W,H);
        motes.forEach(m => {
            m.a = 0.3+0.4*Math.sin(t*0.03+m.phase);
            ctx.beginPath(); ctx.arc(m.x,m.y,m.r,0,Math.PI*2);
            ctx.fillStyle=`hsla(${m.hue},90%,85%,${m.a})`; ctx.fill();
            m.x+=m.vx; m.y+=m.vy;
            if(m.y<-10){m.y=H+10;m.x=Math.random()*W;}
            if(m.x<-10)m.x=W+10; if(m.x>W+10)m.x=-10;
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runAbyssalOceanAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const bubbles = Array.from({length: 60}, () => ({
        x: Math.random()*W, y: H+Math.random()*H,
        r: Math.random()*5+1.5, speed: Math.random()*0.7+0.2,
        a: Math.random()*0.4+0.1, sx: (Math.random()-0.5)*0.03, sp: Math.random()*Math.PI*2
    }));
    const motes = Array.from({length: 40}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.15, vy: -(Math.random()*0.12+0.03),
        r: Math.random()*1.5+0.3, a: Math.random()*0.5+0.15, hue: 170+Math.random()*40
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        for (let i=0;i<3;i++) {
            const x = W*(i/3+0.1) + Math.sin(t*0.003+i)*20;
            const lg = ctx.createLinearGradient(x, 0, x+40, H);
            lg.addColorStop(0,'rgba(34,211,238,0.05)'); lg.addColorStop(0.5,'rgba(34,211,238,0.02)'); lg.addColorStop(1,'rgba(34,211,238,0)');
            ctx.fillStyle=lg; ctx.fillRect(x,0,40,H);
        }
        motes.forEach(m => {
            ctx.beginPath(); ctx.arc(m.x,m.y,m.r,0,Math.PI*2);
            ctx.fillStyle=`hsla(${m.hue},90%,75%,${m.a})`; ctx.fill();
            m.x+=m.vx; m.y+=m.vy;
            if(m.y<-10){m.y=H+10;m.x=Math.random()*W;}
            if(m.x<-10)m.x=W+10; if(m.x>W+10)m.x=-10;
        });
        bubbles.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x+Math.sin(t*b.sx+b.sp)*22, b.y, b.r, 0, Math.PI*2);
            ctx.strokeStyle=`rgba(34,211,238,${b.a})`; ctx.lineWidth=0.8; ctx.stroke();
            b.y-=b.speed;
            if(b.y<-20){b.y=H+20;b.x=Math.random()*W;}
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runFrozenKingdomAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const flakes = Array.from({length: 100}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*2.8+0.5, speed: Math.random()*0.9+0.2,
        a: Math.random()*0.7+0.2, drift: (Math.random()-0.5)*0.4,
        sp: Math.random()*Math.PI*2, sw: Math.random()*0.02+0.005
    }));
    function drawFlake(x,y,r) {
        const arms = 6;
        for (let i=0;i<arms;i++) {
            const a = (i/arms)*Math.PI*2;
            ctx.moveTo(x,y); ctx.lineTo(x+Math.cos(a)*r*2.2,y+Math.sin(a)*r*2.2);
            ctx.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r);
            ctx.lineTo(x+Math.cos(a+0.5)*r*0.6,y+Math.sin(a+0.5)*r*0.6);
            ctx.moveTo(x+Math.cos(a)*r,y+Math.sin(a)*r);
            ctx.lineTo(x+Math.cos(a-0.5)*r*0.6,y+Math.sin(a-0.5)*r*0.6);
        }
    }
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const grad = ctx.createLinearGradient(0,0,0,H);
        grad.addColorStop(0,'rgba(186,230,253,0.04)'); grad.addColorStop(1,'rgba(56,189,248,0.02)');
        ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
        flakes.forEach(f => {
            ctx.beginPath();
            if (f.r > 1.8) { drawFlake(f.x,f.y,f.r); ctx.strokeStyle=`rgba(186,230,253,${f.a*0.8})`; ctx.lineWidth=0.8; ctx.stroke(); }
            else { ctx.arc(f.x,f.y,f.r,0,Math.PI*2); ctx.fillStyle=`rgba(224,242,254,${f.a})`; ctx.fill(); }
            f.y+=f.speed; f.x+=f.drift+Math.sin(t*f.sw+f.sp)*0.5;
            if(f.y>H+10){f.y=-10;f.x=Math.random()*W;}
            if(f.x<-10)f.x=W+10; if(f.x>W+10)f.x=-10;
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runMeteorStormAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const meteors = Array.from({length: 18}, () => ({
        x: Math.random()*W*1.5, y: -Math.random()*H,
        vx: -(Math.random()*7+4), vy: Math.random()*4+3,
        len: Math.random()*120+60, a: Math.random()*0.8+0.2,
        r: Math.random()*1.5+0.5, hue: 20+Math.random()*30, active: Math.random()<0.4
    }));
    const stars = Array.from({length: 80}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*1.2+0.2, a: Math.random()*0.6+0.2
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        stars.forEach(s => { ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(255,255,255,${s.a})`; ctx.fill(); });
        meteors.forEach(m => {
            if (!m.active) { if(Math.random()<0.008) m.active=true; return; }
            const tailX = m.x - m.vx*(m.len/Math.sqrt(m.vx*m.vx+m.vy*m.vy));
            const tailY = m.y - m.vy*(m.len/Math.sqrt(m.vx*m.vx+m.vy*m.vy));
            const mg = ctx.createLinearGradient(m.x,m.y,tailX,tailY);
            mg.addColorStop(0,`hsla(${m.hue},100%,80%,${m.a})`); mg.addColorStop(1,'rgba(251,146,60,0)');
            ctx.beginPath(); ctx.moveTo(m.x,m.y); ctx.lineTo(tailX,tailY);
            ctx.strokeStyle=mg; ctx.lineWidth=m.r*2; ctx.stroke();
            ctx.beginPath(); ctx.arc(m.x,m.y,m.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(255,255,200,${m.a})`; ctx.fill();
            m.x+=m.vx; m.y+=m.vy;
            if(m.x<-200||m.y>H+100){m.x=W+Math.random()*300;m.y=-Math.random()*200;m.active=Math.random()<0.3;}
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runInfernalCoreAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const sparks = Array.from({length: 90}, () => ({
        x: Math.random()*W, y: H+Math.random()*60,
        vx: (Math.random()-0.5)*2.5, vy: -(Math.random()*4+1.5),
        r: Math.random()*2.5+0.5, a: Math.random()*0.8+0.2,
        hue: Math.random()<0.6?20+Math.random()*20:40+Math.random()*20, life:1
    }));
    const lava = Array.from({length: 6}, () => ({
        x: Math.random()*W, y: H*0.7+Math.random()*H*0.3,
        r: Math.random()*60+30, a: 0.04+Math.random()*0.04, phase: Math.random()*Math.PI*2
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const hg = ctx.createLinearGradient(0,H*0.6,0,H);
        hg.addColorStop(0,'rgba(249,115,22,0.06)'); hg.addColorStop(1,'rgba(220,68,0,0.1)');
        ctx.fillStyle=hg; ctx.fillRect(0,H*0.6,W,H*0.4);
        lava.forEach(l => {
            const lg = ctx.createRadialGradient(l.x,l.y,0,l.x,l.y,l.r);
            lg.addColorStop(0,`rgba(255,100,0,${l.a+0.02*Math.sin(t*0.03+l.phase)})`);
            lg.addColorStop(1,'rgba(255,50,0,0)');
            ctx.fillStyle=lg; ctx.beginPath(); ctx.arc(l.x,l.y,l.r,0,Math.PI*2); ctx.fill();
        });
        sparks.forEach(s => {
            ctx.beginPath(); ctx.arc(s.x,s.y,s.r*s.life,0,Math.PI*2);
            ctx.fillStyle=`hsla(${s.hue},100%,70%,${s.a*s.life})`; ctx.fill();
            s.x+=s.vx; s.y+=s.vy; s.vy*=0.98; s.life-=0.012;
            if(s.life<=0||s.y<-10){
                s.x=Math.random()*W; s.y=H+Math.random()*40;
                s.vx=(Math.random()-0.5)*2.5; s.vy=-(Math.random()*4+1.5);
                s.life=1; s.hue=Math.random()<0.6?20+Math.random()*20:40+Math.random()*20;
            }
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runAuroraNovaAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const bands = [
        {hue:175,offset:0,amp:0.18,speed:0.008},
        {hue:155,offset:0.7,amp:0.14,speed:0.012},
        {hue:260,offset:1.4,amp:0.10,speed:0.007},
        {hue:320,offset:2.1,amp:0.08,speed:0.015},
        {hue:195,offset:0.3,amp:0.12,speed:0.010},
    ];
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        bands.forEach((b,bi) => {
            const pts = [];
            const baseY = H*(0.25+bi*0.06);
            for (let x=0;x<=W;x+=8) {
                const y = baseY + Math.sin(x*0.006+t*b.speed+b.offset)*H*b.amp + Math.sin(x*0.012+t*b.speed*0.7)*H*b.amp*0.4;
                pts.push({x,y});
            }
            const waveH = H*0.12;
            ctx.beginPath(); ctx.moveTo(0,H);
            pts.forEach(p=>ctx.lineTo(p.x,p.y));
            ctx.lineTo(W,H); ctx.closePath();
            const ag = ctx.createLinearGradient(0,baseY-waveH,0,baseY+waveH);
            ag.addColorStop(0,`hsla(${b.hue},80%,65%,0)`);
            ag.addColorStop(0.4,`hsla(${b.hue},80%,65%,0.07)`);
            ag.addColorStop(0.7,`hsla(${b.hue},80%,65%,0.04)`);
            ag.addColorStop(1,`hsla(${b.hue},80%,65%,0)`);
            ctx.fillStyle=ag; ctx.fill();
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runShadowRealmAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const fog = Array.from({length: 20}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.15, vy: (Math.random()-0.5)*0.08,
        r: Math.random()*120+60, a: Math.random()*0.06+0.02
    }));
    const glows = Array.from({length: 4}, () => ({
        x: Math.random()*W, y: Math.random()*H*0.7+H*0.1,
        timer: Math.floor(Math.random()*400), a: 0
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        fog.forEach(f => {
            const fg = ctx.createRadialGradient(f.x,f.y,0,f.x,f.y,f.r);
            fg.addColorStop(0,`rgba(30,20,50,${f.a})`); fg.addColorStop(1,'rgba(30,20,50,0)');
            ctx.fillStyle=fg; ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2); ctx.fill();
            f.x+=f.vx; f.y+=f.vy;
            if(f.x<-f.r)f.x=W+f.r; if(f.x>W+f.r)f.x=-f.r;
            if(f.y<-f.r)f.y=H+f.r; if(f.y>H+f.r)f.y=-f.r;
        });
        glows.forEach(g => {
            g.timer++;
            if(g.timer>500){g.timer=0;g.x=Math.random()*W;g.y=Math.random()*H*0.7+H*0.1;}
            const lt = g.timer;
            if(lt>450){g.a=Math.max(0,(500-lt)/50*0.6);}
            else if(lt<30){g.a=Math.min(0.6,lt/30*0.6);}
            else if(lt>30&&lt<120){g.a=0.6;}
            else g.a=0;
            if(g.a>0.01){
                const gg = ctx.createRadialGradient(g.x,g.y-5,0,g.x,g.y,12);
                gg.addColorStop(0,`rgba(167,139,250,${g.a})`);
                gg.addColorStop(0.3,`rgba(167,139,250,${g.a*0.4})`);
                gg.addColorStop(1,'rgba(167,139,250,0)');
                ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(g.x,g.y,12,0,Math.PI*2); ctx.fill();
                ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(g.x+18,g.y,12,0,Math.PI*2); ctx.fill();
            }
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runCrystalCaveAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const sparkles = Array.from({length: 60}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*2+0.5, phase: Math.random()*Math.PI*2,
        speed: Math.random()*0.05+0.02, hue: 180+Math.random()*40
    }));
    const crystals = Array.from({length: 14}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        size: Math.random()*30+10, rot: Math.random()*Math.PI,
        hue: 185+Math.random()*30, a: Math.random()*0.06+0.02
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        crystals.forEach(c => {
            ctx.save(); ctx.translate(c.x,c.y); ctx.rotate(c.rot+t*0.003);
            ctx.globalAlpha=c.a;
            const cg = ctx.createLinearGradient(-c.size,-c.size*1.8,c.size,c.size*1.8);
            cg.addColorStop(0,`hsla(${c.hue},90%,80%,0)`);
            cg.addColorStop(0.5,`hsla(${c.hue},90%,80%,1)`);
            cg.addColorStop(1,`hsla(${c.hue},90%,80%,0)`);
            ctx.fillStyle=cg;
            ctx.beginPath();
            ctx.moveTo(0,-c.size*1.8); ctx.lineTo(c.size*0.5,-c.size*0.3);
            ctx.lineTo(c.size*0.4,c.size*1.4); ctx.lineTo(0,c.size*0.8);
            ctx.lineTo(-c.size*0.4,c.size*1.4); ctx.lineTo(-c.size*0.5,-c.size*0.3);
            ctx.closePath(); ctx.fill();
            ctx.globalAlpha=1; ctx.restore();
        });
        sparkles.forEach(s => {
            const a = 0.3+0.7*Math.abs(Math.sin(t*s.speed+s.phase));
            ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
            ctx.fillStyle=`hsla(${s.hue},100%,88%,${a})`; ctx.fill();
            ctx.beginPath(); ctx.moveTo(s.x-s.r*3,s.y); ctx.lineTo(s.x+s.r*3,s.y);
            ctx.moveTo(s.x,s.y-s.r*3); ctx.lineTo(s.x,s.y+s.r*3);
            ctx.strokeStyle=`hsla(${s.hue},100%,90%,${a*0.4})`; ctx.lineWidth=0.5; ctx.stroke();
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runLunarWolfAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const snowflakes = Array.from({length: 80}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*2+0.4, speed: Math.random()*0.6+0.15,
        drift: (Math.random()-0.5)*0.3, a: Math.random()*0.6+0.2
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const moonR = Math.min(W,H)*0.11;
        const mx = W*0.72, my = H*0.2;
        const mg = ctx.createRadialGradient(mx,my,moonR*0.3,mx,my,moonR*2.2);
        mg.addColorStop(0,'rgba(248,250,252,0.1)'); mg.addColorStop(0.5,'rgba(200,220,255,0.05)'); mg.addColorStop(1,'rgba(226,232,240,0)');
        ctx.fillStyle=mg; ctx.beginPath(); ctx.arc(mx,my,moonR*2.2,0,Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(mx,my,moonR,0,Math.PI*2);
        const mfg = ctx.createRadialGradient(mx-moonR*0.2,my-moonR*0.2,0,mx,my,moonR);
        mfg.addColorStop(0,'rgba(248,250,252,0.22)'); mfg.addColorStop(0.6,'rgba(226,232,240,0.14)'); mfg.addColorStop(1,'rgba(186,210,250,0.08)');
        ctx.fillStyle=mfg; ctx.fill();
        snowflakes.forEach(f => {
            ctx.beginPath(); ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
            ctx.fillStyle=`rgba(240,248,255,${f.a})`; ctx.fill();
            f.y+=f.speed; f.x+=f.drift;
            if(f.y>H+5){f.y=-5;f.x=Math.random()*W;}
            if(f.x<-5)f.x=W+5; if(f.x>W+5)f.x=-5;
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runSteampunkAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const gears = Array.from({length: 6}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        r: Math.random()*50+20, teeth: Math.floor(Math.random()*8+6),
        rot: Math.random()*Math.PI*2, speed: (Math.random()-0.5)*0.005+0.003,
        a: Math.random()*0.06+0.02, dir: Math.random()<0.5?1:-1
    }));
    const steam = Array.from({length: 25}, () => ({
        x: Math.random()*W, y: H+Math.random()*40,
        vx: (Math.random()-0.5)*0.4, vy: -(Math.random()*0.8+0.2),
        r: Math.random()*18+8, a: Math.random()*0.15+0.04, life:1
    }));
    function drawGear(cx,cy,r,teeth,rot) {
        const toothH = r*0.22, toothW = (Math.PI*2/teeth)*0.4;
        ctx.beginPath();
        for (let i=0;i<teeth;i++) {
            const a = (i/teeth)*Math.PI*2+rot;
            ctx.arc(cx,cy,r,a-toothW,a+toothW);
            ctx.lineTo(cx+Math.cos(a)*(r+toothH),cy+Math.sin(a)*(r+toothH));
        }
        ctx.closePath();
    }
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const gg = ctx.createLinearGradient(0,H*0.5,0,H);
        gg.addColorStop(0,'rgba(217,119,6,0.03)'); gg.addColorStop(1,'rgba(180,83,9,0.06)');
        ctx.fillStyle=gg; ctx.fillRect(0,0,W,H);
        gears.forEach(g => {
            g.rot+=g.speed*g.dir;
            drawGear(g.x,g.y,g.r,g.teeth,g.rot);
            ctx.strokeStyle=`rgba(217,119,6,${g.a})`; ctx.lineWidth=1.5; ctx.stroke();
            ctx.beginPath(); ctx.arc(g.x,g.y,g.r*0.3,0,Math.PI*2);
            ctx.strokeStyle=`rgba(253,230,138,${g.a*0.8})`; ctx.lineWidth=1; ctx.stroke();
        });
        steam.forEach(s => {
            const sg = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r);
            sg.addColorStop(0,`rgba(200,160,100,${s.a*s.life})`); sg.addColorStop(1,'rgba(180,140,80,0)');
            ctx.fillStyle=sg; ctx.beginPath(); ctx.arc(s.x,s.y,s.r*s.life,0,Math.PI*2); ctx.fill();
            s.x+=s.vx; s.y+=s.vy; s.r+=0.15; s.life-=0.008;
            if(s.life<=0){s.x=Math.random()*W;s.y=H+Math.random()*40;s.r=Math.random()*18+8;s.life=1;s.a=Math.random()*0.15+0.04;}
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runPhantomCarnivalAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const lanterns = Array.from({length: 22}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.25, vy: -(Math.random()*0.3+0.05),
        r: Math.random()*22+8, a: Math.random()*0.35+0.1,
        hue: Math.random()*360, phase: Math.random()*Math.PI*2, sp: Math.random()*0.02+0.01
    }));
    const sparks = Array.from({length: 35}, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-0.5)*0.8, vy: (Math.random()-0.5)*0.8,
        r: Math.random()*1.5+0.3, a: Math.random()*0.7+0.3,
        hue: Math.random()*360, life:Math.random()
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        lanterns.forEach(l => {
            const la = l.a*(0.7+0.3*Math.sin(t*l.sp+l.phase));
            const lg = ctx.createRadialGradient(l.x,l.y,0,l.x,l.y,l.r);
            lg.addColorStop(0,`hsla(${l.hue},90%,72%,${la})`);
            lg.addColorStop(1,`hsla(${l.hue},90%,60%,0)`);
            ctx.fillStyle=lg; ctx.beginPath(); ctx.arc(l.x,l.y,l.r,0,Math.PI*2); ctx.fill();
            l.x+=l.vx; l.y+=l.vy; l.hue=(l.hue+0.15)%360;
            if(l.y<-l.r){l.y=H+l.r;l.x=Math.random()*W;}
            if(l.x<-l.r)l.x=W+l.r; if(l.x>W+l.r)l.x=-l.r;
        });
        sparks.forEach(s => {
            s.life-=0.005;
            if(s.life<=0){s.x=Math.random()*W;s.y=Math.random()*H;s.life=1;s.hue=Math.random()*360;}
            const sa = s.a*s.life;
            ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
            ctx.fillStyle=`hsla(${s.hue},100%,80%,${sa})`; ctx.fill();
            s.x+=s.vx; s.y+=s.vy;
            if(s.x<0)s.x=W; if(s.x>W)s.x=0;
            if(s.y<0)s.y=H; if(s.y>H)s.y=0;
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}

function runTimeRiftAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth, H = window.innerHeight, t = 0;
    const rings = Array.from({length: 5}, () => ({
        r: Math.random()*Math.min(W,H)*0.25, maxR: Math.min(W,H)*0.45,
        speed: Math.random()*0.8+0.3, a: Math.random()*0.4+0.2,
        hue: 185+Math.random()*40
    }));
    const particles = Array.from({length: 55}, () => ({
        angle: Math.random()*Math.PI*2, dist: Math.random()*Math.min(W,H)*0.35,
        speed: (Math.random()-0.5)*0.025, r: Math.random()*1.8+0.3,
        a: Math.random()*0.6+0.2, hue: 185+Math.random()*30
    }));
    function draw() {
        ctx.clearRect(0,0,W,H);
        if (!SETTINGS.particles) { t++; state.bgAnimFrame = requestAnimationFrame(draw); return; }
        const pg = ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.min(W,H)*0.35);
        pg.addColorStop(0,'rgba(6,182,212,0.08)'); pg.addColorStop(0.5,'rgba(6,182,212,0.03)'); pg.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=pg; ctx.fillRect(0,0,W,H);
        rings.forEach(ring => {
            ctx.beginPath();
            ctx.arc(W/2, H/2, ring.r, 0, Math.PI*2);
            ctx.strokeStyle=`hsla(${ring.hue},85%,65%,${ring.a*(1-ring.r/ring.maxR)})`;
            ctx.lineWidth=1.5; ctx.stroke();
            ring.r+=ring.speed; ring.a=0.5*(1-ring.r/ring.maxR);
            if(ring.r>ring.maxR){ring.r=5;}
        });
        particles.forEach(p => {
            p.angle+=p.speed;
            const x=W/2+Math.cos(p.angle)*p.dist, y=H/2+Math.sin(p.angle)*p.dist;
            ctx.beginPath(); ctx.arc(x,y,p.r,0,Math.PI*2);
            ctx.fillStyle=`hsla(${p.hue},90%,75%,${p.a})`; ctx.fill();
        });
        t++; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}


function runStormAnimation() {
    const ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    let W = window.innerWidth,
        H = window.innerHeight,
        t = 0;
    const rain = Array.from({ length: 200 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        len: Math.random() * 15 + 8,
        speed: Math.random() * 8 + 4,
        a: Math.random() * 0.2 + 0.05
    }));

    function draw() {
        ctx.clearRect(0, 0, W, H);
        if (!SETTINGS.particles) { t++;
            state.bgAnimFrame = requestAnimationFrame(draw); return; }
        ctx.fillStyle = 'rgba(10,10,20,0.15)';
        ctx.fillRect(0, 0, W, H);
        rain.forEach(r => {
            ctx.beginPath();
            ctx.moveTo(r.x, r.y);
            ctx.lineTo(r.x + r.speed * 0.08, r.y + r.len);
            ctx.strokeStyle = `rgba(148,163,184,${r.a * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            r.y += r.speed;
            r.x += r.speed * 0.04;
            if (r.y > H) { r.y = -10;
                r.x = Math.random() * W; }
            if (r.x > W) r.x = 0;
            if (r.x < 0) r.x = W;
        });
        if (Math.random() < 0.002) {
            ctx.fillStyle = 'rgba(255,255,255,0.03)';
            ctx.fillRect(0, 0, W, H);
            const x = Math.random() * W;
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            for (let i = 0; i < 10; i++) {
                ctx.lineTo(x + (Math.random() - 0.5) * 30, i * 30 + 20);
            }
            ctx.stroke();
        }
        t++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { W = window.innerWidth;
        H = window.innerHeight;
        ctx.canvas.width = W;
        ctx.canvas.height = H; }, { passive: true });
    draw();
}


/* ── LEGENDARY THEME ANIMATIONS v3.3 ── */
function runBloodEclipseAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const pts = Array.from({length:80}, ()=>({x:Math.random(),y:Math.random(),r:Math.random()*2.5+0.5,vx:(Math.random()-.5)*.0015,vy:(Math.random()-.5)*.0015,a:Math.random()*Math.PI*2,as:0.015+Math.random()*.02,t:Math.random()>.7}));
    function draw() {
        if(state.theme!=='bloodeclipse')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.008;
        const rg=ctx.createRadialGradient(W*.5,H*.35,0,W*.5,H*.35,W*.55);
        rg.addColorStop(0,'rgba(100,0,0,.07)'); rg.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=rg; ctx.fillRect(0,0,W,H);
        pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.a+=p.as;if(p.x<0)p.x=1;if(p.x>1)p.x=0;if(p.y<0)p.y=1;if(p.y>1)p.y=0;
            const al=.35+.45*Math.abs(Math.sin(p.a));
            ctx.fillStyle=p.t?'rgba(255,120,0,'+al.toFixed(2)+')':'rgba(220,0,30,'+al.toFixed(2)+')';
            ctx.beginPath();ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runDragonRealmAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const emb=Array.from({length:100},()=>({x:Math.random(),y:1.1+Math.random()*.3,r:Math.random()*2+.5,vx:(Math.random()-.5)*.003,vy:-.002-Math.random()*.003,a:Math.random(),lf:Math.random()}));
    function draw() {
        if(state.theme!=='dragonrealm')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.01;
        const lg=ctx.createLinearGradient(0,H*.7,0,H);lg.addColorStop(0,'rgba(0,0,0,0)');lg.addColorStop(1,'rgba(100,30,0,.08)');ctx.fillStyle=lg;ctx.fillRect(0,0,W,H);
        emb.forEach(e=>{e.x+=e.vx+Math.sin(ph+e.lf*8)*.001;e.y+=e.vy;e.a+=.025;if(e.y<-.1){e.y=1.1;e.x=Math.random();}
            const al=.5+.4*Math.abs(Math.sin(e.a)); const r=220+Math.floor(Math.random()*35); const g=60+Math.floor(Math.random()*70);
            ctx.fillStyle='rgba('+r+','+g+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(e.x*W,e.y*H,e.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runThunderStormAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0,bt=0,bx=0,ba=false,balpha=0;
    const pts=Array.from({length:60},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.3,a:Math.random()*Math.PI*2,as:.02+Math.random()*.03}));
    function draw(){
        if(state.theme!=='thunderstorm')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.012;bt++;
        if(bt>80+Math.random()*120){bt=0;bx=W*.2+Math.random()*W*.6;ba=true;balpha=.9;}
        if(ba){ctx.strokeStyle='rgba(255,240,100,'+balpha.toFixed(2)+')';ctx.lineWidth=2+balpha*3;ctx.shadowBlur=40;ctx.shadowColor='rgba(255,240,100,.8)';
            ctx.beginPath();let cx=bx,cy=0;ctx.moveTo(cx,cy);while(cy<H*.7){cx+=(Math.random()-.5)*60;cy+=40+Math.random()*40;ctx.lineTo(cx,cy);}
            ctx.stroke();ctx.shadowBlur=0;balpha-=.08;if(balpha<=0)ba=false;}
        pts.forEach(p=>{p.a+=p.as;const al=.3+.45*Math.abs(Math.sin(p.a));ctx.fillStyle='rgba(255,225,53,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runSpiritSakuraAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight;
    const pet=Array.from({length:80},()=>({x:Math.random(),y:Math.random()-.5,r:Math.random()*5+3,vx:(Math.random()-.5)*.002,vy:.001+Math.random()*.002,spin:Math.random()*Math.PI*2,sv:(Math.random()-.5)*.05,a:.3+Math.random()*.7}));
    function draw(){
        if(state.theme!=='spiritsakura')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);
        pet.forEach(p=>{p.x+=p.vx+Math.sin(p.spin)*.0005;p.y+=p.vy;p.spin+=p.sv;if(p.y>1.1){p.y=-.1;p.x=Math.random();}
            ctx.save();ctx.translate(p.x*W,p.y*H);ctx.rotate(p.spin);ctx.globalAlpha=p.a*.7;
            const g=130+Math.floor(Math.random()*80);const b=170+Math.floor(Math.random()*55);
            ctx.fillStyle='rgba(255,'+g+','+b+',1)';ctx.beginPath();ctx.ellipse(0,0,p.r,p.r*.6,0,0,Math.PI*2);ctx.fill();
            ctx.restore();ctx.globalAlpha=1;});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runFrozenEmpireAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const sn=Array.from({length:90},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.5,vy:.0005+Math.random()*.001,vx:(Math.random()-.5)*.0005,a:Math.random()*Math.PI*2,as:.02+Math.random()*.02}));
    function draw(){
        if(state.theme!=='frozenempire')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.008;
        sn.forEach(p=>{p.x+=p.vx+Math.sin(ph+p.a)*.0003;p.y+=p.vy;if(p.y>1.05){p.y=-.05;p.x=Math.random();}p.a+=p.as;
            const al=.4+.4*Math.abs(Math.sin(p.a));ctx.fillStyle='rgba(200,240,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runAuroraSkyAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const stars=Array.from({length:60},()=>({x:Math.random(),y:Math.random()*.6,r:Math.random()*1.2+.3,a:Math.random()*Math.PI*2,as:.015+Math.random()*.02}));
    const bands=[{y:.2,r:0,g:255,b:200},{y:.35,r:0,g:200,b:150},{y:.5,r:100,g:200,b:255}];
    function draw(){
        if(state.theme!=='aurorasky')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.006;
        bands.forEach((b,i)=>{const yp=b.y+Math.sin(ph+i*1.2)*.06;const al=.06+.04*Math.sin(ph*.7+i);
            const grd=ctx.createLinearGradient(0,H*(yp-.12),0,H*(yp+.12));grd.addColorStop(0,'rgba(0,0,0,0)');grd.addColorStop(.5,'rgba('+b.r+','+b.g+','+b.b+','+al.toFixed(3)+')');grd.addColorStop(1,'rgba(0,0,0,0)');
            ctx.fillStyle=grd;ctx.fillRect(0,H*(yp-.15),W,H*.3);});
        stars.forEach(s=>{s.a+=s.as;const al=.3+.4*Math.abs(Math.sin(s.a));ctx.fillStyle='rgba(180,255,240,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runMoonKingdomAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const stars=Array.from({length:120},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.5+.3,a:Math.random()*Math.PI*2,as:.005+Math.random()*.015}));
    const motes=Array.from({length:30},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+1,vy:-.0002-Math.random()*.0003,a:Math.random()*Math.PI*2,as:.015}));
    function draw(){
        if(state.theme!=='moonkingdom')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.01;
        const rg=ctx.createRadialGradient(W*.7,H*.2,0,W*.7,H*.2,200);rg.addColorStop(0,'rgba(212,207,255,.06)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        stars.forEach(s=>{s.a+=s.as;const al=.25+.55*Math.abs(Math.sin(s.a));ctx.fillStyle='rgba(220,215,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        motes.forEach(m=>{m.y+=m.vy;if(m.y<-.05)m.y=1.05;m.a+=m.as;const al=.2+.3*Math.abs(Math.sin(m.a));ctx.fillStyle='rgba(200,195,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runSunKingdomAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const rays=Array.from({length:12},(_,i)=>({angle:i*(Math.PI*2/12),len:.3+Math.random()*.2}));
    const motes=Array.from({length:50},()=>({x:Math.random(),y:.5+Math.random()*.6,r:Math.random()*2+.8,vy:-.001-Math.random()*.001,a:Math.random()*Math.PI*2,as:.02}));
    function draw(){
        if(state.theme!=='sunkingdom')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.008;
        rays.forEach((ray,i)=>{const a=ray.angle+ph*.2;const len=(ray.len+.05*Math.sin(ph*2+i))*Math.min(W,H)*.5;
            const g=ctx.createLinearGradient(W*.5,H*.12,W*.5+Math.cos(a)*len,H*.12+Math.sin(a)*len);
            g.addColorStop(0,'rgba(255,204,0,.06)');g.addColorStop(1,'rgba(255,120,0,0)');ctx.strokeStyle=g;ctx.lineWidth=8+4*Math.sin(ph+i);ctx.beginPath();ctx.moveTo(W*.5,H*.12);ctx.lineTo(W*.5+Math.cos(a)*len,H*.12+Math.sin(a)*len);ctx.stroke();});
        motes.forEach(m=>{m.y+=m.vy;if(m.y<-.05)m.y=1.05;m.a+=m.as;const al=.3+.4*Math.abs(Math.sin(m.a));ctx.fillStyle='rgba(255,220,80,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runDreamUniverseAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const neb=Array.from({length:5},(_,i)=>({x:Math.random(),y:Math.random(),r:.15+Math.random()*.2,hue:240+i*30,ph:Math.random()*Math.PI*2}));
    const stars=Array.from({length:100},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.5+.3,a:Math.random()*Math.PI*2,as:.01+Math.random()*.02}));
    function draw(){
        if(state.theme!=='dreamuniverse')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.007;
        neb.forEach(n=>{n.ph+=.003;const pulse=.95+.05*Math.sin(n.ph);
            const rg=ctx.createRadialGradient(n.x*W,n.y*H,0,n.x*W,n.y*H,n.r*Math.min(W,H)*pulse);
            rg.addColorStop(0,'hsla('+n.hue+',80%,60%,.05)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);});
        stars.forEach(s=>{s.a+=s.as;const al=.2+.7*Math.abs(Math.sin(s.a));ctx.fillStyle='rgba(200,170,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runPhantomRealmAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const gh=Array.from({length:8},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.001,vy:(Math.random()-.5)*.001,r:.05+Math.random()*.08,phase:Math.random()*Math.PI*2}));
    const wisps=Array.from({length:50},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.5+.5,a:Math.random()*Math.PI*2,as:.015+Math.random()*.02}));
    function draw(){
        if(state.theme!=='phantomrealm')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.006;
        gh.forEach(g=>{g.x+=g.vx;g.y+=g.vy;g.phase+=.02;if(g.x<-.2)g.x=1.2;if(g.x>1.2)g.x=-.2;if(g.y<-.2)g.y=1.2;if(g.y>1.2)g.y=-.2;
            const al=.015+.01*Math.sin(g.phase);const rg=ctx.createRadialGradient(g.x*W,g.y*H,0,g.x*W,g.y*H,g.r*Math.min(W,H));rg.addColorStop(0,'rgba(150,150,255,'+al.toFixed(3)+')');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);});
        wisps.forEach(w=>{w.a+=w.as;const al=.15+.25*Math.abs(Math.sin(w.a));ctx.fillStyle='rgba(180,180,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(w.x*W,w.y*H,w.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runDivineHeavenAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const motes=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.5,vy:-.001-Math.random()*.0015,vx:(Math.random()-.5)*.0005,a:Math.random()*Math.PI*2,as:.01+Math.random()*.015}));
    const beams=Array.from({length:5},(_,i)=>({x:.1+i*.2,w:.04+Math.random()*.06,phase:Math.random()*Math.PI*2}));
    function draw(){
        if(state.theme!=='divineheaven')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.008;
        beams.forEach(b=>{b.phase+=.005;const al=.03+.02*Math.sin(b.phase);const g=ctx.createLinearGradient(b.x*W,0,b.x*W,H);g.addColorStop(0,'rgba(255,255,255,'+(al*2).toFixed(3)+')');g.addColorStop(.5,'rgba(200,220,255,'+al.toFixed(3)+')');g.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=g;ctx.fillRect((b.x-b.w/2)*W,0,b.w*W,H);});
        motes.forEach(m=>{m.x+=m.vx;m.y+=m.vy;if(m.y<-.05)m.y=1.05;if(m.x<0)m.x=1;if(m.x>1)m.x=0;m.a+=m.as;const al=.2+.5*Math.abs(Math.sin(m.a));ctx.fillStyle='rgba(255,255,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runVoidWalkerAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const nodes=Array.from({length:40},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.002,vy:(Math.random()-.5)*.002,r:Math.random()*1.5+.5}));
    function draw(){
        if(state.theme!=='voidwalker')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.01;
        ctx.strokeStyle='rgba(0,255,255,.03)';ctx.lineWidth=1;
        for(let x=0;x<W;x+=60){ctx.beginPath();ctx.moveTo(x+Math.sin(ph+x*.01)*5,0);ctx.lineTo(x+Math.sin(ph+x*.01+3)*5,H);ctx.stroke();}
        for(let y=0;y<H;y+=60){ctx.beginPath();ctx.moveTo(0,y+Math.sin(ph+y*.01)*5);ctx.lineTo(W,y+Math.sin(ph+y*.01+3)*5);ctx.stroke();}
        nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0)n.x=1;if(n.x>1)n.x=0;if(n.y<0)n.y=1;if(n.y>1)n.y=0;ctx.fillStyle='rgba(0,255,255,.4)';ctx.beginPath();ctx.arc(n.x*W,n.y*H,n.r,0,Math.PI*2);ctx.fill();});
        for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){const dx=(nodes[i].x-nodes[j].x)*W,dy=(nodes[i].y-nodes[j].y)*H,d=Math.sqrt(dx*dx+dy*dy);if(d<120){ctx.strokeStyle='rgba(0,200,255,'+(.15*(1-d/120)).toFixed(3)+')';ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(nodes[i].x*W,nodes[i].y*H);ctx.lineTo(nodes[j].x*W,nodes[j].y*H);ctx.stroke();}}
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runAbyssCoreAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const bub=Array.from({length:60},()=>({x:Math.random(),y:1.1+Math.random()*.3,r:Math.random()*2+.5,vy:-.0005-Math.random()*.001,vx:(Math.random()-.5)*.001,a:Math.random()*Math.PI*2,as:.02}));
    function draw(){
        if(state.theme!=='abysscore')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.006;
        const rg=ctx.createRadialGradient(W*.5,H,0,W*.5,H,H*.8);rg.addColorStop(0,'rgba(0,80,150,.06)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        bub.forEach(b=>{b.x+=b.vx+Math.sin(ph+b.a)*.0005;b.y+=b.vy;if(b.y<-.05){b.y=1.1;b.x=Math.random();}b.a+=b.as;
            const al=.15+.25*Math.abs(Math.sin(b.a));ctx.strokeStyle='rgba(100,200,255,'+al.toFixed(2)+')';ctx.lineWidth=.8;ctx.beginPath();ctx.arc(b.x*W,b.y*H,b.r,0,Math.PI*2);ctx.stroke();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runSolarFlareAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const pts=Array.from({length:70},()=>({x:Math.random(),y:1.1+Math.random(),r:Math.random()*2+.5,vy:-.001-Math.random()*.002,vx:(Math.random()-.5)*.002,a:Math.random()}));
    function draw(){
        if(state.theme!=='solarflare')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.012;
        const rg=ctx.createRadialGradient(W*.5,-50,0,W*.5,-50,400);rg.addColorStop(0,'rgba(255,150,0,.1)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.y<-.1){p.y=1.2;p.x=Math.random();}p.a+=.025;
            const hue=Math.floor(20+30*Math.sin(p.a));const al=.4+.4*Math.abs(Math.sin(p.a));ctx.fillStyle='hsla('+hue+',100%,60%,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runNebulaCoreAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const clouds=Array.from({length:6},(_,i)=>({x:Math.random(),y:Math.random(),r:.1+Math.random()*.15,hue:280+i*20,phase:Math.random()*Math.PI*2,speed:.003+Math.random()*.003}));
    const stars=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1+.3,a:Math.random()*Math.PI*2,as:.015+Math.random()*.02}));
    function draw(){
        if(state.theme!=='nebulacore')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.007;
        clouds.forEach(c=>{c.phase+=c.speed;const pulse=.9+.1*Math.sin(c.phase);const rg=ctx.createRadialGradient(c.x*W,c.y*H,0,c.x*W,c.y*H,c.r*Math.min(W,H)*pulse);rg.addColorStop(0,'hsla('+c.hue+',90%,60%,.06)');rg.addColorStop(.5,'hsla('+(c.hue+30)+',80%,50%,.03)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);});
        stars.forEach(s=>{s.a+=s.as;const al=.2+.7*Math.abs(Math.sin(s.a));ctx.fillStyle='rgba(255,150,240,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runShadowKingAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const orbs=Array.from({length:20},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.001,vy:(Math.random()-.5)*.001,r:.05+Math.random()*.1,phase:Math.random()*Math.PI*2}));
    const sparks=Array.from({length:40},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1+.3,a:Math.random()*Math.PI*2,as:.02+Math.random()*.03}));
    function draw(){
        if(state.theme!=='shadowking')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.007;
        orbs.forEach(o=>{o.x+=o.vx;o.y+=o.vy;o.phase+=.01;if(o.x<0)o.x=1;if(o.x>1)o.x=0;if(o.y<0)o.y=1;if(o.y>1)o.y=0;
            const al=.03+.02*Math.sin(o.phase);const rg=ctx.createRadialGradient(o.x*W,o.y*H,0,o.x*W,o.y*H,o.r*Math.min(W,H));rg.addColorStop(0,'rgba(100,60,200,'+al.toFixed(3)+')');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);});
        sparks.forEach(s=>{s.a+=s.as;const al=.15+.3*Math.abs(Math.sin(s.a));ctx.fillStyle='rgba(160,100,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runGoldenEmpireAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const coins=Array.from({length:60},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.8,vx:(Math.random()-.5)*.001,vy:.0005+Math.random()*.001,a:Math.random()*Math.PI*2,as:.01+Math.random()*.02}));
    function draw(){
        if(state.theme!=='goldenempire')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.008;
        const rg=ctx.createRadialGradient(W*.5,0,0,W*.5,0,H*.7);rg.addColorStop(0,'rgba(255,210,0,.05)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        coins.forEach(c=>{c.x+=c.vx;c.y+=c.vy;if(c.y>1.1){c.y=-.1;c.x=Math.random();}c.a+=c.as;const al=.35+.35*Math.abs(Math.sin(c.a));const g=200+Math.floor(Math.random()*55);ctx.fillStyle='rgba(255,'+g+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(c.x*W,c.y*H,c.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runCrystalHeartAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const shards=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.5,vx:(Math.random()-.5)*.001,vy:(Math.random()-.5)*.001,a:Math.random()*Math.PI*2,as:.015+Math.random()*.02}));
    function draw(){
        if(state.theme!=='crystalheart')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.009;
        const rg=ctx.createRadialGradient(W*.5,H*.5,0,W*.5,H*.5,Math.min(W,H)*.4);rg.addColorStop(0,'rgba(255,80,180,.04)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        shards.forEach(s=>{s.x+=s.vx;s.y+=s.vy;s.a+=s.as;if(s.x<0)s.x=1;if(s.x>1)s.x=0;if(s.y<0)s.y=1;if(s.y>1)s.y=0;
            const al=.3+.5*Math.abs(Math.sin(s.a));const g=60+Math.floor(80*Math.abs(Math.sin(s.a)));ctx.fillStyle='rgba(255,'+g+',200,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runCosmicFireAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const sparks=Array.from({length:90},()=>({x:Math.random(),y:1.1+Math.random()*.3,r:Math.random()*2+.5,vx:(Math.random()-.5)*.003,vy:-.001-Math.random()*.003,a:Math.random()}));
    function draw(){
        if(state.theme!=='cosmicfire')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.01;
        sparks.forEach(s=>{s.x+=s.vx+Math.sin(ph+s.a*5)*.001;s.y+=s.vy;s.a+=.025;if(s.y<-.1){s.y=1.1;s.x=Math.random();}
            const al=.4+.4*Math.abs(Math.sin(s.a));const r=220+Math.floor(Math.random()*35);const g=30+Math.floor(40*Math.abs(Math.sin(s.a)));ctx.fillStyle='rgba('+r+','+g+',80,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runEternalDuskAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const motes=Array.from({length:70},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.5,vx:(Math.random()-.5)*.0008,vy:(Math.random()-.5)*.0008,a:Math.random()*Math.PI*2,as:.01+Math.random()*.015}));
    function draw(){
        if(state.theme!=='eternaldusk')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.007;
        const hue=260+20*Math.sin(ph*.3);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,'hsla('+hue+',70%,20%,.04)');g.addColorStop(.5,'hsla('+(hue-20)+',60%,10%,.02)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
        motes.forEach(m=>{m.x+=m.vx;m.y+=m.vy;m.a+=m.as;if(m.x<0)m.x=1;if(m.x>1)m.x=0;if(m.y<0)m.y=1;if(m.y>1)m.y=0;
            const al=.2+.5*Math.abs(Math.sin(m.a));const mhue=Math.floor(260+40*Math.sin(m.a+ph));ctx.fillStyle='hsla('+mhue+',80%,70%,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runEmeraldAbyssAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const motes=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.5,vx:(Math.random()-.5)*.001,vy:(Math.random()-.5)*.001,a:Math.random()*Math.PI*2,as:.012+Math.random()*.02}));
    function draw(){
        if(state.theme!=='emeraldabyss')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.007;
        const rg=ctx.createRadialGradient(W*.5,H*.5,0,W*.5,H*.5,Math.min(W,H)*.5);rg.addColorStop(0,'rgba(0,255,100,.04)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        motes.forEach(m=>{m.x+=m.vx;m.y+=m.vy;m.a+=m.as;if(m.x<0)m.x=1;if(m.x>1)m.x=0;if(m.y<0)m.y=1;if(m.y>1)m.y=0;
            const al=.3+.5*Math.abs(Math.sin(m.a));const g=200+Math.floor(55*Math.abs(Math.sin(m.a)));ctx.fillStyle='rgba(0,'+g+',100,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}
function runRubyInfernoAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth,H=window.innerHeight,ph=0;
    const emb=Array.from({length:100},()=>({x:Math.random(),y:1.1+Math.random()*.2,r:Math.random()*2.5+.5,vx:(Math.random()-.5)*.002,vy:-.001-Math.random()*.0025,a:Math.random()}));
    function draw(){
        if(state.theme!=='rubyinferno')return;W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.01;
        const lg=ctx.createLinearGradient(0,H*.7,0,H);lg.addColorStop(0,'rgba(0,0,0,0)');lg.addColorStop(1,'rgba(180,0,0,.1)');ctx.fillStyle=lg;ctx.fillRect(0,0,W,H);
        emb.forEach(e=>{e.x+=e.vx+Math.sin(ph+e.a*8)*.001;e.y+=e.vy;e.a+=.022;if(e.y<-.1){e.y=1.1;e.x=Math.random();}
            const al=.5+.4*Math.abs(Math.sin(e.a));const g=20+Math.floor(40*Math.abs(Math.sin(e.a)));ctx.fillStyle='rgba(255,'+g+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(e.x*W,e.y*H,e.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}


/* ══ OP LEGENDARY ANIMATIONS v3.4 ══ */

// 1. Celestial Ascension — holy light beams + golden feathers + divine motes
function runCelestialAscensionAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const feathers=Array.from({length:60},()=>({x:Math.random(),y:Math.random()-.5,r:Math.random()*6+3,vx:(Math.random()-.5)*.0008,vy:.0004+Math.random()*.0008,spin:Math.random()*Math.PI*2,sv:(Math.random()-.5)*.02,a:.4+Math.random()*.5}));
    const motes=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2.5+.5,vx:(Math.random()-.5)*.0005,vy:-.0004-Math.random()*.0006,a:Math.random()*Math.PI*2,as:.01+Math.random()*.015}));
    const beams=Array.from({length:7},(_,i)=>({x:.1+i*.13,w:.05+Math.random()*.07,phase:i*1.1,sp:.003+Math.random()*.004}));
    function draw(){
        if(state.theme!=='celestialascension')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.007;
        // Radial divine glow
        const rg=ctx.createRadialGradient(W*.5,0,0,W*.5,0,H*.8);rg.addColorStop(0,'rgba(255,232,122,.08)');rg.addColorStop(.5,'rgba(255,200,50,.03)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        // Light beams
        beams.forEach(b=>{b.phase+=b.sp;const al=.04+.025*Math.sin(b.phase);const grd=ctx.createLinearGradient(b.x*W,0,b.x*W,H);grd.addColorStop(0,'rgba(255,232,122,'+(al*3).toFixed(3)+')');grd.addColorStop(.4,'rgba(255,210,80,'+al.toFixed(3)+')');grd.addColorStop(1,'rgba(255,232,122,0)');ctx.fillStyle=grd;ctx.fillRect((b.x-b.w/2)*W,0,b.w*W,H);});
        // Feathers
        feathers.forEach(f=>{f.x+=f.vx+Math.sin(f.spin)*.0003;f.y+=f.vy;f.spin+=f.sv;if(f.y>1.1){f.y=-.15;f.x=Math.random();}ctx.save();ctx.translate(f.x*W,f.y*H);ctx.rotate(f.spin);ctx.globalAlpha=f.a*.65;ctx.fillStyle='rgba(255,240,180,1)';ctx.beginPath();ctx.ellipse(0,0,f.r*.35,f.r,0,0,Math.PI*2);ctx.fill();ctx.restore();ctx.globalAlpha=1;});
        // Golden motes
        motes.forEach(m=>{m.x+=m.vx;m.y+=m.vy;m.a+=m.as;if(m.y<-.05)m.y=1.05;if(m.x<0)m.x=1;if(m.x>1)m.x=0;const al=.35+.5*Math.abs(Math.sin(m.a));ctx.fillStyle='rgba(255,225,100,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 2. Black Hole Singularity — spiral event horizon + galaxy particles + distortion ring
function runBlackHoleSingularityAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const galPts=Array.from({length:200},()=>{const angle=Math.random()*Math.PI*2;const dist=.15+Math.random()*.45;return{ox:.5+Math.cos(angle)*dist,oy:.5+Math.sin(angle)*dist*.55,a:angle,r:Math.random()*1.5+.3,hue:260+Math.floor(Math.random()*80),speed:.002+Math.random()*.004};});
    const rings=[.08,.13,.19,.26];
    function draw(){
        if(state.theme!=='blackholesingularity')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.012;
        const cx=W*.5, cy=H*.5, rs=Math.min(W,H)*.34;
        // Accretion disk
        for(let i=0;i<3;i++){const rg=ctx.createRadialGradient(cx,cy,rs*(i*.15+.55),cx,cy,rs*(i*.15+.7));rg.addColorStop(0,'hsla('+(280+i*30)+',90%,60%,.0'+(3-i)+')');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);}
        // Absolute black core
        const bk=ctx.createRadialGradient(cx,cy,0,cx,cy,rs*.5);bk.addColorStop(0,'rgba(0,0,0,1)');bk.addColorStop(.9,'rgba(0,0,0,.98)');bk.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=bk;ctx.fillRect(0,0,W,H);
        // Event horizon ring
        rings.forEach((r,i)=>{ctx.save();ctx.strokeStyle='rgba(155,93,229,'+(0.06-i*.01).toFixed(2)+')';ctx.lineWidth=2+i;ctx.shadowBlur=20+i*10;ctx.shadowColor='rgba(155,93,229,.5)';ctx.beginPath();ctx.arc(cx,cy,rs*r+rs*.52,0,Math.PI*2);ctx.stroke();ctx.restore();});
        // Galaxy dust particles orbiting
        galPts.forEach(p=>{p.a+=p.speed;const dist=Math.sqrt((p.ox-.5)**2+(p.oy-.5)**2);const pull=dist>.1?1:0.05+dist*9;p.ox=.5+Math.cos(p.a)*dist*pull;p.oy=.5+Math.sin(p.a)*dist*.55*pull;const al=.25+.4*Math.abs(Math.sin(p.a));ctx.fillStyle='hsla('+p.hue+',80%,75%,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(p.ox*W,p.oy*H,p.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 3. Crimson Apocalypse — falling meteors + ash particles + lava crack glow
function runCrimsonApocalypseAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const meteors=Array.from({length:12},()=>({x:Math.random(),y:-.2-Math.random()*.5,vx:.004+Math.random()*.006,vy:.006+Math.random()*.008,r:Math.random()*4+2,trail:[],active:true}));
    const ash=Array.from({length:100},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.5+.3,vx:(Math.random()-.5)*.001,vy:.0002+Math.random()*.0005,a:Math.random()*Math.PI*2,as:.01}));
    function draw(){
        if(state.theme!=='crimsonapocalypse')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.012;
        // Sky gradient
        const sg=ctx.createLinearGradient(0,0,0,H*.5);sg.addColorStop(0,'rgba(80,0,0,.1)');sg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
        // Lava cracks at bottom
        ctx.save();ctx.strokeStyle='rgba(255,80,0,.06)';ctx.lineWidth=2;
        for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(W*(i*.18+Math.sin(ph+i)*.05),H*.85);ctx.bezierCurveTo(W*(i*.18+.05),H*.9,W*(i*.18+.1+Math.sin(ph*1.2+i)*.05),H*.95,W*(i*.18+.15),H);ctx.stroke();}ctx.restore();
        // Meteors
        meteors.forEach(m=>{m.x+=m.vx;m.y+=m.vy;m.trail.push({x:m.x,y:m.y});if(m.trail.length>18)m.trail.shift();if(m.y>1.2){m.y=-.2-Math.random()*.5;m.x=Math.random();m.trail=[];}
            m.trail.forEach((pt,i)=>{const al=(i/m.trail.length)*.5;ctx.fillStyle='rgba(255,'+(60+i*10)+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(pt.x*W,pt.y*H,m.r*(i/m.trail.length)*.8,0,Math.PI*2);ctx.fill();});
            ctx.fillStyle='rgba(255,180,50,.9)';ctx.beginPath();ctx.arc(m.x*W,m.y*H,m.r,0,Math.PI*2);ctx.fill();});
        // Ash
        ash.forEach(a=>{a.x+=a.vx+Math.sin(ph+a.a)*.0002;a.y+=a.vy;if(a.y>1.05)a.y=0;a.a+=a.as;const al=.15+.2*Math.abs(Math.sin(a.a));ctx.fillStyle='rgba(180,100,60,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(a.x*W,a.y*H,a.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 4. Frozen Eternity — intense blizzard + aurora + ice crystal sparks
function runFrozenEternityAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const snow=Array.from({length:180},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.3,vx:.001+Math.random()*.003,vy:.0003+Math.random()*.001,a:Math.random()*Math.PI*2,as:.01+Math.random()*.015}));
    const crystals=Array.from({length:20},()=>({x:Math.random(),y:Math.random(),r:3+Math.random()*4,a:Math.random()*Math.PI*2,spin:.01+Math.random()*.02,lifetime:Math.random()*Math.PI*2}));
    const auroraBands=[{y:.15,h:190,g:210},{y:.28,h:200,g:220},{y:.4,h:180,g:200}];
    function draw(){
        if(state.theme!=='frozeneternity')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.008;
        // Aurora
        auroraBands.forEach((b,i)=>{const yp=b.y+Math.sin(ph*.6+i*1.5)*.05;const al=.04+.025*Math.sin(ph*.5+i);const grd=ctx.createLinearGradient(0,H*(yp-.1),0,H*(yp+.12));grd.addColorStop(0,'rgba(0,0,0,0)');grd.addColorStop(.5,'rgba(100,'+b.g+',255,'+al.toFixed(3)+')');grd.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=grd;ctx.fillRect(0,H*(yp-.12),W,H*.24);});
        // Blizzard snow
        snow.forEach(s=>{s.x+=s.vx+Math.sin(ph*2+s.a)*.0008;s.y+=s.vy;s.a+=s.as;if(s.x>1.05){s.x=-.05;s.y=Math.random();}if(s.y>1.05)s.y=0;const al=.3+.5*Math.abs(Math.sin(s.a));ctx.fillStyle='rgba(200,240,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        // Crystal sparks
        crystals.forEach(c=>{c.lifetime+=.02;c.spin+=.005;if(c.lifetime>Math.PI*2)c.lifetime=0;const al=.6*Math.abs(Math.sin(c.lifetime));ctx.save();ctx.translate(c.x*W,c.y*H);ctx.rotate(c.spin);ctx.globalAlpha=al;ctx.strokeStyle='rgba(200,240,255,1)';ctx.lineWidth=1;for(let k=0;k<6;k++){ctx.save();ctx.rotate(k*Math.PI/3);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,c.r);ctx.stroke();ctx.restore();}ctx.restore();ctx.globalAlpha=1;});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 5. Neon Cyber Nexus — matrix rain columns + laser grid + hologram flicker
function runNeonCyberNexusAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const COLS=Math.floor(W/20)||40;
    const drops=Array.from({length:COLS},()=>Math.random()*H);
    const lasers=Array.from({length:6},(_,i)=>({y:H*(i*.15+.05),speed:.3+Math.random()*.4,x:0,dir:i%2?1:-1}));
    const holos=Array.from({length:25},()=>({x:Math.random(),y:Math.random(),w:.04+Math.random()*.08,h:.04+Math.random()*.06,ph:Math.random()*Math.PI*2,sp:.02+Math.random()*.03}));
    function draw(){
        if(state.theme!=='neoncybernexus')return; W=window.innerWidth; H=window.innerHeight;
        ctx.fillStyle='rgba(0,3,8,.18)';ctx.fillRect(0,0,W,H); ph+=.015;
        // Matrix rain
        ctx.fillStyle='rgba(0,240,255,.55)';ctx.font='12px monospace';
        drops.forEach((y,i)=>{const ch=String.fromCharCode(0x30A0+Math.floor(Math.random()*96));ctx.fillText(ch,i*20,y);drops[i]=(y>H&&Math.random()>.97)?0:y+14;});
        // Grid lines
        ctx.strokeStyle='rgba(0,240,255,.04)';ctx.lineWidth=1;
        for(let x=0;x<W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
        for(let y=0;y<H;y+=60){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
        // Laser sweeps
        lasers.forEach(l=>{l.x+=l.speed*l.dir;if(l.x>W)l.x=0;if(l.x<0)l.x=W;ctx.save();ctx.strokeStyle='rgba(255,0,204,.35)';ctx.lineWidth=1.5;ctx.shadowBlur=12;ctx.shadowColor='rgba(255,0,204,.5)';ctx.beginPath();ctx.moveTo(l.x,l.y);ctx.lineTo(l.x+(l.dir*80),l.y+30);ctx.stroke();ctx.restore();});
        // Holograms
        holos.forEach(h=>{h.ph+=h.sp;const al=.04+.03*Math.sin(h.ph);ctx.strokeStyle='rgba(0,240,255,'+al.toFixed(3)+')';ctx.lineWidth=.8;ctx.strokeRect(h.x*W,h.y*H,h.w*W,h.h*H);});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 6. Phantom Nightmare — ghost wisps + haunted moon + shadow tendrils
function runPhantomNightmareAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const ghosts=Array.from({length:12},()=>({x:Math.random(),y:.2+Math.random()*.6,vx:(Math.random()-.5)*.0006,vy:(Math.random()-.5)*.0004,r:.06+Math.random()*.1,phase:Math.random()*Math.PI*2,sp:.008+Math.random()*.012}));
    const wisps=Array.from({length:50},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.5,a:Math.random()*Math.PI*2,as:.012+Math.random()*.018,vx:(Math.random()-.5)*.0005,vy:(Math.random()-.5)*.0004}));
    const tendrils=Array.from({length:6},(_,i)=>({x:.1+i*.16,ph:i*1.1,sp:.008}));
    function draw(){
        if(state.theme!=='phantomnightmare')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.008;
        // Moon glow
        const moonR=ctx.createRadialGradient(W*.78,H*.12,0,W*.78,H*.12,160);moonR.addColorStop(0,'rgba(155,77,202,.1)');moonR.addColorStop(.5,'rgba(100,40,160,.04)');moonR.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=moonR;ctx.fillRect(0,0,W,H);
        // Tendrils from bottom
        tendrils.forEach(t=>{t.ph+=t.sp;ctx.save();ctx.strokeStyle='rgba(155,77,202,.06)';ctx.lineWidth=2+2*Math.sin(t.ph);ctx.beginPath();ctx.moveTo(t.x*W,H);let tx=t.x*W;for(let y=H;y>H*.3;y-=30){tx+=Math.sin(t.ph+y*.02)*8;ctx.lineTo(tx,y);}ctx.stroke();ctx.restore();});
        // Ghost blobs
        ghosts.forEach(g=>{g.x+=g.vx;g.y+=g.vy;g.phase+=g.sp;if(g.x<0)g.x=1;if(g.x>1)g.x=0;if(g.y<0.1)g.vy=Math.abs(g.vy);if(g.y>.9)g.vy=-Math.abs(g.vy);const al=.025+.015*Math.sin(g.phase);const rg=ctx.createRadialGradient(g.x*W,g.y*H,0,g.x*W,g.y*H,g.r*Math.min(W,H));rg.addColorStop(0,'rgba(155,77,202,'+al.toFixed(3)+')');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);});
        // Wisps
        wisps.forEach(w=>{w.x+=w.vx;w.y+=w.vy;w.a+=w.as;if(w.x<0)w.x=1;if(w.x>1)w.x=0;if(w.y<0)w.y=1;if(w.y>1)w.y=0;const al=.12+.22*Math.abs(Math.sin(w.a));ctx.fillStyle='rgba(180,100,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(w.x*W,w.y*H,w.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 7. Dragon Emperor — golden fire dragons + runic magic circles + embers
function runDragonEmperorAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const embers=Array.from({length:120},()=>({x:Math.random(),y:1.1+Math.random()*.3,r:Math.random()*2.5+.5,vx:(Math.random()-.5)*.003,vy:-.001-Math.random()*.003,a:Math.random()}));
    const runes=[{x:.25,y:.35,r:.07},{x:.5,y:.2,r:.09},{x:.75,y:.35,r:.07}];
    function draw(){
        if(state.theme!=='dragonemperor')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.01;
        // Dragon fire glow
        const rg=ctx.createRadialGradient(W*.5,H*.4,0,W*.5,H*.4,H*.55);rg.addColorStop(0,'rgba(255,140,0,.06)');rg.addColorStop(.5,'rgba(200,60,0,.03)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);
        // Magic rune circles
        runes.forEach((rn,i)=>{const al=.04+.025*Math.sin(ph*1.2+i);ctx.save();ctx.translate(rn.x*W,rn.y*H);ctx.rotate(ph*(i%2?1:-1)*.4);ctx.strokeStyle='rgba(255,183,0,'+al.toFixed(3)+')';ctx.lineWidth=1.5;ctx.shadowBlur=20;ctx.shadowColor='rgba(255,183,0,.4)';for(let k=0;k<3;k++){ctx.beginPath();ctx.arc(0,0,rn.r*(1+k*.4)*Math.min(W,H),0,Math.PI*2);ctx.stroke();}ctx.restore();});
        // Embers rising
        embers.forEach(e=>{e.x+=e.vx+Math.sin(ph+e.a*8)*.001;e.y+=e.vy;e.a+=.022;if(e.y<-.1){e.y=1.1;e.x=Math.random();}const al=.5+.4*Math.abs(Math.sin(e.a));const g=100+Math.floor(80*Math.abs(Math.sin(e.a)));ctx.fillStyle='rgba(255,'+g+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(e.x*W,e.y*H,e.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 8. Universe Creator — nebula forming + star birth + cosmic explosions
function runUniverseCreatorAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const stars=Array.from({length:160},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.2,a:Math.random()*Math.PI*2,as:.005+Math.random()*.02,born:Math.random()*Math.PI*2}));
    const nebulas=Array.from({length:8},(_,i)=>({x:Math.random(),y:Math.random(),r:.08+Math.random()*.18,hue:180+i*25,phase:Math.random()*Math.PI*2,sp:.002+Math.random()*.003}));
    let explosions=[];
    function spawnExplosion(){explosions.push({x:Math.random(),y:Math.random(),r:0,maxR:.12,ph:0,hue:180+Math.floor(Math.random()*120)});}
    setInterval(()=>{if(state.theme==='universecreator'&&explosions.length<4)spawnExplosion();},2200);
    function draw(){
        if(state.theme!=='universecreator')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.007;
        // Nebulas
        nebulas.forEach(n=>{n.phase+=n.sp;const pulse=.9+.1*Math.sin(n.phase);const rg=ctx.createRadialGradient(n.x*W,n.y*H,0,n.x*W,n.y*H,n.r*Math.min(W,H)*pulse);rg.addColorStop(0,'hsla('+n.hue+',80%,65%,.06)');rg.addColorStop(.5,'hsla('+(n.hue+40)+',70%,50%,.03)');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);});
        // Stars
        stars.forEach(s=>{s.a+=s.as;s.born+=.008;const al=.2+.7*Math.abs(Math.sin(s.a))*(0.5+0.5*Math.sin(s.born));ctx.fillStyle='rgba(180,240,255,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        // Cosmic explosions
        explosions=explosions.filter(ex=>{ex.ph+=.025;ex.r=ex.maxR*Math.sin(ex.ph);if(ex.ph>Math.PI)return false;const al=(1-ex.ph/Math.PI)*.05;const rg=ctx.createRadialGradient(ex.x*W,ex.y*H,0,ex.x*W,ex.y*H,ex.r*Math.min(W,H));rg.addColorStop(0,'hsla('+ex.hue+',90%,80%,'+al.toFixed(3)+')');rg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=rg;ctx.fillRect(0,0,W,H);return true;});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 9. Divine Ocean — bioluminescent particles + wave ripples + whale motes
function runDivineOceanAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const jelly=Array.from({length:30},()=>({x:Math.random(),y:.3+Math.random()*.6,r:Math.random()*4+2,vx:(Math.random()-.5)*.0004,vy:(Math.random()-.5)*.0003,a:Math.random()*Math.PI*2,as:.008+Math.random()*.012,pulse:Math.random()*Math.PI*2}));
    const bio=Array.from({length:100},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.5+.3,a:Math.random()*Math.PI*2,as:.01+Math.random()*.015,vx:(Math.random()-.5)*.0003,vy:(Math.random()-.5)*.0002}));
    function draw(){
        if(state.theme!=='divineocean')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.007;
        // Water layer gradients
        for(let i=0;i<4;i++){const wg=ctx.createLinearGradient(0,H*(i*.12+.4),0,H*(i*.12+.55));wg.addColorStop(0,'rgba(0,207,207,'+(0.015-i*.003).toFixed(3)+')');wg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=wg;const wave=Math.sin(ph*.8+i*1.2)*W*.03;ctx.fillRect(-wave,H*(i*.12+.4),W+Math.abs(wave)*2,H*.15);}
        // Jellyfish
        jelly.forEach(j=>{j.x+=j.vx;j.y+=j.vy;j.a+=j.as;j.pulse+=.025;if(j.x<0)j.x=1;if(j.x>1)j.x=0;if(j.y<.2)j.vy=Math.abs(j.vy);if(j.y>.9)j.vy=-Math.abs(j.vy);const ps=.8+.2*Math.sin(j.pulse);const al=.18+.2*Math.abs(Math.sin(j.a));ctx.save();ctx.globalAlpha=al;ctx.fillStyle='rgba(0,207,207,1)';ctx.beginPath();ctx.ellipse(j.x*W,j.y*H,j.r*ps,j.r*.6*ps,0,Math.PI,Math.PI*2);ctx.fill();ctx.restore();ctx.globalAlpha=1;});
        // Bioluminescent dots
        bio.forEach(b=>{b.x+=b.vx;b.y+=b.vy;b.a+=b.as;if(b.x<0)b.x=1;if(b.x>1)b.x=0;if(b.y<0)b.y=1;if(b.y>1)b.y=0;const al=.2+.5*Math.abs(Math.sin(b.a));const g=200+Math.floor(55*Math.abs(Math.sin(b.a)));ctx.fillStyle='rgba(0,'+g+',207,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(b.x*W,b.y*H,b.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 10. Infernal King — erupting volcanoes + lava rivers + demonic embers
function runInfernalKingAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const lava=Array.from({length:150},()=>({x:Math.random(),y:1.1+Math.random()*.4,r:Math.random()*3+.5,vx:(Math.random()-.5)*.004,vy:-.0015-Math.random()*.004,a:Math.random()}));
    const rivers=[{x:.2,w:.15},{x:.55,w:.12},{x:.8,w:.1}];
    function draw(){
        if(state.theme!=='infernalking')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.012;
        // Lava river glow at bottom
        rivers.forEach((rv,i)=>{const rg=ctx.createLinearGradient(rv.x*W,H*.7,rv.x*W,H);rg.addColorStop(0,'rgba(0,0,0,0)');rg.addColorStop(.3,'rgba(255,80,0,.12)');rg.addColorStop(1,'rgba(255,40,0,.2)');ctx.fillStyle=rg;ctx.fillRect((rv.x-rv.w/2)*W+Math.sin(ph+i)*10,H*.7,rv.w*W,H*.3);});
        // Hell glow from below
        const hg=ctx.createRadialGradient(W*.5,H*1.3,0,W*.5,H*1.3,H*.8);hg.addColorStop(0,'rgba(255,50,0,.12)');hg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=hg;ctx.fillRect(0,0,W,H);
        // Lava particles
        lava.forEach(l=>{l.x+=l.vx+Math.sin(ph+l.a*6)*.0008;l.y+=l.vy;l.a+=.025;if(l.y<-.15){l.y=1.15;l.x=Math.random();}const al=.55+.4*Math.abs(Math.sin(l.a));const r=220+Math.floor(35*Math.abs(Math.sin(l.a)));const g=20+Math.floor(60*Math.abs(Math.sin(l.a)));ctx.fillStyle='rgba('+r+','+g+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(l.x*W,l.y*H,l.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 11. Sakura Heaven — thousands of petals + shrine bokeh + soft godray
function runSakuraHeavenAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const petals=Array.from({length:120},()=>({x:Math.random(),y:Math.random()-.5,r:Math.random()*6+2,vx:(Math.random()-.5)*.001,vy:.0005+Math.random()*.001,spin:Math.random()*Math.PI*2,sv:(Math.random()-.5)*.04,a:.4+Math.random()*.5,t:Math.floor(Math.random()*3)}));
    const bokeh=Array.from({length:30},()=>({x:Math.random(),y:Math.random(),r:Math.random()*20+8,a:Math.random()*Math.PI*2,as:.004+Math.random()*.008}));
    const godrays=Array.from({length:5},(_,i)=>({x:.15+i*.17,ph:i*.8,sp:.003}));
    function draw(){
        if(state.theme!=='sakuraheaven')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.008;
        // Soft top glow
        const tg=ctx.createRadialGradient(W*.5,-50,0,W*.5,-50,H*.6);tg.addColorStop(0,'rgba(255,170,212,.06)');tg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=tg;ctx.fillRect(0,0,W,H);
        // Godrays
        godrays.forEach(gr=>{gr.ph+=gr.sp;const al=.025+.015*Math.sin(gr.ph);const grd=ctx.createLinearGradient(gr.x*W,0,gr.x*W,H);grd.addColorStop(0,'rgba(255,170,212,'+(al*2.5).toFixed(3)+')');grd.addColorStop(.5,'rgba(255,140,195,'+al.toFixed(3)+')');grd.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=grd;ctx.fillRect((gr.x-.04)*W,0,.08*W,H);});
        // Bokeh orbs
        bokeh.forEach(b=>{b.a+=b.as;const al=.03+.025*Math.abs(Math.sin(b.a));ctx.fillStyle='rgba(255,160,210,'+al.toFixed(3)+')';ctx.beginPath();ctx.arc(b.x*W,b.y*H,b.r,0,Math.PI*2);ctx.fill();});
        // Petals
        const colors=[['255,170,212'],['255,200,220'],['255,140,190']];
        petals.forEach(p=>{p.x+=p.vx+Math.sin(p.spin)*.0004;p.y+=p.vy;p.spin+=p.sv;if(p.y>1.1){p.y=-.15;p.x=Math.random();}ctx.save();ctx.translate(p.x*W,p.y*H);ctx.rotate(p.spin);ctx.globalAlpha=p.a*.7;ctx.fillStyle='rgba('+colors[p.t]+',1)';ctx.beginPath();ctx.ellipse(0,0,p.r,p.r*.55,0,0,Math.PI*2);ctx.fill();ctx.restore();ctx.globalAlpha=1;});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}

// 12. Infinity Dimension — portal vortex + floating islands energy + dimension rifts
function runInfinityDimensionAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const rifts=Array.from({length:5},(_,i)=>({x:.1+i*.2,y:.2+Math.random()*.6,w:.04+Math.random()*.08,h:.08+Math.random()*.12,ph:Math.random()*Math.PI*2,sp:.015+Math.random()*.02}));
    const waves=Array.from({length:8},(_,i)=>({r:.04+i*.05,ph:i*Math.PI*.25,sp:.018-i*.001}));
    const energy=Array.from({length:80},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2+.5,a:Math.random()*Math.PI*2,as:.015+Math.random()*.02,hue:Math.floor(Math.random()*360)}));
    function draw(){
        if(state.theme!=='infinitydimension')return; W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.012;
        const cx=W*.5, cy=H*.5;
        // Portal concentric rings
        waves.forEach(w=>{w.ph+=w.sp;const al=.04+.025*Math.sin(w.ph);const r=w.r*Math.min(W,H);ctx.save();ctx.strokeStyle='rgba(0,255,153,'+al.toFixed(3)+')';ctx.lineWidth=1.5;ctx.shadowBlur=15;ctx.shadowColor='rgba(0,255,153,.4)';ctx.beginPath();ctx.ellipse(cx,cy,r,r*.55,ph*.1,0,Math.PI*2);ctx.stroke();ctx.restore();});
        // Dimension rifts
        rifts.forEach(rft=>{rft.ph+=rft.sp;const al=.06+.04*Math.sin(rft.ph);ctx.save();ctx.strokeStyle='rgba(0,255,153,'+al.toFixed(3)+')';ctx.lineWidth=1;ctx.shadowBlur=10;ctx.shadowColor='rgba(0,255,153,.3)';ctx.beginPath();ctx.moveTo(rft.x*W,rft.y*H);ctx.bezierCurveTo(rft.x*W+rft.w*W*.5,rft.y*H-rft.h*H*.5,rft.x*W+rft.w*W*.5,rft.y*H+rft.h*H*.5,rft.x*W,rft.y*H);ctx.stroke();ctx.restore();});
        // Energy particles
        energy.forEach(e=>{e.a+=e.as;e.hue=(e.hue+1)%360;const al=.25+.5*Math.abs(Math.sin(e.a));ctx.fillStyle='hsla('+e.hue+',100%,65%,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(e.x*W,e.y*H,e.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    } draw();
}


// ══ SSS+ Arabian Legacy — Golden desert stars + Islamic geometry + shooting stars + lanterns ══
function runArabianLegacyAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const stars=Array.from({length:180},()=>({x:Math.random(),y:Math.random()*.65,r:Math.random()*1.6+.2,a:Math.random()*Math.PI*2,as:.005+Math.random()*.018,twinkle:Math.random()*Math.PI*2}));
    let shooters=[];
    function spawnShooter(){shooters.push({x:Math.random()*.7+.05,y:Math.random()*.25,vx:.006+Math.random()*.009,vy:.003+Math.random()*.005,life:1,len:70+Math.random()*60});}
    setInterval(()=>{if(state.theme==='arabianlegacy'&&shooters.length<3)spawnShooter();},2800);
    const geom=Array.from({length:20},(_,i)=>({x:Math.random(),y:.08+Math.random()*.55,r:Math.random()*7+4,sides:i%2===0?6:8,a:Math.random()*Math.PI*2,as:.003+Math.random()*.008,pulse:Math.random()*Math.PI*2,emerald:i%4===0}));
    const sand=Array.from({length:90},()=>({x:Math.random(),y:.38+Math.random()*.62,r:Math.random()*2.5+.4,vx:.0008+Math.random()*.0018,vy:(Math.random()-.5)*.0003,a:Math.random()*Math.PI*2,as:.008+Math.random()*.014}));
    const lanterns=Array.from({length:7},()=>({x:Math.random(),y:.2+Math.random()*.5,r:Math.random()*3+1.5,vy:-.00035-Math.random()*.0004,vx:(Math.random()-.5)*.0003,a:Math.random()*Math.PI*2,as:.007+Math.random()*.01,phase:Math.random()*Math.PI*2}));
    function drawPoly(cx,cy,r,sides,angle){ctx.beginPath();for(let i=0;i<sides;i++){const a=angle+i*(Math.PI*2/sides);i===0?ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a)):ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));}ctx.closePath();}
    function draw(){
        if(state.theme!=='arabianlegacy')return;
        W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.007;
        // Horizon glow
        const hg=ctx.createLinearGradient(0,H*.48,0,H);hg.addColorStop(0,'rgba(0,0,0,0)');hg.addColorStop(.5,'rgba(50,25,0,.05)');hg.addColorStop(1,'rgba(90,40,0,.1)');ctx.fillStyle=hg;ctx.fillRect(0,0,W,H);
        const sg=ctx.createRadialGradient(W*.5,H*.5,0,W*.5,H*.5,W*.65);sg.addColorStop(0,'rgba(212,160,23,.04)');sg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=sg;ctx.fillRect(0,0,W,H);
        // Stars
        stars.forEach(s=>{s.a+=s.as;s.twinkle+=.025;const al=.15+.72*Math.abs(Math.sin(s.a))*(0.5+0.5*Math.sin(s.twinkle));ctx.fillStyle=(s.r>1.2)?'rgba(255,233,160,'+al.toFixed(2)+')':'rgba(255,248,220,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        // Shooting stars
        shooters=shooters.filter(sh=>{sh.x+=sh.vx;sh.y+=sh.vy;sh.life-=.02;if(sh.life<=0)return false;const al=sh.life*.8;const grad=ctx.createLinearGradient(sh.x*W,sh.y*H,(sh.x-sh.vx*14)*W,(sh.y-sh.vy*14)*H);grad.addColorStop(0,'rgba(255,233,160,'+al.toFixed(2)+')');grad.addColorStop(1,'rgba(212,160,23,0)');ctx.beginPath();ctx.moveTo(sh.x*W,sh.y*H);ctx.lineTo((sh.x-sh.vx*14)*W,(sh.y-sh.vy*14)*H);ctx.strokeStyle=grad;ctx.lineWidth=1.5+sh.life;ctx.stroke();return true;});
        // Islamic geometric patterns
        geom.forEach(g=>{g.a+=g.as;g.pulse+=.016;const pulse=.85+.15*Math.sin(g.pulse);const al=.045+.035*Math.abs(Math.sin(g.a));const minDim=Math.min(W,H);ctx.save();ctx.translate(g.x*W,g.y*H);ctx.rotate(g.a*.25);ctx.shadowBlur=18;ctx.shadowColor=g.emerald?'rgba(16,185,129,.5)':'rgba(212,160,23,.5)';ctx.strokeStyle=g.emerald?'rgba(16,185,129,'+al.toFixed(3)+')':'rgba(212,160,23,'+al.toFixed(3)+')';ctx.lineWidth=1;drawPoly(0,0,g.r*pulse*minDim*.022,g.sides,0);ctx.stroke();drawPoly(0,0,g.r*pulse*minDim*.013,g.sides,Math.PI/g.sides);ctx.stroke();ctx.restore();ctx.shadowBlur=0;});
        // Golden sand particles
        sand.forEach(s=>{s.x+=s.vx;s.y+=s.vy;s.a+=s.as;if(s.x>1.05){s.x=-.05;s.y=.38+Math.random()*.62;}const al=.12+.32*Math.abs(Math.sin(s.a));const v=160+Math.floor(75*Math.abs(Math.sin(s.a)));ctx.fillStyle='rgba('+v+','+Math.floor(v*.58)+',0,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        // Floating lanterns
        lanterns.forEach(l=>{l.x+=l.vx;l.y+=l.vy;l.a+=l.as;l.phase+=.018;if(l.y<-.1){l.y=1.1;l.x=Math.random();}if(l.x<0)l.x=1;if(l.x>1)l.x=0;const float=Math.sin(l.phase)*.006;const al=.42+.32*Math.abs(Math.sin(l.a));const lx=l.x*W,ly=(l.y+float)*H;const glow=ctx.createRadialGradient(lx,ly,0,lx,ly,l.r*9);glow.addColorStop(0,'rgba(255,200,70,'+al.toFixed(2)+')');glow.addColorStop(.4,'rgba(212,160,23,'+(al*.3).toFixed(2)+')');glow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(lx,ly,l.r*9,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,215,80,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(lx,ly,l.r,0,Math.PI*2);ctx.fill();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}


// ══ SSS+ Moroccan Legacy — Royal Moroccan world: zellige, crescent, Atlas, sahara, lanterns, royal particles ══
function runMoroccanLegacyAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;
    const stars=Array.from({length:200},()=>({x:Math.random(),y:Math.random()*.62,r:Math.random()*1.8+.2,a:Math.random()*Math.PI*2,as:.004+Math.random()*.02,twinkle:Math.random()*Math.PI*2,gold:Math.random()>.55}));
    // Zellige 8-pointed star geometric patterns
    const zelliges=Array.from({length:26},(_,i)=>({x:Math.random(),y:.04+Math.random()*.72,r:Math.random()*8+3,sides:i%3===0?8:i%3===1?6:12,a:Math.random()*Math.PI*2,as:.002+Math.random()*.006,pulse:Math.random()*Math.PI*2,colorIdx:i%4}));
    // Golden royal dust
    const dust=Array.from({length:130},()=>({x:Math.random(),y:Math.random(),r:Math.random()*2.2+.3,vx:(Math.random()-.5)*.001,vy:-.00015-Math.random()*.0008,a:Math.random()*Math.PI*2,as:.006+Math.random()*.016,life:Math.random()}));
    // Moroccan lanterns
    const lanterns=Array.from({length:10},()=>({x:Math.random(),y:.15+Math.random()*.65,r:Math.random()*4+1.8,vy:-.00028-Math.random()*.0003,vx:(Math.random()-.5)*.0002,phase:Math.random()*Math.PI*2,ps:.01+Math.random()*.01,col:Math.random()>.5?0:1}));
    // Flying birds
    const birds=Array.from({length:7},()=>({x:Math.random(),y:.08+Math.random()*.3,vx:.0007+Math.random()*.0013,wing:Math.random()*Math.PI*2,ws:.07+Math.random()*.06,sz:6+Math.random()*6}));
    // Atlas mountain path
    let mPath=[];
    function buildMountains(){mPath=[];mPath.push({x:0,y:H*.84});const peaks=[.07,.16,.26,.35,.44,.54,.63,.73,.82,.93,1.05];peaks.forEach((px,i)=>{mPath.push({x:px*W,y:H*(.45+Math.random()*.2-(i%3===1?.15:i%3===2?.08:0))});});mPath.push({x:W*1.06,y:H*.84});mPath.push({x:W*1.06,y:H+2});mPath.push({x:0,y:H+2});}
    buildMountains();
    // Shooting stars
    let shooters=[];
    function spawnShooter(){shooters.push({x:Math.random()*.75,y:Math.random()*.22,vx:.005+Math.random()*.008,vy:.002+Math.random()*.004,life:1});}
    setInterval(()=>{if(state.theme==='moroccanlegacy'&&shooters.length<3)spawnShooter();},3100);
    // Draw zellige 8-pointed star
    function drawStar8(cx,cy,r1,r2,ang){ctx.beginPath();for(let i=0;i<16;i++){const a=ang+i*Math.PI/8;const r=i%2===0?r1:r2;i===0?ctx.moveTo(cx+r*Math.cos(a),cy+r*Math.sin(a)):ctx.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a));}ctx.closePath();}
    function draw(){
        if(state.theme!=='moroccanlegacy')return;
        W=window.innerWidth;H=window.innerHeight;ctx.clearRect(0,0,W,H);ph+=.006;
        // Deep Moroccan night sky
        const sky=ctx.createLinearGradient(0,0,0,H*.72);sky.addColorStop(0,'rgba(1,0,6,1)');sky.addColorStop(.35,'rgba(6,0,14,1)');sky.addColorStop(.65,'rgba(18,0,6,.92)');sky.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=sky;ctx.fillRect(0,0,W,H*.76);
        // Atmospheric crimson-gold glow
        const ag=ctx.createRadialGradient(W*.5,H*.42,0,W*.5,H*.42,W*.58);ag.addColorStop(0,'rgba(193,18,31,.06)');ag.addColorStop(.45,'rgba(212,160,23,.02)');ag.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=ag;ctx.fillRect(0,0,W,H);
        // Shooting stars
        shooters=shooters.filter(sh=>{sh.x+=sh.vx;sh.y+=sh.vy;sh.life-=.018;if(sh.life<=0)return false;const al=sh.life*.85;const grad=ctx.createLinearGradient(sh.x*W,sh.y*H,(sh.x-sh.vx*15)*W,(sh.y-sh.vy*15)*H);grad.addColorStop(0,'rgba(255,210,100,'+al.toFixed(2)+')');grad.addColorStop(1,'rgba(212,160,23,0)');ctx.beginPath();ctx.moveTo(sh.x*W,sh.y*H);ctx.lineTo((sh.x-sh.vx*15)*W,(sh.y-sh.vy*15)*H);ctx.strokeStyle=grad;ctx.lineWidth=1.6+sh.life;ctx.stroke();return true;});
        // Stars
        stars.forEach(s=>{s.a+=s.as;s.twinkle+=.022;const al=.1+.72*Math.abs(Math.sin(s.a))*(0.5+0.5*Math.sin(s.twinkle));ctx.fillStyle=s.gold?'rgba(255,220,100,'+al.toFixed(2)+')':'rgba(255,180,190,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2);ctx.fill();});
        // Crescent moon (Moroccan style)
        const moonX=W*.8,moonY=H*.13,moonR=Math.min(W,H)*.04;ctx.save();ctx.shadowBlur=45;ctx.shadowColor='rgba(255,215,100,.65)';ctx.fillStyle='rgba(255,215,100,.92)';ctx.beginPath();ctx.arc(moonX,moonY,moonR,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(1,0,6,.97)';ctx.beginPath();ctx.arc(moonX+moonR*.42,moonY-moonR*.06,moonR*.86,0,Math.PI*2);ctx.fill();ctx.restore();ctx.shadowBlur=0;
        // Small star next to crescent
        const sx=moonX+moonR*.95,sy=moonY-moonR*.7;ctx.fillStyle='rgba(255,215,100,.9)';ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2;const r=i%2===0?moonR*.2:moonR*.1;i===0?ctx.moveTo(sx+r*Math.cos(a),sy+r*Math.sin(a)):ctx.lineTo(sx+r*Math.cos(a),sy+r*Math.sin(a));}ctx.closePath();ctx.fill();
        // Atlas mountains
        const mg=ctx.createLinearGradient(0,H*.42,0,H*.84);mg.addColorStop(0,'rgba(50,0,10,.72)');mg.addColorStop(.4,'rgba(30,0,6,.82)');mg.addColorStop(1,'rgba(6,0,2,.95)');ctx.fillStyle=mg;ctx.beginPath();mPath.forEach((p,i)=>i===0?ctx.moveTo(p.x,p.y):ctx.lineTo(p.x,p.y));ctx.closePath();ctx.fill();
        // Snow/mist on peaks
        mPath.slice(1,mPath.length-3).forEach((p,i)=>{if(p.y<H*.56&&i%2===0){ctx.fillStyle='rgba(255,200,200,.09)';ctx.beginPath();ctx.arc(p.x,p.y,18,0,Math.PI*2);ctx.fill();}});
        // Zellige geometric ornaments
        zelliges.forEach(g=>{g.a+=g.as;g.pulse+=.014;const pulse=.88+.12*Math.sin(g.pulse);const al=.038+.028*Math.abs(Math.sin(g.a));const minD=Math.min(W,H);const colors=['rgba(193,18,31,','rgba(0,98,51,','rgba(212,160,23,','rgba(255,107,122,'];ctx.save();ctx.translate(g.x*W,g.y*H);ctx.rotate(g.a*.18);ctx.shadowBlur=15;ctx.shadowColor=colors[g.colorIdx%4]+'0.45)';ctx.strokeStyle=colors[g.colorIdx%4]+al.toFixed(3)+')';ctx.lineWidth=1.2;drawStar8(0,0,g.r*pulse*minD*.024,g.r*pulse*minD*.012,0);ctx.stroke();ctx.strokeStyle='rgba(212,160,23,'+al.toFixed(3)+')';ctx.lineWidth=.7;drawStar8(0,0,g.r*pulse*minD*.016,g.r*pulse*minD*.008,Math.PI/8);ctx.stroke();ctx.restore();ctx.shadowBlur=0;});
        // Golden royal dust
        dust.forEach(d=>{d.x+=d.vx;d.y+=d.vy;d.a+=d.as;d.life+=.003;if(d.life>1||d.y<-.05){d.y=.92+Math.random()*.1;d.x=Math.random();d.life=0;}const al=.06+.32*Math.sin(d.life*Math.PI);ctx.fillStyle='rgba(212,160,23,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(d.x*W,d.y*H,d.r*(0.5+0.5*Math.abs(Math.sin(d.a))),0,Math.PI*2);ctx.fill();});
        // Moroccan lanterns
        lanterns.forEach(l=>{l.x+=l.vx;l.y+=l.vy;l.phase+=l.ps;if(l.y<-.12){l.y=1.12;l.x=Math.random();}if(l.x<-.05)l.x=1.05;if(l.x>1.05)l.x=-.05;const fl=Math.sin(l.phase)*.006;const al=.38+.3*Math.abs(Math.sin(l.phase*.65));const lx=l.x*W,ly=(l.y+fl)*H;const colList=['rgba(193,18,31,','rgba(0,98,51,'];const col=colList[l.col%2];const glow=ctx.createRadialGradient(lx,ly,0,lx,ly,l.r*11);glow.addColorStop(0,'rgba(255,200,70,'+al.toFixed(2)+')');glow.addColorStop(.3,col+(al*.22).toFixed(2)+')');glow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(lx,ly,l.r*11,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,210,70,'+al.toFixed(2)+')';ctx.beginPath();ctx.arc(lx,ly,l.r,0,Math.PI*2);ctx.fill();ctx.strokeStyle='rgba(255,200,70,'+(al*.75).toFixed(2)+')';ctx.lineWidth=.9;ctx.beginPath();ctx.moveTo(lx-l.r*1.6,ly-l.r*.6);ctx.lineTo(lx+l.r*1.6,ly-l.r*.6);ctx.lineTo(lx+l.r*1.25,ly+l.r*1.6);ctx.lineTo(lx-l.r*1.25,ly+l.r*1.6);ctx.closePath();ctx.stroke();// Diamond lattice
        ctx.strokeStyle='rgba(255,180,50,'+(al*.35).toFixed(2)+')';ctx.lineWidth=.5;for(let ix=-1;ix<=1;ix++){for(let iy=0;iy<=2;iy++){ctx.beginPath();ctx.moveTo(lx+ix*l.r*.7,ly+iy*l.r*.6-l.r*.3);ctx.lineTo(lx+(ix+.5)*l.r*.7,ly+(iy+.5)*l.r*.6-l.r*.3);ctx.stroke();}}});
        // Flying birds
        birds.forEach(b=>{b.x+=b.vx;b.wing+=b.ws;if(b.x>1.1)b.x=-.1;const bx=b.x*W,by=b.y*H,wf=Math.sin(b.wing)*b.sz;ctx.fillStyle='rgba(15,0,4,.5)';ctx.beginPath();ctx.moveTo(bx,by);ctx.quadraticCurveTo(bx-b.sz*1.8,by+wf,bx-b.sz*3.2,by+wf*.4);ctx.quadraticCurveTo(bx-b.sz*1.8,by-wf*.6,bx,by);ctx.quadraticCurveTo(bx+b.sz*1.8,by+wf,bx+b.sz*3.2,by+wf*.4);ctx.quadraticCurveTo(bx+b.sz*1.8,by-wf*.6,bx,by);ctx.fill();});
        // Sahara sand horizon
        const dg=ctx.createLinearGradient(0,H*.8,0,H);dg.addColorStop(0,'rgba(0,0,0,0)');dg.addColorStop(.5,'rgba(70,12,2,.07)');dg.addColorStop(1,'rgba(212,160,23,.05)');ctx.fillStyle=dg;ctx.fillRect(0,H*.8,W,H*.2);
        // Palm tree silhouettes
        [[.1,.83],[.9,.85],[.32,.87],[.68,.84]].forEach(([px,py])=>{const bx=px*W,by=py*H;ctx.strokeStyle='rgba(8,2,0,.65)';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(bx,by);ctx.quadraticCurveTo(bx+10,by-42,bx+4,by-86);ctx.stroke();for(let i=0;i<6;i++){const ang=-Math.PI/2+((i-2.5)*Math.PI/7)+(Math.sin(ph*1.2+i)*.05);ctx.beginPath();ctx.moveTo(bx+4,by-84);ctx.quadraticCurveTo(bx+4+Math.cos(ang)*34,by-84+Math.sin(ang)*18,bx+4+Math.cos(ang)*60,by-84+Math.sin(ang)*32);ctx.lineWidth=2.2-(i%2)*.6;ctx.stroke();}});
        // Royal arches (Hassan II inspired) faint overlay at bottom
        const archW=Math.min(W*.18,120),archH=archW*1.4;const archPositions=[.18,.5,.82];archPositions.forEach(ax=>{const cx=ax*W,cy=H-.05*H;ctx.strokeStyle='rgba(212,160,23,.06)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(cx-archW/2,cy);ctx.lineTo(cx-archW/2,cy-archH*.6);ctx.arcTo(cx-archW/2,cy-archH,cx,cy-archH,archW/2);ctx.arcTo(cx+archW/2,cy-archH,cx+archW/2,cy-archH*.6,archW/2);ctx.lineTo(cx+archW/2,cy);ctx.stroke();});
        state.bgAnimFrame=requestAnimationFrame(draw);
    }
    window.addEventListener('resize',()=>{W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;buildMountains();},{passive:true});
    draw();
}



// ══ SSS+ God's Domain — Celestial heaven: marble islands, temples, clouds, rays, halos, particles, cursor trail ══
function runGodsDomainAnimation() {
    const ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    let W=window.innerWidth, H=window.innerHeight, ph=0;

    // ── Cursor trail ──
    let cursorEl = document.getElementById('gods-cursor');
    if (!cursorEl) { cursorEl = document.createElement('div'); cursorEl.id='gods-cursor'; document.body.appendChild(cursorEl); }
    function onGodsCursorMove(e) {
        if (state.theme !== 'godsdomain') { document.removeEventListener('mousemove', onGodsCursorMove); return; }
        cursorEl.style.left = e.clientX + 'px';
        cursorEl.style.top  = e.clientY + 'px';
        if (Math.random() < 0.55) {
            const sp = document.createElement('div');
            sp.className = 'gods-spark';
            const sz = 3 + Math.random() * 7;
            const isGold = Math.random() < 0.6;
            const isSky  = !isGold && Math.random() < 0.5;
            const col = isGold ? '245,214,122' : isSky ? '180,225,255' : '255,255,220';
            const al  = (0.5 + Math.random() * 0.5).toFixed(2);
            sp.style.width  = sz + 'px';
            sp.style.height = sz + 'px';
            sp.style.left   = (e.clientX + (Math.random()-0.5)*18) + 'px';
            sp.style.top    = (e.clientY + (Math.random()-0.5)*18) + 'px';
            sp.style.background = 'rgba(' + col + ',' + al + ')';
            sp.style.boxShadow  = '0 0 ' + (sz*2) + 'px rgba(' + col + ',0.6)';
            document.body.appendChild(sp);
            setTimeout(function(){ try{sp.remove();}catch(e){} }, 700);
        }
    }
    document.addEventListener('mousemove', onGodsCursorMove, {passive:true});

    // ── Stars ──
    const stars = Array.from({length:220},function(){ return {
        x:Math.random(), y:Math.random()*.5, r:Math.random()*1.6+.2,
        a:Math.random()*Math.PI*2, as:.003+Math.random()*.012,
        twinkle:Math.random()*Math.PI*2, gold:Math.random()>.6 };});

    // ── Clouds (3 layers) ──
    function mkCloud(layer) {
        return { x:Math.random(), y:.05+Math.random()*.55,
            w:.15+Math.random()*.28, h:.06+Math.random()*.1,
            vx:(.0003+Math.random()*.0008)*(layer===0?.5:layer===1?1:1.6),
            alpha:layer===0?.18:layer===1?.28:.38,
            layer:layer, puffs:Math.floor(4+Math.random()*5) }; }
    const clouds = [].concat(
        Array.from({length:12},function(){return mkCloud(0);}),
        Array.from({length:10},function(){return mkCloud(1);}),
        Array.from({length:8}, function(){return mkCloud(2);}));

    // ── Floating marble islands ──
    const islands = Array.from({length:6},function(_,i){ return {
        x:.08+(i/5)*.84, baseY:.38+Math.random()*.32,
        w:.06+Math.random()*.12, h:.025+Math.random()*.035,
        phase:Math.random()*Math.PI*2, ps:.004+Math.random()*.005,
        shadow:.12+Math.random()*.18 };});

    // ── Crystal waterfall drops ──
    const falls = Array.from({length:4},function(){ return {
        drops:Array.from({length:30},function(){ return {t:Math.random(),v:.003+Math.random()*.005};})};});

    // ── Divine rays ──
    const rays = Array.from({length:9},function(_,i){ return {
        angle:-Math.PI/2+(i/8)*Math.PI*.9-Math.PI*.45,
        width:.004+Math.random()*.008,
        alpha:.04+Math.random()*.06,
        pulse:Math.random()*Math.PI*2, ps:.008+Math.random()*.01,
        length:.55+Math.random()*.3 };});

    // ── Golden halos ──
    const halos = Array.from({length:8},function(){ return {
        x:Math.random(), y:.1+Math.random()*.7,
        r:.018+Math.random()*.045,
        phase:Math.random()*Math.PI*2, ps:.006+Math.random()*.009,
        alpha:.05+Math.random()*.07 };});

    // ── Divine dust particles ──
    const dust = Array.from({length:180},function(){ return {
        x:Math.random(), y:Math.random(), r:.8+Math.random()*2.8,
        vx:(Math.random()-.5)*.0008, vy:-.0002-Math.random()*.0012,
        phase:Math.random()*Math.PI*2, ps:.008+Math.random()*.018,
        type:Math.floor(Math.random()*3) };});

    // ── Feathers ──
    const feathers = Array.from({length:18},function(){ return {
        x:Math.random(), y:.05+Math.random()*.85,
        size:8+Math.random()*18,
        vx:(Math.random()-.5)*.0006, vy:-.0001-Math.random()*.0004,
        angle:Math.random()*Math.PI*2, av:(Math.random()-.5)*.01,
        phase:Math.random()*Math.PI*2, ps:.005+Math.random()*.01,
        alpha:.15+Math.random()*.3 };});

    // ── Energy orbs ──
    const orbs = Array.from({length:7},function(){ return {
        x:Math.random(), y:.1+Math.random()*.75,
        r:.008+Math.random()*.018,
        phase:Math.random()*Math.PI*2, ps:.006+Math.random()*.012,
        orbitR:.01+Math.random()*.04, orbitAngle:Math.random()*Math.PI*2,
        orbitSpeed:.008+Math.random()*.012,
        type:Math.floor(Math.random()*2) };});

    // ── Holy symbols ──
    const symbols = Array.from({length:5},function(){ return {
        x:Math.random(), y:.12+Math.random()*.65,
        size:.012+Math.random()*.022,
        phase:Math.random()*Math.PI*2, ps:.004+Math.random()*.008,
        alpha:.03+Math.random()*.05, angle:Math.random()*Math.PI*.25 };});

    // ── Celestial birds ──
    const birds = Array.from({length:9},function(){ return {
        x:Math.random(), y:.04+Math.random()*.28,
        vx:.0005+Math.random()*.001,
        wing:Math.random()*Math.PI*2, ws:.05+Math.random()*.07,
        sz:4+Math.random()*5 };});

    // ── Lightning ──
    let lightnings=[], lightningTimer=0;
    function spawnLightning() {
        lightnings.push({
            x:.1+Math.random()*.8, y:.08+Math.random()*.28, life:1,
            decay:.06+Math.random()*.08,
            segs:Array.from({length:3+Math.floor(Math.random()*4)},function(){ return {
                angle:-Math.PI/2+(Math.random()-.5)*.9,
                len:.05+Math.random()*.12,
                jitter:.02+Math.random()*.04 }; }) });
    }

    // ── Helpers ──
    function drawFeather(fx,fy,size,angle,alpha) {
        ctx.save(); ctx.translate(fx,fy); ctx.rotate(angle);
        ctx.globalAlpha=alpha;
        ctx.strokeStyle='rgba(255,250,220,.88)'; ctx.lineWidth=1.2;
        ctx.beginPath(); ctx.moveTo(0,size*.5); ctx.quadraticCurveTo(size*.3,-size*.1,0,-size*.5); ctx.quadraticCurveTo(-size*.3,-size*.1,0,size*.5); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0,size*.5); ctx.lineTo(0,-size*.5); ctx.stroke();
        for(var i=1;i<=4;i++){
            var t=i/4.5;
            ctx.beginPath(); ctx.moveTo(0,-size*.5+size*t); ctx.lineTo(size*.35*(1-t*.5),-size*.5+size*t-size*.12); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0,-size*.5+size*t); ctx.lineTo(-size*.35*(1-t*.5),-size*.5+size*t-size*.12); ctx.stroke();
        }
        ctx.restore(); ctx.globalAlpha=1;
    }

    function drawGate(gx,gy,gw,gh,alpha) {
        ctx.save(); ctx.globalAlpha=alpha;
        ctx.fillStyle='rgba(255,252,238,.88)';
        ctx.fillRect(gx-gw/2,gy-gh,gw*.09,gh);
        ctx.fillRect(gx+gw/2-gw*.09,gy-gh,gw*.09,gh);
        ctx.strokeStyle='rgba(245,214,122,.82)'; ctx.lineWidth=2.5;
        ctx.beginPath(); ctx.moveTo(gx-gw/2,gy-gh); ctx.quadraticCurveTo(gx,gy-gh*1.36,gx+gw/2,gy-gh); ctx.stroke();
        var gg=ctx.createRadialGradient(gx,gy-gh*1.26,0,gx,gy-gh*1.26,gw*.52);
        gg.addColorStop(0,'rgba(245,214,122,.18)'); gg.addColorStop(1,'rgba(245,214,122,0)');
        ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(gx,gy-gh*1.26,gw*.52,0,Math.PI*2); ctx.fill();
        ctx.restore(); ctx.globalAlpha=1;
    }

    function drawStairway(sx,sy,sw,steps,alpha) {
        ctx.save(); ctx.globalAlpha=alpha; ctx.fillStyle='rgba(255,252,240,.78)';
        var sh=sw*.13;
        for(var i=0;i<steps;i++){
            var stepW=sw*(1-i/steps*.5);
            ctx.fillRect(sx-stepW/2,sy-i*sh,stepW,sh*.88);
        }
        ctx.restore(); ctx.globalAlpha=1;
    }

    function drawIsland(il, floatY) {
        var ix=il.x*W, iy=floatY*H, iw=il.w*W, ih=il.h*H;
        ctx.save();
        var sg=ctx.createRadialGradient(ix,iy+ih*.55,0,ix,iy+ih*.55,iw*.62);
        sg.addColorStop(0,'rgba(100,130,210,'+il.shadow.toFixed(2)+')'); sg.addColorStop(1,'rgba(100,130,210,0)');
        ctx.fillStyle=sg; ctx.beginPath(); ctx.ellipse(ix,iy+ih*.58,iw*.58,ih*.38,0,0,Math.PI*2); ctx.fill();
        var mg=ctx.createLinearGradient(ix-iw/2,iy-ih,ix+iw/2,iy+ih*.3);
        mg.addColorStop(0,'rgba(255,253,248,1)'); mg.addColorStop(.35,'rgba(240,245,255,1)');
        mg.addColorStop(.7,'rgba(225,235,252,1)'); mg.addColorStop(1,'rgba(200,218,242,1)');
        ctx.fillStyle=mg;
        ctx.beginPath();
        ctx.moveTo(ix-iw*.5,iy);
        ctx.bezierCurveTo(ix-iw*.5,iy-ih*.6,ix-iw*.2,iy-ih,ix,iy-ih);
        ctx.bezierCurveTo(ix+iw*.2,iy-ih,ix+iw*.5,iy-ih*.6,ix+iw*.5,iy);
        ctx.bezierCurveTo(ix+iw*.5,iy+ih*.22,ix+iw*.25,iy+ih*.32,ix,iy+ih*.26);
        ctx.bezierCurveTo(ix-iw*.25,iy+ih*.32,ix-iw*.5,iy+ih*.22,ix-iw*.5,iy);
        ctx.fill();
        ctx.strokeStyle='rgba(201,168,76,.32)'; ctx.lineWidth=1.5; ctx.stroke();
        ctx.strokeStyle='rgba(180,205,242,.22)'; ctx.lineWidth=.9;
        ctx.beginPath(); ctx.moveTo(ix-iw*.3,iy-ih*.42); ctx.quadraticCurveTo(ix+iw*.1,iy-ih*.52,ix+iw*.32,iy-ih*.1); ctx.stroke();
        ctx.restore();
    }

    function draw() {
        if (state.theme !== 'godsdomain') { document.removeEventListener('mousemove',onGodsCursorMove); return; }
        W=window.innerWidth; H=window.innerHeight;
        ctx.clearRect(0,0,W,H); ph+=.005;

        // Sky gradient
        var sky=ctx.createLinearGradient(0,0,0,H);
        sky.addColorStop(0,'rgba(155,200,255,1)');
        sky.addColorStop(.18,'rgba(185,218,255,1)');
        sky.addColorStop(.4,'rgba(220,236,255,1)');
        sky.addColorStop(.65,'rgba(242,246,255,1)');
        sky.addColorStop(.85,'rgba(250,250,255,.88)');
        sky.addColorStop(1,'rgba(255,255,255,0)');
        ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);

        // Golden horizon glow
        var hg=ctx.createRadialGradient(W*.5,H*.72,0,W*.5,H*.72,W*.72);
        hg.addColorStop(0,'rgba(245,214,122,.13)'); hg.addColorStop(.38,'rgba(255,240,180,.05)'); hg.addColorStop(1,'rgba(245,214,122,0)');
        ctx.fillStyle=hg; ctx.fillRect(0,0,W,H);

        // Stars
        stars.forEach(function(s){
            s.a+=s.as; s.twinkle+=.015;
            var al=.05+.42*Math.abs(Math.sin(s.a))*(0.4+0.6*Math.abs(Math.sin(s.twinkle)));
            ctx.fillStyle=s.gold?('rgba(245,210,100,'+al.toFixed(2)+')'):('rgba(220,235,255,'+al.toFixed(2)+')');
            ctx.beginPath(); ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2); ctx.fill();
        });

        // Divine rays from top
        ctx.save();
        rays.forEach(function(r){
            r.pulse+=r.ps;
            var al=r.alpha+.022*Math.sin(r.pulse);
            var srcX=W*.5, srcY=0;
            var endX=srcX+Math.cos(r.angle)*r.length*H;
            var endY=srcY+Math.sin(r.angle)*r.length*H;
            var rg=ctx.createLinearGradient(srcX,srcY,endX,endY);
            rg.addColorStop(0,'rgba(245,214,122,'+al.toFixed(3)+')');
            rg.addColorStop(.42,'rgba(255,245,200,'+(al*.32).toFixed(3)+')');
            rg.addColorStop(1,'rgba(255,255,255,0)');
            var wHalf=r.width*W;
            ctx.beginPath(); ctx.moveTo(srcX-wHalf,srcY); ctx.lineTo(endX-wHalf*4,endY); ctx.lineTo(endX+wHalf*4,endY); ctx.lineTo(srcX+wHalf,srcY); ctx.closePath();
            ctx.fillStyle=rg; ctx.fill();
        });
        ctx.restore();

        // Bg clouds (layer 0)
        clouds.filter(function(c){return c.layer===0;}).forEach(function(c){
            c.x+=c.vx; if(c.x>1.25)c.x=-c.w;
            var cg=ctx.createRadialGradient(c.x*W,c.y*H,0,c.x*W,c.y*H,c.w*W*.58);
            cg.addColorStop(0,'rgba(255,255,255,'+c.alpha+')'); cg.addColorStop(1,'rgba(255,255,255,0)');
            ctx.fillStyle=cg; ctx.beginPath(); ctx.ellipse(c.x*W,c.y*H,c.w*W*.54,c.h*H*.78,0,0,Math.PI*2); ctx.fill();
        });

        // Lightning
        lightningTimer++;
        if(lightningTimer>180+Math.random()*240){spawnLightning();lightningTimer=0;}
        lightnings=lightnings.filter(function(l){
            l.life-=l.decay; if(l.life<=0)return false;
            var al=l.life*.48;
            ctx.save(); ctx.strokeStyle='rgba(200,230,255,'+al.toFixed(2)+')'; ctx.lineWidth=1.4*l.life;
            l.segs.forEach(function(b){
                var bx=l.x*W, by=l.y*H;
                ctx.beginPath(); ctx.moveTo(bx,by);
                for(var s=0;s<6;s++){
                    bx+=Math.cos(b.angle+(Math.random()-.5)*b.jitter*4)*b.len*H/6;
                    by+=Math.sin(b.angle+(Math.random()-.5)*b.jitter*4)*b.len*H/6;
                    ctx.lineTo(bx,by);
                }
                ctx.stroke();
            });
            ctx.restore(); return true;
        });

        // Mid clouds (layer 1)
        clouds.filter(function(c){return c.layer===1;}).forEach(function(c){
            c.x+=c.vx; if(c.x>1.3)c.x=-c.w;
            for(var p=0;p<c.puffs;p++){
                var px=(c.x+p*.022-.01)*W, py=(c.y+Math.sin(p*1.4)*.018)*H;
                var pr=c.w*W*(.18+.08*Math.sin(p*.8));
                var pcg=ctx.createRadialGradient(px,py,0,px,py,pr);
                pcg.addColorStop(0,'rgba(255,255,255,'+c.alpha+')'); pcg.addColorStop(.55,'rgba(248,250,255,'+(c.alpha*.55)+')'); pcg.addColorStop(1,'rgba(255,255,255,0)');
                ctx.fillStyle=pcg; ctx.beginPath(); ctx.arc(px,py,pr,0,Math.PI*2); ctx.fill();
            }
        });

        // Marble islands + stairways + gates + waterfalls
        islands.forEach(function(il,i){
            il.phase+=il.ps;
            var floatY=il.baseY+.012*Math.sin(il.phase);
            drawIsland(il,floatY);
            if(i%2===0) drawStairway(il.x*W, floatY*H-il.h*H, il.w*W*.5, 5, .28+.10*Math.sin(il.phase*.7));
            if(i===1||i===3) drawGate(il.x*W, floatY*H-il.h*H, il.w*W*.42, il.h*H*2.8, .22+.08*Math.sin(il.phase*.9));
            var fi=falls[i%falls.length];
            fi.drops.forEach(function(d){
                d.t+=d.v; if(d.t>1)d.t=0;
                var fx=il.x*W+(Math.random()<.5?-1:1)*il.w*W*.32;
                var fy=(floatY+il.h*.22+d.t*.2)*H;
                var al=Math.sin(d.t*Math.PI)*.34;
                ctx.fillStyle='rgba(180,225,255,'+al.toFixed(2)+')';
                ctx.beginPath(); ctx.ellipse(fx,fy,1.4,3+d.t*3.5,0,0,Math.PI*2); ctx.fill();
            });
        });

        // Foreground clouds (layer 2)
        clouds.filter(function(c){return c.layer===2;}).forEach(function(c){
            c.x+=c.vx; if(c.x>1.35)c.x=-c.w;
            for(var p=0;p<c.puffs;p++){
                var px=(c.x+p*.03-.015)*W, py=(c.y+Math.sin(p*1.2)*.025)*H;
                var pr=c.w*W*(.2+.1*Math.sin(p*.7+1.4));
                var pcg=ctx.createRadialGradient(px,py,0,px,py,pr);
                pcg.addColorStop(0,'rgba(255,255,255,'+c.alpha+')'); pcg.addColorStop(.5,'rgba(240,245,255,'+(c.alpha*.6)+')'); pcg.addColorStop(1,'rgba(255,255,255,0)');
                ctx.fillStyle=pcg; ctx.beginPath(); ctx.arc(px,py,pr,0,Math.PI*2); ctx.fill();
            }
        });

        // Heavenly fog (bottom)
        var fog=ctx.createLinearGradient(0,H*.68,0,H);
        fog.addColorStop(0,'rgba(255,255,255,0)'); fog.addColorStop(.5,'rgba(245,248,255,.26)'); fog.addColorStop(1,'rgba(255,255,255,.75)');
        ctx.fillStyle=fog; ctx.fillRect(0,H*.68,W,H*.32);

        // Halos
        halos.forEach(function(h){
            h.phase+=h.ps;
            var r=h.r*Math.min(W,H);
            var al=h.alpha*(0.68+0.32*Math.abs(Math.sin(h.phase)));
            ctx.save(); ctx.shadowBlur=18; ctx.shadowColor='rgba(245,214,122,.35)';
            ctx.strokeStyle='rgba(245,214,122,'+al.toFixed(3)+')'; ctx.lineWidth=1.8+Math.sin(h.phase)*.7;
            ctx.beginPath(); ctx.arc(h.x*W,h.y*H,r,0,Math.PI*2); ctx.stroke();
            ctx.strokeStyle='rgba(255,245,200,'+(al*.48).toFixed(3)+')'; ctx.lineWidth=.9;
            ctx.beginPath(); ctx.arc(h.x*W,h.y*H,r*.68,0,Math.PI*2); ctx.stroke();
            ctx.restore(); ctx.shadowBlur=0;
        });

        // Holy symbols
        symbols.forEach(function(s){
            s.phase+=s.ps;
            var al=s.alpha*(0.5+0.5*Math.abs(Math.sin(s.phase)));
            var sz=s.size*Math.min(W,H);
            ctx.save(); ctx.translate(s.x*W,s.y*H); ctx.rotate(s.angle+s.phase*.1);
            ctx.strokeStyle='rgba(245,214,122,'+al.toFixed(3)+')'; ctx.lineWidth=1.5; ctx.shadowBlur=12; ctx.shadowColor='rgba(245,214,122,.38)';
            ctx.beginPath(); ctx.moveTo(-sz,0); ctx.lineTo(sz,0); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0,-sz); ctx.lineTo(0,sz); ctx.stroke();
            ctx.globalAlpha=al*.55;
            var sg=ctx.createRadialGradient(0,0,0,0,0,sz*1.45);
            sg.addColorStop(0,'rgba(245,214,122,.22)'); sg.addColorStop(1,'rgba(245,214,122,0)');
            ctx.fillStyle=sg; ctx.beginPath(); ctx.arc(0,0,sz*1.45,0,Math.PI*2); ctx.fill();
            ctx.restore(); ctx.shadowBlur=0; ctx.globalAlpha=1;
        });

        // Energy orbs
        orbs.forEach(function(o){
            o.phase+=o.ps; o.orbitAngle+=o.orbitSpeed;
            var cx=o.x*W+Math.cos(o.orbitAngle)*o.orbitR*W;
            var cy=o.y*H+Math.sin(o.orbitAngle)*o.orbitR*H;
            var r=o.r*Math.min(W,H);
            var al=.3+.25*Math.abs(Math.sin(o.phase));
            var col=o.type===0?'245,214,122':'180,225,255';
            var og=ctx.createRadialGradient(cx,cy,0,cx,cy,r*2.6);
            og.addColorStop(0,'rgba('+col+','+(al+.2).toFixed(2)+')'); og.addColorStop(.4,'rgba('+col+','+al.toFixed(2)+')'); og.addColorStop(1,'rgba('+col+',0)');
            ctx.fillStyle=og; ctx.beginPath(); ctx.arc(cx,cy,r*2.6,0,Math.PI*2); ctx.fill();
            ctx.fillStyle='rgba('+col+',1)'; ctx.beginPath(); ctx.arc(cx,cy,r*.48,0,Math.PI*2); ctx.fill();
        });

        // Floating feathers
        feathers.forEach(function(f){
            f.x+=f.vx; f.y+=f.vy; f.angle+=f.av; f.phase+=f.ps;
            if(f.y<-.08){f.y=1.08;f.x=Math.random();}
            if(f.x<-.05)f.x=1.05; if(f.x>1.05)f.x=-.05;
            drawFeather(f.x*W,f.y*H,f.size,f.angle+Math.sin(f.phase)*.12,f.alpha*(0.6+0.4*Math.abs(Math.sin(f.phase))));
        });

        // Divine dust
        dust.forEach(function(d){
            d.x+=d.vx; d.y+=d.vy; d.phase+=d.ps;
            if(d.y<-.05){d.y=1.05;d.x=Math.random();}
            if(d.x<-.02)d.x=1.02; if(d.x>1.02)d.x=-.02;
            var al=.04+.26*Math.abs(Math.sin(d.phase));
            var col=d.type===0?'245,214,122':d.type===1?'255,255,240':'180,225,255';
            ctx.fillStyle='rgba('+col+','+al.toFixed(2)+')';
            ctx.beginPath(); ctx.arc(d.x*W,d.y*H,d.r*(0.5+0.5*Math.abs(Math.sin(d.phase))),0,Math.PI*2); ctx.fill();
        });

        // Celestial birds
        birds.forEach(function(b){
            b.x+=b.vx; b.wing+=b.ws; if(b.x>1.1)b.x=-.1;
            var bx=b.x*W, by=b.y*H, wf=Math.sin(b.wing)*b.sz;
            ctx.fillStyle='rgba(180,215,255,.36)';
            ctx.beginPath(); ctx.moveTo(bx,by);
            ctx.quadraticCurveTo(bx-b.sz*2,by+wf,bx-b.sz*3.5,by+wf*.35);
            ctx.quadraticCurveTo(bx-b.sz*2,by-wf*.5,bx,by);
            ctx.quadraticCurveTo(bx+b.sz*2,by+wf,bx+b.sz*3.5,by+wf*.35);
            ctx.quadraticCurveTo(bx+b.sz*2,by-wf*.5,bx,by);
            ctx.fill();
        });

        state.bgAnimFrame=requestAnimationFrame(draw);
    }

    window.addEventListener('resize',function(){W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}



// ══ SSS+ Genesis Protocol — Cosmic creation: deep space, galaxies, nebulas, supernovas, planets, quantum particles ══
function runGenesisProtocolAnimation() {
    var ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    var W=window.innerWidth, H=window.innerHeight, ph=0;
    var cursorEl = document.getElementById('genesis-cursor');
    if (!cursorEl) { cursorEl = document.createElement('div'); cursorEl.id='genesis-cursor'; document.body.appendChild(cursorEl); }
    function onGenesisCursorMove(e) {
        if (state.theme !== 'genesisprotocol') { document.removeEventListener('mousemove', onGenesisCursorMove); return; }
        cursorEl.style.left = e.clientX + 'px'; cursorEl.style.top = e.clientY + 'px';
        if (Math.random() < 0.6) {
            var sp = document.createElement('div'); sp.className = 'genesis-spark';
            var sz = 2 + Math.random() * 6;
            var types = ['74,240,255','123,111,255','255,107,255','180,220,255','255,255,255'];
            var col = types[Math.floor(Math.random()*types.length)]; var al = (0.5+Math.random()*.5).toFixed(2);
            sp.style.cssText = 'width:'+sz+'px;height:'+sz+'px;left:'+(e.clientX+(Math.random()-.5)*22)+'px;top:'+(e.clientY+(Math.random()-.5)*22)+'px;background:rgba('+col+','+al+');box-shadow:0 0 '+(sz*3)+'px rgba('+col+',0.8);';
            document.body.appendChild(sp);
            setTimeout(function(){ try{sp.remove();}catch(e){} }, 800);
        }
    }
    document.addEventListener('mousemove', onGenesisCursorMove, {passive:true});
    var stars = Array.from({length:320},function(){
        return { x:Math.random(), y:Math.random(), r:Math.random()*1.8+.15,
            a:Math.random()*Math.PI*2, as:.002+Math.random()*.015, type:Math.floor(Math.random()*4) };});
    var galaxies = Array.from({length:4},function(){
        var c=['74,240,255','123,111,255','255,107,255','180,100,255'][Math.floor(Math.random()*4)];
        return { x:.1+Math.random()*.8, y:.05+Math.random()*.7,
            r:.07+Math.random()*.12, angle:Math.random()*Math.PI*2,
            speed:.0004+Math.random()*.0007, arms:3+Math.floor(Math.random()*2), col:c,
            particles: Array.from({length:160},function(){
                var d=Math.pow(Math.random(),0.5);
                return { dist:d, arm:Math.floor(Math.random()*5), spread:(Math.random()-.5)*.3, b:.3+Math.random()*.7 }; }) };});
    var nebulas = Array.from({length:6},function(){
        var c=['74,240,255','123,111,255','255,107,255','0,180,255','150,80,255'];
        return { x:Math.random(), y:Math.random(), rx:.14+Math.random()*.26, ry:.09+Math.random()*.18,
            col:c[Math.floor(Math.random()*c.length)], alpha:.04+Math.random()*.07,
            phase:Math.random()*Math.PI*2, ps:.002+Math.random()*.004 };});
    var planets = Array.from({length:5},function(){
        var c=['74,240,255','123,111,255','255,107,255','100,200,255','200,150,255'];
        var r=.018+Math.random()*.032;
        return { x:.1+Math.random()*.8, y:.1+Math.random()*.7, r:r,
            orbitR:r*2.5+Math.random()*r*2.5, orbitSpeed:.0005+Math.random()*.0009,
            orbitAngle:Math.random()*Math.PI*2, col:c[Math.floor(Math.random()*5)], phase:Math.random()*Math.PI*2 };});
    var supernovas=[], snovaTimer=0;
    function spawnSupernova() {
        supernovas.push({ x:.1+Math.random()*.8, y:.05+Math.random()*.7, r:0,
            maxR:.07+Math.random()*.1, life:1, decay:.0035+Math.random()*.003,
            col:['74,240,255','123,111,255','255,200,100','255,107,255'][Math.floor(Math.random()*4)] });
    }
    var qPts = Array.from({length:120},function(){
        var c=['74,240,255','123,111,255','255,107,255','180,220,255'];
        return { x:Math.random(), y:Math.random(), vx:(Math.random()-.5)*.0016, vy:(Math.random()-.5)*.0016,
            r:.5+Math.random()*2, a:.2+Math.random()*.6, col:c[Math.floor(Math.random()*c.length)],
            phase:Math.random()*Math.PI*2, ps:.012+Math.random()*.025 };});
    var meteors=[], meteorTimer=0;
    function spawnMeteor() {
        for(var i=0;i<3+Math.floor(Math.random()*4);i++) {
            meteors.push({ x:Math.random()*1.3-.15, y:-.05+Math.random()*.25,
                vx:.006+Math.random()*.012, vy:.003+Math.random()*.006,
                len:.04+Math.random()*.07, life:1, decay:.012+Math.random()*.015,
                col:['74,240,255','255,255,255','123,111,255'][Math.floor(Math.random()*3)] });
        }
    }
    var rings = Array.from({length:3},function(){
        return { x:.15+Math.random()*.7, y:.1+Math.random()*.65,
            rx:(.05+Math.random()*.1)*1, tilt:.12+Math.random()*.2,
            angle:Math.random()*Math.PI, rotSpeed:.0015+Math.random()*.003,
            col:['74,240,255','212,175,55','123,111,255'][Math.floor(Math.random()*3)], alpha:.15+Math.random()*.2 };});
    function draw() {
        if (state.theme !== 'genesisprotocol') { document.removeEventListener('mousemove', onGenesisCursorMove); return; }
        W=window.innerWidth; H=window.innerHeight; ctx.clearRect(0,0,W,H); ph+=.004;
        var bg=ctx.createRadialGradient(W*.5,H*.45,0,W*.5,H*.5,Math.max(W,H)*.9);
        bg.addColorStop(0,'rgba(3,8,28,1)'); bg.addColorStop(.45,'rgba(1,4,15,1)'); bg.addColorStop(1,'rgba(0,1,5,1)');
        ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
        nebulas.forEach(function(n){
            n.phase+=n.ps; var al=n.alpha*(0.7+0.3*Math.abs(Math.sin(n.phase)));
            var ng=ctx.createRadialGradient(n.x*W,n.y*H,0,n.x*W,n.y*H,n.rx*W);
            ng.addColorStop(0,'rgba('+n.col+','+al+')'); ng.addColorStop(.55,'rgba('+n.col+','+(al*.35)+')'); ng.addColorStop(1,'rgba('+n.col+',0)');
            ctx.save(); ctx.scale(1,n.ry/n.rx); ctx.fillStyle=ng; ctx.beginPath();
            ctx.arc(n.x*W,(n.y*H)/(n.ry/n.rx),n.rx*W,0,Math.PI*2); ctx.fill(); ctx.restore();
        });
        galaxies.forEach(function(g){
            g.angle+=g.speed; var gx=g.x*W, gy=g.y*H, gr=g.r*Math.min(W,H);
            g.particles.forEach(function(p){
                var armA=(p.arm/g.arms)*Math.PI*2+g.angle, spiral=armA+p.dist*5.5;
                var dx=Math.cos(spiral+p.spread)*p.dist*gr, dy=Math.sin(spiral+p.spread)*p.dist*gr*.42;
                var al=p.b*(1-p.dist*.55)*.48; if(al<.02)return;
                ctx.fillStyle='rgba('+g.col+','+al.toFixed(2)+')';
                ctx.beginPath(); ctx.arc(gx+dx,gy+dy,.7+p.dist*1.5,0,Math.PI*2); ctx.fill();
            });
            var cg=ctx.createRadialGradient(gx,gy,0,gx,gy,gr*.16);
            cg.addColorStop(0,'rgba('+g.col+',0.55)'); cg.addColorStop(1,'rgba('+g.col+',0)');
            ctx.fillStyle=cg; ctx.beginPath(); ctx.arc(gx,gy,gr*.16,0,Math.PI*2); ctx.fill();
        });
        stars.forEach(function(s){
            s.a+=s.as; var al=.08+.55*Math.abs(Math.sin(s.a));
            var cols=['74,240,255','123,111,255','255,255,255','255,107,255'];
            ctx.fillStyle='rgba('+cols[s.type]+','+al.toFixed(2)+')';
            ctx.beginPath(); ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2); ctx.fill();
        });
        rings.forEach(function(rg){
            rg.angle+=rg.rotSpeed; ctx.save();
            ctx.translate(rg.x*W,rg.y*H); ctx.rotate(rg.angle); ctx.scale(1,rg.tilt);
            ctx.strokeStyle='rgba('+rg.col+','+rg.alpha+')'; ctx.lineWidth=1.8;
            ctx.shadowBlur=12; ctx.shadowColor='rgba('+rg.col+',0.5)';
            ctx.beginPath(); ctx.arc(0,0,rg.rx*Math.min(W,H),0,Math.PI*2); ctx.stroke();
            ctx.restore(); ctx.shadowBlur=0;
        });
        planets.forEach(function(p){
            p.orbitAngle+=p.orbitSpeed; var px=p.x*W+Math.cos(p.orbitAngle)*p.orbitR*Math.min(W,H);
            var py=p.y*H+Math.sin(p.orbitAngle)*p.orbitR*Math.min(W,H)*.5, pr=p.r*Math.min(W,H);
            var pg=ctx.createRadialGradient(px-pr*.25,py-pr*.25,0,px,py,pr);
            pg.addColorStop(0,'rgba('+p.col+',0.95)'); pg.addColorStop(1,'rgba('+p.col+',0.08)');
            ctx.fillStyle=pg; ctx.beginPath(); ctx.arc(px,py,pr,0,Math.PI*2); ctx.fill();
            var glow=ctx.createRadialGradient(px,py,pr*.5,px,py,pr*2.6);
            glow.addColorStop(0,'rgba('+p.col+',0.1)'); glow.addColorStop(1,'rgba('+p.col+',0)');
            ctx.fillStyle=glow; ctx.beginPath(); ctx.arc(px,py,pr*2.6,0,Math.PI*2); ctx.fill();
        });
        snovaTimer++; if(snovaTimer>320+Math.random()*400){spawnSupernova();snovaTimer=0;}
        supernovas = supernovas.filter(function(sv){
            sv.r+=.003; sv.life-=sv.decay; if(sv.life<=0)return false;
            var al=sv.life*.6, svx=sv.x*W, svy=sv.y*H, svr=Math.min(sv.r/sv.maxR,1)*sv.maxR*Math.min(W,H);
            var svg=ctx.createRadialGradient(svx,svy,0,svx,svy,svr);
            svg.addColorStop(0,'rgba(255,255,255,'+Math.min(al,.88)+')');
            svg.addColorStop(.18,'rgba('+sv.col+','+al+')');
            svg.addColorStop(1,'rgba('+sv.col+',0)');
            ctx.fillStyle=svg; ctx.beginPath(); ctx.arc(svx,svy,svr,0,Math.PI*2); ctx.fill();
            return true;
        });
        meteorTimer++; if(meteorTimer>190+Math.random()*260){spawnMeteor();meteorTimer=0;}
        meteors = meteors.filter(function(m){
            m.x+=m.vx; m.y+=m.vy; m.life-=m.decay; if(m.life<=0)return false;
            var al=m.life*.88, mg=ctx.createLinearGradient(m.x*W,m.y*H,m.x*W-m.len*W,m.y*H-m.len*H*.45);
            mg.addColorStop(0,'rgba('+m.col+','+al+')'); mg.addColorStop(1,'rgba('+m.col+',0)');
            ctx.strokeStyle=mg; ctx.lineWidth=1.5+m.life; ctx.beginPath();
            ctx.moveTo(m.x*W,m.y*H); ctx.lineTo(m.x*W-m.len*W,m.y*H-m.len*H*.45); ctx.stroke();
            return true;
        });
        qPts.forEach(function(p){
            p.x+=p.vx; p.y+=p.vy; p.phase+=p.ps;
            if(p.x<-.02)p.x=1.02; if(p.x>1.02)p.x=-.02;
            if(p.y<-.02)p.y=1.02; if(p.y>1.02)p.y=-.02;
            var al=p.a*(.4+.6*Math.abs(Math.sin(p.phase)));
            ctx.fillStyle='rgba('+p.col+','+al.toFixed(2)+')';
            ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r*(0.6+0.4*Math.abs(Math.sin(p.phase))),0,Math.PI*2); ctx.fill();
        });
        if(Math.random()<.004){
            var wc=['74,240,255','123,111,255','255,107,255'][Math.floor(Math.random()*3)];
            var wx=Math.random()*W, wy=Math.random()*H;
            (function animWave(r,mx,wxx,wyy,wcc){
                if(state.theme!=='genesisprotocol')return;
                ctx.strokeStyle='rgba('+wcc+','+(0.38*(1-r/mx)).toFixed(2)+')';
                ctx.lineWidth=1.2; ctx.beginPath(); ctx.arc(wxx,wyy,r,0,Math.PI*2); ctx.stroke();
                if(r<mx) requestAnimationFrame(function(){animWave(r+3,mx,wxx,wyy,wcc);});
            })(5,130+Math.random()*90,wx,wy,wc);
        }
        state.bgAnimFrame=requestAnimationFrame(draw);
    }
    window.addEventListener('resize',function(){W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}


// ══ SSS+ Chrono Infinity — Time control: giant clocks, gears, hourglasses, golden sand, time portals, roman numerals ══
function runChronoInfinityAnimation() {
    var ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    var W=window.innerWidth, H=window.innerHeight, ph=0;
    var cursorEl = document.getElementById('chrono-cursor');
    if (!cursorEl) { cursorEl = document.createElement('div'); cursorEl.id='chrono-cursor'; document.body.appendChild(cursorEl); }
    function onChronoCursorMove(e) {
        if (state.theme !== 'chronoinfinity') { document.removeEventListener('mousemove', onChronoCursorMove); return; }
        cursorEl.style.left = e.clientX + 'px'; cursorEl.style.top = e.clientY + 'px';
        if (Math.random() < 0.5) {
            var sp = document.createElement('div'); sp.className = 'chrono-spark';
            var sz = 2 + Math.random() * 5;
            var types = ['212,175,55','255,250,200','180,220,255','200,200,255'];
            var col = types[Math.floor(Math.random()*types.length)]; var al = (0.5+Math.random()*.5).toFixed(2);
            sp.style.cssText = 'width:'+sz+'px;height:'+sz+'px;border-radius:50%;left:'+(e.clientX+(Math.random()-.5)*18)+'px;top:'+(e.clientY+(Math.random()-.5)*18)+'px;background:rgba('+col+','+al+');box-shadow:0 0 '+(sz*2.5)+'px rgba('+col+',0.7);';
            document.body.appendChild(sp);
            setTimeout(function(){ try{sp.remove();}catch(e){} }, 900);
        }
    }
    document.addEventListener('mousemove', onChronoCursorMove, {passive:true});
    var stars = Array.from({length:200},function(){
        return { x:Math.random(), y:Math.random(), r:.2+Math.random()*1.4, a:Math.random()*Math.PI*2, as:.003+Math.random()*.012 };});
    var bgClocks = Array.from({length:4},function(){
        return { x:.12+Math.random()*.76, y:.1+Math.random()*.7, r:(.1+Math.random()*.15)*1,
            alpha:.04+Math.random()*.05, hourA:Math.random()*Math.PI*2,
            minuteA:Math.random()*Math.PI*2, secondA:Math.random()*Math.PI*2,
            hS:.0002+Math.random()*.0003, mS:.0012+Math.random()*.0014, sS:.006+Math.random()*.008 };});
    var gears = Array.from({length:8},function(){
        var r=.022+Math.random()*.055;
        return { x:Math.random(), y:Math.random(), r:r, vx:(Math.random()-.5)*.0005, vy:(Math.random()-.5)*.0004,
            angle:Math.random()*Math.PI*2, speed:(Math.random()>.5?1:-1)*(.002+Math.random()*.005),
            teeth:8+Math.floor(Math.random()*8), col:Math.random()>.5?'212,175,55':'180,200,255', alpha:.18+Math.random()*.28 };});
    var hourglasses = Array.from({length:5},function(){
        return { x:.05+Math.random()*.9, y:.05+Math.random()*.7, h:(.035+Math.random()*.055)*1,
            vx:(Math.random()-.5)*.0005, vy:(Math.random()-.5)*.0004,
            alpha:.08+Math.random()*.16, phase:Math.random()*Math.PI*2, ps:.008+Math.random()*.012, sandP:Math.random() };});
    var portals = Array.from({length:2},function(){
        return { x:.15+Math.random()*.7, y:.15+Math.random()*.6, r:.055+Math.random()*.085, angle:0,
            speed:.007+Math.random()*.01, alpha:.13+Math.random()*.16, col:Math.random()>.5?'74,240,255':'212,175,55' };});
    var sand = Array.from({length:150},function(){
        return { x:Math.random(), y:Math.random(), vx:(Math.random()-.5)*.0008, vy:.0002+Math.random()*.001,
            r:.5+Math.random()*1.8, alpha:.12+Math.random()*.38,
            col:Math.random()>.6?'212,175,55':Math.random()>.5?'255,250,200':'180,200,255',
            phase:Math.random()*Math.PI*2, ps:.015+Math.random()*.03 };});
    var numerals=['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
    var floatNums = Array.from({length:8},function(){
        return { x:Math.random(), y:Math.random(), num:numerals[Math.floor(Math.random()*12)],
            vx:(Math.random()-.5)*.0004, vy:(Math.random()-.5)*.0003,
            alpha:.05+Math.random()*.1, size:.022+Math.random()*.035,
            phase:Math.random()*Math.PI*2, ps:.005+Math.random()*.01 };});
    function drawGear(gx, gy, r, teeth, angle, col, al) {
        var toothH=r*.3, innerR=r*.68, toothA=Math.PI*2/teeth;
        ctx.save(); ctx.translate(gx,gy); ctx.rotate(angle);
        ctx.strokeStyle='rgba('+col+','+al+')'; ctx.lineWidth=1.5;
        ctx.shadowBlur=8; ctx.shadowColor='rgba('+col+','+(al*.6)+')';
        ctx.beginPath();
        for(var i=0;i<teeth;i++){
            var a1=i*toothA-toothA*.35, a2=i*toothA+toothA*.35, a3=i*toothA+toothA*.65, a4=(i+1)*toothA-toothA*.65;
            if(i===0) ctx.moveTo(Math.cos(a1)*innerR,Math.sin(a1)*innerR);
            ctx.lineTo(Math.cos(a1)*innerR,Math.sin(a1)*innerR);
            ctx.lineTo(Math.cos((a1+a2)/2)*(r+toothH),Math.sin((a1+a2)/2)*(r+toothH));
            ctx.lineTo(Math.cos(a2)*innerR,Math.sin(a2)*innerR);
            ctx.lineTo(Math.cos(a3)*innerR,Math.sin(a3)*innerR);
            if(i<teeth-1) ctx.lineTo(Math.cos(a4)*innerR,Math.sin(a4)*innerR);
        }
        ctx.closePath(); ctx.stroke();
        ctx.beginPath(); ctx.arc(0,0,innerR*.28,0,Math.PI*2); ctx.lineWidth=1; ctx.stroke();
        ctx.restore(); ctx.shadowBlur=0;
    }
    function drawClock(ck, W, H) {
        var cx=ck.x*W, cy=ck.y*H, cr=ck.r*Math.min(W,H), al=ck.alpha;
        ck.hourA+=ck.hS; ck.minuteA+=ck.mS; ck.secondA+=ck.sS;
        ctx.save();
        ctx.strokeStyle='rgba(212,175,55,'+al+')'; ctx.lineWidth=1.8;
        ctx.shadowBlur=10; ctx.shadowColor='rgba(212,175,55,'+(al*1.5)+')';
        ctx.beginPath(); ctx.arc(cx,cy,cr,0,Math.PI*2); ctx.stroke(); ctx.shadowBlur=0;
        ctx.strokeStyle='rgba(212,175,55,'+(al*.45)+')'; ctx.lineWidth=.8;
        ctx.beginPath(); ctx.arc(cx,cy,cr*.9,0,Math.PI*2); ctx.stroke();
        for(var i=0;i<12;i++){
            var ma=i/12*Math.PI*2;
            ctx.strokeStyle='rgba(212,175,55,'+(al*.75)+')'; ctx.lineWidth=i%3===0?1.8:.9;
            ctx.beginPath(); ctx.moveTo(cx+Math.cos(ma)*cr*.82,cy+Math.sin(ma)*cr*.82);
            ctx.lineTo(cx+Math.cos(ma)*cr*.92,cy+Math.sin(ma)*cr*.92); ctx.stroke();
        }
        function drawHand(angle, length, width, col){
            ctx.save(); ctx.strokeStyle='rgba('+col+','+al+')'; ctx.lineWidth=width; ctx.lineCap='round';
            ctx.beginPath(); ctx.moveTo(cx,cy);
            ctx.lineTo(cx+Math.cos(angle-Math.PI/2)*length*cr,cy+Math.sin(angle-Math.PI/2)*length*cr);
            ctx.stroke(); ctx.restore();
        }
        drawHand(ck.hourA,.52,2.5,'212,175,55');
        drawHand(ck.minuteA,.74,1.8,'255,250,200');
        drawHand(ck.secondA,.85,.9,'122,184,245');
        ctx.fillStyle='rgba(212,175,55,'+Math.min(al*3,1)+')';
        ctx.beginPath(); ctx.arc(cx,cy,cr*.05,0,Math.PI*2); ctx.fill();
        ctx.restore();
    }
    function drawHourglass(hg, W, H) {
        var hx=hg.x*W, hy=hg.y*H, hr=hg.h*Math.min(W,H);
        hg.phase+=hg.ps; hg.sandP+=.0008; if(hg.sandP>1)hg.sandP=0;
        var al=hg.alpha*(0.7+0.3*Math.abs(Math.sin(hg.phase)));
        ctx.save(); ctx.strokeStyle='rgba(212,175,55,'+al+')'; ctx.lineWidth=1.5;
        ctx.beginPath();
        ctx.moveTo(hx-hr*.55,hy-hr); ctx.lineTo(hx+hr*.55,hy-hr);
        ctx.lineTo(hx+hr*.08,hy); ctx.lineTo(hx+hr*.55,hy+hr);
        ctx.lineTo(hx-hr*.55,hy+hr); ctx.lineTo(hx-hr*.08,hy); ctx.closePath(); ctx.stroke();
        var sandH=hg.sandP*hr*.88;
        var sG=ctx.createLinearGradient(hx,hy+hr-sandH,hx,hy+hr);
        sG.addColorStop(0,'rgba(212,175,55,0)'); sG.addColorStop(1,'rgba(212,175,55,'+(al*.75)+')');
        ctx.fillStyle=sG; var bw=hr*.55*(1-hg.sandP*.38);
        ctx.beginPath(); ctx.moveTo(hx-bw,hy+hr); ctx.lineTo(hx+bw,hy+hr);
        ctx.lineTo(hx+hr*.08,hy+hr-sandH); ctx.lineTo(hx-hr*.08,hy+hr-sandH); ctx.closePath(); ctx.fill();
        ctx.restore();
    }
    function draw() {
        if (state.theme !== 'chronoinfinity') { document.removeEventListener('mousemove', onChronoCursorMove); return; }
        W=window.innerWidth; H=window.innerHeight; ctx.clearRect(0,0,W,H); ph+=.003;
        var bg=ctx.createRadialGradient(W*.5,H*.4,0,W*.5,H*.5,Math.max(W,H)*.9);
        bg.addColorStop(0,'rgba(5,12,35,1)'); bg.addColorStop(.45,'rgba(3,7,20,1)'); bg.addColorStop(1,'rgba(1,2,8,1)');
        ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
        var ag=ctx.createRadialGradient(W*.25,H*.3,0,W*.25,H*.3,W*.42);
        ag.addColorStop(0,'rgba(74,240,255,.022)'); ag.addColorStop(1,'rgba(74,240,255,0)');
        ctx.fillStyle=ag; ctx.fillRect(0,0,W,H);
        var ag2=ctx.createRadialGradient(W*.76,H*.65,0,W*.76,H*.65,W*.38);
        ag2.addColorStop(0,'rgba(212,175,55,.028)'); ag2.addColorStop(1,'rgba(212,175,55,0)');
        ctx.fillStyle=ag2; ctx.fillRect(0,0,W,H);
        stars.forEach(function(s){
            s.a+=s.as; var al=.06+.42*Math.abs(Math.sin(s.a));
            ctx.fillStyle='rgba(212,175,55,'+al.toFixed(2)+')';
            ctx.beginPath(); ctx.arc(s.x*W,s.y*H,s.r,0,Math.PI*2); ctx.fill();
        });
        portals.forEach(function(p){
            p.angle+=p.speed; var px=p.x*W, py=p.y*H, pr=p.r*Math.min(W,H);
            for(var ring=0;ring<5;ring++){
                var ral=p.alpha*(1-ring*.15)*(0.6+0.4*Math.abs(Math.sin(ph+ring*.8)));
                ctx.strokeStyle='rgba('+p.col+','+ral+')'; ctx.lineWidth=1.5-ring*.25;
                ctx.shadowBlur=ring===0?14:0; ctx.shadowColor='rgba('+p.col+',0.5)';
                ctx.beginPath(); ctx.ellipse(px,py,pr*(1-ring*.06),pr*.38*(1-ring*.06),p.angle,0,Math.PI*2); ctx.stroke();
            }
            ctx.shadowBlur=0;
        });
        bgClocks.forEach(function(ck){ drawClock(ck,W,H); });
        gears.forEach(function(g){
            g.x+=g.vx; g.y+=g.vy; g.angle+=g.speed;
            if(g.x<-.12)g.x=1.12; if(g.x>1.12)g.x=-.12;
            if(g.y<-.12)g.y=1.12; if(g.y>1.12)g.y=-.12;
            drawGear(g.x*W,g.y*H,g.r*Math.min(W,H),g.teeth,g.angle,g.col,g.alpha);
        });
        hourglasses.forEach(function(hg){
            hg.x+=hg.vx; hg.y+=hg.vy;
            if(hg.x<-.12)hg.x=1.12; if(hg.x>1.12)hg.x=-.12;
            if(hg.y<-.12)hg.y=1.12; if(hg.y>1.12)hg.y=-.12;
            drawHourglass(hg,W,H);
        });
        floatNums.forEach(function(n){
            n.x+=n.vx; n.y+=n.vy; n.phase+=n.ps;
            if(n.x<-.05)n.x=1.05; if(n.x>1.05)n.x=-.05;
            if(n.y<-.05)n.y=1.05; if(n.y>1.05)n.y=-.05;
            var al=n.alpha*(0.5+0.5*Math.abs(Math.sin(n.phase)));
            ctx.save(); ctx.font='bold '+(n.size*Math.min(W,H))+'px serif';
            ctx.fillStyle='rgba(212,175,55,'+al.toFixed(2)+')';
            ctx.textAlign='center'; ctx.textBaseline='middle';
            ctx.shadowBlur=8; ctx.shadowColor='rgba(212,175,55,'+al+')';
            ctx.fillText(n.num,n.x*W,n.y*H); ctx.restore(); ctx.shadowBlur=0;
        });
        sand.forEach(function(p){
            p.x+=p.vx; p.y+=p.vy; p.phase+=p.ps;
            if(p.y>1.05){p.y=-.05;p.x=Math.random();}
            if(p.x<-.02)p.x=1.02; if(p.x>1.02)p.x=-.02;
            var al=p.alpha*(0.4+0.6*Math.abs(Math.sin(p.phase)));
            ctx.fillStyle='rgba('+p.col+','+al.toFixed(2)+')';
            ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2); ctx.fill();
        });
        if(Math.random()<.003){
            var ry=Math.random()*H, rx=Math.random()*W;
            (function animTW(r,maxR,wxx,wyy){
                if(state.theme!=='chronoinfinity')return;
                ctx.strokeStyle='rgba(212,175,55,'+(0.28*(1-r/maxR)).toFixed(2)+')';
                ctx.lineWidth=1.4*(1-r/maxR); ctx.beginPath(); ctx.arc(wxx,wyy,r,0,Math.PI*2); ctx.stroke();
                if(r<maxR) requestAnimationFrame(function(){animTW(r+2.5,maxR,wxx,wyy);});
            })(8,160+Math.random()*100,rx,ry);
        }
        state.bgAnimFrame=requestAnimationFrame(draw);
    }
    window.addEventListener('resize',function(){W=window.innerWidth;H=window.innerHeight;ctx.canvas.width=W;ctx.canvas.height=H;},{passive:true});
    draw();
}


// ❖ MYTHIC Elysium — Paradise: aurora sky, floating kingdoms, crystal mountains, waterfalls, lanterns, dragons, butterflies
function runElysiumAnimation() {
    var ctx = setupCanvas('bgCanvas'); if (!ctx) return;
    var W = window.innerWidth, H = window.innerHeight, ph = 0;

    // ─ Custom cursor ─
    var curEl = document.getElementById('elysium-cursor');
    if (!curEl) { curEl = document.createElement('div'); curEl.id = 'elysium-cursor'; document.body.appendChild(curEl); }
    var sparks = [];
    function onCursorMove(e) {
        if (state.theme !== 'elysium') { document.removeEventListener('mousemove', onCursorMove); return; }
        curEl.style.left = e.clientX + 'px'; curEl.style.top = e.clientY + 'px';
        if (Math.random() < .55) {
            var sp = document.createElement('div'); sp.className = 'elysium-spark';
            var sz = 1.5 + Math.random() * 5.5;
            var cols = ['199,125,255','116,199,255','249,199,79','255,157,226','116,255,157','255,255,255'];
            var col = cols[Math.floor(Math.random() * cols.length)];
            sp.style.cssText = 'width:'+sz+'px;height:'+sz+'px;left:'+(e.clientX+(Math.random()-.5)*20)+'px;top:'+(e.clientY+(Math.random()-.5)*20)+'px;'
                +'background:rgba('+col+',1);box-shadow:0 0 '+(sz*2.8)+'px rgba('+col+',.85);';
            document.body.appendChild(sp);
            setTimeout(function(){ try{sp.remove();}catch(e){} }, 1100);
        }
    }
    document.addEventListener('mousemove', onCursorMove, { passive: true });

    // ─ Sky palette (interpolates slowly) ─
    var skyPhase = 0;

    // ─ Stars ─
    var stars = Array.from({ length: 220 }, function() {
        return { x: Math.random(), y: Math.random() * .6, r: .2 + Math.random() * 1.5,
            a: Math.random() * Math.PI * 2, as: .006 + Math.random() * .018 };
    });

    // ─ Moon ─
    var moon = { x: .15, y: .09, r: .032 };

    // ─ Sun ─
    var sun = { x: .72, y: .62, r: .055, rayCount: 14 };

    // ─ Aurora bands ─
    var auroraBands = Array.from({ length: 5 }, function(_, i) {
        var cols = [
            [120, 240, 210, .22], [155, 93, 229, .18], [0, 180, 216, .2],
            [249, 199, 79, .14], [255, 110, 200, .16]
        ];
        return {
            col: cols[i], phase: Math.random() * Math.PI * 2,
            y: .05 + i * .065, amp: .028 + Math.random() * .032,
            freq: 2 + Math.random() * 3, speed: .004 + Math.random() * .006,
            width: .018 + Math.random() * .022
        };
    });

    // ─ Double rainbow ─
    var rainbow = { cx: -.1, cy: 1.18, r1: 1.1, r2: 1.26, alpha: .38 };

    // ─ Clouds ─
    function makeClouds(n, yMin, yMax, scaleMin, scaleMax, alphaMin, alphaMax, speedMin, speedMax) {
        return Array.from({ length: n }, function() {
            return {
                x: Math.random(), y: yMin + Math.random() * (yMax - yMin),
                s: scaleMin + Math.random() * (scaleMax - scaleMin),
                a: alphaMin + Math.random() * (alphaMax - alphaMin),
                sp: speedMin + Math.random() * (speedMax - speedMin),
                blobs: Array.from({ length: 4 + Math.floor(Math.random() * 4) }, function() {
                    return { dx: (Math.random() - .3) * .08, dy: (Math.random() - .5) * .018, r: .022 + Math.random() * .04 };
                })
            };
        });
    }
    var cloudsA = makeClouds(8, .06, .28, .6, 1.0, .12, .22, .00012, .00022); // far
    var cloudsB = makeClouds(6, .22, .48, .9, 1.4, .3,  .48, .00020, .00035); // mid
    var cloudsC = makeClouds(4, .42, .62, 1.2, 1.9, .55, .78, .00028, .00045); // near

    // ─ Crystal mountains ─
    var mountains = Array.from({ length: 10 }, function(_, i) {
        return {
            x: i / 9 + (Math.random() - .5) * .12,
            h: .06 + Math.random() * .14,
            w: .04 + Math.random() * .08,
            col: ['199,125,255','116,199,255','180,220,255','249,199,79','255,255,255'][Math.floor(Math.random() * 5)],
            sparkles: Array.from({ length: 5 }, function() {
                return { ox: (Math.random() - .5) * .9, oy: .1 + Math.random() * .7, phase: Math.random() * Math.PI * 2, ps: .04 + Math.random() * .08 };
            })
        };
    });

    // ─ Floating islands ─
    var islands = Array.from({ length: 7 }, function(_, i) {
        var size = .04 + Math.random() * .07;
        var hasCastle = Math.random() > .38;
        var hasWaterfall = Math.random() > .3;
        return {
            x: .04 + (i / 6.5) + (Math.random() - .5) * .1,
            y: .25 + Math.random() * .38,
            rx: size, ry: size * .36,
            bobPhase: Math.random() * Math.PI * 2, bobAmp: .006 + Math.random() * .01,
            bobSpeed: .003 + Math.random() * .005,
            hasCastle: hasCastle, hasWaterfall: hasWaterfall,
            col: ['155,113,78','130,98,65','168,128,88'][Math.floor(Math.random() * 3)],
            wfPhase: 0
        };
    });

    // ─ Birds (V formations) ─
    var flocks = Array.from({ length: 4 }, function() {
        return {
            x: Math.random(), y: .08 + Math.random() * .3,
            vx: .00025 + Math.random() * .0003, vy: (Math.random() - .5) * .0001,
            birds: Array.from({ length: 5 }, function(_, bi) {
                return { ox: bi * .022, oy: Math.abs(bi - 2) * .014 };
            }),
            wingPhase: Math.random() * Math.PI * 2
        };
    });

    // ─ Butterflies ─
    var butterflies = Array.from({ length: 22 }, function() {
        var cols = ['199,125,255','116,199,255','249,199,79','255,157,226','116,255,157','255,180,80'];
        return {
            x: Math.random(), y: .3 + Math.random() * .55,
            vx: (Math.random() - .5) * .0006, vy: (Math.random() - .5) * .0004,
            wingPhase: Math.random() * Math.PI * 2, wingSpeed: .08 + Math.random() * .1,
            size: .006 + Math.random() * .009,
            col: cols[Math.floor(Math.random() * cols.length)], alpha: .5 + Math.random() * .4
        };
    });

    // ─ Petals ─
    var petals = Array.from({ length: 70 }, function() {
        var cols = ['255,182,213','255,228,240','255,220,200','249,199,79','199,125,255'];
        return {
            x: Math.random(), y: Math.random(),
            vx: (Math.random() - .5) * .0004, vy: .0003 + Math.random() * .0007,
            angle: Math.random() * Math.PI * 2, as: (Math.random() - .5) * .04,
            size: .003 + Math.random() * .006,
            col: cols[Math.floor(Math.random() * cols.length)], alpha: .3 + Math.random() * .55
        };
    });

    // ─ Lanterns ─
    var lanterns = Array.from({ length: 28 }, function() {
        return {
            x: Math.random(), y: .4 + Math.random() * .55,
            vy: .00025 + Math.random() * .0005,
            vx: Math.sin(Math.random() * Math.PI * 2) * .00018,
            r: .006 + Math.random() * .012,
            phase: Math.random() * Math.PI * 2, ps: .02 + Math.random() * .03,
            col: Math.random() > .5 ? '249,199,79' : '255,150,80'
        };
    });

    // ─ Golden dust motes ─
    var dust = Array.from({ length: 180 }, function() {
        var cols = ['249,199,79','255,255,200','199,125,255','116,199,255','255,255,255'];
        return {
            x: Math.random(), y: Math.random(),
            vx: (Math.random() - .5) * .0003, vy: -(Math.random() * .0004),
            r: .3 + Math.random() * 1.4,
            alpha: .1 + Math.random() * .38,
            phase: Math.random() * Math.PI * 2, ps: .02 + Math.random() * .04,
            col: cols[Math.floor(Math.random() * cols.length)]
        };
    });

    // ─ Shooting stars ─
    var shootingStars = [], ssTimer = 0;
    function spawnShootingStars() {
        var n = 1 + Math.floor(Math.random() * 3);
        for (var i = 0; i < n; i++) {
            shootingStars.push({
                x: Math.random() * .9, y: Math.random() * .45,
                vx: .014 + Math.random() * .012, vy: .006 + Math.random() * .006,
                len: .06 + Math.random() * .08, life: 1,
                decay: .018 + Math.random() * .014,
                col: ['255,255,255','249,199,79','116,199,255'][Math.floor(Math.random() * 3)]
            });
        }
    }

    // ─ Dragons (far, tiny silhouettes) ─
    var dragons = Array.from({ length: 2 }, function() {
        return {
            x: Math.random(), y: .1 + Math.random() * .25,
            vx: .0003 + Math.random() * .0004, bodyPhase: Math.random() * Math.PI * 2,
            size: .009 + Math.random() * .008, alpha: .12 + Math.random() * .15
        };
    });

    // ── Draw helpers ──
    function drawCloud(c) {
        var cx = c.x * W, cy = c.y * H, s = c.s;
        var g = ctx.createRadialGradient(cx, cy - c.blobs[0].r * .3 * H, 0, cx, cy, s * .1 * W);
        g.addColorStop(0, 'rgba(255,255,255,' + c.a + ')');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        c.blobs.forEach(function(b) {
            var bx = cx + b.dx * W * s, by = cy + b.dy * H * s, br = b.r * Math.min(W, H) * s;
            var bg = ctx.createRadialGradient(bx, by - br * .2, 0, bx, by, br);
            bg.addColorStop(0, 'rgba(255,255,255,' + c.a + ')');
            bg.addColorStop(1, 'rgba(248,240,255,0)');
            ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fill();
        });
    }

    function drawIsland(isl) {
        var ix = isl.x * W, iy = (isl.y + Math.sin(isl.bobPhase) * isl.bobAmp) * H;
        var rx = isl.rx * Math.min(W, H), ry = isl.ry * Math.min(W, H);
        isl.bobPhase += isl.bobSpeed;
        // Shadow
        var sg = ctx.createRadialGradient(ix, iy + ry * 1.6, 0, ix, iy, rx * 2);
        sg.addColorStop(0, 'rgba(50,20,80,.12)'); sg.addColorStop(1, 'rgba(50,20,80,0)');
        ctx.fillStyle = sg; ctx.beginPath(); ctx.ellipse(ix, iy + ry * 2.2, rx * 1.6, ry * .6, 0, 0, Math.PI * 2); ctx.fill();
        // Rocky base
        ctx.save(); ctx.beginPath(); ctx.ellipse(ix, iy, rx, ry, 0, 0, Math.PI);
        ctx.fillStyle = 'rgba(' + isl.col + ',0.88)'; ctx.fill();
        // Gradient on base
        var bg2 = ctx.createLinearGradient(ix - rx, iy, ix - rx, iy + ry);
        bg2.addColorStop(0, 'rgba(255,255,255,.12)'); bg2.addColorStop(1, 'rgba(0,0,0,.18)');
        ctx.fillStyle = bg2; ctx.fill(); ctx.restore();
        // Green grass top
        ctx.save(); ctx.beginPath(); ctx.ellipse(ix, iy, rx, ry * .72, 0, Math.PI, Math.PI * 2);
        var gg = ctx.createRadialGradient(ix, iy - ry * .5, 0, ix, iy - ry * .3, rx);
        gg.addColorStop(0, 'rgba(140,210,100,.92)'); gg.addColorStop(.7, 'rgba(100,180,70,.85)'); gg.addColorStop(1, 'rgba(70,150,50,.7)');
        ctx.fillStyle = gg; ctx.fill(); ctx.restore();
        // Trees (little circles on sticks)
        var treeX = [-.45, -.2, .1, .38, .62];
        for (var ti = 0; ti < 3; ti++) {
            var tx = ix + treeX[ti] * rx * 1.1, ty = iy - ry * .65;
            ctx.strokeStyle = 'rgba(80,50,20,.6)'; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(tx, ty - ry * .38); ctx.stroke();
            ctx.fillStyle = 'rgba(80,170,60,.7)';
            ctx.beginPath(); ctx.arc(tx, ty - ry * .52, ry * .22, 0, Math.PI * 2); ctx.fill();
        }
        // Castle spires
        if (isl.hasCastle) {
            var cx2 = ix + rx * .12, cy2 = iy - ry * .7;
            ctx.fillStyle = 'rgba(240,230,255,.88)';
            ctx.fillRect(cx2 - ry * .18, cy2 - ry * .9, ry * .36, ry * .9);
            ctx.fillRect(cx2 - ry * .36, cy2 - ry * .5, ry * .25, ry * .5);
            ctx.fillStyle = 'rgba(199,125,255,.8)';
            ctx.beginPath(); ctx.moveTo(cx2 - ry * .18, cy2 - ry * .9); ctx.lineTo(cx2 + ry * .18, cy2 - ry * .9); ctx.lineTo(cx2, cy2 - ry * 1.42); ctx.closePath(); ctx.fill();
            ctx.beginPath(); ctx.moveTo(cx2 - ry * .36, cy2 - ry * .5); ctx.lineTo(cx2 - ry * .11, cy2 - ry * .5); ctx.lineTo(cx2 - ry * .235, cy2 - ry * .85); ctx.closePath(); ctx.fill();
        }
        // Waterfall
        if (isl.hasWaterfall) {
            isl.wfPhase += .04;
            var wfx = ix - rx * .6;
            for (var wi = 0; wi < 8; wi++) {
                var wy = iy + ry + (wi / 8) * ry * 2.5;
                var wa = (.7 - wi / 8) * .55;
                var ww = ry * .14 * (1 - wi * .08);
                ctx.fillStyle = 'rgba(180,230,255,' + wa.toFixed(2) + ')';
                ctx.fillRect(wfx - ww / 2 + Math.sin(isl.wfPhase + wi) * ww * .5, wy, ww, ry * .35);
            }
        }
    }

    function drawMountain(m, horizonY) {
        var mx = m.x * W, mh = m.h * H, mw = m.w * W, my = horizonY;
        // Crystal body
        var mg = ctx.createLinearGradient(mx, my, mx, my - mh);
        mg.addColorStop(0, 'rgba(' + m.col + ',.35)');
        mg.addColorStop(.6, 'rgba(' + m.col + ',.25)');
        mg.addColorStop(1, 'rgba(255,255,255,.82)');
        ctx.fillStyle = mg;
        ctx.beginPath(); ctx.moveTo(mx - mw / 2, my); ctx.lineTo(mx, my - mh); ctx.lineTo(mx + mw / 2, my); ctx.closePath(); ctx.fill();
        // Highlight edge
        ctx.strokeStyle = 'rgba(' + m.col + ',.45)'; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(mx, my - mh); ctx.lineTo(mx + mw * .35, my); ctx.stroke();
        // Sparkles
        m.sparkles.forEach(function(sp) {
            sp.phase += sp.ps;
            var al = Math.max(0, Math.sin(sp.phase)) * .8;
            if (al < .05) return;
            var sx = mx + sp.ox * mw * .4, sy = my - mh * (.15 + sp.oy * .7);
            ctx.fillStyle = 'rgba(255,255,255,' + al.toFixed(2) + ')';
            ctx.beginPath(); ctx.arc(sx, sy, 1.5, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath();
            ctx.moveTo(sx - 4, sy); ctx.lineTo(sx + 4, sy);
            ctx.moveTo(sx, sy - 4); ctx.lineTo(sx, sy + 4);
            ctx.strokeStyle = 'rgba(255,255,255,' + (al * .6).toFixed(2) + ')'; ctx.lineWidth = .8; ctx.stroke();
        });
    }

    function drawBird(bx, by, wingPhase, size) {
        var wingA = Math.sin(wingPhase) * .35;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(bx - size * .5, by - size * wingA * 2, bx - size, by);
        ctx.moveTo(bx, by);
        ctx.quadraticCurveTo(bx + size * .5, by - size * wingA * 2, bx + size, by);
        ctx.strokeStyle = 'rgba(80,40,100,.35)'; ctx.lineWidth = 1; ctx.stroke();
    }

    function drawButterfly(bf) {
        bf.wingPhase += bf.wingSpeed; bf.x += bf.vx; bf.y += bf.vy;
        bf.vx += Math.sin(bf.wingPhase * .7) * .00008;
        if (bf.x < -.05) bf.x = 1.05; if (bf.x > 1.05) bf.x = -.05;
        if (bf.y < .2) bf.y = .9; if (bf.y > 1.0) bf.y = .2;
        var bx = bf.x * W, by = bf.y * H, sz = bf.size * Math.min(W, H);
        var wingOpen = Math.abs(Math.sin(bf.wingPhase));
        ctx.save(); ctx.globalAlpha = bf.alpha;
        var wg = ctx.createRadialGradient(bx, by, 0, bx, by, sz);
        wg.addColorStop(0, 'rgba(' + bf.col + ',0.9)'); wg.addColorStop(1, 'rgba(' + bf.col + ',0)');
        ctx.fillStyle = wg;
        // Left wing
        ctx.beginPath(); ctx.ellipse(bx - sz * wingOpen * .9, by - sz * .3, sz * wingOpen, sz * .7, -Math.PI * .1, 0, Math.PI * 2); ctx.fill();
        // Right wing
        ctx.beginPath(); ctx.ellipse(bx + sz * wingOpen * .9, by - sz * .3, sz * wingOpen, sz * .7, Math.PI * .1, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }

    // ── Main draw loop ──
    function draw() {
        if (state.theme !== 'elysium') { document.removeEventListener('mousemove', onCursorMove); return; }
        W = window.innerWidth; H = window.innerHeight;
        ctx.clearRect(0, 0, W, H); ph += .003; skyPhase += .001;

        // ── SKY GRADIENT ──
        var horizonY = H * .65;
        var skyG = ctx.createLinearGradient(0, 0, 0, H);
        var t1 = .5 + .5 * Math.sin(skyPhase * .4);
        skyG.addColorStop(0,   'rgb(' + lerp(20,30,t1) + ',' + lerp(10,22,t1) + ',' + lerp(60,80,t1) + ')');
        skyG.addColorStop(.28, 'rgb(' + lerp(60,80,t1) + ',' + lerp(20,40,t1) + ',' + lerp(130,150,t1) + ')');
        skyG.addColorStop(.55, 'rgb(' + lerp(140,160,t1) + ',' + lerp(80,100,t1) + ',' + lerp(180,200,t1) + ')');
        skyG.addColorStop(.72, 'rgb(255,' + lerp(170,195,t1) + ',' + lerp(100,130,t1) + ')');
        skyG.addColorStop(.85, 'rgb(255,' + lerp(220,235,t1) + ',' + lerp(150,180,t1) + ')');
        skyG.addColorStop(1,   'rgb(255,' + lerp(240,248,t1) + ',' + lerp(200,220,t1) + ')');
        ctx.fillStyle = skyG; ctx.fillRect(0, 0, W, H);

        // ── MOON ──
        var mx = moon.x * W, my = moon.y * H, mr = moon.r * Math.min(W, H);
        var moonG = ctx.createRadialGradient(mx - mr * .2, my - mr * .2, 0, mx, my, mr);
        moonG.addColorStop(0, 'rgba(255,255,240,.92)'); moonG.addColorStop(.7, 'rgba(240,240,220,.75)'); moonG.addColorStop(1, 'rgba(220,220,200,0)');
        var moonGlow = ctx.createRadialGradient(mx, my, mr * .5, mx, my, mr * 2.8);
        moonGlow.addColorStop(0, 'rgba(255,255,220,.18)'); moonGlow.addColorStop(1, 'rgba(255,255,200,0)');
        ctx.fillStyle = moonGlow; ctx.beginPath(); ctx.arc(mx, my, mr * 2.8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = moonG; ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2); ctx.fill();

        // ── STARS ──
        stars.forEach(function(s) {
            s.a += s.as;
            var al = (.04 + .45 * Math.abs(Math.sin(s.a))) * (1 - s.y / .65);
            if (al < .02) return;
            ctx.fillStyle = 'rgba(255,255,240,' + al.toFixed(2) + ')';
            ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2); ctx.fill();
        });

        // ── AURORA BOREALIS ──
        auroraBands.forEach(function(b) {
            b.phase += b.speed;
            var pts = 80, bandW = b.width * H;
            ctx.beginPath();
            for (var i = 0; i <= pts; i++) {
                var bx2 = (i / pts) * W;
                var by2 = b.y * H + Math.sin(b.phase + (i / pts) * b.freq * Math.PI * 2) * b.amp * H;
                if (i === 0) ctx.moveTo(bx2, by2); else ctx.lineTo(bx2, by2);
            }
            for (var i2 = pts; i2 >= 0; i2--) {
                var bx3 = (i2 / pts) * W;
                var by3 = b.y * H + Math.sin(b.phase + (i2 / pts) * b.freq * Math.PI * 2) * b.amp * H + bandW;
                ctx.lineTo(bx3, by3);
            }
            ctx.closePath();
            var al2 = b.col[3] * (.7 + .3 * Math.abs(Math.sin(ph * .7 + b.phase)));
            var ag2 = ctx.createLinearGradient(0, b.y * H, 0, b.y * H + bandW);
            ag2.addColorStop(0, 'rgba(' + b.col[0] + ',' + b.col[1] + ',' + b.col[2] + ',0)');
            ag2.addColorStop(.4, 'rgba(' + b.col[0] + ',' + b.col[1] + ',' + b.col[2] + ',' + al2.toFixed(2) + ')');
            ag2.addColorStop(1, 'rgba(' + b.col[0] + ',' + b.col[1] + ',' + b.col[2] + ',0)');
            ctx.fillStyle = ag2; ctx.fill();
        });

        // ── SUN + GOD RAYS ──
        var sx = sun.x * W, sy = sun.y * H, sr = sun.r * Math.min(W, H);
        var sunG = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr * 3.5);
        sunG.addColorStop(0, 'rgba(255,255,220,.95)');
        sunG.addColorStop(.2, 'rgba(255,220,80,.75)');
        sunG.addColorStop(.6, 'rgba(255,160,30,.18)');
        sunG.addColorStop(1, 'rgba(255,120,0,0)');
        ctx.fillStyle = sunG; ctx.beginPath(); ctx.arc(sx, sy, sr * 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'rgba(255,252,200,.96)'; ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
        // God rays
        for (var ri = 0; ri < sun.rayCount; ri++) {
            var ra = (ri / sun.rayCount) * Math.PI * 2 + ph * .08;
            var rLen = (.22 + Math.sin(ph * 1.2 + ri) * .06) * Math.min(W, H);
            var rWidth = (.012 + Math.random() * .004) * Math.min(W, H);
            var rg = ctx.createLinearGradient(sx, sy, sx + Math.cos(ra) * rLen, sy + Math.sin(ra) * rLen);
            rg.addColorStop(0, 'rgba(255,220,80,.22)'); rg.addColorStop(1, 'rgba(255,180,30,0)');
            ctx.save(); ctx.translate(sx, sy); ctx.rotate(ra);
            ctx.fillStyle = rg;
            ctx.beginPath(); ctx.moveTo(sr * .9, -rWidth / 2); ctx.lineTo(rLen, -rWidth * .1);
            ctx.lineTo(rLen, rWidth * .1); ctx.lineTo(sr * .9, rWidth / 2); ctx.closePath(); ctx.fill();
            ctx.restore();
        }

        // ── DOUBLE RAINBOW ──
        var rcx = rainbow.cx * W, rcy = rainbow.cy * H;
        var rainbowColors = ['255,60,60','255,140,0','249,199,79','80,210,80','80,150,255','120,60,220','200,60,180'];
        [rainbow.r2, rainbow.r1].forEach(function(rr, ri2) {
            var rAlpha = ri2 === 0 ? rainbow.alpha * .5 : rainbow.alpha;
            for (var ci = 0; ci < rainbowColors.length; ci++) {
                var bandR = rr * Math.min(W, H) + (ci - 3) * (Math.min(W, H) * .018);
                ctx.beginPath(); ctx.arc(rcx, rcy, bandR, Math.PI * 1.05, Math.PI * 1.95, false);
                ctx.strokeStyle = 'rgba(' + rainbowColors[ci] + ',' + (rAlpha * (.55 + .45 * Math.abs(Math.sin(ph * .5)))).toFixed(2) + ')';
                ctx.lineWidth = Math.min(W, H) * .014; ctx.stroke();
            }
        });

        // ── FAR CLOUDS ──
        cloudsA.forEach(function(c) { c.x -= c.sp; if (c.x < -.25) c.x = 1.3; drawCloud(c); });

        // ── CRYSTAL MOUNTAINS ──
        mountains.forEach(function(m) { drawMountain(m, horizonY + H * .02); });

        // ── HORIZON MIST ──
        var mistG = ctx.createLinearGradient(0, horizonY - H * .12, 0, horizonY + H * .08);
        mistG.addColorStop(0, 'rgba(255,240,220,0)');
        mistG.addColorStop(.5, 'rgba(255,245,230,.22)');
        mistG.addColorStop(1, 'rgba(255,248,238,0)');
        ctx.fillStyle = mistG; ctx.fillRect(0, horizonY - H * .12, W, H * .2);

        // ── MID CLOUDS ──
        cloudsB.forEach(function(c) { c.x -= c.sp; if (c.x < -.35) c.x = 1.4; drawCloud(c); });

        // ── FLOATING ISLANDS ──
        islands.forEach(function(isl) { drawIsland(isl); });

        // ── BIRDS ──
        flocks.forEach(function(fk) {
            fk.x += fk.vx; fk.y += fk.vy + Math.sin(ph * .8 + fk.x) * .00008;
            fk.wingPhase += .1;
            if (fk.x > 1.3) fk.x = -.3;
            var fsz = fk.birds[0].size || .9;
            fk.birds.forEach(function(b) { drawBird((fk.x + b.ox) * W, (fk.y + b.oy) * H, fk.wingPhase, fsz * H * .012); });
        });

        // ── NEAR CLOUDS ──
        cloudsC.forEach(function(c) { c.x -= c.sp; if (c.x < -.45) c.x = 1.45; drawCloud(c); });

        // ── BUTTERFLIES ──
        butterflies.forEach(function(bf) { drawButterfly(bf); });

        // ── DRAGONS (far silhouettes) ──
        dragons.forEach(function(d) {
            d.x += d.vx; d.bodyPhase += .04;
            if (d.x > 1.25) d.x = -.3;
            var dx = d.x * W, dy = d.y * H, ds = d.size * Math.min(W, H);
            ctx.save(); ctx.globalAlpha = d.alpha;
            ctx.fillStyle = 'rgba(80,40,100,1)';
            // Body (S-curve using arcs)
            var seg = 6;
            for (var si = 0; si < seg; si++) {
                var swave = Math.sin(d.bodyPhase + si * .9) * ds * .35;
                var ssx = dx + si * ds * 1.2, ssy = dy + swave;
                ctx.beginPath(); ctx.arc(ssx, ssy, ds * (.55 - si * .07), 0, Math.PI * 2); ctx.fill();
            }
            // Wings
            var wx = dx + ds * .8, wy = dy + Math.sin(d.bodyPhase + .9) * ds * .35;
            ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx - ds * 1.8, wy - ds * 2.4); ctx.lineTo(wx + ds * .6, wy - ds * 1.2); ctx.closePath(); ctx.fill();
            ctx.beginPath(); ctx.moveTo(wx, wy); ctx.lineTo(wx - ds * 1.4, wy + ds * 2.2); ctx.lineTo(wx + ds * .5, wy + ds * 1.0); ctx.closePath(); ctx.fill();
            ctx.restore();
        });

        // ── PETALS ──
        petals.forEach(function(p) {
            p.x += p.vx + Math.sin(ph * 1.5 + p.y * 10) * .0003;
            p.y += p.vy; p.angle += p.as;
            if (p.y > 1.05) { p.y = -.05; p.x = Math.random(); }
            if (p.x < -.02) p.x = 1.02; if (p.x > 1.02) p.x = -.02;
            var ps2 = p.size * Math.min(W, H);
            ctx.save(); ctx.translate(p.x * W, p.y * H); ctx.rotate(p.angle);
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = 'rgba(' + p.col + ',1)';
            ctx.beginPath(); ctx.ellipse(0, 0, ps2, ps2 * .45, 0, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        });

        // ── LANTERNS ──
        lanterns.forEach(function(l) {
            l.x += l.vx + Math.sin(ph + l.phase) * .0002;
            l.y -= l.vy; l.phase += l.ps;
            if (l.y < -.1) { l.y = 1.05; l.x = Math.random(); }
            var lr2 = l.r * Math.min(W, H);
            var al3 = (.55 + .3 * Math.abs(Math.sin(l.phase)));
            var lg2 = ctx.createRadialGradient(l.x * W, l.y * H, 0, l.x * W, l.y * H, lr2 * 2.8);
            lg2.addColorStop(0, 'rgba(' + l.col + ',' + al3.toFixed(2) + ')');
            lg2.addColorStop(.5, 'rgba(' + l.col + ',' + (al3 * .4).toFixed(2) + ')');
            lg2.addColorStop(1, 'rgba(' + l.col + ',0)');
            ctx.fillStyle = lg2; ctx.beginPath(); ctx.arc(l.x * W, l.y * H, lr2 * 2.8, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgba(255,250,220,' + al3.toFixed(2) + ')';
            ctx.beginPath(); ctx.ellipse(l.x * W, l.y * H, lr2, lr2 * 1.4, 0, 0, Math.PI * 2); ctx.fill();
        });

        // ── GOLDEN DUST ──
        dust.forEach(function(d2) {
            d2.x += d2.vx; d2.y += d2.vy; d2.phase += d2.ps;
            if (d2.y < -.02) d2.y = 1.02;
            if (d2.x < -.02) d2.x = 1.02; if (d2.x > 1.02) d2.x = -.02;
            var al4 = d2.alpha * (.5 + .5 * Math.abs(Math.sin(d2.phase)));
            ctx.fillStyle = 'rgba(' + d2.col + ',' + al4.toFixed(2) + ')';
            ctx.beginPath(); ctx.arc(d2.x * W, d2.y * H, d2.r, 0, Math.PI * 2); ctx.fill();
        });

        // ── SHOOTING STARS ──
        ssTimer++; if (ssTimer > 200 + Math.random() * 300) { spawnShootingStars(); ssTimer = 0; }
        shootingStars = shootingStars.filter(function(ss) {
            ss.x += ss.vx; ss.y += ss.vy; ss.life -= ss.decay; if (ss.life <= 0) return false;
            var ssg = ctx.createLinearGradient(ss.x * W, ss.y * H, (ss.x - ss.len) * W, (ss.y - ss.len * .45) * H);
            ssg.addColorStop(0, 'rgba(' + ss.col + ',' + (ss.life * .9).toFixed(2) + ')');
            ssg.addColorStop(1, 'rgba(' + ss.col + ',0)');
            ctx.strokeStyle = ssg; ctx.lineWidth = 1.8 * ss.life;
            ctx.beginPath(); ctx.moveTo(ss.x * W, ss.y * H); ctx.lineTo((ss.x - ss.len) * W, (ss.y - ss.len * .45) * H); ctx.stroke();
            return true;
        });

        // ── LIGHT RAYS (bloom from sun) ──
        if (Math.random() < .018) {
            (function(px2, py2) {
                if (state.theme !== 'elysium') return;
                var rayA = Math.random() * Math.PI * 2;
                var rayLen = (.12 + Math.random() * .18) * Math.min(W, H);
                var trg = ctx.createLinearGradient(px2, py2, px2 + Math.cos(rayA) * rayLen, py2 + Math.sin(rayA) * rayLen);
                trg.addColorStop(0, 'rgba(255,230,120,.14)'); trg.addColorStop(1, 'rgba(255,200,80,0)');
                ctx.fillStyle = trg; ctx.beginPath();
                ctx.moveTo(px2, py2); ctx.lineTo(px2 + Math.cos(rayA + .04) * rayLen, py2 + Math.sin(rayA + .04) * rayLen);
                ctx.lineTo(px2 + Math.cos(rayA - .04) * rayLen, py2 + Math.sin(rayA - .04) * rayLen);
                ctx.closePath(); ctx.fill();
            })(sx, sy);
        }

        // ── CRYSTAL SPARKLE ripples ──
        if (Math.random() < .012) {
            var ripX = Math.random() * W, ripY = Math.random() * H;
            var ripCol = ['199,125,255','116,199,255','249,199,79','255,157,226'][Math.floor(Math.random() * 4)];
            (function animRip(r, mx2, wxx, wyy, cc) {
                if (state.theme !== 'elysium') return;
                ctx.strokeStyle = 'rgba(' + cc + ',' + (0.35 * (1 - r / mx2)).toFixed(2) + ')';
                ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(wxx, wyy, r, 0, Math.PI * 2); ctx.stroke();
                if (r < mx2) requestAnimationFrame(function() { animRip(r + 2.8, mx2, wxx, wyy, cc); });
            })(6, 110 + Math.random() * 70, ripX, ripY, ripCol);
        }

        state.bgAnimFrame = requestAnimationFrame(draw);
    }

    function lerp(a, b, t3) { return Math.round(a + (b - a) * t3); }
    window.addEventListener('resize', function() { W = window.innerWidth; H = window.innerHeight; ctx.canvas.width = W; ctx.canvas.height = H; }, { passive: true });
    draw();
}


// ══ MYTHIC — Aether Dominion: world beyond dimensions, pure energy controls reality ══
function runAetherDominionActivation() {
    if (SETTINGS.reducedMotion) return;

    // Use a real DOM element for the flash so pointer-events:none is
    // honoured on all mobile browsers (body::before can leak touch events).
    var flashDiv = document.createElement('div');
    flashDiv.className = 'aether-flash';
    document.body.appendChild(flashDiv);
    setTimeout(function() { if (flashDiv && flashDiv.remove) flashDiv.remove(); }, 900);

    var burstCount = window.innerWidth < 600 ? 22 : 40;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var colors = ['#00e5ff','#7df9ff','#b8f0ff','#a064ff','#00bfff'];
    for (var i = 0; i < burstCount; i++) {
        var p = document.createElement('span');
        p.className = 'aether-particle-burst';
        var size = (4 + Math.random() * 8).toFixed(1) + 'px';
        var angle = Math.random() * Math.PI * 2;
        var dist = 80 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.4;
        var dx = (Math.cos(angle) * dist).toFixed(1) + 'px';
        var dy = (Math.sin(angle) * dist).toFixed(1) + 'px';
        p.style.cssText = 'width:' + size + ';height:' + size + ';left:' + cx + 'px;top:' + cy + 'px;' +
            'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
            'box-shadow:0 0 8px rgba(0,229,255,0.7);';
        p.style.setProperty('--dx', dx);
        p.style.setProperty('--dy', dy);
        p.style.animationDelay = (Math.random() * 0.12).toFixed(2) + 's';
        document.body.appendChild(p);
        (function(el){ setTimeout(function(){ if (el.remove) el.remove(); }, 1300); })(p);
    }

    // Exclude sidebar, sidebar-overlay, and their children from the
    // assemble animation — they must never lose interactivity.
    var rawTargets = document.querySelectorAll(
        '#navbar, #app > *, .section-title, .script-card, .creator-card, .news-card, .executor-card, .settings-card, .bottom-nav'
    );
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var targets = Array.prototype.filter.call(rawTargets, function(el) {
        return el !== sidebar && el !== sidebarOverlay &&
               !el.closest('#sidebar') && !el.closest('#sidebar-overlay');
    });
    targets.forEach(function(el, i) {
        el.classList.remove('aether-assemble');
        el.style.setProperty('--aether-delay', Math.min(i * 25, 380) + 'ms');
    });
    void document.body.offsetWidth;
    targets.forEach(function(el) { el.classList.add('aether-assemble'); });
    setTimeout(function() {
        targets.forEach(function(el) { el.classList.remove('aether-assemble'); });
    }, 1400);
}

function runAetherDominionAnimation() {
    var ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    var canvas = ctx.canvas;
    var W = window.innerWidth, H = window.innerHeight;
    var isMobile = W < 700;
    var tick = 0, lastFrameTime = 0;
    var FPS_CAP = isMobile ? 36 : 55;
    var FRAME_MS = 1000 / FPS_CAP;
    var isVisible = !document.hidden;

    // ── Cursor system ──
    var hasFinePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    var cursorEl = document.getElementById('aether-cursor');
    if (!cursorEl) { cursorEl = document.createElement('div'); cursorEl.id = 'aether-cursor'; document.body.appendChild(cursorEl); }
    var mouseX = W / 2, mouseY = H / 2;
    var cursorX = mouseX, cursorY = mouseY;
    var lastOrbTime = 0;
    var orbColors = ['rgba(0,229,255,0.55)','rgba(125,249,255,0.45)','rgba(160,100,255,0.40)','rgba(0,180,255,0.50)'];

    function spawnOrb(x, y) {
        if (!hasFinePointer) return;
        var now = Date.now();
        if (now - lastOrbTime < 42) return;
        lastOrbTime = now;
        var o = document.createElement('span');
        o.className = 'aether-orb';
        var sz = (4 + Math.random() * 7).toFixed(1);
        o.style.cssText = 'width:'+sz+'px;height:'+sz+'px;left:'+x+'px;top:'+y+'px;background:'+
            orbColors[Math.floor(Math.random()*orbColors.length)]+';box-shadow:0 0 6px rgba(0,229,255,0.5);';
        document.body.appendChild(o);
        (function(el){ setTimeout(function(){ if(el&&el.remove)el.remove(); }, 950); })(o);
    }
    function updateCursor() {
        if (!hasFinePointer || !cursorEl) return;
        if (state.theme !== 'aetherdominion') return;
        cursorX += (mouseX - cursorX) * 0.22;
        cursorY += (mouseY - cursorY) * 0.22;
        cursorEl.style.left = cursorX.toFixed(1) + 'px';
        cursorEl.style.top  = cursorY.toFixed(1) + 'px';
        requestAnimationFrame(updateCursor);
    }
    var onCursorMove;
    if (hasFinePointer) {
        onCursorMove = function(e) { mouseX = e.clientX; mouseY = e.clientY; spawnOrb(e.clientX, e.clientY); };
        document.addEventListener('mousemove', onCursorMove, { passive: true });
        updateCursor();
    }

    function rand(a, b) { return a + Math.random() * (b - a); }
    function randInt(a, b) { return Math.floor(rand(a, b + 1)); }

    // Crystal islands
    var islands = [];
    var islandCount = isMobile ? 4 : 8;
    for (var ii = 0; ii < islandCount; ii++) {
        islands.push({
            x: rand(0.05, 0.95), y: rand(0.2, 0.85),
            size: rand(isMobile ? 28 : 40, isMobile ? 55 : 90),
            speed: rand(0.00008, 0.00018),
            phase: rand(0, Math.PI * 2),
            color: ['#1a3a6e','#0d2a5a','#1e4d7b','#163059'][randInt(0,3)],
            crystalColor: ['rgba(0,229,255,0.7)','rgba(125,249,255,0.6)','rgba(160,100,255,0.55)'][randInt(0,2)],
            layer: rand(0.2, 1.0)
        });
    }
    // Floating diamonds
    var diamonds = [];
    var diamondCount = isMobile ? 5 : 12;
    for (var di = 0; di < diamondCount; di++) {
        diamonds.push({
            x: rand(0, W), y: rand(0, H),
            size: rand(5, isMobile ? 18 : 28),
            vx: rand(-0.15, 0.15), vy: rand(-0.20, -0.05),
            alpha: rand(0.3, 0.8),
            rot: rand(0, Math.PI * 2),
            rotSpeed: rand(-0.005, 0.005),
            color: ['#00e5ff','#7df9ff','#b8f0ff','#a064ff'][randInt(0,3)]
        });
    }
    // Energy ribbons
    var ribbons = [];
    for (var ri = 0; ri < (isMobile ? 3 : 6); ri++) {
        ribbons.push({
            color: ['rgba(0,229,255,','rgba(125,249,255,','rgba(160,100,255,'][randInt(0,2)],
            speed: rand(0.4, 0.9),
            offset: rand(0, Math.PI * 2),
            amplitude: rand(H * 0.05, H * 0.15),
            baseY: rand(H * 0.1, H * 0.9),
            width: rand(1, 3)
        });
    }
    // Stars
    var stars = [];
    for (var si = 0; si < (isMobile ? 60 : 130); si++) {
        stars.push({
            x: rand(0, W), y: rand(0, H),
            r: rand(0.4, isMobile ? 1.5 : 2.2),
            alpha: rand(0.2, 0.9),
            twinkleSpeed: rand(0.01, 0.03),
            twinklePhase: rand(0, Math.PI * 2)
        });
    }
    // Shooting stars
    var shooters = [];
    var lastShooterTime = 0;
    // Dust particles
    var dustParticles = [];
    for (var dpi = 0; dpi < (isMobile ? 25 : 55); dpi++) {
        dustParticles.push({
            x: rand(0, W), y: rand(0, H),
            r: rand(1, 3.5),
            vx: rand(-0.3, 0.3), vy: rand(-0.4, 0.1),
            alpha: rand(0.2, 0.7),
            color: ['rgba(0,229,255,','rgba(125,249,255,','rgba(200,220,255,'][randInt(0,2)],
            phase: rand(0, Math.PI * 2),
            pulseSpeed: rand(0.02, 0.05)
        });
    }
    // Geometric structures
    var geoStructures = [];
    for (var gi = 0; gi < (isMobile ? 2 : 4); gi++) {
        geoStructures.push({
            x: rand(0.1, 0.9), y: rand(0.1, 0.9),
            radius: rand(30, isMobile ? 60 : 100),
            sides: [5,6,7][randInt(0,2)],
            rotSpeed: rand(0.001, 0.003) * (Math.random() > 0.5 ? 1 : -1),
            rot: rand(0, Math.PI * 2),
            alpha: rand(0.06, 0.16),
            layer: rand(0.3, 0.9)
        });
    }
    // Auroras
    var auroras = [];
    for (var ai = 0; ai < (isMobile ? 2 : 4); ai++) {
        auroras.push({
            y: rand(0.05, 0.45),
            width: rand(W * 0.4, W * 0.9),
            height: rand(40, 100),
            x: rand(0, W),
            speed: rand(0.0003, 0.0007),
            phase: rand(0, Math.PI * 2),
            color: ['rgba(0,180,255,','rgba(100,50,255,','rgba(0,229,255,','rgba(80,200,255,'][randInt(0,3)],
            alpha: rand(0.04, 0.12)
        });
    }

    function resizeAetherCanvas() {
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W; canvas.height = H; isMobile = W < 700;
    }

    function drawIsland(cx, cy, size, color, crystalColor) {
        ctx.beginPath();
        ctx.ellipse(cx, cy + size * 0.18, size * 0.9, size * 0.35, 0, 0, Math.PI * 2);
        ctx.fillStyle = color; ctx.globalAlpha = 0.75; ctx.fill();
        var spireCount = 3;
        for (var s = 0; s < spireCount; s++) {
            var sx = cx + (s - 1) * size * 0.38;
            var sh = size * (0.55 + s * 0.18);
            ctx.beginPath();
            ctx.moveTo(sx, cy - sh); ctx.lineTo(sx - size * 0.11, cy); ctx.lineTo(sx + size * 0.11, cy);
            ctx.closePath();
            ctx.fillStyle = crystalColor; ctx.globalAlpha = 0.55; ctx.fill();
            var grad = ctx.createRadialGradient(sx, cy - sh, 0, sx, cy - sh, size * 0.16);
            grad.addColorStop(0, 'rgba(0,229,255,0.75)'); grad.addColorStop(1, 'rgba(0,229,255,0)');
            ctx.beginPath(); ctx.arc(sx, cy - sh, size * 0.16, 0, Math.PI * 2);
            ctx.fillStyle = grad; ctx.globalAlpha = 0.65; ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    function drawDiamond(x, y, size, rot, color, alpha) {
        ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(0, -size); ctx.lineTo(size * 0.6, 0); ctx.lineTo(0, size * 0.8); ctx.lineTo(-size * 0.6, 0);
        ctx.closePath();
        ctx.fillStyle = color; ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 0.7; ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.5); ctx.lineTo(size * 0.28, 0); ctx.lineTo(0, size * 0.35); ctx.lineTo(-size * 0.28, 0);
        ctx.closePath(); ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fill();
        ctx.restore();
    }

    function drawHexRing(cx, cy, radius, sides, rot, alpha) {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.globalAlpha = alpha;
        ctx.strokeStyle = '#00e5ff'; ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (var v = 0; v < sides; v++) {
            var ang = (v / sides) * Math.PI * 2;
            if (v === 0) ctx.moveTo(Math.cos(ang) * radius, Math.sin(ang) * radius);
            else ctx.lineTo(Math.cos(ang) * radius, Math.sin(ang) * radius);
        }
        ctx.closePath(); ctx.stroke();
        ctx.globalAlpha = alpha * 0.45; ctx.lineWidth = 0.6;
        ctx.beginPath();
        for (var v2 = 0; v2 < sides; v2++) {
            var ang2 = (v2 / sides) * Math.PI * 2;
            if (v2 === 0) ctx.moveTo(Math.cos(ang2) * radius * 0.58, Math.sin(ang2) * radius * 0.58);
            else ctx.lineTo(Math.cos(ang2) * radius * 0.58, Math.sin(ang2) * radius * 0.58);
        }
        ctx.closePath(); ctx.stroke(); ctx.restore();
    }

    function draw(ts) {
        if (!isVisible) return;
        if (ts - lastFrameTime < FRAME_MS) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        lastFrameTime = ts;
        ctx.clearRect(0, 0, W, H);

        // Background gradient
        var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, '#010714'); bgGrad.addColorStop(0.4, '#020c1f'); bgGrad.addColorStop(1, '#010510');
        ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, W, H);

        var t = tick * 0.016;

        // Auroras
        auroras.forEach(function(a) {
            a.phase += a.speed;
            var ax = a.x + Math.sin(a.phase) * W * 0.1;
            var ay = a.y * H + Math.cos(a.phase * 0.7) * H * 0.03;
            var grad = ctx.createRadialGradient(ax, ay, 0, ax, ay, a.width * 0.5);
            grad.addColorStop(0, a.color + a.alpha + ')'); grad.addColorStop(1, a.color + '0)');
            ctx.fillStyle = grad; ctx.globalAlpha = 1;
            ctx.beginPath(); ctx.ellipse(ax, ay, a.width * 0.5, a.height, 0, 0, Math.PI * 2); ctx.fill();
        });

        // Stars
        ctx.globalAlpha = 1;
        stars.forEach(function(s) {
            s.twinklePhase += s.twinkleSpeed;
            var a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinklePhase));
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = '#b8f0ff'; ctx.globalAlpha = a; ctx.fill();
        });
        ctx.globalAlpha = 1;

        // Islands back
        islands.forEach(function(isl) {
            if (isl.layer < 0.5) {
                drawIsland(
                    W * isl.x + Math.sin(t * isl.speed * 800 + isl.phase) * 12 * isl.layer,
                    H * isl.y + Math.cos(t * isl.speed * 600 + isl.phase) * 8 * isl.layer,
                    isl.size * isl.layer, isl.color, isl.crystalColor
                );
            }
        });

        // Geo structures
        geoStructures.forEach(function(g) {
            g.rot += g.rotSpeed;
            drawHexRing(
                W * g.x + Math.sin(t * 0.15 + g.rot) * 18 * g.layer,
                H * g.y + Math.cos(t * 0.10 + g.rot) * 12 * g.layer,
                g.radius, g.sides, g.rot, g.alpha
            );
        });

        // Energy ribbons
        ribbons.forEach(function(rib) {
            ctx.beginPath(); ctx.globalAlpha = 0.35; ctx.lineWidth = rib.width;
            ctx.strokeStyle = rib.color + '0.7)';
            for (var px = 0; px <= W; px += 4) {
                var py = rib.baseY + Math.sin((px / W) * Math.PI * 3 + t * rib.speed + rib.offset) * rib.amplitude;
                if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();
            ctx.lineWidth = rib.width * 3; ctx.globalAlpha = 0.07; ctx.stroke();
            ctx.globalAlpha = 1;
        });

        // Shooting stars
        var nowMs = Date.now();
        if (nowMs - lastShooterTime > (isMobile ? 3500 : 2200) && shooters.length < (isMobile ? 2 : 4)) {
            lastShooterTime = nowMs;
            shooters.push({
                x: rand(W * 0.1, W * 0.9), y: rand(0, H * 0.4),
                vx: rand(3, 7), vy: rand(1.5, 3.5),
                len: rand(60, 110), alpha: 1, fade: rand(0.018, 0.030),
                color: '#00e5ff'
            });
        }
        shooters = shooters.filter(function(s) {
            s.x += s.vx; s.y += s.vy; s.alpha -= s.fade;
            if (s.alpha <= 0) return false;
            var grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 12, s.y - s.vy * 12);
            grad.addColorStop(0, 'rgba(0,229,255,' + s.alpha + ')'); grad.addColorStop(1, 'rgba(0,229,255,0)');
            ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 12, s.y - s.vy * 12);
            ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.globalAlpha = s.alpha; ctx.stroke();
            ctx.globalAlpha = 1;
            return s.x < W + 50 && s.y < H + 50;
        });

        // Dust
        dustParticles.forEach(function(p) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
            if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
            p.phase += p.pulseSpeed;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color + (p.alpha * (0.5 + 0.5 * Math.sin(p.phase))).toFixed(2) + ')';
            ctx.globalAlpha = 1; ctx.fill();
        });

        // Islands front
        islands.forEach(function(isl) {
            if (isl.layer >= 0.5) {
                drawIsland(
                    W * isl.x + Math.sin(t * isl.speed * 800 + isl.phase) * 20 * isl.layer,
                    H * isl.y + Math.cos(t * isl.speed * 600 + isl.phase) * 14 * isl.layer,
                    isl.size * (0.7 + 0.3 * isl.layer), isl.color, isl.crystalColor
                );
            }
        });

        // Floating diamonds
        diamonds.forEach(function(d) {
            d.x += d.vx; d.y += d.vy; d.rot += d.rotSpeed;
            if (d.y < -40) { d.y = H + 30; d.x = rand(0, W); }
            if (d.x < -30) d.x = W + 30;
            if (d.x > W + 30) d.x = -30;
            drawDiamond(d.x, d.y, d.size, d.rot, d.color, d.alpha);
        });

        // Center ambient glow
        var eGrad = ctx.createRadialGradient(W * 0.5, H * 0.25, 0, W * 0.5, H * 0.25, W * 0.45);
        eGrad.addColorStop(0, 'rgba(0,180,255,0.07)'); eGrad.addColorStop(0.5, 'rgba(100,50,255,0.04)');
        eGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = eGrad; ctx.globalAlpha = 0.9 + 0.1 * Math.sin(t * 0.8);
        ctx.fillRect(0, 0, W, H); ctx.globalAlpha = 1;

        tick++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }

    var onResize = function() { resizeAetherCanvas(); };
    var onVisibilityChange = function() {
        isVisible = !document.hidden;
        if (!isVisible && state.bgAnimFrame) {
            cancelAnimationFrame(state.bgAnimFrame); state.bgAnimFrame = null;
        } else if (isVisible && state.theme === 'aetherdominion' && !state.bgAnimFrame) {
            lastFrameTime = 0; state.bgAnimFrame = requestAnimationFrame(draw);
        }
    };
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });

    state.originCleanup = function() {
        window.removeEventListener('resize', onResize);
        if (hasFinePointer && onCursorMove) document.removeEventListener('mousemove', onCursorMove);
        if (cursorEl && cursorEl.remove) cursorEl.remove();
    };
    state.originVisibilityCleanup = function() {
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    state.bgAnimFrame = requestAnimationFrame(draw);
}


/* ══ ✨ TRANSCENDENT — The Absolute Activation ══ */
function runTheAbsoluteActivation() {
    if (SETTINGS.reducedMotion) return;

    // White-light collapse flash
    var flashDiv = document.createElement('div');
    flashDiv.className = 'absolute-flash';
    document.body.appendChild(flashDiv);
    setTimeout(function() { if (flashDiv && flashDiv.remove) flashDiv.remove(); }, 2400);

    // Large particle burst from centre
    var burstCount = window.innerWidth < 600 ? 35 : 65;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var colors = ['#ffffff','#c8aaff','#80dfff','#ffd9a0','#ff9de2','#74ff9d'];
    for (var i = 0; i < burstCount; i++) {
        var p = document.createElement('span');
        p.className = 'absolute-burst';
        var size = (3 + Math.random() * 10).toFixed(1) + 'px';
        var angle = Math.random() * Math.PI * 2;
        var dist = 60 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * 0.50;
        var dx = (Math.cos(angle) * dist).toFixed(1) + 'px';
        var dy = (Math.sin(angle) * dist).toFixed(1) + 'px';
        p.style.cssText = 'width:' + size + ';height:' + size + ';left:' + cx + 'px;top:' + cy + 'px;' +
            'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
            'box-shadow:0 0 10px rgba(255,255,255,0.8),0 0 20px rgba(200,170,255,0.5);';
        p.style.setProperty('--dx', dx);
        p.style.setProperty('--dy', dy);
        p.style.animationDelay = (Math.random() * 0.18).toFixed(2) + 's';
        document.body.appendChild(p);
        (function(el) { setTimeout(function() { if (el.remove) el.remove(); }, 1600); })(p);
    }

    // Staggered rebuild of UI elements
    var rawTargets = document.querySelectorAll(
        '#navbar, #app > *, .section-title, .script-card, .creator-card, .news-card, .executor-card, .settings-card, .bottom-nav'
    );
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var targets = Array.prototype.filter.call(rawTargets, function(el) {
        return el !== sidebar && el !== sidebarOverlay &&
               !el.closest('#sidebar') && !el.closest('#sidebar-overlay');
    });
    setTimeout(function() {
        targets.forEach(function(el, i) {
            el.classList.remove('absolute-assemble');
            el.style.setProperty('--abs-delay', Math.min(i * 30, 500) + 'ms');
        });
        void document.body.offsetWidth;
        targets.forEach(function(el) { el.classList.add('absolute-assemble'); });
        setTimeout(function() {
            targets.forEach(function(el) { el.classList.remove('absolute-assemble'); });
        }, 2000);
    }, 300);
}

/* ══ ✨ TRANSCENDENT — The Absolute Background Animation ══ */
function runTheAbsoluteAnimation() {
    var ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    var canvas = ctx.canvas;
    var W = window.innerWidth, H = window.innerHeight;
    var isMobile = W < 700;
    var tick = 0, lastFrameTime = 0;
    var FPS_CAP = isMobile ? 32 : 50;
    var FRAME_MS = 1000 / FPS_CAP;
    var isVisible = !document.hidden;

    // ── Custom cursor ──
    var hasFinePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    var cursorEl = document.getElementById('absolute-cursor');
    if (!cursorEl) { cursorEl = document.createElement('div'); cursorEl.id = 'absolute-cursor'; document.body.appendChild(cursorEl); }
    var mouseX = W / 2, mouseY = H / 2;
    var cursorX = mouseX, cursorY = mouseY;
    var lastOrbTime = 0;
    var orbColors = ['rgba(255,255,255,0.70)','rgba(200,170,255,0.60)','rgba(128,223,255,0.55)','rgba(255,217,160,0.50)','rgba(255,157,226,0.45)'];

    function spawnOrb(x, y) {
        if (!hasFinePointer) return;
        var now = Date.now();
        if (now - lastOrbTime < 38) return;
        lastOrbTime = now;
        var o = document.createElement('span');
        o.className = 'absolute-orb';
        var sz = (2 + Math.random() * 7).toFixed(1);
        o.style.cssText = 'width:'+sz+'px;height:'+sz+'px;left:'+x+'px;top:'+y+'px;background:'+
            orbColors[Math.floor(Math.random()*orbColors.length)]+';box-shadow:0 0 8px rgba(255,255,255,0.6);';
        document.body.appendChild(o);
        (function(el){ setTimeout(function(){ if(el&&el.remove)el.remove(); }, 1000); })(o);
    }
    function updateCursor() {
        if (!hasFinePointer || !cursorEl) return;
        if (state.theme !== 'theabsolute') return;
        cursorX += (mouseX - cursorX) * 0.20;
        cursorY += (mouseY - cursorY) * 0.20;
        cursorEl.style.left = cursorX.toFixed(1) + 'px';
        cursorEl.style.top  = cursorY.toFixed(1) + 'px';
        requestAnimationFrame(updateCursor);
    }
    var onCursorMove;
    if (hasFinePointer) {
        onCursorMove = function(e) { mouseX = e.clientX; mouseY = e.clientY; spawnOrb(e.clientX, e.clientY); };
        document.addEventListener('mousemove', onCursorMove, { passive: true });
        updateCursor();
    }

    function rand(a, b) { return a + Math.random() * (b - a); }
    function randInt(a, b) { return Math.floor(rand(a, b + 1)); }

    // ── Stars (multi-size, multi-color, twinkling) ──
    var starCount = isMobile ? 120 : 280;
    var stars = [];
    for (var si = 0; si < starCount; si++) {
        stars.push({
            x: rand(0, W), y: rand(0, H),
            r: rand(0.3, isMobile ? 2.0 : 2.8),
            alpha: rand(0.2, 1.0),
            twinkleSpeed: rand(0.008, 0.035),
            twinklePhase: rand(0, Math.PI * 2),
            color: ['#ffffff','#f0f0ff','#dddaff','#c8f0ff','#fff0cc'][randInt(0, 4)]
        });
    }

    // ── Nebulas (large soft colour blobs) ──
    var nebulas = [];
    var nebulaCount = isMobile ? 3 : 7;
    var nebulaColors = [
        'rgba(200,170,255,', 'rgba(128,223,255,', 'rgba(255,200,140,',
        'rgba(255,157,226,', 'rgba(116,255,157,', 'rgba(255,255,255,', 'rgba(180,100,255,'
    ];
    for (var ni = 0; ni < nebulaCount; ni++) {
        nebulas.push({
            x: rand(0, W), y: rand(0, H),
            w: rand(W * 0.25, W * 0.65),
            h: rand(H * 0.15, H * 0.40),
            color: nebulaColors[randInt(0, nebulaColors.length - 1)],
            alpha: rand(0.025, 0.075),
            speedX: rand(-0.12, 0.12),
            speedY: rand(-0.06, 0.06),
            phase: rand(0, Math.PI * 2),
            pulseSpeed: rand(0.0008, 0.002)
        });
    }

    // ── Energy rings (rotating) ──
    var rings = [];
    var ringCount = isMobile ? 3 : 6;
    for (var ri = 0; ri < ringCount; ri++) {
        rings.push({
            x: rand(0.1, 0.9), y: rand(0.1, 0.9),
            r: rand(50, isMobile ? 100 : 180),
            rot: rand(0, Math.PI * 2),
            rotSpeed: rand(0.0005, 0.002) * (Math.random() > 0.5 ? 1 : -1),
            sides: [5, 6, 7, 8][randInt(0, 3)],
            alpha: rand(0.05, 0.18),
            color: ['rgba(255,255,255,','rgba(200,170,255,','rgba(128,223,255,'][randInt(0, 2)]
        });
    }

    // ── Cosmic void portals (concentric circles breathing) ──
    var portals = [];
    var portalCount = isMobile ? 2 : 4;
    for (var pi = 0; pi < portalCount; pi++) {
        portals.push({
            x: rand(0.1, 0.9), y: rand(0.1, 0.9),
            maxR: rand(60, isMobile ? 100 : 160),
            phase: rand(0, Math.PI * 2),
            speed: rand(0.004, 0.010),
            color: ['rgba(255,255,255,','rgba(200,170,255,','rgba(128,223,255,','rgba(255,217,160,'][randInt(0, 3)]
        });
    }

    // ── Quantum dust particles ──
    var dustCount = isMobile ? 35 : 90;
    var dust = [];
    for (var di = 0; di < dustCount; di++) {
        dust.push({
            x: rand(0, W), y: rand(0, H),
            r: rand(0.8, 3.5),
            vx: rand(-0.25, 0.25), vy: rand(-0.35, 0.05),
            alpha: rand(0.2, 0.75),
            color: ['rgba(255,255,255,','rgba(200,170,255,','rgba(128,223,255,','rgba(255,217,160,'][randInt(0, 3)],
            phase: rand(0, Math.PI * 2),
            pulseSpeed: rand(0.02, 0.06)
        });
    }

    // ── Energy ribbons / aurora rivers ──
    var ribbons = [];
    var ribbonCount = isMobile ? 3 : 7;
    for (var rbi = 0; rbi < ribbonCount; rbi++) {
        ribbons.push({
            baseY: rand(H * 0.05, H * 0.95),
            amplitude: rand(H * 0.04, H * 0.14),
            speed: rand(0.3, 0.9),
            offset: rand(0, Math.PI * 2),
            color: ['rgba(255,255,255,','rgba(200,170,255,','rgba(128,223,255,','rgba(255,217,160,','rgba(255,157,226,'][randInt(0, 4)],
            width: rand(0.8, 2.5),
            alpha: rand(0.06, 0.18)
        });
    }

    // ── Shooting stars ──
    var shooters = [];
    var lastShooterTime = 0;

    // ── Floating light columns (vertical energy veins) ──
    var columns = [];
    var columnCount = isMobile ? 2 : 5;
    for (var ci2 = 0; ci2 < columnCount; ci2++) {
        columns.push({
            x: rand(0.05, 0.95),
            alpha: rand(0.03, 0.10),
            width: rand(1, 5),
            height: rand(H * 0.25, H * 0.75),
            y: rand(-0.2, 0.6),
            speed: rand(0.0002, 0.0005),
            phase: rand(0, Math.PI * 2),
            color: ['rgba(255,255,255,','rgba(200,170,255,','rgba(128,223,255,'][randInt(0, 2)]
        });
    }

    // ── Floating monolith rectangles ──
    var monoliths = [];
    var monolithCount = isMobile ? 2 : 4;
    for (var mi = 0; mi < monolithCount; mi++) {
        monoliths.push({
            x: rand(0.05, 0.95), y: rand(0.2, 0.85),
            w: rand(6, 18), h: rand(40, 120),
            alpha: rand(0.06, 0.16),
            speed: rand(0.00005, 0.00014),
            phase: rand(0, Math.PI * 2),
            color: ['rgba(200,170,255,','rgba(128,223,255,','rgba(255,255,255,'][randInt(0, 2)]
        });
    }

    function drawPolygon(cx, cy, r, sides, rot, color, alpha, lw) {
        ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot);
        ctx.globalAlpha = alpha; ctx.lineWidth = lw || 1.2;
        ctx.strokeStyle = color;
        ctx.beginPath();
        for (var v = 0; v < sides; v++) {
            var ang = (v / sides) * Math.PI * 2;
            v === 0 ? ctx.moveTo(Math.cos(ang)*r, Math.sin(ang)*r) : ctx.lineTo(Math.cos(ang)*r, Math.sin(ang)*r);
        }
        ctx.closePath(); ctx.stroke(); ctx.restore();
    }

    function resizeCanvas() {
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W; canvas.height = H; isMobile = W < 700;
    }

    function draw(ts) {
        if (!isVisible) return;
        if (ts - lastFrameTime < FRAME_MS) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        lastFrameTime = ts;
        ctx.clearRect(0, 0, W, H);

        // Deep void background
        var bgGrad = ctx.createRadialGradient(W*0.5, H*0.3, 0, W*0.5, H*0.5, Math.max(W, H)*0.85);
        bgGrad.addColorStop(0,   '#080020');
        bgGrad.addColorStop(0.35,'#040014');
        bgGrad.addColorStop(0.7, '#020009');
        bgGrad.addColorStop(1,   '#00000a');
        ctx.fillStyle = bgGrad; ctx.globalAlpha = 1; ctx.fillRect(0, 0, W, H);

        var t = tick * 0.016;

        // ── Nebulas ──
        nebulas.forEach(function(n) {
            n.x += n.speedX; n.y += n.speedY;
            if (n.x < -n.w) n.x = W + n.w;
            if (n.x > W + n.w) n.x = -n.w;
            if (n.y < -n.h) n.y = H + n.h;
            if (n.y > H + n.h) n.y = -n.h;
            n.phase += n.pulseSpeed;
            var pulse = 0.7 + 0.3 * Math.sin(n.phase);
            var grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.w * 0.5);
            grad.addColorStop(0, n.color + (n.alpha * pulse).toFixed(3) + ')');
            grad.addColorStop(1, n.color + '0)');
            ctx.fillStyle = grad; ctx.globalAlpha = 1;
            ctx.beginPath(); ctx.ellipse(n.x, n.y, n.w * 0.5, n.h * 0.5, 0, 0, Math.PI * 2); ctx.fill();
        });

        // ── Stars ──
        ctx.globalAlpha = 1;
        stars.forEach(function(s) {
            s.twinklePhase += s.twinkleSpeed;
            var a = s.alpha * (0.5 + 0.5 * Math.sin(s.twinklePhase));
            ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            ctx.fillStyle = s.color; ctx.globalAlpha = a; ctx.fill();
        });
        ctx.globalAlpha = 1;

        // ── Aurora ribbons ──
        ribbons.forEach(function(rb) {
            ctx.beginPath(); ctx.globalAlpha = rb.alpha; ctx.lineWidth = rb.width;
            ctx.strokeStyle = rb.color + '0.9)';
            for (var px = 0; px <= W; px += 3) {
                var py = rb.baseY + Math.sin((px/W)*Math.PI*3.5 + t*rb.speed + rb.offset)*rb.amplitude;
                px === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            ctx.stroke();
            ctx.lineWidth = rb.width * 4; ctx.globalAlpha = rb.alpha * 0.25; ctx.stroke();
            ctx.globalAlpha = 1;
        });

        // ── Portals ──
        portals.forEach(function(po) {
            po.phase += po.speed;
            var px2 = W * po.x + Math.sin(po.phase * 0.4) * 22;
            var py2 = H * po.y + Math.cos(po.phase * 0.3) * 14;
            for (var pr = 1; pr <= 4; pr++) {
                var rr = po.maxR * (pr / 4) * (0.8 + 0.2 * Math.sin(po.phase + pr));
                ctx.beginPath(); ctx.arc(px2, py2, rr, 0, Math.PI * 2);
                ctx.strokeStyle = po.color + (0.12 - pr * 0.025).toFixed(3) + ')';
                ctx.lineWidth = 1.2 - pr * 0.2;
                ctx.globalAlpha = 1; ctx.stroke();
            }
        });

        // ── Energy rings (geometric) ──
        rings.forEach(function(rg) {
            rg.rot += rg.rotSpeed;
            drawPolygon(
                W * rg.x + Math.sin(t * 0.18 + rg.rot) * 15,
                H * rg.y + Math.cos(t * 0.13 + rg.rot) * 10,
                rg.r, rg.sides, rg.rot, rg.color + '0.9)', rg.alpha, 1.2
            );
            // Inner ring
            drawPolygon(
                W * rg.x + Math.sin(t * 0.18 + rg.rot) * 15,
                H * rg.y + Math.cos(t * 0.13 + rg.rot) * 10,
                rg.r * 0.55, rg.sides, -rg.rot * 1.3, rg.color + '0.7)', rg.alpha * 0.55, 0.7
            );
        });

        // ── Light columns ──
        columns.forEach(function(col) {
            col.phase += col.speed;
            var cx2 = W * col.x + Math.sin(col.phase * 1.5) * 18;
            var cy2 = H * col.y + Math.sin(col.phase * 0.8) * H * 0.05;
            var a = col.alpha * (0.6 + 0.4 * Math.sin(col.phase * 3));
            var grad = ctx.createLinearGradient(cx2, cy2, cx2, cy2 + col.height);
            grad.addColorStop(0, col.color + '0)');
            grad.addColorStop(0.2, col.color + a.toFixed(3) + ')');
            grad.addColorStop(0.8, col.color + a.toFixed(3) + ')');
            grad.addColorStop(1, col.color + '0)');
            ctx.fillStyle = grad; ctx.globalAlpha = 1;
            ctx.fillRect(cx2 - col.width/2, cy2, col.width, col.height);
        });

        // ── Monoliths ──
        monoliths.forEach(function(m) {
            m.phase += m.speed;
            var mx2 = W * m.x + Math.sin(m.phase * 600) * 10;
            var my2 = H * m.y + Math.cos(m.phase * 400) * 6;
            var pulse = 0.7 + 0.3 * Math.sin(m.phase * 1200);
            ctx.fillStyle = m.color + (m.alpha * pulse).toFixed(3) + ')';
            ctx.globalAlpha = 1;
            ctx.fillRect(mx2 - m.w/2, my2 - m.h/2, m.w, m.h);
            // Glow top
            var tGrad = ctx.createRadialGradient(mx2, my2 - m.h/2, 0, mx2, my2 - m.h/2, m.w * 3);
            tGrad.addColorStop(0, m.color + (m.alpha * 0.7 * pulse).toFixed(3) + ')');
            tGrad.addColorStop(1, m.color + '0)');
            ctx.fillStyle = tGrad;
            ctx.beginPath(); ctx.arc(mx2, my2 - m.h/2, m.w * 3, 0, Math.PI * 2); ctx.fill();
        });

        // ── Shooting stars ──
        var nowMs = Date.now();
        if (nowMs - lastShooterTime > (isMobile ? 3200 : 1800) && shooters.length < (isMobile ? 3 : 6)) {
            lastShooterTime = nowMs;
            var shootColors = ['#ffffff','#c8aaff','#80dfff','#ffd9a0'];
            shooters.push({
                x: rand(W * 0.05, W * 0.95), y: rand(0, H * 0.45),
                vx: rand(2.5, 7), vy: rand(1, 3.5),
                alpha: 1, fade: rand(0.016, 0.028),
                color: shootColors[randInt(0, 3)]
            });
        }
        shooters = shooters.filter(function(s) {
            s.x += s.vx; s.y += s.vy; s.alpha -= s.fade;
            if (s.alpha <= 0) return false;
            var cr = s.color;
            var len = 14;
            var grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx*len, s.y - s.vy*len);
            grad.addColorStop(0, 'rgba(255,255,255,' + s.alpha + ')');
            grad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx*len, s.y - s.vy*len);
            ctx.strokeStyle = grad; ctx.lineWidth = 2.2; ctx.globalAlpha = s.alpha; ctx.stroke();
            ctx.globalAlpha = 1;
            return s.x < W + 60 && s.y < H + 60;
        });

        // ── Quantum dust ──
        dust.forEach(function(dp) {
            dp.x += dp.vx; dp.y += dp.vy;
            if (dp.x < -8) dp.x = W + 8; if (dp.x > W + 8) dp.x = -8;
            if (dp.y < -8) dp.y = H + 8; if (dp.y > H + 8) dp.y = -8;
            dp.phase += dp.pulseSpeed;
            var a = dp.alpha * (0.45 + 0.55 * Math.sin(dp.phase));
            ctx.beginPath(); ctx.arc(dp.x, dp.y, dp.r, 0, Math.PI * 2);
            ctx.fillStyle = dp.color + a.toFixed(3) + ')'; ctx.globalAlpha = 1; ctx.fill();
        });

        // ── Central void radiance (very subtle, breathing) ──
        var cx3 = W * 0.5, cy3 = H * 0.38;
        var vGrad = ctx.createRadialGradient(cx3, cy3, 0, cx3, cy3, W * 0.5);
        vGrad.addColorStop(0,   'rgba(255,255,255,' + (0.03 + 0.015*Math.sin(t*0.7)).toFixed(4) + ')');
        vGrad.addColorStop(0.4, 'rgba(200,170,255,' + (0.025 + 0.01*Math.sin(t*0.5)).toFixed(4) + ')');
        vGrad.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = vGrad; ctx.globalAlpha = 1; ctx.fillRect(0, 0, W, H);

        tick++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }

    var onResize = function() { resizeCanvas(); };
    var onVisibilityChange = function() {
        isVisible = !document.hidden;
        if (!isVisible && state.bgAnimFrame) {
            cancelAnimationFrame(state.bgAnimFrame); state.bgAnimFrame = null;
        } else if (isVisible && state.theme === 'theabsolute' && !state.bgAnimFrame) {
            lastFrameTime = 0; state.bgAnimFrame = requestAnimationFrame(draw);
        }
    };
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });

    state.originCleanup = function() {
        window.removeEventListener('resize', onResize);
        if (hasFinePointer && onCursorMove) document.removeEventListener('mousemove', onCursorMove);
        if (cursorEl && cursorEl.remove) cursorEl.remove();
    };
    state.originVisibilityCleanup = function() {
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    state.bgAnimFrame = requestAnimationFrame(draw);
}

/* ══ ✦ TRANSCENDENT — ∞ Eternal Nexus Activation ══ */
function runEternalNexusActivation() {
    if (SETTINGS.reducedMotion) return;

    var veil = document.createElement('div');
    veil.className = 'nexus-activation';
    document.body.appendChild(veil);
    setTimeout(function() { if (veil && veil.remove) veil.remove(); }, 3100);

    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var count = window.innerWidth < 700 ? 30 : 72;
    var colors = ['#78e7ff', '#8d6bff', '#ff83d6', '#ffe4a3', '#74ffb0', '#ffffff'];
    for (var i = 0; i < count; i++) {
        var burst = document.createElement('span');
        burst.className = 'nexus-burst';
        var angle = Math.random() * Math.PI * 2;
        var distance = 80 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * .58;
        var size = 2 + Math.random() * 8;
        burst.style.cssText = 'left:' + cx + 'px;top:' + cy + 'px;width:' + size.toFixed(1) +
            'px;height:' + size.toFixed(1) + 'px;background:' + colors[i % colors.length] +
            ';box-shadow:0 0 10px ' + colors[i % colors.length] + ',0 0 28px rgba(120,231,255,.65);' +
            'animation-delay:' + (Math.random() * .32).toFixed(2) + 's;';
        burst.style.setProperty('--nexus-x', (Math.cos(angle) * distance).toFixed(1) + 'px');
        burst.style.setProperty('--nexus-y', (Math.sin(angle) * distance).toFixed(1) + 'px');
        document.body.appendChild(burst);
        (function(el) { setTimeout(function() { if (el && el.remove) el.remove(); }, 2300); })(burst);
    }

    var targets = document.querySelectorAll(
        '#navbar, #app > *, .section-title, .script-card, .creator-card, .news-card, ' +
        '.executor-card, .settings-card, .bottom-nav'
    );
    setTimeout(function() {
        Array.prototype.forEach.call(targets, function(el, index) {
            if (!el.closest('#sidebar') && !el.closest('#sidebar-overlay')) {
                el.classList.remove('nexus-assemble');
                el.style.setProperty('--nexus-delay', Math.min(index * 28, 520) + 'ms');
                el.classList.add('nexus-assemble');
            }
        });
        setTimeout(function() {
            Array.prototype.forEach.call(targets, function(el) {
                el.classList.remove('nexus-assemble');
            });
        }, 2100);
    }, 360);
}

/* ══ ✦ TRANSCENDENT — ∞ Eternal Nexus Background Animation ══ */
function runEternalNexusAnimation() {
    var ctx = setupCanvas('bgCanvas');
    if (!ctx) return;

    var W = window.innerWidth, H = window.innerHeight;
    var mobile = W < 700;
    var visible = !document.hidden;
    var tick = 0, last = 0, lastMeteor = 0, lastPortal = 0;
    var fps = mobile ? 30 : 48, frameMs = 1000 / fps;
    var dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.7);
    var canvas = ctx.canvas;
    var starCount = mobile ? 95 : 235;
    var starColors = ['#78e7ff', '#b994ff', '#ffe4a3', '#ff83d6', '#74ffb0'];
    var stars = Array.from({ length: starCount }, function() {
        return {
            x: Math.random(), y: Math.random(), z: .25 + Math.random() * .9,
            r: .25 + Math.random() * 1.7, phase: Math.random() * Math.PI * 2,
            color: starColors[Math.floor(Math.random() * starColors.length)]
        };
    });
    var clouds = Array.from({ length: mobile ? 5 : 9 }, function(_, i) {
        return {
            x: Math.random(), y: .08 + Math.random() * .78,
            r: .18 + Math.random() * .30, hue: i % 3,
            phase: Math.random() * Math.PI * 2, speed: .0008 + Math.random() * .0014
        };
    });
    var rings = Array.from({ length: mobile ? 3 : 5 }, function(_, i) {
        return { x: .18 + Math.random() * .64, y: .16 + Math.random() * .62,
            r: .045 + Math.random() * .09, tilt: Math.random() * Math.PI,
            spin: (i % 2 ? -1 : 1) * (.001 + Math.random() * .002), phase: Math.random() * 6 };
    });
    var galaxies = Array.from({ length: mobile ? 2 : 4 }, function() {
        return { x: .12 + Math.random() * .76, y: .12 + Math.random() * .72,
            r: .025 + Math.random() * .045, spin: Math.random() * 6.28,
            arms: 2 + Math.floor(Math.random() * 3) };
    });
    var meteors = [], portals = [];
    var palette = [
        ['120,231,255', '141,107,255'],
        ['255,131,214', '141,107,255'],
        ['255,228,163', '120,231,255'],
        ['116,255,176', '120,231,255']
    ];

    function resizeCanvas() {
        W = window.innerWidth; H = window.innerHeight;
        mobile = W < 700;
        dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.25 : 1.7);
        canvas.width = Math.max(1, Math.floor(W * dpr));
        canvas.height = Math.max(1, Math.floor(H * dpr));
        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();

    function addMeteor(now) {
        if (mobile && Math.random() < .42) return;
        var leftToRight = Math.random() > .45;
        meteors.push({
            x: leftToRight ? -.12 : 1.12, y: .08 + Math.random() * .48,
            vx: (leftToRight ? 1 : -1) * (.0032 + Math.random() * .004),
            vy: .002 + Math.random() * .003, life: 0, max: 105 + Math.random() * 90,
            color: starColors[Math.floor(Math.random() * starColors.length)], born: now
        });
    }
    function addPortal() {
        if (portals.length >= (mobile ? 1 : 2)) return;
        portals.push({
            x: .16 + Math.random() * .68, y: .18 + Math.random() * .58,
            r: .035 + Math.random() * .045, life: 0, max: 260 + Math.random() * 180,
            hue: palette[Math.floor(Math.random() * palette.length)]
        });
    }

    function draw(now) {
        if (state.theme !== 'eternalnexus') return;
        if (!visible) { state.bgAnimFrame = null; return; }
        if (now - last < frameMs) {
            state.bgAnimFrame = requestAnimationFrame(draw);
            return;
        }
        last = now; tick++;
        ctx.clearRect(0, 0, W, H);
        var t = tick * .009;

        // Deep space wash and slow-moving nebula clouds.
        var wash = ctx.createRadialGradient(W * .5, H * .42, 0, W * .5, H * .42, Math.max(W, H) * .72);
        wash.addColorStop(0, 'rgba(28,17,76,.11)');
        wash.addColorStop(.45, 'rgba(8,11,48,.08)');
        wash.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = wash; ctx.fillRect(0, 0, W, H);
        clouds.forEach(function(cloud, i) {
            cloud.phase += cloud.speed;
            var x = (cloud.x + Math.sin(cloud.phase) * .035) * W;
            var y = (cloud.y + Math.cos(cloud.phase * .72) * .025) * H;
            var radius = cloud.r * Math.min(W, H);
            var rgb = i % 3 === 0 ? '120,231,255' : i % 3 === 1 ? '141,107,255' : '255,131,214';
            var ng = ctx.createRadialGradient(x, y, 0, x, y, radius);
            ng.addColorStop(0, 'rgba(' + rgb + ',.075)');
            ng.addColorStop(.42, 'rgba(' + rgb + ',.026)');
            ng.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = ng; ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2);
        });

        // Parallax starfield with chromatic twinkle.
        stars.forEach(function(star) {
            star.phase += .012 * star.z;
            var sx = ((star.x + Math.sin(t * .13 + star.phase) * .004) % 1) * W;
            var sy = ((star.y + t * .00025 * star.z) % 1) * H;
            var alpha = (.16 + star.z * .44) * (.58 + Math.abs(Math.sin(star.phase)) * .42);
            ctx.globalAlpha = alpha;
            ctx.fillStyle = star.color;
            ctx.beginPath(); ctx.arc(sx, sy, star.r * (.75 + star.z * .45), 0, Math.PI * 2); ctx.fill();
            if (star.z > .82 && star.r > 1.25) {
                ctx.globalAlpha = alpha * .24;
                ctx.beginPath(); ctx.moveTo(sx - 6, sy); ctx.lineTo(sx + 6, sy);
                ctx.moveTo(sx, sy - 6); ctx.lineTo(sx, sy + 6); ctx.stroke();
            }
        });
        ctx.globalAlpha = 1;

        // Independent dimensional rings.
        rings.forEach(function(ring, i) {
            ring.phase += ring.spin;
            var rx = ring.x * W, ry = ring.y * H, rr = ring.r * Math.min(W, H);
            ctx.save(); ctx.translate(rx, ry); ctx.rotate(ring.tilt + ring.phase);
            ctx.strokeStyle = i % 2 ? 'rgba(255,131,214,.16)' : 'rgba(120,231,255,.17)';
            ctx.shadowBlur = 16; ctx.shadowColor = i % 2 ? '#ff83d6' : '#78e7ff';
            ctx.lineWidth = 1.1;
            ctx.beginPath(); ctx.ellipse(0, 0, rr * 1.8, rr * .48, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.globalAlpha = .48; ctx.beginPath(); ctx.ellipse(0, 0, rr * .92, rr * .24, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
        });

        // Small spiral galaxies.
        galaxies.forEach(function(galaxy, gi) {
            galaxy.spin += .0015 * (gi % 2 ? -1 : 1);
            var gx = galaxy.x * W, gy = galaxy.y * H, gr = galaxy.r * Math.min(W, H);
            ctx.save(); ctx.translate(gx, gy); ctx.rotate(galaxy.spin);
            var gg = ctx.createRadialGradient(0, 0, 0, 0, 0, gr * 1.9);
            gg.addColorStop(0, 'rgba(255,255,255,.22)'); gg.addColorStop(.26, 'rgba(120,231,255,.11)'); gg.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(0, 0, gr * 1.9, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = gi % 2 ? 'rgba(255,131,214,.20)' : 'rgba(120,231,255,.20)';
            ctx.lineWidth = 1;
            for (var arm = 0; arm < galaxy.arms; arm++) {
                ctx.beginPath();
                for (var step = 0; step < 19; step++) {
                    var a = step * .34 + arm * (Math.PI * 2 / galaxy.arms), rad = gr * step / 18;
                    var px = Math.cos(a) * rad * 1.75, py = Math.sin(a) * rad * .48;
                    step ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
                }
                ctx.stroke();
            }
            ctx.restore();
        });

        // Portals appear as brief, rotating dimensional gates.
        if (now - lastPortal > (mobile ? 9000 : 5600) && Math.random() > .35) {
            lastPortal = now; addPortal();
        }
        portals = portals.filter(function(portal) {
            portal.life++;
            var p = portal.life / portal.max, alpha = Math.sin(Math.min(1, p) * Math.PI) * .68;
            var px = portal.x * W, py = portal.y * H, pr = portal.r * Math.min(W, H) * (1 + p * .22);
            ctx.save(); ctx.translate(px, py); ctx.rotate(portal.life * .018);
            ctx.globalAlpha = alpha; ctx.shadowBlur = 24; ctx.shadowColor = 'rgba(' + portal.hue[0] + ',.7)';
            for (var ringNo = 0; ringNo < 3; ringNo++) {
                ctx.strokeStyle = 'rgba(' + portal.hue[ringNo % 2] + ',' + (.24 - ringNo * .04) + ')';
                ctx.lineWidth = 1.3; ctx.beginPath();
                ctx.ellipse(0, 0, pr * (1 + ringNo * .24), pr * (.35 + ringNo * .08), ringNo * .6, 0, Math.PI * 2); ctx.stroke();
            }
            ctx.restore();
            return portal.life < portal.max;
        });

        // Auroral ribbons and light sweeps.
        ctx.save(); ctx.globalAlpha = .13;
        for (var ribbon = 0; ribbon < 3; ribbon++) {
            ctx.beginPath();
            for (var x = -30; x <= W + 30; x += 24) {
                var yy = H * (.24 + ribbon * .15) + Math.sin(x * .006 + t * (.8 + ribbon * .2)) * H * .045 +
                    Math.sin(x * .014 - t * .5) * H * .018;
                x === -30 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
            }
            ctx.strokeStyle = ribbon === 0 ? '#78e7ff' : ribbon === 1 ? '#8d6bff' : '#ff83d6';
            ctx.lineWidth = 7; ctx.shadowBlur = 24; ctx.shadowColor = ctx.strokeStyle; ctx.stroke();
        }
        ctx.restore();
        var sweepX = ((t * 42) % (W + 260)) - 130;
        var sweep = ctx.createLinearGradient(sweepX - 80, 0, sweepX + 80, 0);
        sweep.addColorStop(0, 'rgba(120,231,255,0)');
        sweep.addColorStop(.5, 'rgba(255,228,163,.055)');
        sweep.addColorStop(1, 'rgba(255,131,214,0)');
        ctx.fillStyle = sweep; ctx.fillRect(sweepX - 80, 0, 160, H);

        // Occasional shooting stars.
        if (now - lastMeteor > (mobile ? 6500 : 3600) && Math.random() > .45) {
            lastMeteor = now; addMeteor(now);
        }
        meteors = meteors.filter(function(meteor) {
            meteor.life++; meteor.x += meteor.vx; meteor.y += meteor.vy;
            var a = Math.max(0, 1 - meteor.life / meteor.max);
            ctx.globalAlpha = a; ctx.strokeStyle = meteor.color; ctx.shadowBlur = 13; ctx.shadowColor = meteor.color;
            ctx.lineWidth = 1.5; ctx.beginPath();
            ctx.moveTo(meteor.x * W, meteor.y * H);
            ctx.lineTo((meteor.x - meteor.vx * 42) * W, (meteor.y - meteor.vy * 42) * H); ctx.stroke();
            ctx.globalAlpha = 1;
            return meteor.life < meteor.max && meteor.x > -.3 && meteor.x < 1.3 && meteor.y < 1.2;
        });

        tick++;
        state.bgAnimFrame = requestAnimationFrame(draw);
    }
    function onResize() { resizeCanvas(); }
    function onVisibilityChange() {
        visible = !document.hidden;
        if (!visible && state.bgAnimFrame) {
            cancelAnimationFrame(state.bgAnimFrame); state.bgAnimFrame = null;
        } else if (visible && state.theme === 'eternalnexus' && !state.bgAnimFrame) {
            last = 0; state.bgAnimFrame = requestAnimationFrame(draw);
        }
    }
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });

    var cursor = document.getElementById('nexus-cursor');
    var finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    var cursorX = W / 2, cursorY = H / 2, lastSpark = 0;
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'nexus-cursor';
        document.body.appendChild(cursor);
    }
    function onCursorMove(event) {
        if (!finePointer || state.theme !== 'eternalnexus') return;
        cursorX = event.clientX; cursorY = event.clientY;
        cursor.style.left = cursorX + 'px'; cursor.style.top = cursorY + 'px';
        var now = performance.now();
        if (now - lastSpark < 55) return;
        lastSpark = now;
        var spark = document.createElement('i');
        spark.className = 'nexus-cursor-spark';
        spark.style.left = cursorX + 'px'; spark.style.top = cursorY + 'px';
        spark.style.background = starColors[Math.floor(Math.random() * starColors.length)];
        spark.style.boxShadow = '0 0 8px ' + spark.style.background;
        spark.style.setProperty('--spark-x', ((Math.random() - .5) * 32).toFixed(1) + 'px');
        spark.style.setProperty('--spark-y', ((Math.random() - .5) * 32).toFixed(1) + 'px');
        document.body.appendChild(spark);
        setTimeout(function() { if (spark && spark.remove) spark.remove(); }, 950);
    }
    if (finePointer) document.addEventListener('mousemove', onCursorMove, { passive: true });
    state.originCleanup = function() {
        window.removeEventListener('resize', onResize);
        if (finePointer) document.removeEventListener('mousemove', onCursorMove);
        if (cursor && cursor.remove) cursor.remove();
        document.querySelectorAll('.nexus-cursor-spark').forEach(function(el) { el.remove(); });
    };
    state.originVisibilityCleanup = function() {
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    state.bgAnimFrame = requestAnimationFrame(draw);
}

/* ══ OMNISCIENT — The website becomes aware of the user ══ */
function runOmniscientActivation() {
    if (SETTINGS.reducedMotion) return;
    var veil = document.createElement('div');
    veil.className = 'omniscient-activation';
    document.body.appendChild(veil);
    setTimeout(function() { if (veil && veil.remove) veil.remove(); }, 3300);

    var mobile = window.innerWidth < 600;
    var count = mobile ? 28 : 64;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var colors = ['#ffffff', '#fff1a8', '#ffe27a', '#ffb52e', '#78e7ff', '#ff83c6'];
    for (var i = 0; i < count; i++) {
        var shard = document.createElement('span');
        shard.className = 'omniscient-burst';
        var size = (2 + Math.random() * (mobile ? 6 : 11)).toFixed(1) + 'px';
        var angle = Math.random() * Math.PI * 2;
        var distance = 80 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * .58;
        shard.style.cssText = 'width:' + size + ';height:' + size + ';left:' + cx + 'px;top:' + cy + 'px;' +
            'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
            'box-shadow:0 0 10px rgba(255,255,255,.9),0 0 24px rgba(255,210,90,.55);';
        shard.style.setProperty('--eye-x', (Math.cos(angle) * distance).toFixed(1) + 'px');
        shard.style.setProperty('--eye-y', (Math.sin(angle) * distance).toFixed(1) + 'px');
        shard.style.animationDelay = (Math.random() * .25).toFixed(2) + 's';
        document.body.appendChild(shard);
        (function(el) { setTimeout(function() { if (el && el.remove) el.remove(); }, 2200); })(shard);
    }

    var rawTargets = document.querySelectorAll(
        '#navbar, #app > *, .section-title, .script-card, .creator-card, .news-card, .executor-card, .settings-card, .bottom-nav'
    );
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var targets = Array.prototype.filter.call(rawTargets, function(el) {
        return el !== sidebar && el !== sidebarOverlay &&
            !el.closest('#sidebar') && !el.closest('#sidebar-overlay');
    });
    targets.forEach(function(el, index) {
        el.classList.remove('omniscient-assemble');
        el.style.setProperty('--eye-delay', Math.min(index * 28, 620) + 'ms');
    });
    void document.body.offsetWidth;
    targets.forEach(function(el) { el.classList.add('omniscient-assemble'); });
    setTimeout(function() {
        targets.forEach(function(el) { el.classList.remove('omniscient-assemble'); });
    }, 2100);
}

function runOmniscientEyeAnimation() {
    var ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    var canvas = ctx.canvas;
    var W = window.innerWidth, H = window.innerHeight;
    var mobile = W < 700;
    var frameMs = mobile ? 1000 / 34 : 1000 / 52;
    var visible = !document.hidden, last = 0, tick = 0;
    var density = mobile ? .58 : 1;
    var stars = Array.from({ length: Math.floor((mobile ? 92 : 180) * density) }, function() {
        return {
            x: Math.random(), y: Math.random(), z: .2 + Math.random() * .8,
            r: .35 + Math.random() * 1.7, phase: Math.random() * 7,
            hue: Math.random() > .72 ? '#fff1a8' : (Math.random() > .5 ? '#78e7ff' : '#ffffff')
        };
    });
    var dust = Array.from({ length: Math.floor((mobile ? 38 : 82) * density) }, function() {
        return { x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .00022, vy: (Math.random() - .5) * .00016,
            r: .7 + Math.random() * 2.4, phase: Math.random() * 7, hue: Math.random() > .48 ? '#ffe27a' : '#78e7ff' };
    });
    var galaxies = Array.from({ length: mobile ? 3 : 6 }, function(_, index) {
        return { x: .1 + Math.random() * .8, y: .08 + Math.random() * .78, r: 24 + Math.random() * 54,
            rot: Math.random() * 7, speed: (index % 2 ? -.002 : .0016) * (1 + Math.random() * .5), arms: 2 + Math.floor(Math.random() * 3) };
    });
    var rings = Array.from({ length: mobile ? 3 : 5 }, function(_, index) {
        return { x: .08 + Math.random() * .84, y: .12 + Math.random() * .78, r: 35 + Math.random() * 75,
            rot: Math.random() * 7, speed: (index % 2 ? -.003 : .0025), tilt: (Math.random() - .5) * .8 };
    });
    var lightning = null, lightningLife = 0, lastLightning = 0;
    var eyeX = W * .5, eyeY = H * .3, targetEyeX = eyeX, targetEyeY = eyeY;
    var eyeOpen = 0.75, eyePulse = Math.random() * 7;

    function resize() {
        W = window.innerWidth; H = window.innerHeight; mobile = W < 700;
        canvas.width = W; canvas.height = H;
    }
    function line(points, color, width, alpha) {
        if (!points.length) return;
        ctx.save(); ctx.globalAlpha = alpha; ctx.strokeStyle = color; ctx.lineWidth = width;
        ctx.shadowBlur = width > 2 ? 16 : 5; ctx.shadowColor = color;
        ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y);
        points.slice(1).forEach(function(point) { ctx.lineTo(point.x, point.y); });
        ctx.stroke(); ctx.restore();
    }
    function makeLightning(x) {
        var points = [{ x: x, y: H * .03 }], px = x, py = H * .03;
        while (py < H * .68) {
            py += 18 + Math.random() * 38; px += (Math.random() - .5) * 54;
            points.push({ x: px, y: py });
        }
        return points;
    }
    function drawEye(time) {
        var breathing = .9 + Math.sin(time * .72) * .08;
        var open = Math.max(.18, Math.min(1, eyeOpen * breathing));
        var radius = Math.min(W, H) * (mobile ? .2 : .24);
        var gazeX = (targetEyeX - W * .5) / Math.max(W, 1);
        var gazeY = (targetEyeY - H * .3) / Math.max(H, 1);
        ctx.save(); ctx.translate(eyeX, eyeY); ctx.rotate(gazeX * .08);
        var aura = ctx.createRadialGradient(0, 0, 2, 0, 0, radius * 2.2);
        aura.addColorStop(0, 'rgba(255,226,122,.13)'); aura.addColorStop(.38, 'rgba(120,231,255,.06)'); aura.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = aura; ctx.beginPath(); ctx.arc(0, 0, radius * 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = .52; ctx.strokeStyle = '#ffe27a'; ctx.shadowBlur = 24; ctx.shadowColor = '#ffb52e';
        ctx.lineWidth = 1.2; ctx.beginPath(); ctx.ellipse(0, 0, radius * 1.55, radius * .56 * open, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = .28; ctx.strokeStyle = '#78e7ff'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.ellipse(0, 0, radius * 1.85, radius * .7 * open, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.save(); ctx.beginPath(); ctx.ellipse(0, 0, radius * 1.5, radius * .52 * open, 0, 0, Math.PI * 2); ctx.clip();
        var iris = ctx.createRadialGradient(gazeX * radius * .35, gazeY * radius * .2, 2, 0, 0, radius * .75);
        iris.addColorStop(0, '#fff'); iris.addColorStop(.12, '#fff1a8'); iris.addColorStop(.34, '#ffb52e'); iris.addColorStop(.72, '#6cc9e5'); iris.addColorStop(1, '#120a18');
        ctx.fillStyle = iris; ctx.shadowBlur = 28; ctx.shadowColor = '#ffe27a';
        ctx.beginPath(); ctx.arc(gazeX * radius * .35, gazeY * radius * .2, radius * .66, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = .55; ctx.strokeStyle = '#fff8d7'; ctx.lineWidth = 1;
        for (var ray = 0; ray < 14; ray++) {
            var angle = ray * Math.PI * 2 / 14 + time * .12;
            ctx.beginPath(); ctx.moveTo(gazeX * radius * .35, gazeY * radius * .2);
            ctx.lineTo(gazeX * radius * .35 + Math.cos(angle) * radius * .62, gazeY * radius * .2 + Math.sin(angle) * radius * .62); ctx.stroke();
        }
        ctx.restore();
        ctx.globalAlpha = .95; ctx.fillStyle = '#05040a'; ctx.shadowBlur = 13; ctx.shadowColor = '#fff';
        ctx.beginPath(); ctx.ellipse(gazeX * radius * .35, gazeY * radius * .2, radius * .15, radius * .42, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    }
    function draw(now) {
        if (state.theme !== 'omniscienteye') return;
        if (!visible) { state.bgAnimFrame = null; return; }
        if (now - last < frameMs) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        last = now; tick++;
        var time = tick * .016;
        ctx.clearRect(0, 0, W, H);
        var voidGrad = ctx.createRadialGradient(W * .5, H * .28, 0, W * .5, H * .5, Math.max(W, H) * .9);
        voidGrad.addColorStop(0, '#170f25'); voidGrad.addColorStop(.3, '#0a0715'); voidGrad.addColorStop(.72, '#05040b'); voidGrad.addColorStop(1, '#010107');
        ctx.fillStyle = voidGrad; ctx.fillRect(0, 0, W, H);

        stars.forEach(function(star) {
            star.phase += .01 * star.z;
            var sx = ((star.x + Math.sin(time * .12 + star.phase) * .006) % 1) * W;
            var sy = ((star.y + time * .00022 * star.z) % 1) * H;
            var alpha = (.16 + star.z * .5) * (.55 + Math.abs(Math.sin(star.phase)) * .45);
            ctx.globalAlpha = alpha; ctx.fillStyle = star.hue; ctx.shadowBlur = star.z > .8 ? 8 : 0; ctx.shadowColor = star.hue;
            ctx.beginPath(); ctx.arc(sx, sy, star.r * (.7 + star.z * .5), 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;
        dust.forEach(function(particle) {
            particle.phase += .025; particle.x += particle.vx; particle.y += particle.vy;
            if (particle.x < -.04) particle.x = 1.04; if (particle.x > 1.04) particle.x = -.04;
            if (particle.y < -.04) particle.y = 1.04; if (particle.y > 1.04) particle.y = -.04;
            var px = particle.x * W, py = particle.y * H, alpha = .18 + Math.abs(Math.sin(particle.phase)) * .42;
            ctx.globalAlpha = alpha; ctx.fillStyle = particle.hue; ctx.shadowBlur = 10; ctx.shadowColor = particle.hue;
            ctx.beginPath(); ctx.arc(px, py, particle.r, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;
        galaxies.forEach(function(galaxy, index) {
            galaxy.rot += galaxy.speed; var gx = galaxy.x * W, gy = galaxy.y * H, gr = galaxy.r * Math.min(W, H) / 400;
            ctx.save(); ctx.translate(gx, gy); ctx.rotate(galaxy.rot);
            var glow = ctx.createRadialGradient(0, 0, 0, 0, 0, gr * 2.4);
            glow.addColorStop(0, 'rgba(255,241,168,.19)'); glow.addColorStop(.35, index % 2 ? 'rgba(120,231,255,.09)' : 'rgba(255,181,46,.1)'); glow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(0, 0, gr * 2.4, 0, Math.PI * 2); ctx.fill();
            for (var arm = 0; arm < galaxy.arms; arm++) {
                var points = [];
                for (var step = 0; step < 20; step++) {
                    var a = step * .34 + arm * Math.PI * 2 / galaxy.arms, r = gr * step / 18;
                    points.push({ x: Math.cos(a) * r * 1.9, y: Math.sin(a) * r * .5 });
                }
                line(points, index % 2 ? '#78e7ff' : '#ffe27a', 1, .22);
            }
            ctx.restore();
        });
        rings.forEach(function(ring, index) {
            ring.rot += ring.speed; var rr = ring.r * Math.min(W, H) / 180;
            ctx.save(); ctx.translate(ring.x * W, ring.y * H); ctx.rotate(ring.tilt + ring.rot);
            ctx.globalAlpha = .18; ctx.strokeStyle = index % 2 ? '#78e7ff' : '#ffe27a'; ctx.shadowBlur = 18; ctx.shadowColor = ctx.strokeStyle;
            ctx.lineWidth = 1.2; ctx.beginPath(); ctx.ellipse(0, 0, rr * 1.75, rr * .42, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.globalAlpha = .1; ctx.beginPath(); ctx.ellipse(0, 0, rr * 1.2, rr * .27, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
        });
        ctx.save(); ctx.globalAlpha = .13;
        for (var ribbon = 0; ribbon < 3; ribbon++) {
            var points = [];
            for (var x = -30; x <= W + 30; x += 26) points.push({ x: x, y: H * (.17 + ribbon * .17) + Math.sin(x * .006 + time * (.7 + ribbon * .17)) * H * .055 + Math.sin(x * .013 - time * .5) * H * .02 });
            line(points, ribbon === 0 ? '#fff1a8' : ribbon === 1 ? '#78e7ff' : '#ff83c6', 6, .9);
        }
        ctx.restore();
        if (now - lastLightning > (mobile ? 8200 : 4300) && Math.random() > .65) {
            lightning = makeLightning(Math.random() * W); lightningLife = 1; lastLightning = now;
        }
        if (lightning && lightningLife > .01) { line(lightning, '#fff8d7', 1.6, lightningLife); line(lightning, '#78e7ff', 6, lightningLife * .16); lightningLife *= .82; }
        eyePulse += .016; eyeOpen = .66 + Math.sin(eyePulse) * .24;
        eyeX += (W * .5 + Math.sin(time * .13) * W * .035 - eyeX) * .012;
        eyeY += (H * .3 + Math.cos(time * .11) * H * .025 - eyeY) * .012;
        drawEye(time);
        ctx.globalAlpha = 1; state.bgAnimFrame = requestAnimationFrame(draw);
    }
    function visibility() {
        visible = !document.hidden;
        if (!visible && state.bgAnimFrame) { cancelAnimationFrame(state.bgAnimFrame); state.bgAnimFrame = null; }
        else if (visible && state.theme === 'omniscienteye' && !state.bgAnimFrame) { last = 0; state.bgAnimFrame = requestAnimationFrame(draw); }
    }
    var finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    var cursor = document.getElementById('omniscient-cursor');
    if (!cursor) { cursor = document.createElement('div'); cursor.id = 'omniscient-cursor'; document.body.appendChild(cursor); }
    var lastSpark = 0;
    function cursorMove(event) {
        if (!finePointer || state.theme !== 'omniscienteye') return;
        targetEyeX = event.clientX; targetEyeY = event.clientY;
        cursor.style.left = event.clientX + 'px'; cursor.style.top = event.clientY + 'px';
        var current = performance.now(); if (current - lastSpark < 65) return; lastSpark = current;
        var spark = document.createElement('i'); spark.className = 'omniscient-cursor-spark';
        spark.style.left = event.clientX + 'px'; spark.style.top = event.clientY + 'px';
        spark.style.background = Math.random() > .5 ? '#ffe27a' : '#78e7ff'; spark.style.boxShadow = '0 0 10px ' + spark.style.background;
        spark.style.setProperty('--eye-x', ((Math.random() - .5) * 38).toFixed(1) + 'px');
        spark.style.setProperty('--eye-y', ((Math.random() - .5) * 38).toFixed(1) + 'px');
        document.body.appendChild(spark); setTimeout(function() { if (spark && spark.remove) spark.remove(); }, 1100);
    }
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', visibility, { passive: true });
    if (finePointer) document.addEventListener('mousemove', cursorMove, { passive: true });
    state.originCleanup = function() {
        window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', visibility);
        if (finePointer) document.removeEventListener('mousemove', cursorMove);
        if (cursor && cursor.remove) cursor.remove();
        document.querySelectorAll('.omniscient-cursor-spark').forEach(function(el) { el.remove(); });
    };
    state.originVisibilityCleanup = function() {};
    resize(); state.bgAnimFrame = requestAnimationFrame(draw);
}

/* ══ ⚜ OMNIPOTENT — INFINITY THRONE activation burst ══ */
function runInfinityThroneActivation() {
    if (SETTINGS.reducedMotion) return;
    var veil = document.createElement('div');
    veil.className = 'infinitythrone-activation';
    document.body.appendChild(veil);
    setTimeout(function() { if (veil && veil.remove) veil.remove(); }, 3200);

    var mobile = window.innerWidth < 600;
    var count = mobile ? 38 : 80;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var colors = ['#ffffff', '#ffd700', '#e8d5ff', '#c8b4ff', '#a8edff', '#fffde7'];
    for (var i = 0; i < count; i++) {
        var shard = document.createElement('span');
        shard.className = 'infinitythrone-burst';
        var size = (2 + Math.random() * (mobile ? 7 : 13)).toFixed(1) + 'px';
        var angle = Math.random() * Math.PI * 2;
        var distance = 90 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * .62;
        shard.style.cssText = 'width:' + size + ';height:' + size + ';left:' + cx + 'px;top:' + cy + 'px;' +
            'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
            'box-shadow:0 0 12px rgba(255,215,0,.95),0 0 28px rgba(200,170,255,.6);';
        shard.style.setProperty('--tx', (Math.cos(angle) * distance).toFixed(1) + 'px');
        shard.style.setProperty('--ty', (Math.sin(angle) * distance).toFixed(1) + 'px');
        shard.style.animationDelay = (Math.random() * .22).toFixed(2) + 's';
        document.body.appendChild(shard);
        (function(el) { setTimeout(function() { if (el && el.remove) el.remove(); }, 2400); })(shard);
    }

    var rawTargets = document.querySelectorAll(
        '#navbar, #app > *, .section-title, .script-card, .creator-card, .news-card, .executor-card, .settings-card, .bottom-nav'
    );
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var targets = Array.prototype.filter.call(rawTargets, function(el) {
        return el !== sidebar && el !== sidebarOverlay &&
            !el.closest('#sidebar') && !el.closest('#sidebar-overlay');
    });
    targets.forEach(function(el, index) {
        el.classList.remove('infinitythrone-assemble');
        el.style.setProperty('--pt-delay', Math.min(index * 26, 580) + 'ms');
    });
    void document.body.offsetWidth;
    targets.forEach(function(el) { el.classList.add('infinitythrone-assemble'); });
    setTimeout(function() {
        targets.forEach(function(el) { el.classList.remove('infinitythrone-assemble'); });
    }, 2200);
}

/* ══ ⚜ OMNIPOTENT — INFINITY THRONE background engine ══ */
function runInfinityThroneAnimation() {
    var ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    var canvas = ctx.canvas;
    var W = window.innerWidth, H = window.innerHeight;
    var mobile = W < 700;
    var frameMs = mobile ? 1000 / 32 : 1000 / 50;
    var visible = !document.hidden, last = 0, tick = 0;
    var density = mobile ? .55 : 1;

    /* ── Diamond stars ── */
    var stars = Array.from({ length: Math.floor((mobile ? 100 : 200) * density) }, function() {
        return {
            x: Math.random(), y: Math.random(), z: .2 + Math.random() * .8,
            r: .3 + Math.random() * 1.9, phase: Math.random() * 7,
            hue: ['#ffffff', '#fffde7', '#e8d5ff', '#a8edff', '#ffd700'][Math.floor(Math.random() * 5)]
        };
    });

    /* ── Gold-dust particles ── */
    var dust = Array.from({ length: Math.floor((mobile ? 44 : 95) * density) }, function() {
        return {
            x: Math.random(), y: Math.random(),
            vx: (Math.random() - .5) * .00019, vy: (Math.random() - .5) * .00013,
            r: .6 + Math.random() * 2.6, phase: Math.random() * 7,
            hue: Math.random() > .5 ? '#ffd700' : (Math.random() > .5 ? '#e8d5ff' : '#a8edff')
        };
    });

    /* ── Celestial rings (throne rings) ── */
    var rings = Array.from({ length: mobile ? 4 : 8 }, function(_, index) {
        return {
            x: .08 + Math.random() * .84, y: .1 + Math.random() * .8,
            r: 40 + Math.random() * 90, rot: Math.random() * 7,
            speed: (index % 2 ? -.0028 : .0022) * (1 + Math.random() * .4),
            tilt: (Math.random() - .5) * 1.1,
            hue: ['#ffd700', '#e8d5ff', '#ffffff', '#a8edff'][index % 4]
        };
    });

    /* ── Floating islands / palace blobs ── */
    var islands = Array.from({ length: mobile ? 3 : 6 }, function(_, i) {
        return {
            x: .15 + Math.random() * .7, y: .2 + Math.random() * .6,
            r: 28 + Math.random() * 55, phase: Math.random() * 7,
            speed: .0008 + Math.random() * .0012,
            hue: i % 2 ? '#ffd700' : '#c8b4ff'
        };
    });

    /* ── World events ── */
    var event = null, eventLife = 0, lastEvent = 0;
    var EVENT_INTERVAL = mobile ? 22000 : 14000;

    /* ── Aurora ribbons ── */
    var auroraPhase = 0;

    /* ── Light pillars ── */
    var pillars = Array.from({ length: mobile ? 2 : 4 }, function(_, i) {
        return { x: .1 + i * (.8 / (mobile ? 2 : 4)) + Math.random() * .1, phase: Math.random() * 7, speed: .006 + Math.random() * .004 };
    });

    /* ── Cursor (fine pointer) ── */
    var finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    var thrCursor = document.getElementById('infinitythrone-cursor');
    if (!thrCursor) {
        thrCursor = document.createElement('div');
        thrCursor.id = 'infinitythrone-cursor';
        document.body.appendChild(thrCursor);
    }
    var lastSpark = 0;
    function cursorMove(ev) {
        if (!finePointer || state.theme !== 'infinitythrone') return;
        thrCursor.style.left = ev.clientX + 'px'; thrCursor.style.top = ev.clientY + 'px';
        var now = performance.now(); if (now - lastSpark < 55) return; lastSpark = now;
        var colors = ['#ffd700', '#e8d5ff', '#ffffff', '#a8edff'];
        var spark = document.createElement('i'); spark.className = 'infinitythrone-cursor-spark';
        spark.style.left = ev.clientX + 'px'; spark.style.top = ev.clientY + 'px';
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        spark.style.boxShadow = '0 0 8px ' + spark.style.background + ', 0 0 16px rgba(255,215,0,.5)';
        spark.style.setProperty('--tx', ((Math.random() - .5) * 42).toFixed(1) + 'px');
        spark.style.setProperty('--ty', ((Math.random() - .5) * 42).toFixed(1) + 'px');
        document.body.appendChild(spark);
        setTimeout(function() { if (spark && spark.remove) spark.remove(); }, 950);
    }

    function resize() {
        W = window.innerWidth; H = window.innerHeight; mobile = W < 700;
        canvas.width = W; canvas.height = H;
    }

    /* ── World event generator ── */
    function triggerEvent() {
        var types = ['phoenix', 'comet', 'pillar', 'dragon', 'eclipse', 'fracture'];
        event = { type: types[Math.floor(Math.random() * types.length)], t: 0, x: Math.random() };
        eventLife = 1;
    }

    function drawEvent(time) {
        if (!event || eventLife <= .005) { event = null; return; }
        ctx.save();
        if (event.type === 'phoenix') {
            var px = event.x * W + Math.sin(time * 1.2) * W * .08;
            var py = H * (.12 + Math.sin(time * .5) * .07);
            var gg = ctx.createRadialGradient(px, py, 0, px, py, 60 * eventLife);
            gg.addColorStop(0, 'rgba(255,255,255,' + (.9 * eventLife) + ')');
            gg.addColorStop(.3, 'rgba(255,215,0,' + (.7 * eventLife) + ')');
            gg.addColorStop(.7, 'rgba(200,170,255,' + (.4 * eventLife) + ')');
            gg.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gg; ctx.beginPath(); ctx.arc(px, py, 60 * eventLife, 0, Math.PI * 2); ctx.fill();
            /* feathers */
            for (var f = 0; f < 8; f++) {
                var fa = event.t * 2.1 + f * Math.PI * 2 / 8;
                var fx = px + Math.cos(fa) * 80 * eventLife, fy = py + Math.sin(fa) * 40 * eventLife;
                ctx.globalAlpha = .55 * eventLife;
                ctx.fillStyle = f % 2 ? '#ffd700' : '#fff';
                ctx.beginPath(); ctx.arc(fx, fy, 5 * eventLife, 0, Math.PI * 2); ctx.fill();
            }
        } else if (event.type === 'comet') {
            var cx2 = event.x * W + event.t * W * .55;
            var cy2 = H * .05 + event.t * H * .22;
            if (cx2 < W * 1.2) {
                ctx.globalAlpha = .85 * eventLife;
                ctx.strokeStyle = '#ffd700'; ctx.lineWidth = 3; ctx.shadowBlur = 30; ctx.shadowColor = '#ffd700';
                ctx.beginPath(); ctx.moveTo(cx2, cy2); ctx.lineTo(cx2 - 120 * eventLife, cy2 - 60 * eventLife); ctx.stroke();
                ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cx2, cy2, 6 * eventLife, 0, Math.PI * 2); ctx.fill();
            }
        } else if (event.type === 'eclipse') {
            ctx.globalAlpha = .18 * eventLife;
            ctx.fillStyle = '#07051a';
            ctx.beginPath(); ctx.arc(W * .5, H * .22, H * .25 * eventLife, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = .7 * eventLife;
            var halo = ctx.createRadialGradient(W * .5, H * .22, H * .25 * eventLife, W * .5, H * .22, H * .35 * eventLife);
            halo.addColorStop(0, 'rgba(255,215,0,.85)'); halo.addColorStop(.4, 'rgba(200,170,255,.5)'); halo.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(W * .5, H * .22, H * .35 * eventLife, 0, Math.PI * 2); ctx.fill();
        } else if (event.type === 'fracture') {
            ctx.globalAlpha = .28 * eventLife;
            ctx.strokeStyle = '#e8d5ff'; ctx.lineWidth = 1.5; ctx.shadowBlur = 20; ctx.shadowColor = '#e8d5ff';
            for (var fr = 0; fr < 6; fr++) {
                var fa2 = fr * Math.PI / 3;
                ctx.beginPath();
                ctx.moveTo(W * .5, H * .4);
                ctx.lineTo(W * .5 + Math.cos(fa2) * W * .45, H * .4 + Math.sin(fa2) * H * .38);
                ctx.stroke();
            }
        } else if (event.type === 'pillar') {
            for (var pp = 0; pp < 3; pp++) {
                var px2 = (event.x * .5 + pp * .22) * W;
                var pg = ctx.createLinearGradient(px2, H, px2, 0);
                pg.addColorStop(0, 'rgba(255,215,0,0)');
                pg.addColorStop(.4, 'rgba(255,215,0,' + (.35 * eventLife) + ')');
                pg.addColorStop(.7, 'rgba(232,213,255,' + (.22 * eventLife) + ')');
                pg.addColorStop(1, 'rgba(255,255,255,0)');
                ctx.fillStyle = pg; ctx.fillRect(px2 - 4, 0, 8, H);
            }
        } else if (event.type === 'dragon') {
            var ang = event.t * 1.6 + event.x * Math.PI * 2;
            var drx = W * .5 + Math.cos(ang) * W * .36;
            var dry = H * .35 + Math.sin(ang * .6) * H * .22;
            ctx.globalAlpha = .55 * eventLife;
            var dg = ctx.createRadialGradient(drx, dry, 0, drx, dry, 38 * eventLife);
            dg.addColorStop(0, 'rgba(255,255,255,.95)'); dg.addColorStop(.4, 'rgba(200,170,255,.7)'); dg.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = dg; ctx.beginPath(); ctx.arc(drx, dry, 38 * eventLife, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
        event.t += .016; eventLife *= .986;
    }

    function draw(now) {
        if (state.theme !== 'infinitythrone') return;
        if (!visible) { state.bgAnimFrame = null; return; }
        if (now - last < frameMs) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        last = now; tick++;
        var time = tick * .016;
        ctx.clearRect(0, 0, W, H);

        /* ── Deep space background ── */
        var bg = ctx.createRadialGradient(W * .5, H * .25, 0, W * .5, H * .5, Math.max(W, H) * .95);
        bg.addColorStop(0, '#0e0b26'); bg.addColorStop(.28, '#07051a'); bg.addColorStop(.62, '#04030f'); bg.addColorStop(1, '#020109');
        ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

        /* ── Celestial aurora backdrop ── */
        auroraPhase += .007;
        for (var a = 0; a < 3; a++) {
            var apts = [];
            for (var ax = -40; ax <= W + 40; ax += 28) {
                apts.push({ x: ax, y: H * (.14 + a * .12) + Math.sin(ax * .005 + auroraPhase * (.8 + a * .14)) * H * .065 + Math.cos(ax * .009 - auroraPhase * .42) * H * .025 });
            }
            ctx.save(); ctx.globalAlpha = .11 + a * .03; ctx.strokeStyle = a === 0 ? '#ffd700' : a === 1 ? '#e8d5ff' : '#a8edff';
            ctx.shadowBlur = 22; ctx.shadowColor = ctx.strokeStyle; ctx.lineWidth = 8 - a;
            ctx.beginPath(); ctx.moveTo(apts[0].x, apts[0].y);
            apts.slice(1).forEach(function(p) { ctx.lineTo(p.x, p.y); }); ctx.stroke(); ctx.restore();
        }

        /* ── Light pillars ── */
        pillars.forEach(function(pil) {
            pil.phase += pil.speed;
            var px = pil.x * W;
            var alpha = .06 + Math.abs(Math.sin(pil.phase)) * .1;
            var pg = ctx.createLinearGradient(px, H, px, 0);
            pg.addColorStop(0, 'rgba(255,215,0,0)');
            pg.addColorStop(.45, 'rgba(255,215,0,' + alpha + ')');
            pg.addColorStop(.75, 'rgba(232,213,255,' + (alpha * .6) + ')');
            pg.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.save(); ctx.fillStyle = pg; ctx.shadowBlur = 18; ctx.shadowColor = '#ffd700';
            ctx.fillRect(px - 3, 0, 6, H); ctx.restore();
        });

        /* ── Floating islands / palace ── */
        islands.forEach(function(isl) {
            isl.phase += isl.speed;
            var ix = ((isl.x + Math.sin(isl.phase * .38) * .04) % 1) * W;
            var iy = isl.y * H + Math.sin(isl.phase) * 18;
            var ir = isl.r * Math.min(W, H) / 420;
            var ig = ctx.createRadialGradient(ix, iy, 0, ix, iy, ir * 1.6);
            ig.addColorStop(0, 'rgba(255,255,255,.09)');
            ig.addColorStop(.4, isl.hue === '#ffd700' ? 'rgba(255,215,0,.05)' : 'rgba(200,170,255,.05)');
            ig.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.save(); ctx.fillStyle = ig; ctx.shadowBlur = 30; ctx.shadowColor = isl.hue;
            ctx.beginPath(); ctx.ellipse(ix, iy, ir * 1.6, ir * .45, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
            ctx.save(); ctx.globalAlpha = .18; ctx.strokeStyle = isl.hue; ctx.lineWidth = 1;
            ctx.shadowBlur = 12; ctx.shadowColor = isl.hue;
            ctx.beginPath(); ctx.ellipse(ix, iy, ir * 1.4, ir * .38, 0, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        });

        /* ── Celestial rings ── */
        rings.forEach(function(ring) {
            ring.rot += ring.speed;
            var rr = ring.r * Math.min(W, H) / 170;
            ctx.save(); ctx.translate(ring.x * W, ring.y * H);
            ctx.rotate(ring.tilt + ring.rot);
            ctx.globalAlpha = .2; ctx.strokeStyle = ring.hue; ctx.shadowBlur = 20; ctx.shadowColor = ring.hue;
            ctx.lineWidth = 1.4; ctx.beginPath(); ctx.ellipse(0, 0, rr * 1.85, rr * .44, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.globalAlpha = .1; ctx.lineWidth = .8; ctx.beginPath(); ctx.ellipse(0, 0, rr * 1.25, rr * .3, 0, 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
        });

        /* ── Diamond stars ── */
        stars.forEach(function(star) {
            star.phase += .009 * star.z;
            var sx = ((star.x + Math.sin(time * .1 + star.phase) * .005) % 1) * W;
            var sy = ((star.y + time * .00018 * star.z) % 1) * H;
            var alpha = (.14 + star.z * .52) * (.5 + Math.abs(Math.sin(star.phase)) * .5);
            ctx.globalAlpha = alpha; ctx.fillStyle = star.hue;
            ctx.shadowBlur = star.z > .75 ? 10 : 0; ctx.shadowColor = star.hue;
            ctx.beginPath(); ctx.arc(sx, sy, star.r * (.65 + star.z * .55), 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;

        /* ── Gold dust ── */
        dust.forEach(function(par) {
            par.phase += .022; par.x += par.vx; par.y += par.vy;
            if (par.x < -.04) par.x = 1.04; if (par.x > 1.04) par.x = -.04;
            if (par.y < -.04) par.y = 1.04; if (par.y > 1.04) par.y = -.04;
            var px = par.x * W, py = par.y * H;
            var alpha = .16 + Math.abs(Math.sin(par.phase)) * .44;
            ctx.globalAlpha = alpha; ctx.fillStyle = par.hue; ctx.shadowBlur = 10; ctx.shadowColor = par.hue;
            ctx.beginPath(); ctx.arc(px, py, par.r, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1;

        /* ── Central divine throne glow ── */
        var throneX = W * .5 + Math.sin(time * .11) * W * .02;
        var throneY = H * (.32 + Math.cos(time * .09) * .028);
        var tg = ctx.createRadialGradient(throneX, throneY, 0, throneX, throneY, Math.min(W, H) * .38);
        tg.addColorStop(0, 'rgba(255,255,255,.12)');
        tg.addColorStop(.22, 'rgba(255,215,0,.08)');
        tg.addColorStop(.55, 'rgba(200,170,255,.05)');
        tg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = tg; ctx.beginPath(); ctx.arc(throneX, throneY, Math.min(W, H) * .38, 0, Math.PI * 2); ctx.fill();

        /* ── World events ── */
        if (now - lastEvent > EVENT_INTERVAL && Math.random() > .55) {
            triggerEvent(); lastEvent = now;
        }
        drawEvent(time);

        ctx.globalAlpha = 1; state.bgAnimFrame = requestAnimationFrame(draw);
    }

    function onVisibilityChange() {
        visible = !document.hidden;
        if (!visible && state.bgAnimFrame) { cancelAnimationFrame(state.bgAnimFrame); state.bgAnimFrame = null; }
        else if (visible && state.theme === 'infinitythrone' && !state.bgAnimFrame) { last = 0; state.bgAnimFrame = requestAnimationFrame(draw); }
    }

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });
    if (finePointer) document.addEventListener('mousemove', cursorMove, { passive: true });

    state.originCleanup = function() {
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        if (finePointer) document.removeEventListener('mousemove', cursorMove);
        if (thrCursor && thrCursor.remove) thrCursor.remove();
        document.querySelectorAll('.infinitythrone-cursor-spark').forEach(function(el) { el.remove(); });
    };
    state.originVisibilityCleanup = function() {
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    resize(); state.bgAnimFrame = requestAnimationFrame(draw);
}


/* ══════════════════════════════════════════════════════════════════════
   🜂 ABSOLUTE — THE ABSOLUTE SINGULARITY
      Activation burst + Background engine
══════════════════════════════════════════════════════════════════════ */
function runAbsoluteSingularityActivation() {
    if (SETTINGS.reducedMotion) return;

    /* ── Full-screen reality-reconstruction veil ── */
    var veil = document.createElement('div');
    veil.className = 'absolutesingularity-activation';
    document.body.appendChild(veil);
    setTimeout(function() { if (veil && veil.remove) veil.remove(); }, 3000);

    /* ── Prismatic fragments bursting outward ── */
    var mobile = window.innerWidth < 600;
    var count = mobile ? 52 : 110;
    var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    var colors = ['#FDFDFD', '#7CF9FF', '#DDE5F5', '#B56CFF', '#ffffff', '#a8f0ff'];
    for (var i = 0; i < count; i++) {
        var frag = document.createElement('span');
        frag.className = 'absolutesingularity-fragment';
        var w = (2 + Math.random() * (mobile ? 8 : 16)).toFixed(1) + 'px';
        var h = (1 + Math.random() * (mobile ? 4 : 8)).toFixed(1) + 'px';
        var angle = Math.random() * Math.PI * 2;
        var dist = 80 + Math.random() * Math.min(window.innerWidth, window.innerHeight) * .7;
        var rot = (Math.random() * 720 - 360).toFixed(1) + 'deg';
        frag.style.cssText =
            'width:' + w + ';height:' + h + ';left:' + cx + 'px;top:' + cy + 'px;' +
            'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
            'box-shadow: 0 0 14px rgba(124,249,255,.95), 0 0 32px rgba(181,108,255,.6);';
        frag.style.setProperty('--abfx', (Math.cos(angle) * dist).toFixed(1) + 'px');
        frag.style.setProperty('--abfy', (Math.sin(angle) * dist).toFixed(1) + 'px');
        frag.style.setProperty('--abfr', rot);
        frag.style.animationDelay = (Math.random() * .28).toFixed(3) + 's';
        document.body.appendChild(frag);
        (function(el) { setTimeout(function() { if (el && el.remove) el.remove(); }, 2600); })(frag);
    }

    /* ── Assemble UI elements piece by piece ── */
    var rawTargets = document.querySelectorAll(
        '#navbar, #app > *, .section-title, .script-card, .creator-card, .news-card, .executor-card, .settings-card, .bottom-nav'
    );
    var sidebar = document.getElementById('sidebar');
    var sidebarOverlay = document.getElementById('sidebar-overlay');
    var targets = Array.prototype.filter.call(rawTargets, function(el) {
        return el !== sidebar && el !== sidebarOverlay &&
            !el.closest('#sidebar') && !el.closest('#sidebar-overlay');
    });
    targets.forEach(function(el, index) {
        el.classList.remove('absolutesingularity-assemble');
        el.style.setProperty('--abs-delay', Math.min(index * 28, 640) + 'ms');
    });
    void document.body.offsetWidth;
    targets.forEach(function(el) { el.classList.add('absolutesingularity-assemble'); });
    setTimeout(function() {
        targets.forEach(function(el) { el.classList.remove('absolutesingularity-assemble'); });
    }, 2400);
}

/* ══ 🜂 ABSOLUTE SINGULARITY — Canvas background engine ══ */
function runAbsoluteSingularityAnimation() {
    var ctx = setupCanvas('bgCanvas');
    if (!ctx) return;
    var canvas = ctx.canvas;
    var W = window.innerWidth, H = window.innerHeight;
    var mobile = W < 700;
    var frameMs = mobile ? 1000 / 30 : 1000 / 55;
    var visible = !document.hidden, last = 0, tick = 0;
    var density = mobile ? .5 : 1;

    /* ── Quantum fragments (not stars — crystalline shards) ── */
    var fragments = Array.from({ length: Math.floor((mobile ? 80 : 180) * density) }, function() {
        return {
            x: Math.random(), y: Math.random(), z: .2 + Math.random() * .8,
            vx: (Math.random() - .5) * .00022, vy: (Math.random() - .5) * .00016,
            w: .8 + Math.random() * 2.4, h: .3 + Math.random() * 1.2,
            angle: Math.random() * Math.PI * 2, rotSpeed: (Math.random() - .5) * .008,
            phase: Math.random() * Math.PI * 2, speed: .0005 + Math.random() * .001,
            hue: ['#FDFDFD', '#7CF9FF', '#DDE5F5', '#B56CFF', '#a8f0ff', '#ffffff'][Math.floor(Math.random() * 6)],
            opacity: .3 + Math.random() * .7
        };
    });

    /* ── Energy droplets (circular plasma blobs) ── */
    var droplets = Array.from({ length: Math.floor((mobile ? 30 : 70) * density) }, function() {
        return {
            x: Math.random(), y: Math.random(),
            vx: (Math.random() - .5) * .00015, vy: (Math.random() - .5) * .0001,
            r: .5 + Math.random() * 2.2,
            phase: Math.random() * Math.PI * 2, speed: .002 + Math.random() * .003,
            hue: Math.random() > .55 ? '#7CF9FF' : (Math.random() > .5 ? '#B56CFF' : '#FDFDFD')
        };
    });

    /* ── Geometric monoliths (large floating rectangles) ── */
    var monoliths = Array.from({ length: mobile ? 3 : 7 }, function(_, i) {
        return {
            x: .06 + Math.random() * .88, y: .06 + Math.random() * .88,
            w: 18 + Math.random() * 54, h: 60 + Math.random() * 180,
            angle: Math.random() * Math.PI * .5,
            rotSpeed: (Math.random() - .5) * .0006,
            phase: Math.random() * Math.PI * 2, speed: .0004 + Math.random() * .0006,
            hue: i % 3 === 0 ? 'rgba(124,249,255,' : (i % 3 === 1 ? 'rgba(181,108,255,' : 'rgba(253,253,253,'),
            opacity: .03 + Math.random() * .07
        };
    });

    /* ── Energy rings (large) ── */
    var rings = Array.from({ length: mobile ? 3 : 7 }, function(_, i) {
        return {
            x: .1 + Math.random() * .8, y: .1 + Math.random() * .8,
            r: 50 + Math.random() * 160, rot: Math.random() * Math.PI * 2,
            rotSpeed: (i % 2 ? -.0018 : .0022) * (1 + Math.random() * .5),
            tilt: (Math.random() - .5) * 1.4,
            hue: ['rgba(124,249,255,', 'rgba(181,108,255,', 'rgba(253,253,253,', 'rgba(221,229,245,'][i % 4],
            opacity: .08 + Math.random() * .16, phase: Math.random() * Math.PI * 2, speed: .0008 + Math.random() * .001
        };
    });

    /* ── Floating luminous cubes (wireframe) ── */
    var cubes = Array.from({ length: mobile ? 2 : 5 }, function(_, i) {
        return {
            x: .12 + Math.random() * .76, y: .12 + Math.random() * .76,
            size: 22 + Math.random() * 55, angle: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - .5) * .008, phase: Math.random() * Math.PI * 2,
            speed: .0005 + Math.random() * .0007,
            hue: i % 2 ? 'rgba(124,249,255,' : 'rgba(181,108,255,'
        };
    });

    /* ── Mathematical symbols (glowing tiny chars) ── */
    var symbols = ['∞','Δ','∑','π','φ','Ω','∫','√','λ','θ','⊕','⋈','⌘','⟡','🜂'];
    var glyphs = Array.from({ length: mobile ? 12 : 28 }, function() {
        return {
            x: Math.random(), y: Math.random(),
            vx: (Math.random() - .5) * .00008, vy: -(.00006 + Math.random() * .00012),
            sym: symbols[Math.floor(Math.random() * symbols.length)],
            size: 9 + Math.random() * 14, phase: Math.random() * Math.PI * 2,
            hue: Math.random() > .5 ? 'rgba(124,249,255,' : 'rgba(181,108,255,',
            opacity: .12 + Math.random() * .38
        };
    });

    /* ── Light ribbons (flowing energy rivers) ── */
    var ribbons = Array.from({ length: mobile ? 2 : 5 }, function(_, i) {
        return {
            phase: Math.random() * Math.PI * 2, speed: .004 + Math.random() * .006,
            y: .18 + i * (.72 / (mobile ? 2 : 5)),
            amplitude: .04 + Math.random() * .07, width: 1 + Math.random() * 2,
            hue: i % 2 ? 'rgba(124,249,255,' : 'rgba(181,108,255,'
        };
    });

    /* ── Prism shards (brief flashes of refracted light) ── */
    var prisms = Array.from({ length: mobile ? 2 : 5 }, function() {
        return { x: Math.random(), y: Math.random(), phase: Math.random() * Math.PI * 2, speed: .005 + Math.random() * .01, opacity: 0 };
    });

    /* ── Reality-bend event system ── */
    var realityEvent = null, realityLife = 0, lastRealityEvent = 0;
    var REALITY_INTERVAL = mobile ? 18000 : 11000;

    /* ── Custom cursor ── */
    var finePointer = window.matchMedia && window.matchMedia('(pointer:fine)').matches;
    var absCursor = document.getElementById('absolutesingularity-cursor');
    if (!absCursor) {
        absCursor = document.createElement('div');
        absCursor.id = 'absolutesingularity-cursor';
        document.body.appendChild(absCursor);
    }
    var lastParticle = 0;
    function cursorMove(ev) {
        if (!finePointer || state.theme !== 'absolutesingularity') return;
        absCursor.style.left = ev.clientX + 'px';
        absCursor.style.top = ev.clientY + 'px';
        var now = performance.now();
        if (now - lastParticle < 48) return;
        lastParticle = now;
        var cols = ['#7CF9FF', '#B56CFF', '#FDFDFD', '#DDE5F5', '#a8f0ff'];
        var p = document.createElement('i');
        p.className = 'absolutesingularity-cursor-particle';
        var size = (2 + Math.random() * 5).toFixed(1) + 'px';
        p.style.cssText = 'left:' + ev.clientX + 'px;top:' + ev.clientY + 'px;width:' + size + ';height:' + size + ';' +
            'background:' + cols[Math.floor(Math.random() * cols.length)] + ';' +
            'box-shadow: 0 0 10px rgba(124,249,255,.9), 0 0 20px rgba(181,108,255,.5);';
        p.style.setProperty('--abx', ((Math.random() - .5) * 48).toFixed(1) + 'px');
        p.style.setProperty('--aby', ((Math.random() - .5) * 48).toFixed(1) + 'px');
        document.body.appendChild(p);
        setTimeout(function() { if (p && p.remove) p.remove(); }, 1000);
    }

    function resize() {
        W = window.innerWidth; H = window.innerHeight; mobile = W < 700;
        canvas.width = W; canvas.height = H;
    }

    /* ── Reality event trigger ── */
    function triggerRealityEvent() {
        var types = ['dimension_fracture', 'quantum_mirror', 'light_river', 'energy_burst', 'prism_flash'];
        realityEvent = { type: types[Math.floor(Math.random() * types.length)], t: 0, x: .2 + Math.random() * .6, y: .2 + Math.random() * .6 };
        realityLife = 1;
    }

    function drawRealityEvent(time) {
        if (!realityEvent || realityLife <= .005) { realityEvent = null; return; }
        ctx.save();
        if (realityEvent.type === 'dimension_fracture') {
            ctx.globalAlpha = .22 * realityLife;
            ctx.strokeStyle = '#7CF9FF'; ctx.lineWidth = 1; ctx.shadowBlur = 18; ctx.shadowColor = '#7CF9FF';
            for (var f = 0; f < 7; f++) {
                var fa = f * Math.PI * 2 / 7;
                ctx.beginPath();
                ctx.moveTo(realityEvent.x * W, realityEvent.y * H);
                ctx.lineTo(realityEvent.x * W + Math.cos(fa) * W * .38, realityEvent.y * H + Math.sin(fa) * H * .35);
                ctx.stroke();
            }
        } else if (realityEvent.type === 'quantum_mirror') {
            ctx.globalAlpha = .12 * realityLife;
            var mx = realityEvent.x * W, my = realityEvent.y * H;
            var mg = ctx.createRadialGradient(mx, my, 0, mx, my, 140 * realityLife);
            mg.addColorStop(0, 'rgba(253,253,253,.9)');
            mg.addColorStop(.3, 'rgba(124,249,255,.6)');
            mg.addColorStop(.7, 'rgba(181,108,255,.3)');
            mg.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = mg; ctx.beginPath(); ctx.arc(mx, my, 140 * realityLife, 0, Math.PI * 2); ctx.fill();
        } else if (realityEvent.type === 'light_river') {
            ctx.globalAlpha = .35 * realityLife;
            ctx.strokeStyle = '#7CF9FF'; ctx.lineWidth = 1.5; ctx.shadowBlur = 24; ctx.shadowColor = '#7CF9FF';
            ctx.beginPath();
            ctx.moveTo(0, realityEvent.y * H);
            for (var s = 0; s <= W; s += 6) {
                ctx.lineTo(s, realityEvent.y * H + Math.sin(s * .015 + time * 2.2) * H * .06);
            }
            ctx.stroke();
        } else if (realityEvent.type === 'energy_burst') {
            var bx = realityEvent.x * W, by = realityEvent.y * H;
            ctx.globalAlpha = .28 * realityLife;
            for (var r = 0; r < 4; r++) {
                var rr = (40 + r * 55) * realityLife;
                ctx.strokeStyle = r % 2 ? '#B56CFF' : '#7CF9FF';
                ctx.lineWidth = 1.2; ctx.shadowBlur = 14; ctx.shadowColor = ctx.strokeStyle;
                ctx.beginPath(); ctx.arc(bx, by, rr, 0, Math.PI * 2); ctx.stroke();
            }
        } else if (realityEvent.type === 'prism_flash') {
            ctx.globalAlpha = .18 * realityLife;
            var px = realityEvent.x * W, py = realityEvent.y * H;
            var cols = ['#FDFDFD', '#7CF9FF', '#DDE5F5', '#B56CFF'];
            for (var c = 0; c < cols.length; c++) {
                ctx.strokeStyle = cols[c]; ctx.lineWidth = .8; ctx.shadowBlur = 8; ctx.shadowColor = cols[c];
                ctx.beginPath();
                ctx.moveTo(px, py);
                var ca = c * Math.PI / 2 + time * .5;
                ctx.lineTo(px + Math.cos(ca) * W * .3, py + Math.sin(ca) * H * .28);
                ctx.stroke();
            }
        }
        ctx.restore();
    }

    function draw(now) {
        if (!visible) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        if (now - last < frameMs) { state.bgAnimFrame = requestAnimationFrame(draw); return; }
        last = now; tick++;
        var time = now * .001;

        /* ── Clear ── */
        ctx.clearRect(0, 0, W, H);

        /* ── Infinite white void base — layered deep black with energy veins ── */
        var bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, 'rgba(3,3,3,1)');
        bgGrad.addColorStop(.35, 'rgba(5,5,7,1)');
        bgGrad.addColorStop(.7, 'rgba(7,7,10,1)');
        bgGrad.addColorStop(1, 'rgba(3,3,3,1)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        /* ── Energy vein flows (moving across background) ── */
        ctx.save();
        for (var rv = 0; rv < (mobile ? 3 : 6); rv++) {
            var rvPhase = rv * Math.PI / 3 + time * (.5 + rv * .12);
            var rvY = ((.14 + rv * .16) * H + Math.sin(rvPhase) * H * .04);
            var rvGrad = ctx.createLinearGradient(0, rvY, W, rvY);
            rvGrad.addColorStop(0, 'rgba(0,0,0,0)');
            rvGrad.addColorStop(.2 + Math.sin(rvPhase) * .1, rv % 2 ? 'rgba(124,249,255,.032)' : 'rgba(181,108,255,.022)');
            rvGrad.addColorStop(.5, rv % 2 ? 'rgba(124,249,255,.055)' : 'rgba(181,108,255,.038)');
            rvGrad.addColorStop(.8, rv % 2 ? 'rgba(124,249,255,.025)' : 'rgba(181,108,255,.018)');
            rvGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = rvGrad;
            ctx.fillRect(0, rvY - 60, W, 120);
        }
        ctx.restore();

        /* ── Invisible waves bending background (distortion effect) ── */
        if (tick % 4 === 0) {
            ctx.save();
            ctx.globalAlpha = .018 + Math.sin(time * .7) * .008;
            var wvGrad = ctx.createRadialGradient(W * .5, H * .5, 0, W * .5, H * .5, Math.max(W, H) * .7);
            wvGrad.addColorStop(0, 'rgba(124,249,255,.06)');
            wvGrad.addColorStop(.5, 'rgba(181,108,255,.03)');
            wvGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = wvGrad;
            ctx.fillRect(0, 0, W, H);
            ctx.restore();
        }

        /* ── Geometric monoliths ── */
        ctx.save();
        monoliths.forEach(function(m) {
            m.x += m.vx || 0; m.y += m.vy || 0; m.angle += m.rotSpeed;
            m.phase += m.speed;
            if (m.x < -.08) m.x = 1.08; if (m.x > 1.08) m.x = -.08;
            if (m.y < -.1) m.y = 1.1; if (m.y > 1.1) m.y = -.1;
            var alpha = m.opacity * (.6 + Math.sin(m.phase) * .4);
            ctx.save();
            ctx.translate(m.x * W, m.y * H);
            ctx.rotate(m.angle);
            ctx.strokeStyle = m.hue + alpha + ')';
            ctx.lineWidth = 1;
            ctx.shadowBlur = 22;
            ctx.shadowColor = m.hue + '.4)';
            ctx.strokeRect(-m.w / 2, -m.h / 2, m.w, m.h);
            /* inner reflection */
            ctx.globalAlpha = alpha * .35;
            ctx.strokeRect(-m.w * .35, -m.h * .35, m.w * .7, m.h * .7);
            ctx.restore();
        });
        ctx.restore();

        /* ── Floating luminous cubes (wireframe) ── */
        ctx.save();
        cubes.forEach(function(cu) {
            cu.angle += cu.rotSpeed;
            cu.phase += cu.speed;
            var bx = cu.x * W + Math.sin(cu.phase * 1.1) * 18;
            var by = cu.y * H + Math.cos(cu.phase * .9) * 12;
            var s = cu.size;
            var al = .06 + Math.sin(cu.phase) * .04;
            ctx.save();
            ctx.translate(bx, by); ctx.rotate(cu.angle);
            ctx.strokeStyle = cu.hue + al + ')';
            ctx.lineWidth = .8; ctx.shadowBlur = 16; ctx.shadowColor = cu.hue + '.3)';
            /* front face */
            ctx.strokeRect(-s / 2, -s / 2, s, s);
            /* back face (offset) */
            ctx.globalAlpha = al * .5;
            ctx.strokeRect(-s / 2 + 8, -s / 2 - 8, s, s);
            /* connecting lines */
            ctx.lineWidth = .4;
            ctx.beginPath();
            ctx.moveTo(-s / 2, -s / 2); ctx.lineTo(-s / 2 + 8, -s / 2 - 8);
            ctx.moveTo(s / 2, -s / 2); ctx.lineTo(s / 2 + 8, -s / 2 - 8);
            ctx.moveTo(s / 2, s / 2); ctx.lineTo(s / 2 + 8, s / 2 - 8);
            ctx.moveTo(-s / 2, s / 2); ctx.lineTo(-s / 2 + 8, s / 2 - 8);
            ctx.stroke();
            ctx.restore();
        });
        ctx.restore();

        /* ── Energy rings ── */
        ctx.save();
        rings.forEach(function(ring) {
            ring.rot += ring.rotSpeed;
            ring.phase += ring.speed;
            var rx = ring.x * W + Math.sin(ring.phase * .8) * 22;
            var ry = ring.y * H + Math.cos(ring.phase * .6) * 16;
            var al = ring.opacity * (.55 + Math.sin(ring.phase) * .45);
            ctx.save();
            ctx.translate(rx, ry);
            ctx.rotate(ring.rot);
            ctx.scale(1, Math.cos(ring.tilt));
            ctx.strokeStyle = ring.hue + al + ')';
            ctx.lineWidth = 1.2; ctx.shadowBlur = 24; ctx.shadowColor = ring.hue + '.5)';
            ctx.beginPath(); ctx.arc(0, 0, ring.r, 0, Math.PI * 2); ctx.stroke();
            /* inner ring */
            ctx.globalAlpha = al * .4;
            ctx.lineWidth = .5;
            ctx.beginPath(); ctx.arc(0, 0, ring.r * .72, 0, Math.PI * 2); ctx.stroke();
            ctx.restore();
        });
        ctx.restore();

        /* ── Light ribbons ── */
        ctx.save();
        ribbons.forEach(function(rib) {
            rib.phase += rib.speed;
            var al = .04 + Math.sin(rib.phase) * .03;
            ctx.strokeStyle = rib.hue + al + ')';
            ctx.lineWidth = rib.width; ctx.shadowBlur = 16; ctx.shadowColor = rib.hue + '.4)';
            ctx.beginPath();
            ctx.moveTo(0, rib.y * H);
            for (var s2 = 0; s2 <= W; s2 += 5) {
                ctx.lineTo(s2, rib.y * H + Math.sin(s2 * .012 + rib.phase) * H * rib.amplitude + Math.cos(s2 * .018 + rib.phase * .7) * H * rib.amplitude * .4);
            }
            ctx.stroke();
        });
        ctx.restore();

        /* ── Prism shards (brief refraction pulses) ── */
        ctx.save();
        prisms.forEach(function(pr) {
            pr.phase += pr.speed;
            pr.opacity = Math.max(0, Math.sin(pr.phase) * .22);
            if (pr.opacity > .01) {
                var px2 = pr.x * W, py2 = pr.y * H;
                var pcols = ['rgba(124,249,255,', 'rgba(221,229,245,', 'rgba(181,108,255,', 'rgba(253,253,253,'];
                for (var pc = 0; pc < pcols.length; pc++) {
                    ctx.strokeStyle = pcols[pc] + (pr.opacity * .9) + ')';
                    ctx.lineWidth = .8; ctx.shadowBlur = 10; ctx.shadowColor = pcols[pc] + '.5)';
                    ctx.beginPath();
                    var pa = pc * Math.PI / 4 + pr.phase * .4;
                    ctx.moveTo(px2, py2);
                    ctx.lineTo(px2 + Math.cos(pa) * 70 * pr.opacity * 5, py2 + Math.sin(pa) * 70 * pr.opacity * 5);
                    ctx.stroke();
                }
            }
        });
        ctx.restore();

        /* ── Crystal dust / quantum fragments ── */
        ctx.save();
        fragments.forEach(function(f) {
            f.x += f.vx; f.y += f.vy; f.angle += f.rotSpeed;
            f.phase += f.speed;
            if (f.x < 0) f.x = 1; if (f.x > 1) f.x = 0;
            if (f.y < 0) f.y = 1; if (f.y > 1) f.y = 0;
            var al = f.opacity * (.5 + Math.sin(f.phase) * .5);
            if (al < .01) return;
            ctx.save();
            ctx.translate(f.x * W, f.y * H); ctx.rotate(f.angle);
            ctx.fillStyle = f.hue;
            ctx.globalAlpha = al * f.z;
            ctx.shadowBlur = 6 * f.z; ctx.shadowColor = f.hue;
            ctx.fillRect(-f.w / 2, -f.h / 2, f.w, f.h);
            ctx.restore();
        });
        ctx.restore();

        /* ── Energy droplets (glowing photon sparks) ── */
        ctx.save();
        droplets.forEach(function(d) {
            d.x += d.vx; d.y += d.vy; d.phase += d.speed;
            if (d.x < 0) d.x = 1; if (d.x > 1) d.x = 0;
            if (d.y < 0) d.y = 1; if (d.y > 1) d.y = 0;
            var al = (.35 + Math.sin(d.phase) * .35);
            ctx.save();
            ctx.globalAlpha = al;
            ctx.fillStyle = d.hue; ctx.shadowBlur = 8; ctx.shadowColor = d.hue;
            ctx.beginPath(); ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2); ctx.fill();
            ctx.restore();
        });
        ctx.restore();

        /* ── Mathematical symbols ── */
        ctx.save();
        glyphs.forEach(function(g) {
            g.x += g.vx; g.y += g.vy; g.phase += .0015;
            if (g.y < -.02) { g.y = 1.02; g.x = Math.random(); }
            if (g.x < 0) g.x = 1; if (g.x > 1) g.x = 0;
            var al = g.opacity * (.4 + Math.sin(g.phase) * .6);
            if (al < .01) return;
            ctx.save();
            ctx.globalAlpha = al;
            ctx.fillStyle = g.hue + al + ')'; ctx.shadowBlur = 10; ctx.shadowColor = g.hue + '.6)';
            ctx.font = g.size + 'px monospace';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText(g.sym, g.x * W, g.y * H);
            ctx.restore();
        });
        ctx.restore();

        /* ── Reality event system ── */
        if (now - lastRealityEvent > REALITY_INTERVAL) {
            triggerRealityEvent(); lastRealityEvent = now;
        }
        if (realityEvent) {
            realityEvent.t += .016; realityLife *= .989;
            drawRealityEvent(time);
        }

        state.bgAnimFrame = requestAnimationFrame(draw);
    }

    function onVisibilityChange() {
        visible = !document.hidden;
        if (!visible && state.bgAnimFrame) { cancelAnimationFrame(state.bgAnimFrame); state.bgAnimFrame = null; }
        else if (visible && state.theme === 'absolutesingularity' && !state.bgAnimFrame) { last = 0; state.bgAnimFrame = requestAnimationFrame(draw); }
    }

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange, { passive: true });
    if (finePointer) document.addEventListener('mousemove', cursorMove, { passive: true });

    state.originCleanup = function() {
        window.removeEventListener('resize', resize);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        if (finePointer) document.removeEventListener('mousemove', cursorMove);
        if (absCursor && absCursor.remove) absCursor.remove();
        document.querySelectorAll('.absolutesingularity-cursor-particle').forEach(function(el) { el.remove(); });
    };
    state.originVisibilityCleanup = function() {
        document.removeEventListener('visibilitychange', onVisibilityChange);
    };
    resize(); state.bgAnimFrame = requestAnimationFrame(draw);
}


