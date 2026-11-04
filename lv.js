/* LP10 HUB — Linkvertise + decorative captcha (no verification, no secret needed)
   Edit only the CFG block below. */
(function () {
  'use strict';
  var CFG = {
    id: 1418391,          // Linkvertise user id (public)
    exitLinks: true,      // every outbound link goes through Linkvertise
    gateLoader: true,     // "Copy loader" needs one Linkvertise pass
    passHours: 24,        // how long one pass unlocks loaders
    captchaMinutes: 30,   // the decorative captcha is shown again after this
    minSeconds: 6,        // minimum time away before a return counts
    skip: ['linkvertise.com', 'link-to.net', 'firebaseapp.com', 'googleapis.com', 'google.com', 'gstatic.com']
  };

  var LS = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var root = document.documentElement;

  function lvLink(url) {
    return 'https://link-to.net/' + CFG.id + '/' + (Math.random() * 1000) + '/dynamic?r=' + btoa(encodeURI(url));
  }
  function hasPass() {
    var t = +LS.get('lv_pass') || 0;
    return t && Date.now() - t < CFG.passHours * 36e5;
  }
  function captchaFresh() {
    var t = +LS.get('lv_cap') || 0;
    return t && Date.now() - t < CFG.captchaMinutes * 6e4;
  }
  function syncLock() { root.classList.toggle('lv-lock', CFG.gateLoader && !hasPass()); }

  /* ---------- styles ---------- */
  var css = '\
.lv-lock .mod pre{-webkit-user-select:none;user-select:none}\
.lvb{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(4,2,0,.86);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:lvf .18s ease}\
.lvc{width:100%;max-width:400px;max-height:92vh;overflow:auto;background:#120d04;color:#fff6dc;border:1px solid #4a3708;border-radius:22px;padding:22px 20px 18px;box-shadow:0 20px 70px rgba(245,179,1,.28);font-family:inherit;animation:lvp .22s cubic-bezier(.2,.9,.3,1.2)}\
.lvc h3{margin:0 0 4px;font-size:21px;font-family:Syne,inherit}\
.lvc p{margin:0 0 14px;font-size:14px;line-height:1.5;color:#cdbb8a}\
.lvc p.ar{direction:rtl;margin-top:-8px;font-size:13px;opacity:.85}\
.lvx{float:right;background:none;border:0;color:#cdbb8a;font-size:20px;cursor:pointer;padding:0 2px}\
.lvr{display:flex;align-items:center;gap:14px;background:#0a0803;border:1px solid #4a3708;border-radius:14px;padding:14px 16px;cursor:pointer;-webkit-tap-highlight-color:transparent}\
.lvr:active{transform:scale(.99)}\
.lvk{width:30px;height:30px;border-radius:8px;border:2px solid #8a6a1a;display:flex;align-items:center;justify-content:center;flex:none;font-size:18px;transition:.2s}\
.lvr.ld .lvk{border-color:transparent;border-top-color:#ffd76a;border-radius:50%;animation:lvs .7s linear infinite}\
.lvr.ok .lvk{background:#22c55e;border-color:#22c55e;color:#06210f}\
.lvr b{font-size:15px;font-weight:600}\
.lvr small{margin-left:auto;text-align:right;font-size:10px;line-height:1.2;color:#a8935a}\
.lvg{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin:12px 0}\
.lvg button{aspect-ratio:1;font-size:30px;background:#0a0803;border:2px solid #3a2a0a;border-radius:12px;cursor:pointer;transition:.15s;-webkit-tap-highlight-color:transparent}\
.lvg button.on{border-color:#ffd76a;background:#2a1d06;transform:scale(.94)}\
.lvt{font-size:13px;color:#ffd76a;font-weight:700;margin:10px 0 0;letter-spacing:.3px}\
.lvo{display:block;width:100%;margin-top:14px;padding:14px;border:0;border-radius:14px;background:#f5b301;color:#000;font-size:16px;font-weight:700;cursor:pointer;font-family:inherit}\
.lvo[disabled]{opacity:.4;cursor:not-allowed}\
.lvo.sh{animation:lvh .35s}\
.lvm{margin-top:10px;text-align:center;font-size:11px;color:#8a7648}\
.lvbar{height:4px;border-radius:4px;background:#3a2a0a;margin-top:12px;overflow:hidden}\
.lvbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#f5b301,#ffd76a)}\
.lvtoast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);z-index:100000;background:#120d04;color:#fff6dc;border:1px solid #f5b301;border-radius:14px;padding:12px 18px;font-size:14px;box-shadow:0 10px 40px rgba(0,0,0,.5);max-width:90vw;animation:lvp .2s}\
@keyframes lvf{from{opacity:0}to{opacity:1}}\
@keyframes lvp{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:none}}\
@keyframes lvs{to{transform:rotate(360deg)}}\
@keyframes lvh{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}\
@media(prefers-reduced-motion:reduce){.lvb,.lvc,.lvtoast,.lvr.ld .lvk{animation:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  (document.head || root).appendChild(st);

  function toast(msg, ms) {
    var old = document.querySelector('.lvtoast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'lvtoast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, ms || 3400);
  }

  /* ---------- decorative captcha (always passes) ---------- */
  var EM = ['🏷', '💸', '🔥', '🏷', '🎁', '🛒', '🏷', '💰', '🏷'];
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function openFlow(cfg) {
    // cfg: {title, sub, subAr, go: function}
    if (document.querySelector('.lvb')) return;
    var b = document.createElement('div');
    b.className = 'lvb';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-modal', 'true');
    var c = document.createElement('div');
    c.className = 'lvc';
    b.appendChild(c);
    document.body.appendChild(b);

    function close() { b.remove(); document.removeEventListener('keydown', esc); }
    function esc(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', esc);
    b.addEventListener('click', function (e) { if (e.target === b) close(); });

    function head() {
      return '<button class="lvx" aria-label="Close">✕</button><h3>' + cfg.title + '</h3><p>' + cfg.sub +
        '</p><p class="ar">' + cfg.subAr + '</p>';
    }
    function wireClose() { c.querySelector('.lvx').onclick = close; }

    function stepGo() {
      c.innerHTML = head() + '<div class="lvbar"><i></i></div><button class="lvo" disabled>Continue</button>' +
        '<div class="lvm">You will be sent through Linkvertise · ستمر عبر Linkvertise</div>';
      wireClose();
      var bar = c.querySelector('.lvbar i'), btn = c.querySelector('.lvo'), n = 3, t0 = Date.now();
      var iv = setInterval(function () {
        var p = Math.min(1, (Date.now() - t0) / 2500);
        bar.style.width = (p * 100) + '%';
        if (p >= 1) { clearInterval(iv); btn.disabled = false; btn.textContent = 'Continue →'; }
        else { btn.textContent = 'Continue (' + Math.ceil(n - p * n) + ')'; }
      }, 80);
      btn.onclick = function () {
        if (btn.disabled) return;
        LS.set('lv_cap', String(Date.now()));
        close();
        cfg.go();
      };
    }

    function stepGrid() {
      var tiles = shuffle(EM.slice());
      c.innerHTML = head() + '<div class="lvt">Tap all 🏷 price tags · اضغط كل بطاقات الأسعار</div><div class="lvg">' +
        tiles.map(function (e) { return '<button type="button">' + e + '</button>'; }).join('') +
        '</div><button class="lvo">Verify</button>';
      wireClose();
      var gr = c.querySelector('.lvg'), v = c.querySelector('.lvo');
      gr.onclick = function (e) {
        var t = e.target.closest('button');
        if (t) t.classList.toggle('on');
      };
      v.onclick = function () {
        if (!gr.querySelector('.on')) {
          v.classList.remove('sh'); void v.offsetWidth; v.classList.add('sh');
          return;
        }
        stepGo(); // decorative: any selection passes
      };
    }

    function stepBox() {
      c.innerHTML = head() + '<div class="lvr" role="checkbox" aria-checked="false" tabindex="0"><span class="lvk"></span>' +
        '<b>I’m not a robot</b><small>LP10 Shield<br>Protected 🏷</small></div>';
      wireClose();
      var r = c.querySelector('.lvr'), k = c.querySelector('.lvk'), busy = 0;
      function run() {
        if (busy) return; busy = 1;
        r.classList.add('ld');
        setTimeout(function () {
          r.classList.remove('ld'); r.classList.add('ok'); k.textContent = '✓';
          r.setAttribute('aria-checked', 'true');
          setTimeout(stepGrid, 550);
        }, 1100);
      }
      r.onclick = run;
      r.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); run(); } };
    }

    if (captchaFresh()) stepGo(); else stepBox();
  }


  /* ---------- return from Linkvertise ---------- */
  function handleReturn() {
    var u = new URL(location.href);
    if (!u.searchParams.has('lvback')) return;
    u.searchParams.delete('lvback');
    try { history.replaceState(null, '', u.pathname + u.search + u.hash); } catch (e) {}
    var t = +LS.get('lv_pending') || 0;
    LS.del('lv_pending');
    var ready = function (fn) {
      if (document.body) fn(); else document.addEventListener('DOMContentLoaded', fn);
    };
    if (t && Date.now() - t >= CFG.minSeconds * 1000 && Date.now() - t < 36e5) {
      LS.set('lv_pass', String(Date.now()));
      syncLock();
      ready(function () { toast('Unlocked ✓ Tap “Copy loader” now · تم الفتح ✓', 4500); });
    } else {
      ready(function () { toast('Finish the Linkvertise step to unlock loaders · أكمل خطوة Linkvertise', 4500); });
    }
  }

  /* ---------- click handling ---------- */
  function isExternal(a) {
    if (a.hasAttribute('data-nolv') || a.hasAttribute('download')) return null;
    var u;
    try { u = new URL(a.href, location.href); } catch (e) { return null; }
    if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
    var h = u.hostname.toLowerCase();
    if (h === location.hostname.toLowerCase() || h === 'lpolvo.github.io') return null;
    for (var i = 0; i < CFG.skip.length; i++) {
      if (h === CFG.skip[i] || h.slice(-CFG.skip[i].length - 1) === '.' + CFG.skip[i]) return null;
    }
    return u.href;
  }

  window.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button) return;
    var t = e.target;
    if (!t || !t.closest) return;

    // 1) loader gate
    if (CFG.gateLoader && t.closest('[data-a="cp"]') && !hasPass()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      openFlow({
        title: '🔓 Unlock loaders',
        sub: 'One quick Linkvertise step unlocks every loader for ' + CFG.passHours + ' hours.',
        subAr: 'خطوة Linkvertise واحدة تفتح كل السكربتات لمدة ' + CFG.passHours + ' ساعة.',
        go: function () {
          LS.set('lv_pending', String(Date.now()));
          var back = new URL(location.href);
          back.searchParams.set('lvback', '1');
          location.href = lvLink(back.href);
        }
      });
      return;
    }

    // 2) outbound links
    if (!CFG.exitLinks) return;
    var a = t.closest('a[href]');
    if (!a) return;
    var url = isExternal(a);
    if (!url) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    openFlow({
      title: '🔗 Leaving LP10 HUB',
      sub: 'You are about to open an external link. Quick check first.',
      subAr: 'ستفتح رابطاً خارجياً. تحقق سريع أولاً.',
      go: function () { window.open(lvLink(url), '_blank', 'noopener'); }
    });
  }, true);


  /* ---------- hide loader text while locked ---------- */
  var LOCK_TXT = '🔒 Loader locked\nTap here and finish Linkvertise to unlock · اضغط هنا وأكمل Linkvertise';
  function maskPre(pre) {
    if (!CFG.gateLoader || hasPass() || pre.dataset.lvm) return;
    var m = pre.closest('.mod');
    var btn = m && m.querySelector('[data-a="cp"]');
    pre.dataset.lvm = '1';
    pre.textContent = LOCK_TXT;
    pre.style.cursor = 'pointer';
    pre.style.whiteSpace = 'pre-wrap';
    if (btn) { pre.dataset.a = 'cp'; pre.dataset.i = btn.dataset.i; }
  }
  function scan(n) {
    if (!n || n.nodeType !== 1) return;
    if (n.matches && n.matches('.mod pre')) maskPre(n);
    var l = n.querySelectorAll ? n.querySelectorAll('.mod pre') : [];
    for (var i = 0; i < l.length; i++) maskPre(l[i]);
  }
  function startMask() {
    scan(document.body);
    new MutationObserver(function (ms) {
      for (var i = 0; i < ms.length; i++)
        for (var j = 0; j < ms[i].addedNodes.length; j++) scan(ms[i].addedNodes[j]);
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.body) startMask(); else document.addEventListener('DOMContentLoaded', startMask);

  handleReturn();
  syncLock();
  setInterval(syncLock, 60000);
})();
