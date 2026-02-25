import Link from "next/link";
import { siteConfig } from "@/config";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <span className="flex items-center justify-center size-8 rounded-full bg-[var(--brand)] text-white text-sm font-bold">
        {siteConfig.brand.logo.text.slice(0, 1)}
      </span>
      <div className="leading-none">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {siteConfig.brand.logo.accent}
        </div>
        <div className="text-lg font-brand tracking-tight group-hover:opacity-80">
          {siteConfig.brand.logo.text}
        </div>
      </div>
    </Link>
  );
}
