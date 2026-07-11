import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Sparkles, Users, MapPin, Mail, Phone } from "lucide-react";

const CANONICAL = "https://ayanfewavesvisuals.lovable.app/services/photography-lagos";

export const Route = createFileRoute("/services/photography-lagos")({
  head: () => ({
    meta: [
      { title: "Photography in Lagos — Portraits, Events & Editorial | Ayanfe Waves Visuals" },
      {
        name: "description",
        content:
          "Freelance photographer in Lagos, Nigeria. Book portraits, events, editorial and landscape sessions with Ayanfe Waves Visuals. Cinematic images, timeless storytelling.",
      },
      { property: "og:title", content: "Photography in Lagos — Ayanfe Waves Visuals" },
      {
        property: "og:description",
        content:
          "Book a Lagos-based freelance photographer for portraits, events, editorial and landscapes.",
      },
      { property: "og:url", content: CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Photography in Lagos",
          serviceType: "Photography",
          provider: {
            "@type": "ProfessionalService",
            name: "Ayanfe Waves Visuals",
            url: "https://ayanfewavesvisuals.lovable.app/",
            telephone: "+2348167829017",
            email: "ayanfewavesvisuals@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
          },
          areaServed: { "@type": "City", name: "Lagos" },
          url: CANONICAL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do you shoot on location across Lagos?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. I cover shoots across Lagos — Lekki, Victoria Island, Ikoyi, Ikeja, Yaba and the mainland — as well as travel for destination sessions.",
              },
            },
            {
              "@type": "Question",
              name: "What kinds of photography do you offer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Portraits, events, editorial/fashion, brand and landscape photography. Every session is planned around your story and delivered with a cinematic edit.",
              },
            },
            {
              "@type": "Question",
              name: "How do I book a session?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Reach out on WhatsApp, email ayanfewavesvisuals@gmail.com, or call +234 816 782 9017. We'll agree on the concept, location and date before confirming.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: PhotographyLagosPage,
});

const services = [
  {
    icon: Camera,
    title: "Portrait Sessions",
    desc: "Personal, brand and creative portraits shot on location across Lagos or in-studio.",
  },
  {
    icon: Users,
    title: "Events & Weddings",
    desc: "Documentary coverage of weddings, birthdays, launches and cultural celebrations.",
  },
  {
    icon: Sparkles,
    title: "Editorial & Fashion",
    desc: "Concept-led editorial, lookbooks and campaign imagery with a cinematic edit.",
  },
  {
    icon: MapPin,
    title: "Landscape & Travel",
    desc: "Lagos cityscapes and coastal frames — the city at its most dramatic hours.",
  },
];

const areas = [
  "Lekki",
  "Victoria Island",
  "Ikoyi",
  "Ajah",
  "Ikeja",
  "Yaba",
  "Surulere",
  "Magodo",
  "Lagos Island",
];

function PhotographyLagosPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-8 pt-16 text-center sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
          Lagos, Nigeria
        </p>
        <h1 className="mt-3 font-heading text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
          Photography in <span className="text-[#4f46e5]">Lagos</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Ayanfe Waves Visuals is a freelance photographer based in Lagos, capturing portraits,
          events, editorial and landscape work across the city. Every session is planned around
          your story and delivered with a cinematic, timeless edit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/message/QJFLNZ6VPBP6C1?text=Hi%2C%20Ayanfe%20I%27d%20like%20to%20book%20a%20photography%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338ca]"
          >
            Book a Lagos Session
          </a>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[rgba(255,255,255,0.05)]"
          >
            See Portfolio
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">Services</p>
          <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
            Photography services in Lagos
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0a0a1a]/50 p-6 transition-colors hover:border-[rgba(255,255,255,0.15)]"
            >
              <s.icon className="h-6 w-6 text-[#818cf8]" />
              <h3 className="mt-4 font-heading text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[rgba(255,255,255,0.08)] bg-[#141432]/30">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
              Coverage
            </p>
            <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
              Areas I shoot across Lagos
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              On location across the island and mainland — plus travel for destination sessions.
            </p>
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {areas.map((a) => (
              <li
                key={a}
                className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[#0a0a1a]/60 px-4 py-1.5 text-sm text-foreground"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">FAQ</p>
          <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
            Common questions
          </h2>
        </div>
        <div className="space-y-6">
          {[
            {
              q: "Do you shoot on location across Lagos?",
              a: "Yes. I cover shoots across Lagos — Lekki, Victoria Island, Ikoyi, Ikeja, Yaba and the mainland — as well as travel for destination sessions.",
            },
            {
              q: "What kinds of photography do you offer?",
              a: "Portraits, events, editorial/fashion, brand and landscape photography. Every session is planned around your story and delivered with a cinematic edit.",
            },
            {
              q: "How do I book a session?",
              a: "Reach out on WhatsApp, email ayanfewavesvisuals@gmail.com, or call +234 816 782 9017. We'll agree on the concept, location and date before confirming.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0a0a1a]/50 p-6"
            >
              <h3 className="font-heading text-lg text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[rgba(255,255,255,0.08)] bg-[#141432]/30">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            Ready to book your Lagos session?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Let's plan something timeless. Reach out today and we'll shape the concept together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/message/QJFLNZ6VPBP6C1?text=Hi%2C%20Ayanfe%20I%27d%20like%20to%20book%20a%20photography%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338ca]"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:ayanfewavesvisuals@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[rgba(255,255,255,0.05)]"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="tel:+2348167829017"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[rgba(255,255,255,0.05)]"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
