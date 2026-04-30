"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type State = {
  category: string;
  status: string;
  price: string;
  cogs: string;
  ref: string;
  proc: string;
  ship: string;
  aff: string;
  ads: string;
  ret: string;
};

const initial: State = {
  category: "Beauty & Personal Care",
  status: "Established seller",
  price: "29.99",
  cogs: "8.00",
  ref: "6",
  proc: "2.9",
  ship: "4.50",
  aff: "20",
  ads: "2.80",
  ret: "8",
};

function n(v: string): number {
  const x = parseFloat(v);
  return Number.isFinite(x) ? x : 0;
}

export function FeeScopeCalculator() {
  const [s, setS] = useState<State>(initial);
  const set = (key: keyof State) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setS((prev) => ({ ...prev, [key]: e.target.value }));

  const { rev, fees, profit, pct } = useMemo(() => {
    const price = n(s.price);
    const cogs = n(s.cogs);
    const ref = n(s.ref);
    const proc = n(s.proc);
    const ship = n(s.ship);
    const aff = n(s.aff);
    const ads = n(s.ads);
    const ret = n(s.ret);
    const fees =
      (price * ref) / 100 +
      (price * proc) / 100 +
      ship +
      (price * aff) / 100 +
      ads +
      cogs +
      (price * ret) / 100 * 0.5;
    const profit = price - fees;
    const pct = price > 0 ? Math.round((fees / price) * 100) : 0;
    return { rev: price, fees, profit, pct };
  }, [s]);

  return (
    <div className="rounded-[10px] border border-[0.5px] border-[#e0d8cc] bg-white p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Category">
          <Select value={s.category} onChange={set("category")}>
            <option>Beauty &amp; Personal Care</option>
            <option>Fashion</option>
            <option>Electronics</option>
            <option>Home &amp; Living</option>
          </Select>
        </Field>
        <Field label="Seller status">
          <Select value={s.status} onChange={set("status")}>
            <option>Established seller</option>
            <option>New seller</option>
          </Select>
        </Field>
        <Field label="Selling price ($)">
          <Input type="number" inputMode="decimal" step="0.01" value={s.price} onChange={set("price")} />
        </Field>
        <Field label="Product cost / COGS ($)">
          <Input type="number" inputMode="decimal" step="0.01" value={s.cogs} onChange={set("cogs")} />
        </Field>
        <Field label="Referral fee (%)">
          <Input type="number" inputMode="decimal" step="0.1" value={s.ref} onChange={set("ref")} />
        </Field>
        <Field label="Payment processing (%)">
          <Input type="number" inputMode="decimal" step="0.1" value={s.proc} onChange={set("proc")} />
        </Field>
        <Field label="Shipping cost ($)">
          <Input type="number" inputMode="decimal" step="0.01" value={s.ship} onChange={set("ship")} />
        </Field>
        <Field label="Affiliate commission (%)">
          <Input type="number" inputMode="decimal" step="0.1" value={s.aff} onChange={set("aff")} />
        </Field>
        <Field label="Ad spend / order ($)">
          <Input type="number" inputMode="decimal" step="0.01" value={s.ads} onChange={set("ads")} />
        </Field>
        <Field label="Returns (%)">
          <Input type="number" inputMode="decimal" step="0.1" value={s.ret} onChange={set("ret")} />
        </Field>
      </div>

      <hr className="my-3 border-t border-[0.5px] border-[#f0ede6]" />

      <div className="grid grid-cols-3 gap-2">
        <Result num={`$${rev.toFixed(2)}`} label="Gross revenue" />
        <Result num={`-$${fees.toFixed(2)}`} label="Total fees & costs" tone="coral" />
        <Result num={`$${profit.toFixed(2)}`} label="Net profit per order" tone="amber" />
      </div>

      <div className="mt-2.5 rounded-md bg-amber-light px-3 py-2.5 text-[12px] leading-[1.5] text-amber-deep">
        {pct}% of your selling price goes to fees and costs. You keep{" "}
        {Math.max(0, 100 - pct)}%.
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] text-[#555]">{label}</span>
      {children}
    </label>
  );
}

function Result({
  num,
  label,
  tone,
}: {
  num: string;
  label: string;
  tone?: "amber" | "coral";
}) {
  const color =
    tone === "coral"
      ? "text-coral"
      : tone === "amber"
        ? "text-amber"
        : "text-ink-bg";
  return (
    <div className="rounded-md bg-cream-bg px-3 py-2.5 text-center">
      <div className={`text-[14px] font-bold sm:text-[18px] ${color}`}>{num}</div>
      <div className="mt-0.5 text-[10px] text-[#555]">{label}</div>
    </div>
  );
}
