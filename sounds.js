/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — sounds.js
   Web Audio API sound engine
   ═══════════════════════════════════════════════════════════════════ */

/* ── SOUND ENGINE ── */
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) { try { audioCtx = new(window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    return audioCtx;
}

function playTone(freq, dur, type = 'sine', vol = 0.06, decay = 0.25) {
    if (!SETTINGS.sounds) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.type = type;
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + decay);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + decay + 0.01);
    } catch (e) {}
}

function playClick() { playTone(660, 0.04, 'sine', 0.05, 0.06); }

function playNav() { playTone(440, 0.06, 'sine', 0.04, 0.1);
    playTone(550, 0.06, 'sine', 0.03, 0.08); }

function playSuccess() { [440, 554, 659].forEach((f, i) => setTimeout(() => playTone(f, 0.12, 'sine', 0.06, 0.15),
        i * 70)); }

function playError() { [300, 250, 200].forEach((f, i) => setTimeout(() => playTone(f, 0.08, 'sawtooth', 0.04, 0.12),
        i * 50)); }

function playNotif() { playTone(880, 0.04, 'sine', 0.05, 0.15);
    setTimeout(() => playTone(1100, 0.04, 'sine', 0.04, 0.15), 70); }

function playCopy() { playTone(990, 0.04, 'sine', 0.06, 0.1);
    playTone(1320, 0.04, 'sine', 0.04, 0.08); }

function playThemeSwitch() {
    const ctx = getAudioCtx();
    if (!ctx || !SETTINGS.sounds) return;
    const theme = state.theme;
    let freqs = [300, 400, 500, 700, 900];
    if (theme === 'fire' || theme === 'dragon' || theme === 'volcano') freqs = [200, 300, 400, 500];
    else if (theme === 'moon' || theme === 'bluemoon' || theme === 'bloodmoon') freqs = [400, 500, 600, 700];
    else if (theme === 'sun' || theme === 'ramadan' || theme === 'gold') freqs = [523, 659, 784, 1047];
    else if (theme === 'hacker' || theme === 'matrix' || theme === 'cyberpunk') freqs = [500, 400, 300, 200];
    else if (theme === 'sakura' || theme === 'cherry') freqs = [659, 784, 880, 1047];
    else if (theme === 'bloodeclipse' || theme === 'rubyinferno' || theme === 'cosmicfire') freqs = [150, 200, 300, 180];
    else if (theme === 'dragonrealm' || theme === 'solarflare') freqs = [180, 240, 360, 480];
    else if (theme === 'thunderstorm') freqs = [800, 600, 400, 900];
    else if (theme === 'spiritsakura' || theme === 'crystalheart') freqs = [880, 1046, 1318, 1046];
    else if (theme === 'frozenempire' || theme === 'abysscore') freqs = [528, 660, 792, 1056];
    else if (theme === 'aurorasky' || theme === 'emeraldabyss') freqs = [440, 554, 698, 880];
    else if (theme === 'moonkingdom' || theme === 'phantomrealm') freqs = [330, 415, 494, 622];
    else if (theme === 'sunkingdom' || theme === 'goldenempire') freqs = [660, 784, 988, 1319];
    else if (theme === 'dreamuniverse' || theme === 'nebulacore') freqs = [392, 494, 659, 831];
    else if (theme === 'divineheaven') freqs = [1047, 1319, 1568, 2093];
    else if (theme === 'voidwalker' || theme === 'shadowking') freqs = [200, 150, 100, 80];
    else if (theme === 'eternaldusk') freqs = [415, 523, 659, 784];
    else if (theme === 'celestialascension') freqs = [1047, 1319, 1568, 2093, 2637];
    else if (theme === 'blackholesingularity') freqs = [60, 45, 30, 20];
    else if (theme === 'crimsonapocalypse') freqs = [120, 90, 60, 200];
    else if (theme === 'frozeneternity') freqs = [622, 784, 932, 1175];
    else if (theme === 'neoncybernexus') freqs = [440, 880, 660, 1320];
    else if (theme === 'phantomnightmare') freqs = [220, 165, 110, 82];
    else if (theme === 'dragonemperor') freqs = [165, 220, 330, 440];
    else if (theme === 'universecreator') freqs = [73, 110, 146, 220];
    else if (theme === 'divineocean') freqs = [528, 396, 660, 792];
    else if (theme === 'infernalking') freqs = [100, 75, 50, 150];
    else if (theme === 'sakuraheaven') freqs = [880, 1047, 1319, 1568];
    else if (theme === 'infinitydimension') freqs = [300, 450, 600, 900];
    else if (theme === 'arabianlegacy') freqs = [659, 831, 988, 1175, 1047, 784];
    else if (theme === 'moroccanlegacy') freqs = [698, 880, 1047, 1245, 1047, 831, 698];
    else if (theme === 'godsdomain') freqs = [1047,1319,1568,2093,2637,2093,1568,1319,1047,1568,2093];
    else if (theme === 'genesisprotocol') freqs = [55,110,220,440,880,1760,880,440,220,110,55];
    else if (theme === 'chronoinfinity') freqs = [1047,988,880,784,880,988,1047,1175,1047,784];
    else if (theme === 'elysium') freqs = [659,784,880,1047,1175,1319,1568,1760,1568,1319,1175,1047,880,784,659];
    else if (theme === 'aetherdominion') freqs = [523, 659, 784, 988, 1175, 1397, 1568, 1760, 1568, 1397, 1175, 988, 784, 659, 523];
    else if (theme === 'eternalnexus') freqs = [196, 294, 392, 523, 659, 784, 988, 1175, 988, 784, 659, 523, 392, 294, 196];
    else if (theme === 'omniscienteye') freqs = [261, 392, 523, 659, 784, 1047, 1319, 1568, 2093, 1568, 1319, 1047, 784, 523, 392];
    else if (theme === 'infinitythrone') freqs = [174, 261, 349, 523, 698, 880, 1175, 1568, 2093, 2637, 2093, 1568, 1175, 880, 698, 523, 349, 261, 174];
    freqs.forEach((f, i) => setTimeout(() => playTone(f, 0.04, 'sine', 0.03, 0.15), i * 30));
}

function playHover() { if (SETTINGS.sounds) playTone(550, 0.015, 'sine', 0.015, 0.04); }

function playUpload() { if (!SETTINGS.sounds) return; [523, 659, 784, 1047].forEach((f, i) => setTimeout(() =>
        playTone(f, 0.08, 'sine', 0.04, 0.15), i * 50)); }

function playLike() { if (!SETTINGS.sounds) return; playTone(880, 0.06, 'sine', 0.04, 0.12);
    setTimeout(() => playTone(1100, 0.06, 'sine', 0.03, 0.12), 80); }

function playThemeAmbient() {
    if (!SETTINGS.sounds) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        const freqs = { fire: 80, moon: 60, sun: 110, eclipse: 90, hacker: 70, sakura: 130, galaxy: 55, ocean: 65,
            dragon: 75, aurora: 100, storm: 50, cybercity: 120, desert: 95, magic: 105, bloodmoon: 70,
            bluemoon: 65, ramadan: 90, phoenix: 85, samurai: 75, egypt: 80, darkcastle: 50, angel: 110,
            demon: 75, crystal: 100, royalpalace: 95, underwater: 60, dreamworld: 80, fantasyforest: 70,
            timetravel: 85, robotfuture: 100, ai: 90, quantum: 95, galaxywar: 70, ancient: 80,
            cosmicvoid: 45, spiritblossom: 135, thundergod: 55, celestialkingdom: 120, abyssalocean: 50,
            frozenkingdom: 95, meteorstorm: 65, infernalcore: 68, auroranova: 100, shadowrealm: 40,
            crystalcave: 110, lunarwolf: 60, steampunk: 75, phantomcarnival: 115, timerift: 80,
            bloodeclipse: 55, dragonrealm: 72, thunderstorm: 48, spiritsakura: 145, frozenempire: 90,
            aurorasky: 105, moonkingdom: 65, sunkingdom: 120, dreamuniverse: 88, phantomrealm: 58,
            divineheaven: 130, voidwalker: 38, abysscore: 52, solarflare: 78, nebulacore: 95,
            shadowking: 42, goldenempire: 92, crystalheart: 138, cosmicfire: 62, eternaldusk: 75,
            emeraldabyss: 68, rubyinferno: 46,
            celestialascension: 160, blackholesingularity: 28, crimsonapocalypse: 44,
            frozeneternity: 96, neoncybernexus: 82, phantomnightmare: 50,
            dragonemperor: 66, universecreator: 36, divineocean: 110,
            infernalking: 40, sakuraheaven: 150, infinitydimension: 70, arabianlegacy: 108, moroccanlegacy: 116, godsdomain: 174, genesisprotocol: 32, chronoinfinity: 88, elysium: 528, aetherdominion: 42, eternalnexus: 396, omniscienteye: 174, infinitythrone: 55, absolutesingularity: 432 };
        osc.frequency.setValueAtTime(freqs[state.theme] || 85, ctx.currentTime);
        gain.gain.setValueAtTime(0.012, ctx.currentTime);
        osc.start(ctx.currentTime);
        setTimeout(() => { try { osc.stop(); } catch (e) {} }, 500);
    } catch (e) {}
}

