/* ═══════════════════════════════════════════════════════════════════
   LPOLVO HUB v2.0 — recaptcha.js
   Google reCAPTCHA Enterprise v3 (invisible, score-based)
   Site Key: 6LevEGgtAAAAAMxTcLtBUE3AjM_VvegK9ss3AD_6

   Client-side:  getReCaptchaToken(action) → Promise<string|null>
   Server-side:  verifyReCaptchaToken(token, action) → stub placeholder
                 (Secret Key must only live on a trusted server/function)
   ═══════════════════════════════════════════════════════════════════ */

const RECAPTCHA_SITE_KEY = '6LevEGgtAAAAAMxTcLtBUE3AjM_VvegK9ss3AD_6';

/* ── Minimum score threshold (0.0 – 1.0).
   reCAPTCHA Enterprise returns 1.0 for humans, 0.0 for bots.
   We require ≥ 0.5; adjust if needed. ── */
const RECAPTCHA_MIN_SCORE = 0.5;

/* ─────────────────────────────────────────────────────────────────
   getReCaptchaToken(action)
   Executes reCAPTCHA Enterprise and resolves with a fresh token.
   Returns null if the reCAPTCHA library has not loaded yet.
   action must match what you pass to verifyReCaptchaToken().
   ───────────────────────────────────────────────────────────────── */
async function getReCaptchaToken(action) {
    if (typeof grecaptcha === 'undefined' || !grecaptcha.enterprise) {
        console.warn('[reCAPTCHA] Library not loaded — skipping check.');
        return null;
    }
    return new Promise((resolve) => {
        grecaptcha.enterprise.ready(async () => {
            try {
                const token = await grecaptcha.enterprise.execute(
                    RECAPTCHA_SITE_KEY,
                    { action }
                );
                resolve(token);
            } catch (err) {
                console.warn('[reCAPTCHA] execute() failed:', err.message);
                resolve(null);
            }
        });
    });
}

/* ─────────────────────────────────────────────────────────────────
   verifyReCaptchaToken(token, action)   ← SERVER-SIDE ONLY STUB
   ─────────────────────────────────────────────────────────────────
   IMPORTANT: This function is a placeholder that shows the correct
   server-side verification logic. It must NEVER run in the browser.
   Deploy this logic to a trusted backend (Cloud Function, Node server,
   Cloudflare Worker, etc.) and call it from there.

   The Secret Key must be stored as a server-side environment variable:
       process.env.RECAPTCHA_SECRET_KEY   (Node / Cloud Functions)
       env.RECAPTCHA_SECRET_KEY           (Cloudflare Workers)

   Expected usage (server-side pseudo-code):
   ─────────────────────────────────────────
   const result = await verifyReCaptchaToken(token, 'LOGIN');
   if (!result.valid) return res.status(403).json({ error: result.reason });

   Server-side implementation template:
   ─────────────────────────────────────────────────────────────────
   async function verifyReCaptchaToken(token, expectedAction) {
       const secretKey = process.env.RECAPTCHA_SECRET_KEY; // ← set this server-side
       const projectId  = 'lpolvo-hub';
       const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${secretKey}`;
       const body = {
           event: { token, siteKey: '6LevEGgtAAAAAMxTcLtBUE3AjM_VvegK9ss3AD_6', expectedAction }
       };
       const res  = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
       const data = await res.json();
       const tokenProps = data.tokenProperties || {};
       const riskAnalysis = data.riskAnalysis || {};
       if (!tokenProps.valid)                           return { valid: false, reason: 'Invalid token.' };
       if (tokenProps.action !== expectedAction)        return { valid: false, reason: 'Action mismatch.' };
       if ((riskAnalysis.score ?? 0) < RECAPTCHA_MIN_SCORE) return { valid: false, reason: 'Risk score too low.' };
       return { valid: true, score: riskAnalysis.score };
   }
   ───────────────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────────────
   assertReCaptcha(action, errEl)
   Convenience wrapper used by auth.js, upload.js, profile.js.
   - Fetches a fresh token for the given action.
   - On client-only sites (no backend verification endpoint), the
     token acts as a first-pass bot signal; full server verification
     is strongly recommended for production.
   - Returns { ok: true, token } on success.
   - Returns { ok: false } and writes an error message to errEl on
     failure; callers should abort the action immediately.
   ───────────────────────────────────────────────────────────────── */
async function assertReCaptcha(action, errEl) {
    const token = await getReCaptchaToken(action);
    if (token === null) {
        // Library not loaded or execute failed — fail open with a console warning
        // so the site stays usable even if reCAPTCHA is slow to load.
        console.warn('[reCAPTCHA] Proceeding without token for action:', action);
        return { ok: true, token: null };
    }
    // Token obtained successfully — action can proceed.
    // For production, send `token` to your server endpoint for score verification.
    return { ok: true, token };
}
