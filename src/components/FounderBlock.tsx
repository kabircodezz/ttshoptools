"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/site";

type FounderBlockProps = {
  product: Product;
  founderPrice: string;
  regularPrice: string;
  savings: { year: string; threeYear: string };
  description: string;
};

export function FounderBlock({
  product,
  founderPrice,
  regularPrice,
  savings,
  description,
}: FounderBlockProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isCoral = product === "collabhq";
  const accentText = isCoral ? "text-coral" : "text-amber";
  const buttonVariant: "amber" | "coral" = isCoral ? "coral" : "amber";
  const pillColor = isCoral ? "text-[#EF9F27]" : "text-amber";

  async function onCheckout() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error || "Could not start checkout. Try again.");
        setLoading(false);
        return;
      }
      window.location.assign(data.url);
    } catch {
      setError("Network error. Try again.");
      setLoading(false);
    }
  }

  return (
    <section className="m-4 sm:m-6 rounded-xl bg-ink-surface px-6 py-7 text-center">
      <p
        className={`mb-2 text-[10px] font-medium uppercase tracking-[0.1em] ${accentText}`}
      >
        Founder pricing · Locked for life
      </p>
      <h3 className="mb-3 text-[20px] font-bold text-ink-primary">
        Reserve your spot for $1
      </h3>
      <div className="mb-1.5 flex items-baseline justify-center gap-1.5">
        <span className={`text-[36px] font-bold ${accentText}`}>
          {founderPrice}
        </span>
        <span className="text-[14px] text-[#777] line-through">
          {regularPrice}
        </span>
        <span className="text-[12px] text-[#aaa]">/mo forever</span>
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-1.5">
        <span
          className={`rounded-[10px] bg-[#2a2a2a] px-2.5 py-[3px] text-[11px] ${pillColor}`}
        >
          Save {savings.year}
        </span>
        <span
          className={`rounded-[10px] bg-[#2a2a2a] px-2.5 py-[3px] text-[11px] ${pillColor}`}
        >
          {savings.threeYear}
        </span>
      </div>
      <p className="mb-4 text-[12px] text-[#aaa]">{description}</p>

      <ul className="mx-auto mb-5 flex max-w-[280px] flex-col gap-1.5 text-left">
        {[
          "Cancel anytime before launch — $1 fully refunded",
          "$1 applied to your first month when we launch",
          "Priority access — founders get in before public launch",
        ].map((line) => (
          <li
            key={line}
            className="flex items-center gap-2 text-[12px] text-[#ccc]"
          >
            <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full bg-leaf-dark">
              <span className="h-[6px] w-[6px] rounded-full bg-leaf" />
            </span>
            {line}
          </li>
        ))}
      </ul>

      <Button
        type="button"
        variant={buttonVariant}
        onClick={onCheckout}
        disabled={loading}
        className="mx-auto block h-[46px] w-full max-w-[280px] rounded-lg text-[14px] font-semibold"
      >
        {loading ? "Starting checkout…" : "Reserve my spot for $1 →"}
      </Button>
      <p className="mt-2.5 text-[11px] text-[#666]">
        First 100 founders only · Secured by Stripe
      </p>
      {error ? (
        <p className="mt-2 text-[11px] text-coral">{error}</p>
      ) : null}
    </section>
  );
}
