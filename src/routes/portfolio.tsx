import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MasonryGrid } from "@/components/MasonryGrid";
import { photos } from "@/lib/photos";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ayanfe Waves Visuals" },
      { name: "description", content: "Browse the complete portfolio of Ayanfe Waves Visuals. Portraits, landscapes, weddings, editorial, and more." },
      { property: "og:title", content: "Portfolio — Ayanfe Waves Visuals" },
      { property: "og:description", content: "Browse the complete portfolio of Ayanfe Waves Visuals." },
      { property: "og:url", content: "https://ayanfewavesvisuals.lovable.app/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://ayanfewavesvisuals.lovable.app/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Portfolio — Ayanfe Waves Visuals",
          url: "https://ayanfewavesvisuals.lovable.app/portfolio",
          about: "Photography portfolio featuring portraits, landscapes, documentary, architecture, fashion, nature, and urban work.",
        }),
      },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Portrait", "Landscape", "Documentary", "Architecture", "Fashion", "Nature", "Urban"];

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#818cf8]">
          Selected Work
        </p>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">
          Portfolio
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A curated collection of moments captured across the world.
        </p>
      </div>

      {/* Category filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#4f46e5] text-white"
                : "border border-[rgba(255,255,255,0.12)] bg-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <MasonryGrid photos={filteredPhotos} />
    </section>
  );
}
