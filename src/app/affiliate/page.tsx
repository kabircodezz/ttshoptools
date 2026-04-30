import type { Metadata } from "next";
import { NavLight } from "@/components/NavLight";
import { CollabHQCalculator } from "@/components/CollabHQCalculator";
import { EmailCapture } from "@/components/EmailCapture";
import { FounderBlock } from "@/components/FounderBlock";
import { FAQ } from "@/components/FAQ";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "CollabHQ — Track which creators actually drive sales",
  description:
    "CollabHQ tracks every creator from sample to post to sale — so you stop guessing which partnerships are actually making you money.",
  alternates: { canonical: `${SITE_URL}/affiliate` },
  openGraph: {
    title: "CollabHQ — Track which creators actually drive sales",
    description:
      "Free ROI calculator for TikTok Shop creator programs. No signup required.",
    url: `${SITE_URL}/affiliate`,
    type: "website",
  },
};

const GAPS = [
  {
    n: "GAP 01",
    title: "The sample black hole",
    desc: "You shipped samples to 50 creators. Seller Center doesn't tell you how many posted, let alone how many drove sales.",
  },
  {
    n: "GAP 02",
    title: "The volume ceiling",
    desc: "Managing 10 creators in Seller Center is annoying. Managing 100 is impossible. The platform wasn't built for scale.",
  },
  {
    n: "GAP 03",
    title: "ROI invisibility",
    desc: "You know which creator drove the most GMV. You don't know which one was actually worth it after samples, commission, and ad spend.",
  },
];

const PIPELINE = [
  { label: "Invited", on: false },
  { label: "Accepted", on: false },
  { label: "Sample sent", on: true },
  { label: "Posted?", on: true },
  { label: "Sales?", on: true },
];

const FEATURES = [
  {
    title: "Sample-to-post tracking",
    desc: "See which creators posted content after getting a sample — and which ones ghosted. Automatic follow-ups for the ghosts, resource reallocation for the rest.",
  },
  {
    title: "Per-creator net ROI",
    desc: "GMV minus commission minus sample cost minus attributed ad spend. See who's actually making you money — and cut the rest.",
  },
  {
    title: "Pipeline for 100+ creators",
    desc: "A single view across every creator relationship: status, last contact, performance. Manage at scale — not one Seller Center tab at a time.",
  },
];

const FAQ_ITEMS = [
  {
    q: "When does CollabHQ launch?",
    a: "We're targeting launch within 30 days. Founders get access first, before anyone on the general waitlist.",
  },
  {
    q: "Does it connect to my TikTok Shop?",
    a: "Yes. CollabHQ connects via TikTok's official Partner API — not scraping. Real attribution, real data.",
  },
  {
    q: "Is my $1 deposit refundable?",
    a: "Yes, fully refundable if you cancel before launch. No questions asked.",
  },
];

export default function CollabHQPage() {
  return (
    <main className="min-h-screen bg-cream-bg text-ink-bg">
      <NavLight current="collabhq" />

      {/* Hero */}
      <section className="px-6 pb-9 pt-12 text-center">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[0.5px] border-[#e0d8cc] bg-white px-3 py-1">
          <span className="h-[5px] w-[5px] rounded-full bg-coral" />
          <span className="text-[11px] text-[#555]">
            Free ROI calculator · No signup
          </span>
        </div>
        <h1 className="mb-1.5 text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-ink-bg sm:text-[26px] md:text-[30px]">
          You sent 50 samples.
          <br />
          <span className="text-coral">How many turned into sales?</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[480px] text-[14px] leading-[1.6] text-[#444]">
          CollabHQ tracks every creator from sample to post to sale — so you
          stop guessing which partnerships are actually making you money.
        </p>
      </section>

      {/* Gap cards */}
      <section className="border-t border-[0.5px] border-cream-border bg-white px-6 py-8">
        <div className="grid gap-3 md:grid-cols-3">
          {GAPS.map((g) => (
            <div
              key={g.n}
              className="rounded-[10px] border border-[0.5px] border-cream-border bg-cream-bg p-4"
            >
              <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.08em] text-coral">
                {g.n}
              </div>
              <div className="mb-1.5 text-[13px] font-semibold text-ink-bg">
                {g.title}
              </div>
              <p className="text-[12px] leading-[1.5] text-[#444]">{g.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="border-t border-[0.5px] border-cream-border px-6 py-8 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-coral">
          The creator workflow
        </p>
        <h2 className="mx-auto mt-2 max-w-[640px] text-center text-[18px] font-bold leading-tight text-ink-bg sm:text-[20px]">
          Seller Center tracks the first two stages.
          <br />
          <span className="text-coral">
            Everything after is yours to figure out.
          </span>
        </h2>
        <div className="mt-5 flex items-stretch overflow-x-auto pb-1">
          {PIPELINE.map((stage, i) => (
            <div key={stage.label} className="flex items-center">
              <div
                className={`flex min-w-[70px] items-center justify-center border border-[0.5px] px-2 py-2.5 text-center text-[11px] sm:min-w-[80px] sm:text-[12px] ${
                  stage.on
                    ? "border-amber-border bg-amber-light font-medium text-amber-dark"
                    : "border-cream-border bg-white text-[#888]"
                } ${
                  i === 0 ? "rounded-l-md" : ""
                } ${i === PIPELINE.length - 1 ? "rounded-r-md" : ""}`}
                style={{ flex: "1 0 auto" }}
              >
                {stage.label}
              </div>
              {i < PIPELINE.length - 1 ? (
                <span className="px-1 text-[12px] text-[#ccc]">→</span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-coral">
          <span className="h-1.5 w-1.5 rounded-full bg-coral" />
          CollabHQ tracks the stages that actually determine ROI
        </div>
      </section>

      {/* Calculator */}
      <section className="border-t border-[0.5px] border-cream-border bg-white px-6 py-8">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-ink-bg">
            Creator program ROI calculator
          </span>
          <span className="rounded-[10px] bg-[#f0ede6] px-2.5 py-0.5 text-[11px] text-[#555]">
            Free · No limits
          </span>
        </div>
        <p className="mb-4 mt-1 text-[12px] text-[#444]">
          Enter your numbers. See what your sample program actually returns.
        </p>
        <CollabHQCalculator />
      </section>

      {/* Features */}
      <section className="border-t border-[0.5px] border-cream-border px-6 py-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.08em] text-coral">
          What CollabHQ does
        </p>
        <h2 className="mx-auto mt-2 max-w-[640px] text-center text-[20px] font-bold leading-tight text-ink-bg sm:text-[22px]">
          Built to track{" "}
          <span className="text-coral">what actually happens</span> after the
          invite.
        </h2>
        <div className="mt-3 flex justify-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[0.5px] border-leaf-border bg-leaf-light px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            <span className="text-[11px] font-medium text-leaf-text">
              Verified · Official TikTok Shop Partner API
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-3 rounded-lg border border-[0.5px] border-cream-border bg-white p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-light">
                <span className="block h-3.5 w-3.5 rounded-[2px] bg-amber" />
              </div>
              <div>
                <div className="mb-1 text-[13px] font-medium text-ink-bg">
                  {f.title}
                </div>
                <p className="text-[12px] leading-[1.4] text-[#444]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust statement */}
      <section className="border-t border-[0.5px] border-cream-border bg-white px-6 py-6 text-center">
        <p className="mx-auto max-w-[480px] text-[18px] font-semibold leading-[1.4] text-ink-bg">
          Your affiliate program doesn&apos;t have a discovery problem.{" "}
          <span className="text-coral">
            It has an accountability problem.
          </span>
        </p>
      </section>

      <EmailCapture
        product="collabhq"
        title="Notify me when CollabHQ launches"
      />

      <FounderBlock
        product="collabhq"
        founderPrice="$25"
        regularPrice="$39"
        savings={{ year: "$168/year", threeYear: "$504 over 3 years" }}
        description="Your $1 locks in $25/mo for life — even when prices go up."
      />

      <FAQ items={FAQ_ITEMS} />
    </main>
  );
}
