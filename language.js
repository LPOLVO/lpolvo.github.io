/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — language.js
   Language system, translation tables, RTL support
   ═══════════════════════════════════════════════════════════════════ */

/* ── LANGUAGE ── */
function applyLanguageDirection() {
    const lang = state.language || 'en';
    const langData = LANGUAGES[lang] || LANGUAGES.en;
    document.documentElement.dir = langData.dir || 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('lp_lang', lang);
    document.querySelectorAll('.lang-pill').forEach(pill => pill.classList.toggle('active', pill.dataset.lang ===
    lang));
    updateTexts();
}

/* ── FULL TRANSLATION TABLE ── */
const TRANSLATIONS = {
    en: {
        signIn:'Sign In', searchPlaceholder:'Search scripts, users, tags...',
        noScripts:'No Scripts Yet', beFirst:"Be the first to start our site's journey.",
        submitScript:'Submit a Script', signInToView:'Sign In to View Profile',
        profileDescription:'Your profile, badges, and stats appear here after signing in.',
        dashboardDescription:'Track your scripts, view analytics, customize your experience, and manage your account.',
        signOutDesc:'Log out of your account', signInDesc:'Access your profile & dashboard',
        editProfile:'Edit Profile', editProfileDesc:'Change name, bio, avatar',
        saveChanges:'Save Changes', cancel:'Cancel',
        welcome:'Welcome to LPOLVO HUB! 🎉',
        usernameHint:'Letters, numbers, and underscores only',
        usernameAvailable:'Username available', usernameTaken:'Username already taken',
        continue:'Continue', back:'Back', finish:'Finish',
        noSpotlight:'No Spotlight Yet', leaderboardEmpty:'Leaderboard Empty',
        noCreators:'No creators yet',
        scriptsWillAppear:'Scripts will appear here once they are submitted.',
        scriptsComingSoon:'Scripts are coming soon. Submit yours and be part of the journey.',
        yourScriptsHere:'Your uploaded scripts will appear here.',
        noActivity:'No activity yet. Start exploring!',
        aboutLPOLVO:'About LPOLVO HUB', premiumPlatform:'Premium Roblox Platform',
        home:'Home', scripts:'Scripts', profile:'Profile', dashboard:'Dashboard', settings:'Settings',
        themes:'Themes', language:'Language', sounds:'Sounds', notifications:'Notifications',
        search:'Search', signOut:'Sign Out', uploadScript:'Upload Script',
        favorites:'Favorites', recentlyViewed:'Recently Viewed',
        copyScript:'Copy Script', viewProfile:'View Profile',
        free:'Free', paid:'Paid', new:'New', trending:'Trending', top:'Top',
        noResults:'No results found', loading:'Loading...', error:'Something went wrong',
        followers:'Followers', following:'Following', views:'Views', likes:'Likes', copies:'Copies',
        uploadedBy:'Uploaded by', publishedOn:'Published on', category:'Category',
        bio:'Bio', badges:'Badges', activity:'Activity', statsTitle:'Statistics',
        themeOptions:'Theme Options', soundEffects:'Sound Effects', particleEffects:'Particle Effects',
        reducedMotion:'Reduced Motion', saveProfile:'Save Profile',
        changeName:'Change Name', changeBio:'Change Bio', changeAvatar:'Change Avatar',
        changeBanner:'Change Banner', levelLabel:'Level', xpLabel:'XP',
        settingsLang:'Language', settingsAppearance:'Appearance', settingsSound:'Sound',
        settingsNotifs:'Notifications', settingsAccount:'Account', settingsAbout:'About',
        bgAnimLabel:'Background Animations', bgAnimDesc:'Theme particles & effects',
        reduceMotionLabel:'Reduce Motion', reduceMotionDesc:'Disable animations for accessibility',
        soundLabel:'Sound Effects', soundDesc:'UI click, hover, and notification sounds',
        ambientMusicLabel:'🎵 Ambient Music', ambientMusicDesc:'Quantum atmosphere — only for 🜂 Absolute Singularity',
        notifsLabel:'Push Notifications', notifsDesc:'Likes, comments, new scripts',
        themeOptionsLabel:'Theme Options',
        goodMorning:'Good morning', goodAfternoon:'Good afternoon', goodEvening:'Good evening',
        totalViews:'Total Views', myScripts:'My Scripts', favoritesLabel:'Favorites',
        quickActions:'Quick Actions', browseScripts:'Browse Scripts', changeTheme:'Change Theme',
        myProfile:'My Profile', currentTheme:'Current Theme', changeBtn:'Change',
        favoriteScripts:'Favorite Scripts', recentActivity:'Recent Activity',
        uploadLabel:'Upload Script', noFavoritesYet:'No favorites yet. Save scripts you love!',
        uploadedStatus:'Uploaded', submitFirst:'Submit your first',
        growing:'Growing', scriptsSaved:'Scripts saved',
        loadingActivity:'Loading activity...', couldNotLoad:'Could not load activity.',
        signInToSeeActivity:'Sign in to see activity',
        noActivityYet:'No activity yet', activityWillAppear:'Your activity will appear here.',
        editBanner:'✏️ Edit Banner', joinedLabel:'Joined', robloxCreator:'Roblox Creator',
        scriptsLabel:'Scripts', noFavsYet:'No favorites yet',
        earnBadges:'Earn badges by being active on LPOLVO HUB.',
        creatorBadge:'Creator', pioneerBadge:'Pioneer',
        sectCategories:'Categories', sectSpotlight:'Spotlight', sectLatestScripts:'Latest Scripts',
        sectHowItWorks:'How It Works', sectTopCreators:'Top Creators', sectTopScripts:'Top Scripts',
        sectExecutors:'Supported Executors', sectNews:'News & Updates', sectFAQ:'FAQ',
        seeAll:'See all', addScript:'+ Add Script',
        sortNew:'🆕 New', sortHot:'🔥 Hot', sortTop:'🏆 Top', sortFree:'🆓 Free',
        statScriptsLabel:'Scripts', statUsersLabel:'Users', statViewsLabel:'Views',
        footerAbout:'About', footerScripts:'Scripts', footerSettings:'Settings',
        loginTab:'Login', registerTab:'Register', welcomeBack:'Welcome back',
        signInToAccount:'Sign in to your LPOLVO HUB account',
        signInBtn:'Sign In', orDivider:'OR', continueGoogle:'Continue with Google',
        forgotPassword:'Forgot your password?', resetIt:'Reset it',
        createAccount:'Create Account', joinLpolvo:'Join LPOLVO HUB',
        registerBtn:'Create Account',
        cancelBtn:'Cancel', startTyping:'Start typing to search everything',
        uploadTitle:'Upload Script', scriptNameLabel:'Script Name',
        gameLabel:'Game', categoryLabel:'Category', descLabel:'Description',
        tagsLabel:'Tags', isFreeLabel:'Free Script',
        submitBtn:'Submit Script', uploadingLabel:'Uploading...',
        copyBtn:'Copy Script', copiedBtn:'Copied!', likeBtn:'Like',
        commentsLabel:'Comments', addCommentLabel:'Add a comment...',
        postComment:'Post', noComments:'No comments yet. Be the first!',
        copiedToast:'Script copied!', likedToast:'Script liked!', uploadedToast:'Script uploaded!',
        errorToast:'Something went wrong', savedToast:'Changes saved!',
        signedOutToast:'Signed out successfully',
        sidebarConnect:'Connect',
        settingsTitle:'Settings ⚙️',
        madeWith:'Made with ❤️ by LPOLVO',
        notificationsTitle:'Notifications 🔔',
        markAllRead:'Mark all read',
        noNotifsYet:'No notifications yet',
        signingIn:'Signing in...', creatingAccount:'Creating...', saving:'Saving...', submitting:'Submitting...',
        welcomeBack2:'Welcome back! 👋', accountCreated:'Account created! Welcome 🎉',
        accountCreatedToast:'Account created! Welcome to LPOLVO HUB 🎉',
        signedInGoogle:'Signed in with Google! 👋',
        signedOutSoon:'Signed out. See you soon! 👋',
        signOutError:'Sign out error',
        imageTooLarge:'Image must be smaller than 2MB',
        profileSaved:'Profile saved!', profileUpdated:'Profile updated! ✅',
        profileSaveFailed:'Failed to save profile. Try again.',
        displayNameRequired:'Display name is required.',
        resetLinkSent:'Reset link sent! Check your email.',
        enterEmail:'Please enter your email.',
        passwordMinLength:'Password must be at least 6 characters.',
        scriptNameRequired:'Script name is required.',
        gameNameRequired:'Game name is required.',
        scriptCodeRequired:'Script code is required.',
        scriptSubmitted:'Script submitted successfully! 🎉',
        scriptSubmitFailed:'Failed to submit script. Please try again.',
        pleaseSignIn:'Please sign in to submit a script',
        signInFirst:'Please sign in first',
        scriptNotFound:'Script not found',
        noCodeToCopy:'No code to copy',
        scriptCopiedClipboard:'Script copied to clipboard! 📋',
        scriptCopiedShort:'Script copied! 📋',
        couldNotUpdateFavs:'Could not update favorites',
        linkCopied:'Link copied! 🔗',
        reportSubmitted:'Report submitted. Thank you! 🚩',
        userProfilesSoon:'User profiles coming soon!',
        allNotifsRead:'All notifications marked as read',
        noNotifsYetIcon:'No notifications yet 🔔',
        copied:'✓ Copied!',
        saveFav:'🤍 Save', savedFav:'❤️ Saved',
        scriptsCountSingle:'script', scriptsCountPlural:'scripts',
        firebaseNotConnected:'Firebase not connected',
        allScripts:'All Scripts',
        emailLabel:'Email', passwordLabel:'Password', displayNameLabel:'Display Name',
        loginTitle:'Welcome back', loginSub:'Sign in to your LPOLVO HUB account',
        regTitle:'Create account', regJoin:'Join LPOLVO HUB',
        resetTitle:'Reset password', resetSub:'Enter your email to receive a reset link',
        sendResetLink:'Send Reset Link', backToLoginLink:'← Back to login',
        forgotText:'Forgot your password?',
        /* Extended keys */
        aboutLpolvoDesc:'LPOLVO HUB v1.3 is the Community Expansion update. Version 1.3 rebuilt the backend reliability of Profile Save and Script Upload, added Live Community Activity with real-time updates, a dynamic Trending system with Gold/Silver/Bronze rankings, Profile Completion tracking, and Firebase performance optimizations — preparing LPOLVO HUB for a fully connected community future.',
        gotIt:'Got it',
        versionLabel:'v1.3 — Community Expansion',
        scriptsCount:'Scripts', usersCount:'Users',
        rarityOp:'OP', raritySSS:'SSS+', rarityMythic:'MYTHIC', rarityTranscendent:'TRANSCENDENT',
        rarityOmniscient:'OMNISCIENT', rarityOmnipotent:'OMNIPOTENT',
        themeDefault:'Default', themeDarkMystery:'Dark Mystery', themeCalmMagic:'Calm Magic',
        themePeacefulNights:'Peaceful Nights', themeDayNight:'Day & Night',
        themeFireScales:'Fire & Scales', themeRebirth:'Rebirth', themeNorthernLights:'Northern Lights',
        themeNeonLights:'Neon Lights', themeWarriorSpirit:'Warrior Spirit',
        themePharaohLegacy:'Pharaoh Legacy', themeGothicShadows:'Gothic Shadows',
        themeDivineLight:'Divine Light', themeInfernalPower:'Infernal Power',
        themeBrilliant:'Brilliant', themeLuxury:'Luxury', themeDeepBlue:'Deep Blue',
        themeFantasy:'Fantasy', themeEnchanted:'Enchanted', themeChrono:'Chrono',
        themeTech:'Tech', themeIntelligence:'Intelligence', themePhysics:'Physics',
        themeCosmicBattle:'Cosmic Battle', themeMystery:'Mystery',
        themeCherryBlossom:'Cherry Blossom', themeDeepSea:'Deep Sea',
        themeMatrixRain:'Matrix Rain', themeDeepSpace:'Deep Space',
        themeHeatFlames:'Heat & Flames', themeNightAtmosphere:'Night Atmosphere',
        themeGoldenLight:'Golden Light', themeDarkIndigo:'Dark Indigo',
        themeRichGold:'Rich Gold', themeNeonGlow:'Neon Glow',
        themeRetro80s:'Retro 80s', themeVintageWarm:'Vintage Warm',
        themeCleanLight:'Clean Light', themeLuxuryRoyal:'Luxury Royal',
        themeCosmicVoid:'Cosmic Void', themeDigitalRain:'Digital Rain',
        themeLavaHeat:'Lava Heat', themeElectricStorm:'Electric Storm',
        themeDeepViolet:'Deep Violet', themeHellfire:'Hellfire',
        themeDeepGreen:'Deep Green', themeColorful:'Colorful',
        themeDeepShadow:'Deep Shadow', themeCleanBright:'Clean Bright',
        themeNeonFuture:'Neon Future', themeFrosted:'Frosted',
        themeBlackHoleUniverse:'Black Hole Universe', themeMagicalPetals:'Magical Petals',
        themeHeavenlyKingdom:'Heavenly Kingdom Above the Clouds',
        themeGravitySpace:'Gravity & Space Distortion',
        themeEndOfWorld:'End of the World', themeInfiniteFrozen:'Infinite Frozen Kingdom',
        themeCyberpunkHolograms:'Cyberpunk City Holograms',
        themeDarkGhosts:'Dark Ghosts & Purple Mist',
        themeAncientDragons:'Ancient Dragons & Golden Fire',
        themeGalaxiesBorn:'Galaxies & Stars Being Born',
        themeCrystalWaters:'Crystal Waters & Glowing Life',
        themeVolcanoesFire:'Volcanoes & Demonic Fire',
        themeSakuraTrees:'Massive Sakura Trees & Shrines',
        themeRealityBending:'Reality Bending & Portals',
        themeDesertMajesty:'Desert Majesty & Islamic Golden Age',
        themeRoyalKingdom:'Royal Kingdom & Desert Mystique',
        themeCelestialHeaven:'Celestial Heaven & Divine Supremacy',
        themeBirthReality:'The Birth of Reality Itself',
        themeMasterTime:'Master of Time Itself',
        themeParadiseBeyond:'Paradise Beyond Heaven, Space & Time',
        themePureEnergy:'Where Pure Energy Controls Reality',
        themeExistenceEnds:'The Point Where Existence Ends',
        themeRealityIntersects:'Where Every Reality Intersects',
        themeConsciousness:'The Consciousness of LPOLVO HUB',
        themeRealmExistence:'The Realm Where Existence Is Written',
        howFind:'Find a Script', howFindDesc:'Browse our growing library of premium Roblox scripts sorted by game, popularity, and category.',
        howCopy:'Copy the Script', howCopyDesc:'One-tap copy the script code to your clipboard. No extra steps needed.',
        howRun:'Run in Executor', howRunDesc:'Paste the script into your favorite executor and enjoy the features.',
        faqSafe:'Are the scripts safe to use?', faqSafeAns:'All scripts submitted go through community review. Use at your own discretion and always test in a safe environment first.',
        faqMobile:'How do I run scripts on mobile?', faqMobileAns:'Download a mobile executor like Arceus X or Delta, then paste the copied script code into the executor and run it.',
        faqKeyless:'What is a keyless script?', faqKeylessAns:'A keyless script does not require you to complete key verification steps. It runs immediately after pasting.',
        faqSubmit:'Can I submit my own script?', faqSubmitAns:'Yes! Tap the "+ Add Script" button, fill in the details and paste your Lua code. Your script will be live immediately.',
        faqBroken:'Why is a script not working?', faqBrokenAns:'Scripts may break after Roblox updates. Check for newer versions, or report the issue using the Report button on the script.',
        faqFree:'Is LPOLVO HUB free?', faqFreeAns:'Yes, LPOLVO HUB is completely free. No subscriptions, no paywalls.',
        catCombat:'Combat', catFarm:'Farm', catSpeed:'Speed', catEsp:'ESP',
        catTeleport:'Teleport', catTroll:'Troll', catUtility:'Utility',
        catGui:'GUI', catAuto:'Auto', catOther:'Other',
        execMobile:'Mobile', execPC:'PC',
        resetPassword:'Reset Password', resetPasswordDesc:'Enter your email to receive a reset link.',
        resetEmail:'Email Address', sendReset:'Send Reset Link', backToLogin:'Back to login',
        passwordResetSent:'Password reset email sent!',
        scriptVersion:'Script Version', scriptCode:'Script Code',
        scriptCodePlaceholder:'Paste your Lua script here...',
        scriptNamePlaceholder:'e.g. Auto Farm Pro',
        scriptGamePlaceholder:'e.g. Blox Fruits',
        scriptDescPlaceholder:'Describe what the script does...',
        scriptTagsPlaceholder:'e.g. farm, boss, auto',
        scriptVersionPlaceholder:'e.g. 1.0.0',
        notifEmpty:'No notifications yet', notifSignIn:'Sign in to see notifications',
        reportScript:'Report Script', shareScript:'Share Script',
        followBtn:'Follow', unfollowBtn:'Unfollow',
        scriptDetails:'Script Details', backBtn:'Back',
        executor:'Executor', platform:'Platform', free:'Free',
        heroTitle:'LPOLVO HUB', heroSubtitle:'Advanced Scripts & Automation',
        heroDesc:'Building the future, one script at a time. A centralized hub for premium Roblox scripts and intelligent automation tools.',
        exploreScripts:'Explore Scripts', community:'Community',
        themeMenuTitle:'Choose Theme', themeRarityAll:'All', themeRarityOp:'OP Legendary',
        themeRaritySss:'SSS+ Ultimate', themeRarityMythic:'Mythic',
        themeRarityTranscendent:'Transcendent', themeRarityOmniscient:'Omniscient',
        themeRarityOmnipotent:'Omnipotent',
    },
    ar: {
        signIn:'تسجيل الدخول', searchPlaceholder:'ابحث عن السكريبتات، المستخدمين، الوسوم...',
        noScripts:'لا توجد سكريبتات بعد', beFirst:'كن أول من يبدأ رحلة موقعنا.',
        submitScript:'أرسل سكريبت', signInToView:'سجّل الدخول لعرض الملف الشخصي',
        profileDescription:'ملفك الشخصي وشاراتك وإحصائياتك تظهر هنا بعد تسجيل الدخول.',
        dashboardDescription:'تتبع سكريبتاتك، اعرض التحليلات، وخصّص تجربتك.',
        signOutDesc:'تسجيل الخروج من حسابك', signInDesc:'الوصول إلى ملفك الشخصي ولوحة التحكم',
        editProfile:'تعديل الملف الشخصي', editProfileDesc:'تغيير الاسم والسيرة الذاتية والصورة الرمزية',
        saveChanges:'حفظ التغييرات', cancel:'إلغاء',
        welcome:'مرحباً بك في LPOLVO HUB! 🎉',
        usernameHint:'أحرف وأرقام وشرطات سفلية فقط',
        usernameAvailable:'اسم المستخدم متاح', usernameTaken:'اسم المستخدم مأخوذ',
        continue:'متابعة', back:'رجوع', finish:'إنهاء',
        noSpotlight:'لا يوجد مميّز حتى الآن', leaderboardEmpty:'قائمة الصدارة فارغة',
        noCreators:'لا يوجد منشئون بعد',
        scriptsWillAppear:'ستظهر السكريبتات هنا بعد إرسالها.',
        scriptsComingSoon:'السكريبتات قادمة قريباً. أرسل سكريبتك وكن جزءاً من الرحلة.',
        yourScriptsHere:'ستظهر سكريبتاتك المرفوعة هنا.',
        noActivity:'لا يوجد نشاط بعد. ابدأ الاستكشاف!',
        aboutLPOLVO:'عن LPOLVO HUB', premiumPlatform:'منصة Roblox المميزة',
        home:'الرئيسية', scripts:'السكريبتات', profile:'الملف الشخصي', dashboard:'لوحة التحكم', settings:'الإعدادات',
        themes:'المظاهر', language:'اللغة', sounds:'الأصوات', notifications:'الإشعارات',
        search:'بحث', signOut:'تسجيل الخروج', uploadScript:'رفع سكريبت',
        favorites:'المفضلة', recentlyViewed:'شوهد مؤخراً',
        copyScript:'نسخ السكريبت', viewProfile:'عرض الملف',
        free:'مجاني', paid:'مدفوع', new:'جديد', trending:'رائج', top:'الأفضل',
        noResults:'لا نتائج', loading:'جارٍ التحميل...', error:'حدث خطأ ما',
        followers:'المتابعون', following:'يتابع', views:'مشاهدات', likes:'إعجابات', copies:'نسخ',
        uploadedBy:'رُفع بواسطة', publishedOn:'نُشر في', category:'الفئة',
        bio:'السيرة الذاتية', badges:'الشارات', activity:'النشاط', statsTitle:'الإحصائيات',
        themeOptions:'خيارات المظهر', soundEffects:'المؤثرات الصوتية', particleEffects:'مؤثرات الجسيمات',
        reducedMotion:'حركة مخففة', saveProfile:'حفظ الملف',
        changeName:'تغيير الاسم', changeBio:'تغيير السيرة', changeAvatar:'تغيير الصورة',
        changeBanner:'تغيير البانر', levelLabel:'المستوى', xpLabel:'نقاط الخبرة',
        settingsLang:'اللغة', settingsAppearance:'المظهر', settingsSound:'الصوت',
        settingsNotifs:'الإشعارات', settingsAccount:'الحساب', settingsAbout:'حول',
        bgAnimLabel:'الخلفيات المتحركة', bgAnimDesc:'جسيمات وتأثيرات المظهر',
        reduceMotionLabel:'تقليل الحركة', reduceMotionDesc:'تعطيل الرسوم المتحركة للوصول',
        soundLabel:'المؤثرات الصوتية', soundDesc:'أصوات النقر والتمرير والإشعارات',
        ambientMusicLabel:'🎵 موسيقى محيطية', ambientMusicDesc:'أجواء كوانتوم — لمظهر 🜂 الانفراد المطلق فقط',
        notifsLabel:'إشعارات الدفع', notifsDesc:'الإعجابات والتعليقات والسكريبتات الجديدة',
        themeOptionsLabel:'خيارات المظهر',
        goodMorning:'صباح الخير', goodAfternoon:'مساء الخير', goodEvening:'مساء النور',
        totalViews:'إجمالي المشاهدات', myScripts:'سكريبتاتي', favoritesLabel:'المفضلة',
        quickActions:'إجراءات سريعة', browseScripts:'تصفح السكريبتات', changeTheme:'تغيير المظهر',
        myProfile:'ملفي الشخصي', currentTheme:'المظهر الحالي', changeBtn:'تغيير',
        favoriteScripts:'السكريبتات المفضلة', recentActivity:'النشاط الأخير',
        uploadLabel:'رفع سكريبت', noFavoritesYet:'لا توجد مفضلات. احفظ السكريبتات التي تحبها!',
        uploadedStatus:'تم الرفع', submitFirst:'أرسل أولاً',
        growing:'في نمو', scriptsSaved:'سكريبتات محفوظة',
        loadingActivity:'جاري التحميل...', couldNotLoad:'تعذر تحميل النشاط.',
        signInToSeeActivity:'سجّل الدخول لعرض النشاط',
        noActivityYet:'لا يوجد نشاط بعد', activityWillAppear:'سيظهر نشاطك هنا.',
        editBanner:'✏️ تعديل البانر', joinedLabel:'انضم في', robloxCreator:'منشئ روبلوكس',
        scriptsLabel:'السكريبتات', noFavsYet:'لا توجد مفضلات بعد',
        earnBadges:'.اكسب الشارات بالنشاط على LPOLVO HUB',
        creatorBadge:'منشئ', pioneerBadge:'رائد',
        sectCategories:'الفئات', sectSpotlight:'المميزون', sectLatestScripts:'أحدث السكريبتات',
        sectHowItWorks:'كيف يعمل', sectTopCreators:'أفضل المنشئين', sectTopScripts:'أفضل السكريبتات',
        sectExecutors:'المنفذون المدعومون', sectNews:'الأخبار والتحديثات', sectFAQ:'الأسئلة الشائعة',
        seeAll:'عرض الكل', addScript:'+ إضافة سكريبت',
        sortNew:'🆕 جديد', sortHot:'🔥 رائج', sortTop:'🏆 الأفضل', sortFree:'🆓 مجاني',
        statScriptsLabel:'السكريبتات', statUsersLabel:'المستخدمون', statViewsLabel:'المشاهدات',
        footerAbout:'حول', footerScripts:'السكريبتات', footerSettings:'الإعدادات',
        loginTab:'تسجيل الدخول', registerTab:'التسجيل', welcomeBack:'مرحباً بعودتك',
        signInToAccount:'سجّل الدخول إلى حساب LPOLVO HUB الخاص بك',
        signInBtn:'تسجيل الدخول', orDivider:'أو', continueGoogle:'المتابعة بجوجل',
        forgotPassword:'هل نسيت كلمة المرور؟', resetIt:'إعادة تعيينها',
        createAccount:'إنشاء حساب', joinLpolvo:'انضم إلى LPOLVO HUB',
        registerBtn:'إنشاء حساب',
        cancelBtn:'إلغاء', startTyping:'ابدأ الكتابة للبحث',
        uploadTitle:'رفع سكريبت', scriptNameLabel:'اسم السكريبت',
        gameLabel:'اللعبة', categoryLabel:'الفئة', descLabel:'الوصف',
        tagsLabel:'الوسوم', isFreeLabel:'سكريبت مجاني',
        submitBtn:'إرسال السكريبت', uploadingLabel:'جاري الرفع...',
        copyBtn:'نسخ السكريبت', copiedBtn:'تم النسخ!', likeBtn:'إعجاب',
        commentsLabel:'التعليقات', addCommentLabel:'أضف تعليقاً...',
        postComment:'نشر', noComments:'لا توجد تعليقات بعد. كن الأول!',
        copiedToast:'تم نسخ السكريبت!', likedToast:'تم الإعجاب!', uploadedToast:'تم رفع السكريبت!',
        errorToast:'حدث خطأ ما', savedToast:'تم حفظ التغييرات!',
        signedOutToast:'تم تسجيل الخروج بنجاح',
        sidebarConnect:'تواصل معنا',
        settingsTitle:'الإعدادات ⚙️',
        madeWith:'صُنع بـ ❤️ بواسطة LPOLVO',
        notificationsTitle:'الإشعارات 🔔',
        markAllRead:'تحديد الكل كمقروء',
        noNotifsYet:'لا توجد إشعارات بعد',
        signingIn:'جارٍ الدخول...', creatingAccount:'جارٍ الإنشاء...', saving:'جارٍ الحفظ...', submitting:'جارٍ الإرسال...',
        welcomeBack2:'مرحباً بعودتك! 👋', accountCreated:'تم إنشاء الحساب! أهلاً بك 🎉',
        accountCreatedToast:'تم إنشاء الحساب! أهلاً بك في LPOLVO HUB 🎉',
        signedInGoogle:'تم الدخول بجوجل! 👋',
        signedOutSoon:'تم تسجيل الخروج. أراك قريباً! 👋',
        signOutError:'خطأ في تسجيل الخروج',
        imageTooLarge:'يجب أن تكون الصورة أقل من 2MB',
        profileSaved:'تم حفظ الملف الشخصي!', profileUpdated:'تم تحديث الملف الشخصي! ✅',
        profileSaveFailed:'فشل حفظ الملف. حاول مرة أخرى.',
        displayNameRequired:'اسم العرض مطلوب.',
        resetLinkSent:'تم إرسال رابط الإعادة! تحقق من بريدك.',
        enterEmail:'يرجى إدخال بريدك الإلكتروني.',
        passwordMinLength:'يجب أن تكون كلمة المرور 6 أحرف على الأقل.',
        scriptNameRequired:'اسم السكريبت مطلوب.',
        gameNameRequired:'اسم اللعبة مطلوب.',
        scriptCodeRequired:'كود السكريبت مطلوب.',
        scriptSubmitted:'تم إرسال السكريبت بنجاح! 🎉',
        scriptSubmitFailed:'فشل إرسال السكريبت. حاول مرة أخرى.',
        pleaseSignIn:'يرجى تسجيل الدخول لإرسال سكريبت',
        signInFirst:'يرجى تسجيل الدخول أولاً',
        scriptNotFound:'السكريبت غير موجود',
        noCodeToCopy:'لا يوجد كود للنسخ',
        scriptCopiedClipboard:'تم نسخ السكريبت! 📋',
        scriptCopiedShort:'تم النسخ! 📋',
        couldNotUpdateFavs:'تعذر تحديث المفضلة',
        linkCopied:'تم نسخ الرابط! 🔗',
        reportSubmitted:'تم إرسال البلاغ. شكراً! 🚩',
        userProfilesSoon:'ملفات المستخدمين قادمة قريباً!',
        allNotifsRead:'تم تحديد كل الإشعارات كمقروءة',
        noNotifsYetIcon:'لا توجد إشعارات بعد 🔔',
        copied:'✓ تم النسخ!',
        saveFav:'🤍 حفظ', savedFav:'❤️ محفوظ',
        scriptsCountSingle:'سكريبت', scriptsCountPlural:'سكريبتات',
        firebaseNotConnected:'Firebase غير متصل',
        allScripts:'كل السكريبتات',
        emailLabel:'البريد الإلكتروني', passwordLabel:'كلمة المرور', displayNameLabel:'اسم العرض',
        loginTitle:'مرحباً بعودتك', loginSub:'سجّل الدخول إلى حساب LPOLVO HUB',
        regTitle:'إنشاء حساب', regJoin:'انضم إلى LPOLVO HUB',
        resetTitle:'إعادة تعيين كلمة المرور', resetSub:'أدخل بريدك الإلكتروني لتلقي رابط الإعادة',
        sendResetLink:'إرسال رابط الإعادة', backToLoginLink:'→ العودة لتسجيل الدخول',
        forgotText:'هل نسيت كلمة المرور؟',
        /* Extended keys */
        aboutLpolvoDesc:'LPOLVO HUB v1.3 هو تحديث توسعة المجتمع. أعاد الإصدار 1.3 بناء موثوقية الواجهة الخلفية لحفظ الملف الشخصي ورفع السكريبتات، وأضاف خلاصة نشاط مجتمعي مباشر بتحديثات فورية، ونظام الترند الديناميكي بتصنيفات الذهب والفضة والبرونز، وتتبع اكتمال الملف الشخصي، وتحسينات أداء Firebase.',
        gotIt:'حسناً',
        versionLabel:'v1.3 — توسعة المجتمع',
        scriptsCount:'السكريبتات', usersCount:'المستخدمون',
        rarityOp:'أسطوري', raritySSS:'SSS+', rarityMythic:'أسطوري جدًا',
        rarityTranscendent:'متعالي', rarityOmniscient:'كليّ المعرفة', rarityOmnipotent:'كليّ القدرة',
        themeDefault:'افتراضي', themeDarkMystery:'غموض داكن', themeCalmMagic:'سحر هادئ',
        themePeacefulNights:'ليالٍ هادئة', themeDayNight:'النهار والليل',
        themeFireScales:'نار وحراشف', themeRebirth:'البعث', themeNorthernLights:'الأضواء الشمالية',
        themeNeonLights:'أضواء النيون', themeWarriorSpirit:'روح المحارب',
        themePharaohLegacy:'إرث الفرعون', themeGothicShadows:'ظلال قوطية',
        themeDivineLight:'الضوء الإلهي', themeInfernalPower:'قوة جهنمية',
        themeBrilliant:'ساطع', themeLuxury:'فاخر', themeDeepBlue:'أزرق عميق',
        themeFantasy:'خيال', themeEnchanted:'مسحور', themeChrono:'زمني',
        themeTech:'تقنية', themeIntelligence:'ذكاء', themePhysics:'فيزياء',
        themeCosmicBattle:'معركة كونية', themeMystery:'غموض',
        themeCherryBlossom:'زهر الكرز', themeDeepSea:'أعماق البحر',
        themeMatrixRain:'مطر المصفوفة', themeDeepSpace:'الفضاء العميق',
        themeHeatFlames:'حرارة ولهب', themeNightAtmosphere:'أجواء الليل',
        themeGoldenLight:'ضوء ذهبي', themeDarkIndigo:'نيلي داكن',
        themeRichGold:'ذهب فاخر', themeNeonGlow:'توهج النيون',
        themeRetro80s:'ريترو الثمانينيات', themeVintageWarm:'دفء كلاسيكي',
        themeCleanLight:'ضوء نظيف', themeLuxuryRoyal:'ملكي فاخر',
        themeCosmicVoid:'الفراغ الكوني', themeDigitalRain:'المطر الرقمي',
        themeLavaHeat:'حرارة الحمم', themeElectricStorm:'عاصفة كهربائية',
        themeDeepViolet:'بنفسجي عميق', themeHellfire:'نار الجحيم',
        themeDeepGreen:'أخضر عميق', themeColorful:'ملوّن',
        themeDeepShadow:'ظل عميق', themeCleanBright:'مضيء نظيف',
        themeNeonFuture:'مستقبل النيون', themeFrosted:'مثلج',
        themeBlackHoleUniverse:'كون الثقب الأسود', themeMagicalPetals:'بتلات سحرية',
        themeHeavenlyKingdom:'المملكة السماوية فوق الغيوم',
        themeGravitySpace:'الجاذبية وتشويه الفضاء',
        themeEndOfWorld:'نهاية العالم', themeInfiniteFrozen:'المملكة المجمدة اللانهائية',
        themeCyberpunkHolograms:'هولوغرامات المدينة السيبرانية',
        themeDarkGhosts:'أشباح داكنة وضباب بنفسجي',
        themeAncientDragons:'تنانين قديمة ونار ذهبية',
        themeGalaxiesBorn:'المجرات والنجوم في طور الولادة',
        themeCrystalWaters:'مياه كريستالية وحياة مضيئة',
        themeVolcanoesFire:'براكين ونار شيطانية',
        themeSakuraTrees:'أشجار الساكورا العملاقة والأضرحة',
        themeRealityBending:'تشويه الواقع والبوابات',
        themeDesertMajesty:'عظمة الصحراء والعصر الذهبي الإسلامي',
        themeRoyalKingdom:'المملكة الملكية وغموض الصحراء',
        themeCelestialHeaven:'السماء السماوية والسمو الإلهي',
        themeBirthReality:'ميلاد الواقع ذاته',
        themeMasterTime:'سيد الزمن ذاته',
        themeParadiseBeyond:'الجنة الخارجة عن الجنة والفضاء والزمن',
        themePureEnergy:'حيث تتحكم الطاقة النقية في الواقع',
        themeExistenceEnds:'النقطة التي ينتهي عندها الوجود',
        themeRealityIntersects:'حيث يتقاطع كل واقع',
        themeConsciousness:'وعي LPOLVO HUB',
        themeRealmExistence:'العالم الذي يُكتب فيه الوجود',
        howFind:'ابحث عن سكريبت', howFindDesc:'تصفح مكتبتنا المتنامية من سكريبتات Roblox المميزة مصنفة حسب اللعبة والشعبية والفئة.',
        howCopy:'انسخ السكريبت', howCopyDesc:'انسخ كود السكريبت بنقرة واحدة إلى الحافظة. لا خطوات إضافية.',
        howRun:'شغّل في المنفذ', howRunDesc:'الصق السكريبت في منفذك المفضل واستمتع بالميزات.',
        faqSafe:'هل السكريبتات آمنة للاستخدام؟', faqSafeAns:'جميع السكريبتات المُرسلة تمر بمراجعة المجتمع. استخدمها بحذر واختبرها دائماً في بيئة آمنة.',
        faqMobile:'كيف أشغّل السكريبتات على الجوال؟', faqMobileAns:'حمّل منفذاً للجوال مثل Arceus X أو Delta، ثم الصق كود السكريبت في المنفذ وشغّله.',
        faqKeyless:'ما هو السكريبت بلا مفتاح؟', faqKeylessAns:'السكريبت بلا مفتاح لا يتطلب منك إتمام خطوات التحقق. يعمل فوراً بعد اللصق.',
        faqSubmit:'هل يمكنني إرسال سكريبتي الخاص؟', faqSubmitAns:'نعم! اضغط على "+ إضافة سكريبت"، أدخل التفاصيل والصق كود Lua. سكريبتك سيكون مباشراً فوراً.',
        faqBroken:'لماذا لا يعمل السكريبت؟', faqBrokenAns:'قد تتوقف السكريبتات بعد تحديثات Roblox. ابحث عن إصدارات أحدث، أو أبلغ عن المشكلة بزر الإبلاغ.',
        faqFree:'هل LPOLVO HUB مجاني؟', faqFreeAns:'نعم، LPOLVO HUB مجاني تماماً. لا اشتراكات، لا حواجز دفع.',
        catCombat:'قتال', catFarm:'زراعة', catSpeed:'سرعة', catEsp:'رؤية',
        catTeleport:'نقل فوري', catTroll:'مقلب', catUtility:'أدوات',
        catGui:'واجهة', catAuto:'تلقائي', catOther:'أخرى',
        execMobile:'جوال', execPC:'حاسوب',
        resetPassword:'إعادة تعيين كلمة المرور', resetPasswordDesc:'أدخل بريدك الإلكتروني لتلقي رابط إعادة التعيين.',
        resetEmail:'البريد الإلكتروني', sendReset:'إرسال رابط الإعادة', backToLogin:'العودة لتسجيل الدخول',
        passwordResetSent:'تم إرسال بريد إعادة تعيين كلمة المرور!',
        scriptVersion:'إصدار السكريبت', scriptCode:'كود السكريبت',
        scriptCodePlaceholder:'الصق سكريبت Lua هنا...',
        scriptNamePlaceholder:'مثال: Auto Farm Pro',
        scriptGamePlaceholder:'مثال: Blox Fruits',
        scriptDescPlaceholder:'صف ما يفعله السكريبت...',
        scriptTagsPlaceholder:'مثال: farm, boss, auto',
        scriptVersionPlaceholder:'مثال: 1.0.0',
        notifEmpty:'لا توجد إشعارات بعد', notifSignIn:'سجّل الدخول لعرض الإشعارات',
        reportScript:'الإبلاغ عن السكريبت', shareScript:'مشاركة السكريبت',
        followBtn:'متابعة', unfollowBtn:'إلغاء المتابعة',
        scriptDetails:'تفاصيل السكريبت', backBtn:'رجوع',
        executor:'المنفذ', platform:'المنصة', free:'مجاني',
        heroTitle:'LPOLVO HUB', heroSubtitle:'سكريبتات متقدمة وأتمتة',
        heroDesc:'بناء المستقبل، سكريبت واحد في كل مرة. مركز متكامل لسكريبتات Roblox المميزة وأدوات الأتمتة الذكية.',
        exploreScripts:'استكشف السكريبتات', community:'المجتمع',
        themeMenuTitle:'اختر مظهراً', themeRarityAll:'الكل', themeRarityOp:'أسطوري OP',
        themeRaritySss:'أعلى درجة SSS+', themeRarityMythic:'أسطوري جدًا',
        themeRarityTranscendent:'متعالي', themeRarityOmniscient:'كليّ المعرفة',
        themeRarityOmnipotent:'كليّ القدرة',
    },
    fr: {
        signIn:'Se connecter', searchPlaceholder:'Chercher des scripts, utilisateurs, tags...',
        noScripts:'Aucun Script', beFirst:"Soyez le premier à commencer notre aventure.",
        submitScript:'Soumettre un Script', signInToView:'Connectez-vous pour voir le profil',
        profileDescription:'Votre profil, badges et stats apparaissent ici après connexion.',
        dashboardDescription:'Suivez vos scripts, consultez les analyses et personnalisez.',
        signOutDesc:'Se déconnecter', signInDesc:'Accéder à votre profil & tableau de bord',
        editProfile:'Modifier le Profil', editProfileDesc:'Changer le nom, la bio, le avatar',
        saveChanges:'Sauvegarder', cancel:'Annuler',
        welcome:'Bienvenue sur LPOLVO HUB! 🎉',
        usernameHint:'Lettres, chiffres et tirets bas uniquement',
        usernameAvailable:'Nom disponible', usernameTaken:'Nom déjà pris',
        continue:'Continuer', back:'Retour', finish:'Terminer',
        noSpotlight:'Pas encore en vedette', leaderboardEmpty:'Classement vide',
        noCreators:'Aucun créateur',
        scriptsWillAppear:'Les scripts apparaîtront ici une fois soumis.',
        scriptsComingSoon:'Les scripts arrivent bientôt. Soumettez le vôtre.',
        yourScriptsHere:'Vos scripts uploadés apparaîtront ici.',
        noActivity:'Aucune activité. Commencez à explorer!',
        aboutLPOLVO:'À propos de LPOLVO HUB', premiumPlatform:'Plateforme Roblox Premium',
        home:'Accueil', scripts:'Scripts', profile:'Profil', dashboard:'Tableau de Bord', settings:'Paramètres',
        themes:'Thèmes', language:'Langue', sounds:'Sons', notifications:'Notifications',
        search:'Rechercher', signOut:'Déconnexion', uploadScript:'Uploader un Script',
        favorites:'Favoris', recentlyViewed:'Vus Récemment',
        copyScript:'Copier le Script', viewProfile:'Voir le Profil',
        free:'Gratuit', paid:'Payant', new:'Nouveau', trending:'Tendance', top:'Top',
        noResults:'Aucun résultat', loading:'Chargement...', error:'Une erreur est survenue',
        followers:'Abonnés', following:'Abonnements', views:'Vues', likes:'Likes', copies:'Copies',
        uploadedBy:'Uploadé par', publishedOn:'Publié le', category:'Catégorie',
        bio:'Bio', badges:'Badges', activity:'Activité', statsTitle:'Statistiques',
        themeOptions:'Options de Thème', soundEffects:'Effets Sonores', particleEffects:'Effets Particules',
        reducedMotion:'Mouvement Réduit', saveProfile:'Sauvegarder',
        changeName:'Changer le Nom', changeBio:'Changer la Bio', changeAvatar:"Changer l'Avatar",
        changeBanner:'Changer la Bannière', levelLabel:'Niveau', xpLabel:'XP',
        settingsLang:'Langue', settingsAppearance:'Apparence', settingsSound:'Son',
        settingsNotifs:'Notifications', settingsAccount:'Compte', settingsAbout:'À propos',
        bgAnimLabel:'Animations de Fond', bgAnimDesc:'Particules et effets du thème',
        reduceMotionLabel:'Réduire les Animations', reduceMotionDesc:"Désactiver pour l'accessibilité",
        soundLabel:'Effets Sonores', soundDesc:'Sons de clic, survol et notification',
        ambientMusicLabel:'🎵 Musique Ambiante', ambientMusicDesc:'Atmosphère quantique — uniquement pour 🜂 Singularité Absolue',
        notifsLabel:'Notifications Push', notifsDesc:'Likes, commentaires, nouveaux scripts',
        themeOptionsLabel:'Options de Thème',
        goodMorning:'Bonjour', goodAfternoon:'Bon après-midi', goodEvening:'Bonsoir',
        totalViews:'Total des Vues', myScripts:'Mes Scripts', favoritesLabel:'Favoris',
        quickActions:'Actions Rapides', browseScripts:'Parcourir les Scripts', changeTheme:'Changer le Thème',
        myProfile:'Mon Profil', currentTheme:'Thème Actuel', changeBtn:'Changer',
        favoriteScripts:'Scripts Favoris', recentActivity:'Activité Récente',
        uploadLabel:'Uploader un Script', noFavoritesYet:'Aucun favori. Sauvegardez des scripts!',
        uploadedStatus:'Uploadé', submitFirst:'Soumettez le premier',
        growing:'En croissance', scriptsSaved:'Scripts sauvegardés',
        loadingActivity:"Chargement en cours...", couldNotLoad:"Impossible de charger.",
        signInToSeeActivity:"Connectez-vous pour voir l'activité",
        noActivityYet:'Aucune activité', activityWillAppear:'Votre activité apparaîtra ici.',
        editBanner:'✏️ Modifier la Bannière', joinedLabel:'Rejoint', robloxCreator:'Créateur Roblox',
        scriptsLabel:'Scripts', noFavsYet:'Aucun favori',
        earnBadges:'Gagnez des badges en étant actif sur LPOLVO HUB.',
        creatorBadge:'Créateur', pioneerBadge:'Pionnier',
        sectCategories:'Catégories', sectSpotlight:'En Vedette', sectLatestScripts:'Derniers Scripts',
        sectHowItWorks:'Comment Ça Marche', sectTopCreators:'Meilleurs Créateurs', sectTopScripts:'Meilleurs Scripts',
        sectExecutors:'Exécuteurs Supportés', sectNews:'Actualités & Mises à jour', sectFAQ:'FAQ',
        seeAll:'Tout voir', addScript:'+ Ajouter Script',
        sortNew:'🆕 Nouveau', sortHot:'🔥 Tendance', sortTop:'🏆 Top', sortFree:'🆓 Gratuit',
        statScriptsLabel:'Scripts', statUsersLabel:'Utilisateurs', statViewsLabel:'Vues',
        footerAbout:'À propos', footerScripts:'Scripts', footerSettings:'Paramètres',
        loginTab:'Connexion', registerTab:'Inscription', welcomeBack:'Bon retour',
        signInToAccount:'Connectez-vous à votre compte LPOLVO HUB',
        signInBtn:'Se Connecter', orDivider:'OU', continueGoogle:'Continuer avec Google',
        forgotPassword:'Mot de passe oublié?', resetIt:'Réinitialiser',
        createAccount:'Créer un Compte', joinLpolvo:'Rejoindre LPOLVO HUB',
        registerBtn:'Créer un Compte',
        cancelBtn:'Annuler', startTyping:'Commencez à taper pour chercher',
        uploadTitle:'Uploader un Script', scriptNameLabel:'Nom du Script',
        gameLabel:'Jeu', categoryLabel:'Catégorie', descLabel:'Description',
        tagsLabel:'Tags', isFreeLabel:'Script Gratuit',
        submitBtn:'Soumettre le Script', uploadingLabel:'Upload en cours...',
        copyBtn:'Copier le Script', copiedBtn:'Copié!', likeBtn:'Aimer',
        commentsLabel:'Commentaires', addCommentLabel:'Ajouter un commentaire...',
        postComment:'Publier', noComments:'Aucun commentaire. Soyez le premier!',
        copiedToast:'Script copié!', likedToast:'Script aimé!', uploadedToast:'Script uploadé!',
        errorToast:"Une erreur s'est produite", savedToast:'Modifications sauvegardées!',
        signedOutToast:'Déconnexion réussie',
        sidebarConnect:'Nous rejoindre',
        settingsTitle:'Paramètres ⚙️',
        madeWith:'Fait avec ❤️ par LPOLVO',
        notificationsTitle:'Notifications 🔔',
        markAllRead:'Tout marquer comme lu',
        noNotifsYet:'Aucune notification',
        signingIn:'Connexion...', creatingAccount:'Création...', saving:'Sauvegarde...', submitting:'Envoi...',
        welcomeBack2:'Bon retour! 👋', accountCreated:'Compte créé! Bienvenue 🎉',
        accountCreatedToast:'Compte créé! Bienvenue sur LPOLVO HUB 🎉',
        signedInGoogle:'Connecté avec Google! 👋',
        signedOutSoon:'Déconnecté. À bientôt! 👋',
        signOutError:'Erreur de déconnexion',
        imageTooLarge:'L\'image doit faire moins de 2MB',
        profileSaved:'Profil sauvegardé!', profileUpdated:'Profil mis à jour! ✅',
        profileSaveFailed:'Échec de la sauvegarde. Réessayez.',
        displayNameRequired:'Le nom affiché est requis.',
        resetLinkSent:'Lien envoyé! Vérifiez votre email.',
        enterEmail:'Veuillez entrer votre email.',
        passwordMinLength:'Le mot de passe doit contenir au moins 6 caractères.',
        scriptNameRequired:'Le nom du script est requis.',
        gameNameRequired:'Le nom du jeu est requis.',
        scriptCodeRequired:'Le code du script est requis.',
        scriptSubmitted:'Script soumis avec succès! 🎉',
        scriptSubmitFailed:'Échec de la soumission. Réessayez.',
        pleaseSignIn:'Connectez-vous pour soumettre un script',
        signInFirst:'Connectez-vous d\'abord',
        scriptNotFound:'Script introuvable',
        noCodeToCopy:'Aucun code à copier',
        scriptCopiedClipboard:'Script copié dans le presse-papier! 📋',
        scriptCopiedShort:'Script copié! 📋',
        couldNotUpdateFavs:'Impossible de mettre à jour les favoris',
        linkCopied:'Lien copié! 🔗',
        reportSubmitted:'Signalement envoyé. Merci! 🚩',
        userProfilesSoon:'Profils utilisateurs bientôt disponibles!',
        allNotifsRead:'Toutes les notifications marquées comme lues',
        noNotifsYetIcon:'Aucune notification 🔔',
        copied:'✓ Copié!',
        saveFav:'🤍 Sauvegarder', savedFav:'❤️ Sauvegardé',
        scriptsCountSingle:'script', scriptsCountPlural:'scripts',
        firebaseNotConnected:'Firebase non connecté',
        allScripts:'Tous les Scripts',
        emailLabel:'Email', passwordLabel:'Mot de passe', displayNameLabel:'Nom affiché',
        loginTitle:'Bon retour', loginSub:'Connectez-vous à votre compte LPOLVO HUB',
        regTitle:'Créer un compte', regJoin:'Rejoindre LPOLVO HUB',
        resetTitle:'Réinitialiser le mot de passe', resetSub:'Entrez votre email pour recevoir un lien',
        sendResetLink:'Envoyer le lien', backToLoginLink:'← Retour à la connexion',
        forgotText:'Mot de passe oublié?',
        /* Extended keys */
        aboutLpolvoDesc:"LPOLVO HUB v1.3 est la mise à jour d'expansion communautaire. La version 1.3 a reconstruit la fiabilité backend de la sauvegarde de profil et du téléchargement de scripts, ajouté un fil d'activité communautaire en direct, un système de tendances dynamique avec classements Or/Argent/Bronze, le suivi de complétion de profil et des optimisations Firebase.",
        gotIt:'Compris',
        versionLabel:'v1.3 — Expansion Communautaire',
        scriptsCount:'Scripts', usersCount:'Utilisateurs',
        rarityOp:'Légendaire', raritySSS:'SSS+', rarityMythic:'Mythique',
        rarityTranscendent:'Transcendant', rarityOmniscient:'Omniscient', rarityOmnipotent:'Omnipotent',
        themeDefault:'Par défaut', themeDarkMystery:'Mystère Sombre', themeCalmMagic:'Magie Calme',
        themePeacefulNights:'Nuits Paisibles', themeDayNight:'Jour & Nuit',
        themeFireScales:'Feu & Écailles', themeRebirth:'Renaissance', themeNorthernLights:'Aurores Boréales',
        themeNeonLights:'Lumières Néon', themeWarriorSpirit:"Esprit du Guerrier",
        themePharaohLegacy:'Héritage du Pharaon', themeGothicShadows:'Ombres Gothiques',
        themeDivineLight:'Lumière Divine', themeInfernalPower:'Puissance Infernale',
        themeBrilliant:'Brillant', themeLuxury:'Luxe', themeDeepBlue:'Bleu Profond',
        themeFantasy:'Fantaisie', themeEnchanted:'Enchanté', themeChrono:'Chrono',
        themeTech:'Technologie', themeIntelligence:'Intelligence', themePhysics:'Physique',
        themeCosmicBattle:'Bataille Cosmique', themeMystery:'Mystère',
        themeCherryBlossom:'Fleur de Cerisier', themeDeepSea:'Fond Marin',
        themeMatrixRain:'Pluie Matrix', themeDeepSpace:'Espace Profond',
        themeHeatFlames:'Chaleur & Flammes', themeNightAtmosphere:'Atmosphère Nocturne',
        themeGoldenLight:'Lumière Dorée', themeDarkIndigo:'Indigo Sombre',
        themeRichGold:"Or Précieux", themeNeonGlow:'Lueur Néon',
        themeRetro80s:'Rétro 80s', themeVintageWarm:'Chaleur Vintage',
        themeCleanLight:'Lumière Épurée', themeLuxuryRoyal:'Royal Luxueux',
        themeCosmicVoid:'Vide Cosmique', themeDigitalRain:'Pluie Numérique',
        themeLavaHeat:'Chaleur Volcanique', themeElectricStorm:'Tempête Électrique',
        themeDeepViolet:'Violet Profond', themeHellfire:'Feu de l\'Enfer',
        themeDeepGreen:'Vert Profond', themeColorful:'Coloré',
        themeDeepShadow:'Ombre Profonde', themeCleanBright:'Lumineux Épuré',
        themeNeonFuture:'Futur Néon', themeFrosted:'Givré',
        themeBlackHoleUniverse:'Univers Trou Noir', themeMagicalPetals:'Pétales Magiques',
        themeHeavenlyKingdom:'Royaume Céleste Au-dessus des Nuages',
        themeGravitySpace:'Gravité & Distorsion Spatiale',
        themeEndOfWorld:'Fin du Monde', themeInfiniteFrozen:'Royaume Glacé Infini',
        themeCyberpunkHolograms:'Hologrammes Cyberpunk',
        themeDarkGhosts:'Fantômes Sombres & Brume Violette',
        themeAncientDragons:'Dragons Anciens & Feu Doré',
        themeGalaxiesBorn:'Galaxies & Étoiles en Formation',
        themeCrystalWaters:'Eaux de Cristal & Vie Lumineuse',
        themeVolcanoesFire:'Volcans & Feu Démoniaque',
        themeSakuraTrees:'Grands Cerisiers & Sanctuaires',
        themeRealityBending:'Réalité Distordue & Portails',
        themeDesertMajesty:"Majesté du Désert & Âge d'Or Islamique",
        themeRoyalKingdom:'Royaume Royal & Mystique du Désert',
        themeCelestialHeaven:'Ciel Céleste & Suprématie Divine',
        themeBirthReality:'La Naissance de la Réalité Elle-Même',
        themeMasterTime:'Maître du Temps Lui-Même',
        themeParadiseBeyond:'Paradis Au-delà du Ciel, de l\'Espace & du Temps',
        themePureEnergy:'Là Où l\'Énergie Pure Contrôle la Réalité',
        themeExistenceEnds:"Le Point Où l'Existence Prend Fin",
        themeRealityIntersects:'Là Où Chaque Réalité Se Croise',
        themeConsciousness:'La Conscience de LPOLVO HUB',
        themeRealmExistence:"Le Royaume Où l'Existence Est Écrite",
        howFind:'Trouver un Script', howFindDesc:'Parcourez notre bibliothèque croissante de scripts Roblox premium triés par jeu, popularité et catégorie.',
        howCopy:'Copier le Script', howCopyDesc:'Copiez le code du script en un tap. Aucune étape supplémentaire.',
        howRun:"Exécuter dans l'Exécuteur", howRunDesc:"Collez le script dans votre exécuteur préféré et profitez des fonctionnalités.",
        faqSafe:'Les scripts sont-ils sûrs?', faqSafeAns:'Tous les scripts soumis passent par un examen communautaire. Utilisez à votre propre discrétion.',
        faqMobile:'Comment exécuter des scripts sur mobile?', faqMobileAns:'Téléchargez un exécuteur mobile comme Arceus X ou Delta, puis collez le code du script.',
        faqKeyless:"Qu'est-ce qu'un script sans clé?", faqKeylessAns:"Un script sans clé ne nécessite pas d'étapes de vérification. Il s'exécute immédiatement.",
        faqSubmit:'Puis-je soumettre mon propre script?', faqSubmitAns:'Oui! Appuyez sur "+ Ajouter Script", remplissez les détails et collez votre code Lua.',
        faqBroken:'Pourquoi un script ne fonctionne pas?', faqBrokenAns:'Les scripts peuvent cesser de fonctionner après des mises à jour Roblox. Cherchez des versions plus récentes.',
        faqFree:'LPOLVO HUB est-il gratuit?', faqFreeAns:'Oui, LPOLVO HUB est entièrement gratuit. Aucun abonnement, aucun paywall.',
        catCombat:'Combat', catFarm:'Ferme', catSpeed:'Vitesse', catEsp:'ESP',
        catTeleport:'Téléportation', catTroll:'Troll', catUtility:'Utilitaire',
        catGui:'Interface', catAuto:'Auto', catOther:'Autre',
        execMobile:'Mobile', execPC:'PC',
        resetPassword:'Réinitialiser le Mot de Passe', resetPasswordDesc:'Entrez votre email pour recevoir un lien de réinitialisation.',
        resetEmail:'Adresse Email', sendReset:"Envoyer le Lien", backToLogin:'Retour à la connexion',
        passwordResetSent:'Email de réinitialisation envoyé!',
        scriptVersion:'Version du Script', scriptCode:'Code du Script',
        scriptCodePlaceholder:'Collez votre script Lua ici...',
        scriptNamePlaceholder:'ex: Auto Farm Pro',
        scriptGamePlaceholder:'ex: Blox Fruits',
        scriptDescPlaceholder:'Décrivez ce que fait le script...',
        scriptTagsPlaceholder:'ex: farm, boss, auto',
        scriptVersionPlaceholder:'ex: 1.0.0',
        notifEmpty:'Aucune notification', notifSignIn:'Connectez-vous pour voir les notifications',
        reportScript:'Signaler le Script', shareScript:'Partager le Script',
        followBtn:'Suivre', unfollowBtn:'Ne plus suivre',
        scriptDetails:'Détails du Script', backBtn:'Retour',
        executor:'Exécuteur', platform:'Plateforme', free:'Gratuit',
        heroTitle:'LPOLVO HUB', heroSubtitle:'Scripts Avancés & Automatisation',
        heroDesc:"Construire l'avenir, un script à la fois. Un hub centralisé pour les scripts Roblox premium et les outils d'automatisation intelligents.",
        exploreScripts:'Explorer les Scripts', community:'Communauté',
        themeMenuTitle:'Choisir un Thème', themeRarityAll:'Tous', themeRarityOp:'Légendaire OP',
        themeRaritySss:'Ultime SSS+', themeRarityMythic:'Mythique',
        themeRarityTranscendent:'Transcendant', themeRarityOmniscient:'Omniscient',
        themeRarityOmnipotent:'Omnipotent',
    },
};

function getTranslation(key) {
    const lang = state.language || 'en';
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return t[key] !== undefined ? t[key] : (TRANSLATIONS.en[key] !== undefined ? TRANSLATIONS.en[key] : key);
}

function updateTexts() {
    const T = key => getTranslation(key);
    // Nav sign-in button
    const signInBtn = document.getElementById('navSignBtn');
    if (signInBtn) signInBtn.textContent = T('signIn');
    // Search inputs placeholders
    ['searchInput','scriptsPageSearch'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.placeholder = T('searchPlaceholder');
    });
    // Upload form placeholders
    const phs = {
        uploadName: 'scriptNamePlaceholder', uploadGame: 'scriptGamePlaceholder',
        uploadDesc: 'scriptDescPlaceholder', uploadTags: 'scriptTagsPlaceholder',
        uploadVersion: 'scriptVersionPlaceholder'
    };
    Object.entries(phs).forEach(([id,key]) => { const el=document.getElementById(id); if(el) el.placeholder=T(key); });
    // Upload code textarea
    const codeEl = document.getElementById('uploadCode');
    if (codeEl) codeEl.placeholder = T('scriptCodePlaceholder');
    // Upload form labels
    const uploadLabels = {
        uploadNameLabel:'scriptNameLabel', uploadGameLabel:'gameLabel',
        uploadCategoryLabel:'categoryLabel', uploadDescLabel:'descLabel',
        uploadTagsLabel:'tagsLabel', uploadIsFreeLabel:'isFreeLabel',
        uploadVersionLabel:'scriptVersion', uploadCodeLabel:'scriptCode',
        uploadSubmitBtn:'submitBtn', uploadTitleHeading:'uploadTitle'
    };
    Object.entries(uploadLabels).forEach(([id,key]) => { const el=document.getElementById(id); if(el) el.textContent=T(key); });
    // Bottom nav labels
    const navLabels = {home:'home',scripts:'scripts',profile:'profile',dash:'dashboard',settings:'settings'};
    document.querySelectorAll('.bottom-nav-item').forEach(el => {
        const pg = el.dataset.page;
        const key = navLabels[pg];
        if (key) { const span = el.querySelector('span'); if (span) span.textContent = T(key); }
    });
    // Sidebar nav labels
    document.querySelectorAll('.sidebar-nav-item[data-page]').forEach(el => {
        const pg = el.dataset.page;
        const key = navLabels[pg];
        if (key) { const span = el.querySelector('.sidebar-label'); if (span) span.textContent = T(key); }
    });
    // Sidebar About button text
    document.querySelectorAll('.sidebar-nav-item[onclick*="openAboutModal"]').forEach(el => {
        const lbl = el.querySelector('.sidebar-label');
        if (lbl) lbl.textContent = T('settingsAbout');
    });
    // Active lang pills
    document.querySelectorAll('.lang-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.lang === (state.language || 'en'));
    });
    // About modal
    const aboutVer = document.getElementById('aboutVersionText');
    if (aboutVer) aboutVer.textContent = T('versionLabel') || 'v1.3 — Community Expansion';
    const aboutDesc = document.getElementById('aboutDescText');
    if (aboutDesc) aboutDesc.textContent = T('aboutLpolvoDesc');
    const aboutGotIt = document.querySelector('#about-modal button[onclick*="closeAboutModal"]');
    if (aboutGotIt) aboutGotIt.textContent = T('gotIt');
    // Home section titles
    const sectMap = {
        'sect-categories':'sectCategories','sect-spotlight':'sectSpotlight',
        'sect-latest':'sectLatestScripts','sect-how':'sectHowItWorks',
        'sect-creators':'sectTopCreators','sect-topscripts':'sectTopScripts',
        'sect-executors':'sectExecutors','sect-news':'sectNews','sect-faq':'sectFAQ'
    };
    Object.entries(sectMap).forEach(([cls,key])=>{const el=document.querySelector('.'+cls);if(el)el.textContent=T(key);});
    // Sort buttons
    const sortMap={new:'sortNew',hot:'sortHot',top:'sortTop',free:'sortFree'};
    document.querySelectorAll('.sort-btn[data-sort]').forEach(btn=>{const k=sortMap[btn.dataset.sort];if(k)btn.textContent=T(k);});
    // data-i18n elements (generic)
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(k)el.textContent=T(k);});
    // Stat labels
    document.querySelectorAll('.stat-label[data-i18n]').forEach(el=>{el.textContent=T(el.dataset.i18n);});
    // Cancel search
    const cancelEl=document.getElementById('searchCancelBtn');if(cancelEl)cancelEl.textContent=T('cancelBtn');
    // Search hint
    const hintEl=document.getElementById('searchHint');if(hintEl)hintEl.textContent=T('startTyping');
    // Auth modal strings
    const authTab = {authTabLogin:'loginTab',authTabRegister:'registerTab'};
    Object.entries(authTab).forEach(([id,key])=>{ const el=document.getElementById(id); if(el)el.textContent=T(key); });
    // Hero section dynamic update
    const heroSubEl = document.querySelector('.hero-subtitle-badge');
    if (heroSubEl) heroSubEl.textContent = T('heroSubtitle');
    const heroDescEl = document.querySelector('.hero-description');
    if (heroDescEl) heroDescEl.textContent = T('heroDesc');
    const heroExpBtn = document.querySelector('.hero-btn-primary');
    if (heroExpBtn) { const txt = heroExpBtn.querySelector('span') || heroExpBtn; txt.textContent = txt === heroExpBtn ? T('exploreScripts') : T('exploreScripts'); }
    // Footer
    const footerMap = {footerAboutLink:'footerAbout',footerScriptsLink:'footerScripts',footerSettingsLink:'footerSettings'};
    Object.entries(footerMap).forEach(([id,key])=>{ const el=document.getElementById(id); if(el)el.textContent=T(key); });
    const footerVer = document.getElementById('footerVersionText');
    if (footerVer) footerVer.textContent = T('versionLabel') || 'v1.3 — Community Expansion';
    // Notification panel
    const notifTitle = document.getElementById('notifPanelTitle');
    if (notifTitle) notifTitle.textContent = T('notificationsTitle');
    const notifMarkAll = document.getElementById('notifMarkAllBtn');
    if (notifMarkAll) notifMarkAll.textContent = T('markAllRead');
    const notifEmpty = document.getElementById('notifEmptyText');
    if (notifEmpty) notifEmpty.textContent = T('noNotifsYet');
    // Sidebar special labels
    const sidebarSignInEl = document.getElementById('sidebarSignIn');
    if (sidebarSignInEl) { const lbl = sidebarSignInEl.querySelector('.sidebar-label'); if(lbl) lbl.textContent = T('signIn'); }
    const sidebarSignOutEl = document.getElementById('sidebarSignOut');
    if (sidebarSignOutEl) { const lbl = sidebarSignOutEl.querySelector('.sidebar-label'); if(lbl) lbl.textContent = T('signOut'); }
    const connectLbl = document.getElementById('sidebarConnectLabel');
    if (connectLbl) connectLbl.textContent = T('sidebarConnect');
    // Settings page title
    const settingsTitleEl = document.getElementById('settingsPageTitle');
    if (settingsTitleEl) settingsTitleEl.textContent = T('settingsTitle');
    // Footer made with
    const madeWithEl = document.getElementById('footerMadeWith');
    if (madeWithEl) madeWithEl.textContent = T('madeWith');
    // Auth modal translations
    const authFields = {
        loginTitle:'loginTitle', loginSub:'loginSub',
        loginEmailLabel:'emailLabel', loginPasswordLabel:'passwordLabel',
        loginBtn:'signInBtn', loginOrText:'orDivider', loginGoogleText:'continueGoogle',
        loginForgotText:'forgotText', loginResetLink:'resetIt',
        authTabLogin:'loginTab', authTabRegister:'registerTab',
        regTitle:'regTitle', regSub:'regJoin',
        regNameLabel:'displayNameLabel', regEmailLabel:'emailLabel', regPasswordLabel:'passwordLabel',
        regBtn:'registerBtn', regOrText:'orDivider', regGoogleText:'continueGoogle',
        resetTitle:'resetTitle', resetSub:'resetSub',
        resetEmailLabel:'emailLabel', resetSubmitBtn:'sendResetLink', resetBackLink:'backToLoginLink',
    };
    Object.entries(authFields).forEach(([id,key])=>{ const el=document.getElementById(id); if(el)el.textContent=T(key); });
    // Scripts page title and add button
    const scriptsTitle = document.getElementById('scriptsPageTitle');
    if (scriptsTitle) scriptsTitle.textContent = '📜 ' + T('scripts');
    const addScriptTxt = document.getElementById('addScriptBtnText');
    if (addScriptTxt) addScriptTxt.textContent = T('addScript');
    // Rebuild dynamic sections with new language
    buildNews();
    buildHowItWorks();
    buildFAQ();
    buildExecutors();
    buildCategories();
}

function setLanguage(lang) {
    if (lang === state.language) return;
    state.language = lang;
    localStorage.setItem('lp_lang', lang);
    if (state.currentUser) {
        const fb = window.__FB;
        if (fb?.ready) { try { fb.setDoc(fb.doc(fb.db, 'users', state.currentUser.uid), { language: lang }, { merge: true }); } catch (
                e) {} }
    }
    applyLanguageDirection();
    playClick();
    // Instantly update all static text in the UI
    updateTexts();
    buildTicker();
    const page = state.page;
    if (page === 'profile') buildProfilePage();
    if (page === 'dash') buildDashPage();
    if (page === 'settings') buildSettings();
    if (page === 'scripts') buildScriptsPage();
    if (page === 'home') {
        buildHomeScripts();
        buildSpotlight();
        buildLeaderboard();
        buildTopCreators();
    }
}

