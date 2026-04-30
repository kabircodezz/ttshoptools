export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const SITE_NAME = "TTShop Tools";

export type Product = "feescope" | "collabhq";

export const PRICE_IDS: Record<Product, string> = {
  feescope: process.env.NEXT_PUBLIC_STRIPE_FEESCOPE_PRICE_ID || "",
  collabhq: process.env.NEXT_PUBLIC_STRIPE_COLLABHQ_PRICE_ID || "",
};
