import Link from "next/link";

export function Wordmark({ theme = "dark" }: { theme?: "dark" | "light" }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="block h-[11px] w-[18px] rounded-[2px] bg-amber" />
      <span
        className={`text-[13px] font-medium ${
          theme === "dark" ? "text-ink-primary" : "text-ink-bg"
        }`}
      >
        TTShop Tools
      </span>
    </Link>
  );
}
