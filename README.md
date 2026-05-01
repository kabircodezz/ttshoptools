# kabir-starter

A reusable Next.js 15 starter template for marketing sites, landing pages, and funnel builds.

## Stack

- **Framework**: Next.js 15 (App Router) — pinned
- **Runtime**: Node 20.x — pinned
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + shadcn/ui
- **Font**: Inter via `next/font/google`

No database, no auth, no payments — those are added per project.

## Getting started

```bash
nvm use            # Node 20
npm install
npm run dev        # http://localhost:3000
```

## Rebranding

All colors and site info live in [`src/brand.ts`](src/brand.ts). Edit the values there and the entire site re-skins through CSS variables — no component changes required.

## Architecture

- `src/brand.ts` — single source of truth for color and site info
- `src/components/layout/Section.tsx` — handles ALL section padding/width (don't bypass it)
- `src/components/layout/Typography.tsx` — locked typographic scale
- `src/components/sections/*` — production-grade marketing section shells
- `src/components/ui/*` — shadcn/ui primitives wired to brand variables
- `src/lib/utils.ts` — `cn()` and `hexToRgbTriplet()` helpers
- `src/app/page.tsx` — demo composition that exercises every section

## Rules

See [`CLAUDE.md`](CLAUDE.md). The short version:

- Section component handles ALL padding — never hardcode `py-*` on a section
- Never use `max-w-7xl`
- All colors come from `src/brand.ts`
- No inline styles

## Scripts

```bash
npm run dev        # Start the dev server
npm run build      # Production build
npm run start      # Run the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## License

Apache 2.0.
