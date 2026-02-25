"use client";

import Link from "next/link";
import { useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { useAuthActions, useAuthToken } from "@convex-dev/auth/react";
import { siteConfig } from "@/config";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import CommandPalette from "@/components/command-palette";

export default function Nav() {
  const token = useAuthToken();
  const isAuthenticated = Boolean(token);
  const { signOut } = useAuthActions();
  const [open, setOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  const navItems = siteConfig.nav.items;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
          <Logo />
          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setCommandOpen(true)}
                  className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Command className="size-3" />
                  Command
                </button>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Button variant="outline" onClick={() => void signOut()}>
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/signin"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sign in
                </Link>
                <Button asChild>
                  <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.label}</Link>
                </Button>
              </>
            )}
          </div>
          <button
            className="md:hidden flex items-center justify-center size-9 rounded-full border border-border"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed top-[68px] left-0 right-0 z-40 border-b border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3 border-t border-border pt-4">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => setCommandOpen(true)}
                    className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Command className="size-3" />
                    Command
                  </button>
                  <Link
                    href="/dashboard"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Button variant="outline" onClick={() => void signOut()}>
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Button asChild>
                    <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.label}</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} isSignedIn={isAuthenticated} />
    </>
  );
}
