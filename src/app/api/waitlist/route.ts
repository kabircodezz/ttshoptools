import { NextResponse } from 'next/server'
import { addToWaitlist } from '@/lib/resend'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: { email?: string; firstName?: string; product?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const email = (body.email || '').trim().toLowerCase()
  const firstName = (body.firstName || '').trim()
  const product = body.product

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  if (product !== 'feescope' && product !== 'collabhq') {
    return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
  }

  const result = await addToWaitlist(product, email, firstName || undefined)
  if (!result.ok) {
    return NextResponse.json(
      { error: 'Could not add to waitlist' },
      { status: 502 },
    )
  }
  return NextResponse.json({ success: true })
}
