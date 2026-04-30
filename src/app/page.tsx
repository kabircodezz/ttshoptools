import type { Metadata } from "next";
import Link from "next/link";
import { NavDark } from "@/components/NavDark";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "TTShop Tools — The TikTok Shop toolkit built on real data",
  description:
    "Two tools purpose-built for serious TikTok Shop sellers. Connected directly to TikTok's official Partner API — not scraped, not guessed.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "TTShop Tools — The TikTok Shop toolkit built on real data",
    description:
      "Two tools purpose-built for serious TikTok Shop sellers. Built on TikTok's official Partner API.",
    url: `${SITE_URL}/`,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink-bg text-ink-primary">
      <NavDark />

      {/* Hero */}
      <section className="grid items-start gap-8 px-6 pb-10 pt-12 md:grid-cols-[1fr_auto]">
        <div>
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-light px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            <span className="text-[11px] font-medium tracking-[0.02em] text-amber-dark">
              Official TikTok Shop Partner API
            </span>
          </div>
          <h1 className="mb-4 text-[24px] font-bold leading-[1.15] tracking-[-0.02em] text-ink-primary sm:text-[28px] md:text-[32px]">
            The TikTok Shop toolkit. Built on{" "}
            <span className="text-amber">real data</span>, not estimates.
          </h1>
          <p className="mb-6 max-w-[480px] text-[14px] leading-[1.6] text-ink-secondary">
            Two tools purpose-built for serious TikTok Shop sellers. Connected
            directly to TikTok&apos;s official APIs — not scraped, not guessed.
          </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Button
              asChild
              variant="default"
              className="h-10 px-[18px] text-[13px]"
            >
              <Link href="/calculator">Calculate my true profit →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-10 px-[18px] text-[13px]"
            >
              <Link href="/affiliate">Manage my creators →</Link>
            </Button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2 md:flex md:min-w-[140px] md:flex-col">
          {[
            { num: "$0", label: "scraped data", amber: true },
            { num: "100%", label: "official API", amber: true },
            { num: "2", label: "tools, one platform", amber: false },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 rounded-lg border border-[0.5px] border-ink-border bg-ink-surface px-3.5 py-3"
            >
              <div
                className={`text-[22px] font-bold leading-none ${
                  s.amber ? "text-amber" : "text-ink-primary"
                }`}
              >
                {s.num}
              </div>
              <div className="mt-1 text-[11px] text-ink-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust banner */}
      <section className="border-y border-[0.5px] border-[#2a2a1a] bg-[#1C160A] px-6 py-4">
        <p className="text-[13px] leading-[1.6] text-[#ccc]">
          Every other tool scrapes TikTok. We don&apos;t. Your numbers come
          directly from TikTok&apos;s official Partner API —{" "}
          <strong className="font-medium text-ink-primary">
            the same system TikTok uses internally.
          </strong>{" "}
          Exact fees, real attribution, decisions based on truth.
        </p>
      </section>

      {/* Comparison table */}
      <section className="px-6 pb-8 pt-0">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border-b border-[0.5px] border-ink-border px-2 py-2.5 text-left text-[11px] font-normal text-ink-muted sm:px-3.5 md:text-left" />
                {["Kalodata", "FastMoss", "PostScout"].map((h) => (
                  <th
                    key={h}
                    className="border-b border-[0.5px] border-ink-border px-2 py-2.5 text-center text-[11px] font-normal text-ink-muted sm:px-3.5"
                  >
                    {h}
                  </th>
                ))}
                <th className="border-b border-[0.5px] border-ink-border px-2 py-2.5 text-center text-[11px] font-normal text-amber sm:px-3.5">
                  TTShop Tools
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[0.5px] border-[#1e1e1e] px-2 py-2.5 text-left text-[11px] text-ink-muted sm:px-3.5">
                  Data source
                </td>
                {[1, 2, 3].map((i) => (
                  <td
                    key={i}
                    className="border-b border-[0.5px] border-[#1e1e1e] px-2 py-2.5 text-center text-[11px] text-coral sm:px-3.5 sm:text-[12px]"
                  >
                    Scraped
                  </td>
                ))}
                <td className="border-b border-[0.5px] border-[#1e1e1e] bg-[#1C160A] px-2 py-2.5 text-center text-[11px] font-medium text-amber sm:px-3.5 sm:text-[12px]">
                  Official API ✓
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Product cards */}
      <section className="grid gap-4 px-6 pb-8 pt-0 md:grid-cols-2">
        {[
          {
            href: "/calculator",
            name: "FeeScope",
            desc: "See exactly what TikTok keeps — and what you actually take home on every order.",
            features: [
              "Per-order true profit — not estimated",
              "Real settlement data — what TikTok actually pays",
              "Fee change alerts — know when rates shift",
            ],
            price: "$19",
            cta: "Calculate my true profit →",
          },
          {
            href: "/affiliate",
            name: "CollabHQ",
            desc: "Find creators, manage deals, track which affiliates actually drive orders — not estimates.",
            features: [
              "Pipeline management — not just a creator list",
              "Real order attribution per creator via API",
              "Outreach tracking — contacts, responses, deals",
            ],
            price: "$39",
            cta: "Manage my creators →",
          },
        ].map((card) => (
          <article
            key={card.name}
            className="rounded-[10px] border border-[0.5px] border-ink-border border-l-[3px] border-l-amber bg-ink-surface p-5"
          >
            <h3 className="mb-1.5 text-[16px] font-semibold text-ink-primary">
              {card.name}
            </h3>
            <p className="mb-3.5 text-[12px] leading-[1.5] text-[#777]">
              {card.desc}
            </p>
            <ul className="mb-3.5 space-y-2">
              {card.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-[6px] block h-1 w-1 shrink-0 rounded-full bg-amber" />
                  <span className="text-[12px] leading-[1.4] text-ink-secondary">
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3.5 text-[20px] font-bold text-ink-primary">
              {card.price}
              <span className="text-[12px] font-normal text-ink-muted"> /mo</span>
            </div>
            <Link
              href={card.href}
              className="mt-3 block text-[12px] text-amber hover:underline"
            >
              {card.cta}
            </Link>
          </article>
        ))}
      </section>

      {/* Footer trust bar */}
      <footer className="border-t border-[0.5px] border-[#1e1e1e] bg-ink-bg px-6 py-4">
        <div className="flex flex-col items-start gap-3 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-6">
          {[
            "Official TikTok Shop Partner API",
            "Built for US sellers in 2026",
            "Founding member pricing — locked for life",
          ].map((line) => (
            <div key={line} className="flex items-center gap-1.5 text-[11px] text-ink-muted">
              <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-leaf-dark">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              </span>
              {line}
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
