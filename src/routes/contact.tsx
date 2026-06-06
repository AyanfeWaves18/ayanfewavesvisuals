import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
                Email
              </p>
              <a
                href="mailto:hello@ayanfewavesvisuals.com"
                className="mt-1 block text-foreground transition-colors hover:text-[#4f46e5]"
              >
                hello@ayanfewavesvisuals.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Based In
              </p>
              <p className="mt-1 text-foreground">Lagos, Nigeria & London, UK</p>
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
                Thank you for reaching out. I&apos;ll be in touch within 48 hours.
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
                  <option>Wedding / Event</option>
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
              <button
                type="submit"
                className="w-full rounded-md bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338ca]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
