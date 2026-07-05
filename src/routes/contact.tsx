import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Copy, Check } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-md p-1 text-muted-foreground transition-colors hover:text-primary"
      aria-label="Copy to clipboard"
      type="button"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayanfe Waves Visuals" },
      { name: "description", content: "Get in touch with Ayanfe Waves Visuals to book a session or discuss a photography project." },
      { property: "og:title", content: "Contact — Ayanfe Waves Visuals" },
      { property: "og:description", content: "Get in touch with Ayanfe Waves Visuals." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/xjgdrzbw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or email directly.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
            Get in Touch
          </p>
          <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">
            Let&apos;s Create Together
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re planning a wedding, a portrait session, or an editorial shoot —
            I&apos;d love to hear your vision and bring it to life.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Phone
              </p>
              <div className="mt-1 flex items-center gap-1">
                <a
                  href="tel:+2348167829017"
                  className="flex items-center gap-2 text-foreground transition-colors hover:text-[#4f46e5]"
                >
                  <Phone className="h-4 w-4" />
                  +234 816 782 9017
                </a>
                <CopyButton text="+234 816 782 9017" />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:ayanfewavesvisuals@gmail.com"
                className="mt-1 flex items-center gap-2 text-foreground transition-colors hover:text-[#4f46e5]"
              >
                <Mail className="h-4 w-4" />
                ayanfewavesvisuals@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                TikTok
              </p>
              <a
                href="https://www.tiktok.com/@ayanfewaves_visuals1?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center gap-2 text-foreground transition-colors hover:text-[#4f46e5]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.3 0 .59.05.86.13V8.31a6.36 6.36 0 0 0-.86-.06A6.25 6.25 0 0 0 3 14.5a6.25 6.25 0 0 0 6.25 6.25 6.25 6.25 0 0 0 6.25-6.25V8.82a8.1 8.1 0 0 0 4.77 1.52v-3.4a4.86 4.86 0 0 1-1-.1z" />
                </svg>
                @ayanfewaves_visuals1
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Based In
              </p>
              <p className="mt-1 text-foreground">Nigeria</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Availability
              </p>
              <p className="mt-1 text-foreground">Booking 2–3 months in advance</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#141432]/50 p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4f46e5]/20 text-[#4f46e5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="font-heading text-xl text-foreground">Message Sent</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you for reaching out. I&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 block w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-[#0a0a1a] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-[#0a0a1a] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground">
                  Type of Shoot
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 block w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-[#0a0a1a] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]"
                >
                  <option>Portrait Session</option>
                  <option>Event</option>
                  <option>Editorial / Commercial</option>
                  <option>Landscape / Travel</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 block w-full rounded-md border border-[rgba(255,255,255,0.12)] bg-[#0a0a1a] px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]"
                  placeholder="Tell me about your project..."
                />
              </div>
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338ca] disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
