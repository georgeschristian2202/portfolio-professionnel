/* eslint-env node */
// api/verify-email.js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// (petit cache mémoire pour limiter les appels payants)
const cache = new Map();
const TTL_MS = 60 * 60 * 1000; // 1h

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const email = String(req.query.email || '').trim();
    if (!EMAIL_RE.test(email)) {
      return res.status(200).json({ ok: false, result: 'undeliverable', reason: 'bad_syntax' });
    }
    if (!process.env.KICKBOX_API_KEY) {
      return res.status(500).json({ ok: false, error: 'Missing KICKBOX_API_KEY' });
    }

    // cache simple
    const now = Date.now();
    const hit = cache.get(email);
    if (hit && hit.exp > now) {
      return res.status(200).json(hit.data);
    }

    // appel Kickbox
    const u = new URL('https://api.kickbox.com/v2/verify');
    u.searchParams.set('email', email);
    u.searchParams.set('apikey', process.env.KICKBOX_API_KEY);

    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 7000); // 7s max
    const r = await fetch(u, { signal: controller.signal });
    clearTimeout(to);

    if (!r.ok) {
      const text = await r.text().catch(() => '');
      return res.status(502).json({ ok: false, error: 'vendor_error', details: text });
    }

    const d = await r.json();

    // Mapping minimal utile
    const payload = {
      ok: true,
      vendor: 'kickbox',
      result: d.result,               // deliverable | undeliverable | risky | unknown
      reason: d.reason,               // invalid_email | invalid_domain | rejected_email | accepted_email | timeout | invalid_smtp | ...
      accept_all: !!d.accept_all,
      disposable: !!d.disposable,
      role: !!d.role,
      free: !!d.free,
      did_you_mean: d.did_you_mean || null
    };

    cache.set(email, { exp: now + TTL_MS, data: payload });
    return res.status(200).json(payload);
  } catch (e) {
    const msg = String(e && e.name) === 'AbortError' ? 'timeout' : String(e);
    return res.status(200).json({ ok: false, result: 'unknown', reason: msg });
  }
}
