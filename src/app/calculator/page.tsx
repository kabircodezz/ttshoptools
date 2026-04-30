import type { Metadata } from "next";
import { NavLight } from "@/components/NavLight";
import { FeeScopeCalculator } from "@/components/FeeScopeCalculator";
import { EmailCapture } from "@/components/EmailCapture";
import { FounderBlock } from "@/components/FounderBlock";
import { FAQ } from "@/components/FAQ";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FeeScope — See your true TikTok Shop profit (free calculator)",
  description:
    "Most sellers model 7–10% in fees. Reality is 35–55%. FeeScope shows exactly what TikTok takes and what you actually keep on every order.",
  alternates: { canonical: `${SITE_URL}/calculator` },
  openGraph: {
    title: "FeeScope — See your true TikTok Shop profit",
    description:
      "Free per-order profit calculator for TikTok Shop sellers. Built on the official Partner API.",
    url: `${SITE_URL}/calculator`,
    type: "website",
  },
};

const FEATURES = [
  {
    n: "01",
    title: "Automatic settlement reconciliation",
    desc: "TikTok's payout file changes format constantly. FeeScope parses every version automatically — no broken exports.",
  },
  {
    n: "02",
    title: "Per-SKU profit with COGS",
    desc: "Seller Center shows fees. We add your COGS and shipping to show actual margin per product.",
  },
  {
    n: "03",
    title: "Affiliate vs organic traffic split",
    desc: "Attribution at 20% commission vs 0%. Know exactly which traffic source is actually profitable.",
  },
  {
    n: "04",
    title: "Per-creator ROI calculator",
    desc: "Creator A at 10% commission vs 20%. Who's actually making you money? FeeScope tells you.",
  },
  {
    n: "05",
    title: "Fee change alerts",
    desc: "TikTok shifts category rates without announcement. FeeScope alerts you within 24 hours.",
  },
  {
    n: "06",
    title: "Return rate damage tracker",
    desc: "Shipping + refund + COGS = how much each return actually costs. Track the sellers who hurt you most.",
  },
  {
    n: "07",
    title: "Cash flow timeline",
    desc: "TikTok pays 7–90 days late. FeeScope projects settlement dates so you can predict cash position.",
  },
];

const FAQ_ITEMS = [
  {
    q: "When does FeeScope launch?",
    a: "We're targeting launch within 30 days. Founders get access first, before anyone on the general waitlist.",
  },
  {
    q: "What does it connect to?",
    a: "FeeScope connects to your TikTok Shop via official API. No scraping, no third-party data — direct from TikTok's Partner API.",
  },
  {
    q: "Is my $1 deposit refundable?",
    a: "Yes, fully refundable if you cancel before launch. No questions asked.",
  },
];

export default function FeeScopePage() {
  return (
    <main className="min-h-screen bg-cream-bg text-ink-bg">
      <NavLight current="feescope" />

      {/* Hero */}
      <section className="px-6 pb-9 pt-12 text-center">
        <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[0.5px] border-[#e0d8cc] bg-white px-3 py-1">
          <span className="h-[5px] w-[5px] rounded-full bg-amber" />
          <span className="text-[11px] text-[#555]">
            Free calculator · All features unlocked · No signup
          </span>
        </div>
        <h1 className="mb-1.5 text-[22px] font-bold leading-[1.2] tracking-[-0.02em] text-ink-bg sm:text-[26px] md:text-[30px]">
          Most sellers model 7–10% in fees.
          <br />
          <span className="text-amber">Reality is 35–55%.</span>
        </h1>
        <p className="mx-auto mt-3 max-w-[480px] text-[14px] leading-[1.6] text-[#444]">
          FeeScope shows you exactly what TikTok takes and what you actually
          keep — on every order, every SKU, every creator.
        </p>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[0.5px] border-cream-border bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <Stat n="35–55%" l="actual cost of sale" border="right md" />
          <Stat n="11" l="fee types tracked" border="md" />
          <Stat n="2×" l="what sellers estimate vs reality" full />
        </div>
      </section>

      {/* Calculator */}
      <section className="px-6 py-8">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-ink-bg">
            Per-order profit calculator
          </span>
          <span className="rounded-[10px] bg-[#f0ede6] px-2.5 py-0.5 text-[11px] text-[#555]">
            Free · No limits
          </span>
        </div>
        <p className="mb-4 mt-1 text-[12px] text-[#444]">
          Enter your numbers. See what you actually keep.
        </p>
        <FeeScopeCalculator />
      </section>

      {/* Features */}
      <section className="border-t border-[0.5px] border-cream-border bg-white px-6 py-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.08em] text-amber">
          FeeScope does more
        </p>
        <h2 className="mx-auto mt-2 max-w-[640px] text-center text-[20px] font-bold leading-tight text-ink-bg sm:text-[22px]">
          Connect your store. Get the{" "}
          <span className="text-amber">7 things</span> no other tool does.
        </h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.n}
              className="flex items-start gap-2.5 rounded-lg border border-[0.5px] border-cream-border bg-cream-bg p-3.5"
            >
              <span className="mt-px shrink-0 rounded bg-amber-light px-1.5 py-0.5 text-[10px] font-medium text-amber">
                {f.n}
              </span>
              <div>
                <div className="mb-1 text-[13px] font-medium text-ink-bg">
                  {f.title}
                </div>
                <p className="text-[11px] leading-[1.4] text-[#444]">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <EmailCapture
        product="feescope"
        title="Notify me when FeeScope launches"
      />

      <FounderBlock
        product="feescope"
        founderPrice="$11"
        regularPrice="$19"
        savings={{ year: "$96/year", threeYear: "$288 over 3 years" }}
        description="Your $1 locks in $11/mo for life — even when prices go up."
      />

      <FAQ items={FAQ_ITEMS} />
    </main>
  );
}

function Stat({
  n,
  l,
  border,
  full,
}: {
  n: string;
  l: string;
  border?: "right md" | "md";
  full?: boolean;
}) {
  const borderClass =
    border === "right md"
      ? "border-r border-[0.5px] border-cream-border md:border-r"
      : border === "md"
        ? "md:border-r md:border-[0.5px] md:border-cream-border"
        : "";
  const colSpan = full ? "col-span-2 md:col-span-1" : "";
  return (
    <div className={`px-4 py-3.5 text-center ${borderClass} ${colSpan}`}>
      <div className="text-[18px] font-bold text-amber">{n}</div>
      <div className="mt-0.5 text-[11px] text-[#555]">{l}</div>
    </div>
  );
}
