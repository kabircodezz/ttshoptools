"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

export function NavLight({
  current,
}: {
  current: "feescope" | "collabhq" | "thank-you";
}) {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link
        href="/calculator"
        className={`text-[13px] ${
          current === "feescope" ? "text-ink-bg" : "text-[#444]"
        } hover:text-ink-bg`}
      >
        FeeScope
      </Link>
      <Link
        href="/affiliate"
        className={`text-[13px] ${
          current === "collabhq" ? "text-ink-bg" : "text-[#444]"
        } hover:text-ink-bg`}
      >
        CollabHQ
      </Link>
    </>
  );

  return (
    <nav className="border-b border-[0.5px] border-cream-border bg-cream-bg">
      <div className="flex items-center justify-between px-6 py-[14px]">
        <Wordmark theme="light" />
        <div className="hidden items-center gap-6 md:flex">{links}</div>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5 text-ink-bg" />
          ) : (
            <Menu className="h-5 w-5 text-ink-bg" />
          )}
        </button>
      </div>
      {open ? (
        <div className="border-t border-cream-border md:hidden">
          <div className="flex flex-col gap-1 px-6 py-3">
            <Link
              href="/calculator"
              className="py-2 text-[14px] text-ink-bg"
              onClick={() => setOpen(false)}
            >
              FeeScope
            </Link>
            <Link
              href="/affiliate"
              className="py-2 text-[14px] text-ink-bg"
              onClick={() => setOpen(false)}
            >
              CollabHQ
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
