"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

export function NavDark() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-[0.5px] border-ink-border bg-ink-bg">
      <div className="flex items-center justify-between px-6 py-4">
        <Wordmark theme="dark" />
        <div className="hidden gap-6 md:flex">
          <Link
            href="/calculator"
            className="text-[13px] text-[#999] transition hover:text-ink-primary"
          >
            FeeScope
          </Link>
          <Link
            href="/affiliate"
            className="text-[13px] text-[#999] transition hover:text-ink-primary"
          >
            CollabHQ
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-5 w-5 text-ink-primary" />
          ) : (
            <Menu className="h-5 w-5 text-ink-primary" />
          )}
        </button>
      </div>
      {open ? (
        <div className="border-t border-ink-border md:hidden">
          <div className="flex flex-col gap-1 px-6 py-3">
            <Link
              href="/calculator"
              className="py-2 text-[14px] text-ink-primary"
              onClick={() => setOpen(false)}
            >
              FeeScope
            </Link>
            <Link
              href="/affiliate"
              className="py-2 text-[14px] text-ink-primary"
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
