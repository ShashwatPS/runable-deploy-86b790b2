import { Sparkles, Zap, Shield, Layers } from "lucide-react";
import { siteConfig } from "@/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-foreground">
              {siteConfig.name}
            </div>
            <nav className="flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-4xl px-6 py-32 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              Modern & Clean Design
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-foreground">
            {siteConfig.tagline}
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>

          <button className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Get Started
          </button>
        </section>

        <section
          id="features"
          className="border-y border-border bg-muted/30 py-24"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Sparkles className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Beautiful Design
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Clean, minimal aesthetics with attention to every detail and
                  spacious layouts.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Zap className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Lightning Fast
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Optimized performance with modern technologies and best
                  practices.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Shield className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Secure & Reliable
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Built with security in mind, ensuring your data stays safe and
                  protected.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center">
                  <Layers className="h-6 w-6 text-muted-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  Well Structured
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Organized codebase with clear architecture and maintainable
                  patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-semibold text-foreground">
              Simple by Design
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              We believe in the power of simplicity. Every element is carefully
              crafted to provide the best experience without unnecessary
              complexity.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 text-left shadow-sm">
                <div className="mb-2 font-mono text-2xl font-semibold text-foreground">
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-left shadow-sm">
                <div className="mb-2 font-mono text-2xl font-semibold text-foreground">
                  &lt; 100ms
                </div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="border-t border-border bg-muted/20 py-12"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-sm text-muted-foreground">
              © 2024 {siteConfig.contact.company}. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </a>
              <a
                href={siteConfig.legal.privacyPolicy}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy
              </a>
              <a
                href={siteConfig.legal.termsOfService}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

