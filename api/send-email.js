/* eslint-env node */

/**
 * /api/send-email.js
 * Vercel Serverless Function (Node runtime)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Compat: selon le runtime/outil, req.body peut être une string
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const { name, email, message, subject = 'Contact Portfolio' } = body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' })
    }

    const r = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id:    process.env.EMAILJS_PUBLIC_KEY, // clé publique EmailJS
        template_params: {
          from_name: name,
          reply_to:  email,
          message,
          subject
        }
      })
    })

    if (!r.ok) {
      const text = await r.text().catch(() => '')
      return res.status(502).json({ error: 'Email failed', details: text })
    }

    return res.status(200).json({ ok: true })
  } catch (e) {
    return res.status(500).json({ error: 'Server error', details: String(e) })
  }
}

