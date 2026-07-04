import { Download, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Photo {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface MasonryGridProps {
  photos: Photo[];
}

function filenameFor(photo: Photo) {
  const slug = photo.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const ext = (photo.src.split(".").pop() || "jpg").split("?")[0];
  return `${slug || "ayanfe-waves"}.${ext}`;
}

export function MasonryGrid({ photos }: MasonryGridProps) {
  const [active, setActive] = useState<Photo | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(photo)}
            aria-label={`View ${photo.title}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-[#141432] text-left focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-xs font-medium uppercase tracking-wider text-[#818cf8]">
                {photo.category}
              </p>
              <p className="mt-1 font-heading text-lg text-foreground">
                {photo.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a1a]/95 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
            <a
              href={active.src}
              download={filenameFor(active)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Download ${active.title}`}
              className="rounded-full bg-[#141432]/80 p-2.5 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <Download className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="rounded-full bg-[#141432]/80 p-2.5 text-foreground transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <figure
            className="flex max-h-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-[#818cf8]">
                {active.category}
              </p>
              <p className="mt-1 font-heading text-lg text-foreground">{active.title}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
