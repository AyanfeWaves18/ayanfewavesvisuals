interface Photo {
  src: string;
  alt: string;
  title: string;
  category: string;
}

interface MasonryGridProps {
  photos: Photo[];
}

export function MasonryGrid({ photos }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg bg-[#141432]"
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
        </div>
      ))}
    </div>
  );
}
