"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/site";

export function EmailCapture({
  product,
  title,
}: {
  product: Product;
  title: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, product }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
      setMessage("You're on the list. We'll notify you at launch.");
      setFirstName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <section className="border-t border-[0.5px] border-cream-border bg-cream-bg px-6 py-7 text-center">
      <h2 className="mb-4 text-[16px] font-semibold text-ink-bg">{title}</h2>
      <form
        onSubmit={onSubmit}
        className="mx-auto flex max-w-[420px] flex-col gap-2 sm:flex-row sm:flex-wrap"
      >
        <Input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-white sm:flex-1 sm:min-w-[140px]"
          aria-label="First name"
        />
        <Input
          type="email"
          required
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white sm:flex-1 sm:min-w-[140px]"
          aria-label="Email address"
        />
        <Button
          type="submit"
          variant="dark"
          className="h-9 w-full px-5 text-[13px] sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? "…" : "Notify me"}
        </Button>
      </form>
      {message ? (
        <p
          className={`mt-3 text-[12px] ${
            status === "error" ? "text-coral" : "text-leaf"
          }`}
        >
          {message}
        </p>
      ) : null}
    </section>
  );
}
