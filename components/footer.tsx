"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import { siteConfig } from "@/config";

function XLogoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2h3.308l-7.227 8.26L23 22h-6.406l-5.016-6.57L5.83 22H2.52l7.73-8.835L1 2h6.568l4.534 5.996L18.244 2Zm-1.161 18h1.833L6.574 3.875H4.607L17.083 20Z" />
    </svg>
  );
}

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  const socialIcons: Record<string, JSX.Element> = {
    x: <XLogoIcon />,
    github: <Github className="h-4 w-4" />,
    discord: <MessageCircle className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />,
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 border-x border-border px-6 py-12 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-4">
          <div className="text-2xl font-brand">{siteConfig.footer.headline}</div>
          <p className="text-sm text-muted-foreground max-w-md">
            {siteConfig.footer.subhead}
          </p>
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
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="hover:text-foreground"
              >
                {socialIcons[item.label.toLowerCase()] ?? item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between border-x border-t border-border px-6 py-4">
        <ThemeToggle />
        <div className="text-xs text-muted-foreground">{siteConfig.footer.legal}</div>
      </div>
    </footer>
  );
}
