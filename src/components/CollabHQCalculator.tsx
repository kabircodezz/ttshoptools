"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

type State = {
  creators: string;
  samples: string;
  sampleCost: string;
  postRate: string;
  gmv: string;
  commission: string;
};

const initial: State = {
  creators: "50",
  samples: "40",
  sampleCost: "12",
  postRate: "35",
  gmv: "180",
  commission: "20",
};

function n(v: string): number {
  const x = parseFloat(v);
  return Number.isFinite(x) ? x : 0;
}

export function CollabHQCalculator() {
  const [s, setS] = useState<State>(initial);
  const set = (key: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setS((prev) => ({ ...prev, [key]: e.target.value }));

  const { wasted, gross, net, wastePct } = useMemo(() => {
    const samples = n(s.samples);
    const sampleCost = n(s.sampleCost);
    const postRate = n(s.postRate);
    const gmv = n(s.gmv);
    const commission = n(s.commission);
    const posting = Math.round((samples * postRate) / 100);
    const notPosting = samples - posting;
    const wasted = notPosting * sampleCost;
    const gross = posting * gmv;
    const commissionCost = (gross * commission) / 100;
    const totalSampleCost = samples * sampleCost;
    const net = gross - commissionCost - totalSampleCost;
    const wastePct = samples > 0 ? Math.round((notPosting / samples) * 100) : 0;
    return { wasted, gross, net, wastePct };
  }, [s]);

  const fmt = (v: number) => `$${Math.round(v).toLocaleString()}`;

  return (
    <div className="rounded-[10px] border border-[0.5px] border-[#e0d8cc] bg-cream-bg p-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Active creators">
          <Input type="number" inputMode="numeric" value={s.creators} onChange={set("creators")} className="bg-white" />
        </Field>
        <Field label="Samples sent / month">
          <Input type="number" inputMode="numeric" value={s.samples} onChange={set("samples")} className="bg-white" />
        </Field>
        <Field label="Avg sample cost ($)">
          <Input type="number" inputMode="decimal" step="0.01" value={s.sampleCost} onChange={set("sampleCost")} className="bg-white" />
        </Field>
        <Field label="% creators who post">
          <Input type="number" inputMode="numeric" value={s.postRate} onChange={set("postRate")} className="bg-white" />
        </Field>
        <Field label="Avg creator GMV / mo ($)">
          <Input type="number" inputMode="decimal" step="0.01" value={s.gmv} onChange={set("gmv")} className="bg-white" />
        </Field>
        <Field label="Commission rate (%)">
          <Input type="number" inputMode="decimal" step="0.1" value={s.commission} onChange={set("commission")} className="bg-white" />
        </Field>
      </div>

      <hr className="my-3 border-t border-[0.5px] border-cream-border" />

      <div className="grid grid-cols-3 gap-2">
        <Result num={fmt(wasted)} label="Wasted sample spend" tone="coral" />
        <Result num={fmt(gross)} label="Gross from posts" />
        <Result num={fmt(net)} label="Net after costs" tone="leaf" />
      </div>

      <div className="mt-2.5 rounded-md bg-coral-light px-3 py-2.5 text-[12px] leading-[1.5] text-coral-dark">
        {wastePct}% of your samples went to creators who never posted.
        That&apos;s {fmt(wasted)}/mo in pure waste — money CollabHQ helps you
        recover.
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
  tone?: "coral" | "leaf";
}) {
  const color =
    tone === "coral"
      ? "text-coral"
      : tone === "leaf"
        ? "text-leaf"
        : "text-ink-bg";
  return (
    <div className="rounded-md border border-[0.5px] border-cream-border bg-white px-3 py-2.5 text-center">
      <div className={`text-[14px] font-bold sm:text-[16px] ${color}`}>
        {num}
      </div>
      <div className="mt-0.5 text-[10px] text-[#555]">{label}</div>
    </div>
  );
}
