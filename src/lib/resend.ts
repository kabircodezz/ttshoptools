import { Resend } from 'resend'
import type { Product } from '@/lib/site'

let cached: Resend | null = null

function getClient(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  if (cached) return cached
  cached = new Resend(key)
  return cached
}

function audienceIdFor(product: Product): string | null {
  const id =
    product === 'feescope'
      ? process.env.RESEND_FEESCOPE_AUDIENCE_ID
      : process.env.RESEND_COLLABHQ_AUDIENCE_ID
  return id || null
}

export async function addToWaitlist(
  product: Product,
  email: string,
  firstName?: string,
): Promise<{ ok: boolean; reason?: string }> {
  const client = getClient()
  if (!client) {
    return { ok: false, reason: 'resend-not-configured' }
  }
  const audienceId = audienceIdFor(product)
  if (!audienceId) {
    return { ok: false, reason: 'audience-not-configured' }
  }
  try {
    await client.contacts.create({
      audienceId,
      email,
      firstName: firstName || undefined,
      unsubscribed: false,
    })
    return { ok: true }
  } catch (err) {
    console.error('[resend] addToWaitlist failed', err)
    return { ok: false, reason: 'resend-error' }
  }
}
