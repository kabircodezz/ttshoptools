import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { PRICE_IDS, PRODUCT_PATH, SITE_URL, type Product } from '@/lib/site'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  let product: Product
  try {
    const body = (await req.json()) as { product?: string }
    if (body.product !== 'feescope' && body.product !== 'collabhq') {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 })
    }
    product = body.product
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const priceId = PRICE_IDS[product]
  if (!priceId) {
    return NextResponse.json(
      { error: 'Stripe price not configured' },
      { status: 500 },
    )
  }

  try {
    const stripe = getStripe()
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      payment_method_types: ['card'],
      success_url: `${SITE_URL}/thank-you?product=${product}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}${PRODUCT_PATH[product]}`,
      allow_promotion_codes: false,
      billing_address_collection: 'auto',
      metadata: { product },
    })
    if (!session.url) {
      return NextResponse.json(
        { error: 'Stripe did not return a URL' },
        { status: 502 },
      )
    }
    return NextResponse.json({ url: session.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Stripe checkout failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
