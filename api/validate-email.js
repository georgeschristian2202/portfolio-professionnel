/* eslint-env node */
// api/validate-email.js
import { resolveMx } from 'node:dns/promises'
import { toASCII } from 'node:punycode'

const DISPOSABLE = new Set([
  'mailinator.com','10minutemail.com','yopmail.com','guerrillamail.com',
  'tempmail.com','tempmail.dev','trashmail.com','sharklasers.com','getnada.com'
])

export default async function handler(req, res) {
  if (!['GET','POST'].includes(req.method)) {
    res.setHeader('Allow', ['GET','POST'])
    return res.status(405).json({ ok:false, error: 'Method not allowed' })
  }

  // récup email
  let email = ''
  if (req.method === 'GET') {
    email = String(req.query.email || '')
  } else {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    email = String(body.email || '')
  }

  // syntaxe rapide
  const m = email.match(/^([^@\s]+)@([^@\s]+\.[^@\s]+)$/)
  if (!m) return res.status(200).json({ ok:false, reason:'bad_syntax' })

  const domain = toASCII(m[2].toLowerCase())

  // bloque domaines jetables
  if (DISPOSABLE.has(domain)) {
    return res.status(200).json({ ok:false, reason:'disposable_domain' })
  }

  // MX lookup
  try {
    const mx = await resolveMx(domain)
    if (!mx || mx.length === 0) {
      return res.status(200).json({ ok:false, reason:'no_mx' })
    }
    // OK : le domaine accepte des emails (pas garanti pour la boîte exacte)
    return res.status(200).json({ ok:true, reason:'mx_ok' })
  } catch (e) {
    return res.status(200).json({ ok:false, reason:'no_mx', details:String(e) })
  }
}
