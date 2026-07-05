import { createFileRoute } from "@tanstack/react-router";
import aboutPortraitAsset from "@/assets/about-portrait.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayanfe Waves Visuals" },
      { name: "description", content: "Learn about Ayanfe Waves Visuals, the story behind the lens, and what drives the creative vision." },
      { property: "og:title", content: "About — Ayanfe Waves Visuals" },
      { property: "og:description", content: "Learn about Ayanfe Waves Visuals, the story behind the lens." },
      { property: "og:url", content: "https://ayanfewavesvisuals.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://ayanfewavesvisuals.lovable.app/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About — Ayanfe Waves Visuals",
          url: "https://ayanfewavesvisuals.lovable.app/about",
          mainEntity: {
            "@type": "Person",
            name: "Ayanfe Waves Visuals",
            jobTitle: "Photographer",
            address: { "@type": "PostalAddress", addressCountry: "NG" },
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
            The Photographer
          </p>
          <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">
            Ayanfe Waves Visuals
          </h1>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Photography found me during a quiet evening in Nigeria, where the light seemed to
              hold every emotion I had ever felt. Since then, the camera has been my way of
              giving others a window into the moments they hold dear.
            </p>
            <p>
              I specialize in portraits that feel like conversations, events that feel like
              poetry, and landscapes that remind us how small and precious we are. Every frame is
              shaped by a belief that the best images are not taken; they are felt.
            </p>
            <p>
              Based in Nigeria, I travel wherever stories call. My work captures portraits,
              editorial moments, and the personal milestones of people who trust me with their
              most important moments.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <p className="font-heading text-3xl text-[#4f46e5]">1+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Years</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-[#4f46e5]">100+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-[#141432]">
            <img
              src={aboutPortraitAsset.url}
              alt="Portrait of Ayanfe Waves Visuals"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 rounded-lg bg-[#1e1e5a]/20" />
        </div>
      </div>
    </section>
  );
}
