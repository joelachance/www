"use client";

import Link from "next/link";
import { useAuthToken } from "@convex-dev/auth/react";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Dashboard from "@/components/dashboard";
import { marketingConfig, productsConfig, siteConfig } from "@/config";
import { Button } from "@/components/ui/button";

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) => (
  <div className="space-y-3">
    {eyebrow ? (
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </div>
    ) : null}
    <h2 className="text-3xl font-brand tracking-tight md:text-4xl">{title}</h2>
    {subtitle ? (
      <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
        {subtitle}
      </p>
    ) : null}
  </div>
);

export default function Home() {
  const token = useAuthToken();
  const isAuthenticated = Boolean(token);

  if (token === undefined) {
    return null;
  }

  return (
    <>
      <Nav />
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <main>
          <section className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 p-6 pb-12 pt-8 md:p-10 md:pb-14 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {marketingConfig.hero.eyebrow}
              </div>
              <h1 className="text-4xl font-display leading-tight md:text-6xl">
                {marketingConfig.hero.title}
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                {marketingConfig.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={marketingConfig.hero.primaryCta.href}>
                    {marketingConfig.hero.primaryCta.label}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={marketingConfig.hero.secondaryCta.href}>
                    {marketingConfig.hero.secondaryCta.label}
                  </Link>
                </Button>
              </div>
              <div className="grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
                {marketingConfig.hero.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[var(--brand)]" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border bg-grid p-6 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {siteConfig.brand.tagline}
                  </div>
                  <div className="mt-3 text-2xl font-brand">
                    {siteConfig.brand.description}
                  </div>
                </div>
                <div className="grid gap-4">
                  {marketingConfig.stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                        <div className="text-lg font-brand">{stat.value}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </section>

          <section id="product" className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <SectionHeader
              eyebrow="Products"
              title="Launch with modular product blocks"
              subtitle="Use JSON to define products, positioning, and CTAs. Each block renders automatically."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {productsConfig.products.map((product) => (
                <div
                  key={product.id}
                  className="flex h-full flex-col justify-between rounded-none border border-border bg-background p-6"
                >
                  <div className="space-y-3">
                    <span className="inline-flex rounded-full border border-border px-2 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                      {product.badge}
                    </span>
                    <h3 className="text-xl font-brand">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.tagline}</p>
                    <p className="text-sm">{product.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-[var(--brand)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="mt-6" asChild>
                    <Link href={product.cta.href}>{product.cta.label}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section id="features" className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <SectionHeader
              eyebrow="Features"
              title="Everything is wired for you"
              subtitle="Auth, dashboard, and marketing templates are already in place. Update the JSON and ship."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {marketingConfig.features.map((feature) => (
                <div key={feature.title} className="rounded-none border border-border bg-background p-6">
                  <h3 className="text-lg font-brand">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <div className="grid gap-8 lg:grid-cols-2">
              {marketingConfig.sections.map((section) => (
                <div key={section.id} className="rounded-none border border-border bg-background p-6">
                  <h3 className="text-xl font-brand">{section.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{section.body}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-[var(--brand)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="pricing" className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <SectionHeader
              eyebrow={productsConfig.pricing.eyebrow}
              title={productsConfig.pricing.title}
              subtitle={productsConfig.pricing.subtitle}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {productsConfig.pricing.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex h-full flex-col justify-between rounded-none border p-6 ${
                    plan.highlighted
                      ? "border-[var(--brand)] bg-[rgba(228,109,63,0.08)]"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-brand">{plan.name}</h3>
                    <div className="text-3xl font-brand">
                      {plan.price}
                      <span className="text-xs text-muted-foreground"> {plan.cadence}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-[var(--brand)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="mt-6" variant={plan.highlighted ? "default" : "outline"} asChild>
                    <Link href={plan.cta.href}>{plan.cta.label}</Link>
                  </Button>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              {productsConfig.pricing.disclaimer}
            </p>
          </section>

          <section className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <SectionHeader
              eyebrow="Testimonials"
              title="Teams keep shipping with config"
              subtitle="A few notes from teams that replaced hard-coded marketing sites."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {marketingConfig.testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-none border border-border bg-background p-6">
                  <p className="text-sm">“{testimonial.quote}”</p>
                  <div className="mt-4 text-xs text-muted-foreground">
                    {testimonial.name} · {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions, answered"
              subtitle="Everything you need to hand off to your team."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {marketingConfig.faq.map((item) => (
                <div key={item.question} className="rounded-none border border-border bg-background p-6">
                  <div className="text-sm font-semibold">{item.question}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-6xl border-x border-b border-border frame-corners-top frame-corners-bottom px-6 py-16">
            <div className="rounded-none border border-border bg-[var(--brand)]/10 p-8 md:p-12">
              <SectionHeader
                eyebrow="Ready"
                title="Make your product story editable"
                subtitle="Point your team to /config and start shipping updates in minutes."
              />
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={marketingConfig.hero.primaryCta.href}>
                    {marketingConfig.hero.primaryCta.label}
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/signin">Sign in</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </>
  );
}
