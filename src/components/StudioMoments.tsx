import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

const photos = [
  {
    id: "photo-1",
    src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    alt: "Studio pottery workbench",
  },
  {
    id: "photo-2",
    src: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop",
    alt: "Handmade cherry charms unboxing",
  },
  {
    id: "photo-3",
    src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop",
    alt: "Glazed ceramic mugs fresh from kiln",
  },
  {
    id: "photo-4",
    src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    alt: "Gingham packaged keychains ready to ship",
  },
];

export default function StudioMoments() {
  return (
    <section className="w-full px-6 lg:px-12 py-16 max-w-7xl mx-auto relative z-20" id="journal">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-amore-red uppercase">
            @CIAOAMORESTUDIO
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-warm-black uppercase tracking-tight">
            STUDIO MOMENTS
          </h2>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-warm-black hover:text-amore-red uppercase tracking-wider flex items-center space-x-1 transition-colors"
        >
          <span>FOLLOW ON INSTAGRAM</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-cream border border-warm-black/10 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover card-img-zoom"
              unoptimized
            />
            <div className="absolute inset-0 bg-warm-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-cream">
              <InstagramIcon className="w-8 h-8 transform scale-75 group-hover:scale-100 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
