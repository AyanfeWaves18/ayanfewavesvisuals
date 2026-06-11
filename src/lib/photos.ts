import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";
import photo8 from "@/assets/photo-8.jpg";
import ayanfeSunset from "@/assets/ayanfe-sunset.png.asset.json";
import ayanfePortraitBack from "@/assets/ayanfe-portrait-back.png.asset.json";
import ayanfePortraitSmile from "@/assets/ayanfe-portrait-smile.png.asset.json";
import ayanfeWhiteShirt from "@/assets/ayanfe-white-shirt.png.asset.json";
import ayanfeLavenderDress from "@/assets/ayanfe-lavender-dress.png.asset.json";
import ayanfeDuskAvenue from "@/assets/ayanfe-dusk-avenue.png.asset.json";

export interface Photo {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const photos: Photo[] = [
  {
    src: ayanfeDuskAvenue.url,
    alt: "Tree-lined avenue silhouetted against a dusk sky with street lamp",
    title: "Dusk Avenue",
    category: "Nature",
  },
  {
    src: ayanfeLavenderDress.url,
    title: "Lavender Poise",
    alt: "Portrait of a woman in a flowing lavender dress on a green lawn",
    category: "Portrait",
  },
  {
    src: ayanfeWhiteShirt.url,
    title: "White Shirt Story",
    alt: "Portrait of a man in a white shirt and patterned trousers outdoors",
    category: "Portrait",
  },
  {
    src: ayanfePortraitSmile.url,
    alt: "Smiling portrait in denim shirt — Ayanfe Visuals",
    title: "Joy in Denim",
    category: "Portrait",
  },
  {
    src: ayanfePortraitBack.url,
    alt: "Portrait from behind in black dress with white collar and cap",
    title: "Quiet Silhouette",
    category: "Portrait",
  },
  {
    src: ayanfeSunset.url,
    alt: "Sunset on a tree-lined road under a blue and gold sky",
    title: "Evening Avenue",
    category: "Landscape",
  },
  {
    src: photo1,
    alt: "Portrait of a woman in golden hour light",
    title: "Golden Hour Grace",
    category: "Portrait",
  },
  {
    src: photo2,
    alt: "Coastal landscape at twilight",
    title: "Twilight Shores",
    category: "Landscape",
  },
  {
    src: photo3,
    alt: "Vibrant Nigerian market scene",
    title: "Market Stories",
    category: "Documentary",
  },
  {
    src: photo4,
    alt: "Minimalist architecture with geometric shadows",
    title: "Concrete Dreams",
    category: "Architecture",
  },
  {
    src: photo5,
    alt: "Fashion editorial with deep blue silk gown",
    title: "Midnight Silk",
    category: "Fashion",
  },
  {
    src: photo6,
    alt: "Macro photography of rain droplets on leaves",
    title: "After the Rain",
    category: "Nature",
  },
  {
    src: photo8,
    alt: "Urban skyline at blue hour with light trails",
    title: "City of Light",
    category: "Urban",
  },
];
