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

export interface Photo {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export const photos: Photo[] = [
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
