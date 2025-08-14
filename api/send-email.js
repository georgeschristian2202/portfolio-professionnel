/* eslint-env node */
// api/send-email.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // 1) Body JSON robuste
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const { name, email, message, subject = 'Contact Portfolio' } = body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    // 2) Vérif ENV (strict mode = private key requise)
    const required = ['EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', 'EMAILJS_PUBLIC_KEY', 'EMAILJS_PRIVATE_KEY']
    const missing = required.filter(k => !process.env[k])
    if (missing.length) {
      return res.status(500).json({ error: 'Missing env', missing })
    }

    // 3) >>> ICI : construis le payload + LOG DEBUG (sans exposer tes clés)
    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id:    process.env.EMAILJS_PUBLIC_KEY,   // Public Key
      accessToken: process.env.EMAILJS_PRIVATE_KEY, // Private Key (strict mode)
      template_params: {
        from_name: name,
        reply_to:  email,
        message,
        subject
      }
    }

    // Log utile pour vérifier les valeurs qui partent (évite en prod)
    console.log('EMAILJS payload (debug):', JSON.stringify({
      template_params: payload.template_params,
      has_service: !!process.env.EMAILJS_SERVICE_ID,
      has_template: !!process.env.EMAILJS_TEMPLATE_ID,
      has_public:  !!process.env.EMAILJS_PUBLIC_KEY,
      has_private: !!process.env.EMAILJS_PRIVATE_KEY
    }, null, 2))

    // 4) >>> ICI : envoi à EmailJS (remplace ton ancien fetch par celui-ci)
    const r = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    if (!r.ok) {
      const text = await r.text().catch(() => '')
      return res.status(502).json({ error: 'Email failed', status: r.status, details: text })
    }

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Server error', details: String(e) })
  }
}
