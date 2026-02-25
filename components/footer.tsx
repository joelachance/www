"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";
import { siteConfig } from "@/config";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="mt-20 border-t border-border/70 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          <div className="text-2xl font-brand">{siteConfig.footer.headline}</div>
          <p className="text-sm text-muted-foreground max-w-md">
            {siteConfig.footer.subhead}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <ThemeToggle />
            <span className="font-mono-soft">Theme</span>
          </div>
        </div>
        <div className="grid gap-4 text-sm">
          <div className="flex flex-col gap-2">
            {siteConfig.footer.links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            {siteConfig.social.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/70 py-6 text-center text-xs text-muted-foreground">
        {siteConfig.footer.legal}
      </div>
    </footer>
  );
}
