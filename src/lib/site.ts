import { brand } from '@/brand'

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || brand.siteUrl

export type Product = 'feescope' | 'collabhq'

export const PRODUCT_PATH: Record<Product, string> = {
  feescope: '/calculator',
  collabhq: '/affiliate',
}

export const PRICE_IDS: Record<Product, string> = {
  feescope: process.env.NEXT_PUBLIC_STRIPE_FEESCOPE_PRICE_ID || '',
  collabhq: process.env.NEXT_PUBLIC_STRIPE_COLLABHQ_PRICE_ID || '',
}
