import { createFileRoute, Link } from "@tanstack/react-router";
import { MasonryGrid } from "@/components/MasonryGrid";
import { photos } from "@/lib/photos";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayanfe Waves Visuals — Photography" },
      { name: "description", content: "Capturing moments that move the soul. Ayanfe Waves Visuals is a freelance photography studio specializing in portraits, landscapes, and editorial work." },
      { property: "og:title", content: "Ayanfe Waves Visuals — Photography" },
      { property: "og:description", content: "Capturing moments that move the soul." },
      { property: "og:url", content: "https://ayanfewavesvisuals.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://ayanfewavesvisuals.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Ayanfe Waves Visuals",
          description: "Freelance photography studio specializing in portraits, editorial, events, and landscapes.",
          image: "https://ayanfewavesvisuals.lovable.app/__l5e/assets-v1/1323b926-4778-4216-b553-ea9a2d5fcf7d/logo.png",
          url: "https://ayanfewavesvisuals.lovable.app/",
          areaServed: "Nigeria",
          address: { "@type": "PostalAddress", addressCountry: "NG" },
          telephone: "+2348167829017",
          email: "ayanfewavesvisuals@gmail.com",
        }),
      },
    ],
  }),
  component: Index,
});

const featuredTitles = ["Shrouded Gaze", "Gathering Storm", "Lavender Poise", "Dusk Avenue"];
const featuredPhotos = featuredTitles
  .map((t) => photos.find((p) => p.title === t))
  .filter((p): p is (typeof photos)[number] => Boolean(p));

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Photographer at twilight"
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/40 via-[#0a0a1a]/20 to-[#0a0a1a]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
            Freelance Photography
          </p>
          <h1 className="font-heading text-5xl leading-tight text-foreground sm:text-6xl md:text-7xl">
            Capturing moments that
            <br />
            <span className="text-[#4f46e5]">move the soul</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ayanfe Waves Visuals — where light, emotion, and story converge into timeless images.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-md bg-[#4f46e5] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#4338ca]"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-[rgba(255,255,255,0.12)] bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[rgba(255,255,255,0.05)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
              Portfolio
            </p>
            <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
              Selected Works
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            View All &rarr;
          </Link>
        </div>
        <MasonryGrid photos={featuredPhotos} />
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/portfolio"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View All &rarr;
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[rgba(255,255,255,0.08)] bg-[#141432]/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
              Services
            </p>
            <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">
              What I Shoot
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Portraits", desc: "Intimate, soulful portraits that reveal the person within." },
              { title: "Events", desc: "Timeless documentation of your most meaningful moments." },
              { title: "Editorial", desc: "Fashion and commercial work with a cinematic eye." },
              { title: "Landscapes", desc: "The world at its most dramatic and beautiful moments." },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[#0a0a1a]/50 p-6 transition-colors hover:border-[rgba(255,255,255,0.15)]"
              >
                <h3 className="font-heading text-xl text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
