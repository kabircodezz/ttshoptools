import {
  Activity,
  BarChart3,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow,
  Zap,
} from 'lucide-react'

import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { FeatureGrid } from '@/components/sections/FeatureGrid'
import { ComparisonTable } from '@/components/sections/ComparisonTable'
import { Calculator } from '@/components/sections/Calculator'
import { EmailCapture } from '@/components/sections/EmailCapture'
import { CTABlock } from '@/components/sections/CTABlock'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Compare', href: '#compare' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const heroStats = [
  { value: '12k+', label: 'Active teams' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '4.9/5', label: 'Avg. rating' },
]

const barStats = [
  { value: '$48M', label: 'Tracked monthly' },
  { value: '180+', label: 'Integrations' },
  { value: '45 sec', label: 'Avg. setup time' },
  { value: '24/7', label: 'Live support' },
]

const features = [
  {
    title: 'Built on a strict design system',
    description:
      'Every component reads colors and spacing from a single source. Swap the brand file and the entire site re-skins in seconds.',
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: 'Production-grade primitives',
    description:
      'Sections, typography, and shadcn/ui shells composed with conviction. No throwaway markup, no surprise breakpoints.',
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: 'Responsive at every breakpoint',
    description:
      'Verified at 375, 768, and 1280 pixels. Mobile-first decisions baked into hero, stats, and pricing surfaces.',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: 'Strict TypeScript & lint',
    description:
      'Strict mode on, zero any-types in shells, predictable prop contracts so a junior dev can ship safely.',
    icon: <ShieldCheck className="h-5 w-5" />,
  },
]

const competitors = ['Generic boilerplate', 'Random theme', 'In-house build']

const comparisonRows = [
  { label: 'Section spacing system', values: [true, false, false, false] },
  { label: 'Single-source brand file', values: [true, false, false, true] },
  { label: 'shadcn/ui out of the box', values: [true, true, false, false] },
  { label: 'TypeScript strict mode', values: [true, false, false, true] },
  { label: 'Marketing-tuned components', values: [true, false, true, false] },
  { label: 'Re-skin in under 10 min', values: ['Yes', 'No', 'Maybe', 'No'] },
]

const calculatorFields = [
  {
    type: 'input' as const,
    id: 'mrr',
    label: 'Monthly recurring revenue',
    placeholder: '25,000',
    inputType: 'number' as const,
    defaultValue: '25000',
  },
  {
    type: 'input' as const,
    id: 'customers',
    label: 'Active customers',
    placeholder: '500',
    inputType: 'number' as const,
    defaultValue: '500',
  },
  {
    type: 'select' as const,
    id: 'plan',
    label: 'Plan tier',
    placeholder: 'Choose a plan',
    defaultValue: 'growth',
    options: [
      { value: 'starter', label: 'Starter' },
      { value: 'growth', label: 'Growth' },
      { value: 'scale', label: 'Scale' },
    ],
  },
  {
    type: 'select' as const,
    id: 'industry',
    label: 'Industry',
    placeholder: 'Pick one',
    defaultValue: 'saas',
    options: [
      { value: 'saas', label: 'SaaS' },
      { value: 'ecom', label: 'E-commerce' },
      { value: 'agency', label: 'Agency' },
      { value: 'edu', label: 'Education' },
    ],
  },
]

const calculatorResults = [
  { label: 'Monthly savings', value: '$3,420' },
  { label: 'Hours back / wk', value: '14h' },
  { label: 'ROI in 90 days', value: '6.2x' },
]

const faqItems = [
  {
    question: 'What is included in this template?',
    answer:
      'A pinned Next.js 15 setup, the Section + Typography foundation, ten production-grade marketing sections, shadcn primitives, and a working demo page that proves the spacing system end to end.',
  },
  {
    question: 'How do I rebrand it for a new project?',
    answer:
      'Edit src/brand.ts. Every color, including the accent and surfaces, flows from that single file into the demo page through CSS variables — no component changes required.',
  },
  {
    question: 'Can I add a database, auth, or payments?',
    answer:
      'Yes — those integrations are intentionally left out so each project can choose its own stack. Add them inside existing component shells without touching the spacing system.',
  },
  {
    question: 'Why are Section and Typography off-limits?',
    answer:
      'They guarantee consistent spacing and rhythm across every page in every project. Touching them defeats the purpose of having a starter at all.',
  },
]

const trustItems = [
  { icon: <Lock className="h-4 w-4" />, text: 'SOC 2 Type II' },
  { icon: <ShieldCheck className="h-4 w-4" />, text: 'GDPR ready' },
  { icon: <Activity className="h-4 w-4" />, text: '99.99% uptime' },
]

const footerLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function HomePage() {
  return (
    <>
      <Nav
        siteName="Kabir Starter"
        links={navLinks}
        cta={{ label: 'Start free', href: '#cta' }}
      />

      <main>
        <Hero
          variant="split"
          badge="New · v1.0"
          title="A starter built for everything you ship next."
          subtitle="Ten battle-tested sections, a single brand file, strict TypeScript, and zero throwaway markup. Clone, rebrand, and ship the same week."
          ctas={[
            { label: 'Get started', href: '#cta', variant: 'primary' },
            { label: 'See pricing', href: '#pricing', variant: 'outline' },
          ]}
          stats={heroStats}
        />

        <StatsBar stats={barStats} />

        <section id="features">
          <FeatureGrid
            variant="twoCol"
            eyebrow="Why this template"
            title="Designed to be cloned, not redesigned."
            subtitle="The opinionated parts stay locked. The brandable parts flow from a single file. Spend the saved time on content, not chrome."
            features={features}
          />
        </section>

        <section id="compare">
          <ComparisonTable
            title="Why teams pick this over starter X"
            subtitle="A starter that ships every section a marketing site actually needs — and refuses to ship the things every site deletes."
            usLabel="Kabir Starter"
            competitors={competitors}
            rows={comparisonRows}
          />
        </section>

        <Calculator
          title="See your projected savings"
          subtitle="A free, instant estimate based on your team's revenue and headcount. No signup."
          fields={calculatorFields}
          results={calculatorResults}
          insight={
            <>
              Most teams at this size recover their first year of tooling spend within{' '}
              <strong className="font-semibold">eight weeks</strong> of switching.
            </>
          }
          freeBadgeLabel="Free · No login"
        />

        <EmailCapture
          title="Be the first to know"
          subtitle="Drop your email and we'll send a single line when v1.1 ships. No drip, no upsell."
          buttonLabel="Notify me"
          fineprint="We'll email you once. Unsubscribe with a click."
        />

        <section id="pricing">
          <CTABlock
            variant="dark"
            title="Skip the boilerplate."
            subtitle="A pinned starter, ten production sections, and a brand system you can re-skin in under ten minutes."
            price={{ amount: '$0', original: '$199', suffix: '/mo' }}
            checklist={[
              'Unlimited projects, forever',
              'TypeScript strict mode out of the box',
              'shadcn/ui primitives wired to your brand',
              'Mobile-first sections at every breakpoint',
              'Free updates as the stack evolves',
            ]}
            cta={{ label: 'Clone the starter', href: 'https://github.com/kabircodezz/kabir-starter' }}
            fineprint="Apache 2.0 license. Use it for client work, products, or side projects."
          />
        </section>

        <section id="faq">
          <FAQ
            title="Frequently asked questions"
            subtitle="Everything teams ask before they start cloning."
            items={faqItems}
          />
        </section>
      </main>

      <Footer
        siteName="Kabir Starter"
        navLinks={footerLinks}
        trustItems={trustItems}
      />
    </>
  )
}
