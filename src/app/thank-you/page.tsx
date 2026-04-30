import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { NavLight } from "@/components/NavLight";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "You're in — TTShop Tools",
  description: "Your $1 deposit is confirmed. You're on the founders list.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const params = await searchParams;
  const product = params?.product === "collabhq" ? "collabhq" : "feescope";

  return (
    <main className="min-h-screen bg-cream-bg text-ink-bg">
      <NavLight current="thank-you" />

      <section className="px-6 py-14 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-leaf-light">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf">
            <Check className="h-6 w-6 text-white" strokeWidth={3} />
          </span>
        </div>
        <h1 className="mx-auto mt-6 max-w-[480px] text-[24px] font-bold leading-[1.2] text-ink-bg sm:text-[28px]">
          You&apos;re in.
        </h1>
        <p className="mx-auto mt-3 max-w-[440px] text-[14px] leading-[1.6] text-[#444]">
          Your $1 deposit is confirmed. You&apos;re on the founders list —
          you&apos;ll get access before anyone else when we launch.
        </p>

        <div className="mx-auto mt-7 max-w-[440px] rounded-[10px] border border-[0.5px] border-cream-border bg-white p-5 text-left">
          <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-[#555]">
            What happens next
          </p>
          <ul className="space-y-3">
            {[
              "We'll email you your receipt from Stripe",
              "When we launch, founders get 48-hour early access",
              "Your rate is locked — it will never go up",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-[13px] leading-[1.5] text-ink-bg"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-leaf-light">
                  <Check className="h-2.5 w-2.5 text-leaf" strokeWidth={4} />
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-7 flex max-w-[440px] flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Button
            asChild
            variant={product === "feescope" ? "amber" : "outline"}
            className={
              product === "feescope"
                ? "h-10"
                : "h-10 border-[#ccc] text-ink-bg hover:bg-cream-border"
            }
          >
            <Link href="/calculator">Check out FeeScope</Link>
          </Button>
          <Button
            asChild
            variant={product === "collabhq" ? "coral" : "outline"}
            className={
              product === "collabhq"
                ? "h-10"
                : "h-10 border-[#ccc] text-ink-bg hover:bg-cream-border"
            }
          >
            <Link href="/affiliate">Check out CollabHQ</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
