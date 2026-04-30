# TTShop Tools — CLAUDE.md

## First step
Read /mnt/skills/public/frontend-design/SKILL.md before writing any code. This is mandatory.

## Project
Three-page marketing site for TTShop Tools — TikTok Shop seller toolkit with two pre-launch products (FeeScope, CollabHQ). Both collecting $1 Stripe founder deposits. No database, no auth.

## Stack
- Next.js 15 App Router
- Tailwind CSS
- shadcn/ui components
- TypeScript strict mode
- Stripe (hosted checkout — no Supabase)
- Resend (email capture + webhook list adds)
- Vercel deployment

## Brand exception
Homepage is dark mode. Funnel pages (/calculator, /affiliate) are light mode. This is intentional — do not apply dark mode to funnel pages.

## Design tokens

### Homepage (dark)
- bg: #111111 | surface: #1a1a1a | border: #2a2a2a
- text-primary: #f5f5f0 | text-secondary: #888888
- accent: #BA7517 | accent-light: #FAEEDA | accent-text: #854F0B

### Funnel pages (light)
- bg: #FAF9F6 | surface: #ffffff | border: #e8e4dc
- text-primary: #1a1a1a | text-secondary: #444444 | text-muted: #555555
- FeeScope accent: #BA7517 | accent-light: #FAEEDA | accent-text: #854F0B
- CollabHQ accent: #D85A30 | accent-light: #FAECE7 | accent-text: #712B13

## Typography
- Font: Inter (Google Fonts, weights 400 and 500 only)
- No bold (700) in body copy
- Heading sizes: 30–32px hero, 20–22px section, 16px subsection
- Body: 14px, line-height 1.6 | Small/label: 11–12px, line-height 1.4

## Responsive requirements
Breakpoints: 375px / 768px / 1280px. Mobile-first.

### Homepage
- Nav: logo left, links right (desktop/tablet) | logo left, hamburger right (mobile)
- Hero: 2-col grid desktop → single col tablet/mobile; stat cards vertical desktop → horizontal row tablet/mobile
- Product cards: 2-col grid desktop/tablet → single col mobile
- Comparison table: full 5-col at all breakpoints; mobile cell padding 8px, font-size 11px

### FeeScope (/calculator)
- Stats bar: 3-col desktop/tablet → 2×2 grid mobile (first two side by side, third centered)
- Calculator inputs: 2-col grid desktop/tablet → single col mobile
- Calculator results: 3-col at all breakpoints (reduce font-size to 14px mobile)
- Features grid: 2-col desktop/tablet → single col mobile
- Email form: inline row desktop/tablet → full-width stacked mobile
- Founder block: centered, max-width 360px; outer margin 24px → 16px mobile

### CollabHQ (/affiliate)
- Gap cards: 3-col desktop/tablet → single col mobile
- Workflow pipeline: horizontal row desktop/tablet → overflow-x: auto mobile (min-width 70px per stage, font-size 11px — DO NOT stack vertically)
- Calculator inputs: 2-col → single col mobile
- Features list: single col vertical at all breakpoints; icon left, text right (never stack icon above text)
- Email form + Founder block: same as FeeScope

## Routes
- / → Homepage
- /calculator → FeeScope
- /affiliate → CollabHQ
- /thank-you → Post-deposit confirmation

## Stripe integration
Hosted checkout (same tab, not popup).

```
NEXT_PUBLIC_STRIPE_FEESCOPE_PRICE_ID=price_1TRlVs2LXvoSu7ynYzViL9EW
NEXT_PUBLIC_STRIPE_COLLABHQ_PRICE_ID=price_1TRlWu2LXvoSu7ynCJKz0c1U
```

- Success redirect: /thank-you?product=feescope OR /thank-you?product=collabhq
- Cancel redirect: back to originating page
- Webhook: /api/webhooks/stripe → on checkout.session.completed: add email to Resend list + console.log (no DB)

## Resend integration
- feescope_waitlist — FeeScope email capture form + FeeScope Stripe checkout webhook
- collabhq_waitlist — CollabHQ email capture form + CollabHQ Stripe checkout webhook
- Email capture POST to /api/waitlist: { email, firstName, product: 'feescope' | 'collabhq' }
- From: noreply@ttshoptools.com

## Environment variables required
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY
STRIPE_WEBHOOK_SECRET
NEXT_PUBLIC_STRIPE_FEESCOPE_PRICE_ID=price_1TRlVs2LXvoSu7ynYzViL9EW
NEXT_PUBLIC_STRIPE_COLLABHQ_PRICE_ID=price_1TRlWu2LXvoSu7ynCJKz0c1U
RESEND_API_KEY
NEXT_PUBLIC_SITE_URL
```

Site must build and run with placeholder values for all except the two Price IDs above. Stripe checkout will fail gracefully with placeholder keys — acceptable for dev/preview.

## Calculator logic

### FeeScope
```
fees = (price × ref/100) + (price × proc/100) + shipping + (price × aff/100) + ads + cogs + (price × returns/100 × 0.5)
profit = price - fees
pct = round((fees / price) × 100)
```

### CollabHQ
```
posting = round(samples × postRate/100)
notPosting = samples - posting
wastedSamples = notPosting × sampleCost
grossGMV = posting × avgGMV
commissionCost = grossGMV × commission/100
totalSampleCost = samples × sampleCost
net = grossGMV - commissionCost - totalSampleCost
wastePct = round((notPosting / samples) × 100)
```

Recalculate on every input change — no submit button. All dollar amounts: toFixed(2). Percentages: Math.round(). Use toLocaleString() for displayed dollar amounts in CollabHQ insight box.

## Code quality
- Lighthouse 90+ mobile and desktop
- Zero console errors or warnings
- Zero TypeScript errors (strict mode)
- Responsive at 375px, 768px, 1280px
- SEO: unique meta title + description + OG tags per page
- sitemap.xml (/, /calculator, /affiliate — exclude /thank-you)
- robots.txt (allow all)
- Canonical URLs on all pages
- /thank-you → noindex

## Explicit constraints
- No Supabase — not needed at pre-launch
- No auth — no login, no accounts
- No dark mode toggle on funnel pages
- No placeholder copy — all copy is specified in the build spec, use exactly as written
- No lorem ipsum anywhere
- FAQ accordion: must work without page reload (shadcn Accordion)
- Stripe checkout: same tab, not popup
- CollabHQ workflow pipeline: never stack stages vertically on mobile — horizontal scroll only
- "PAIN" labels must NOT appear anywhere — use "GAP 01", "GAP 02", "GAP 03"
- shadcn/ui components for all buttons, forms, inputs, accordion — no custom replacements

## Folder structure
/src/app, /src/components, /src/lib, /src/styles, /src/types

## Design reference files
Three HTML mockups are attached alongside this spec for visual reference:
- ttshoptools-homepage.html
- ttshoptools-feescope.html
- ttshoptools-collabhq.html

## Deployment
- Push to: github.com/kabircodezz/ttshoptools
- Deploy preview to Vercel project: ttshoptools
- Post preview URL when complete
- Do NOT deploy to production — Kabir sign-off required
