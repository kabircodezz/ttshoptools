import { NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { getStripe } from '@/lib/stripe'
import { addToWaitlist } from '@/lib/resend'
import type { Product } from '@/lib/site'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const sig = req.headers.get('stripe-signature')
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  const body = await req.text()

  if (!sig || !secret) {
    return NextResponse.json(
      { received: true, skipped: 'no webhook secret' },
      { status: 200 },
    )
  }

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, secret)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'invalid signature'
    return NextResponse.json({ error: message }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const product = (session.metadata?.product || '') as Product
    const email =
      session.customer_details?.email || session.customer_email || ''
    const fullName = session.customer_details?.name || ''
    const firstName = fullName ? fullName.split(' ')[0] : undefined

    if (product === 'feescope' || product === 'collabhq') {
      if (email) {
        const result = await addToWaitlist(product, email, firstName)
        console.log(
          `[stripe-webhook] checkout.session.completed product=${product} email=${email} resend=${JSON.stringify(result)}`,
        )
      } else {
        console.log(
          `[stripe-webhook] checkout.session.completed product=${product} (no email on session)`,
        )
      }
    }
  }

  return NextResponse.json({ received: true })
}
