"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const categories = [
  {
    id: "cat-1",
    tag: "HANDMADE CERAMIC ACCENTS",
    title: "SIGNATURE CHARMS",
    priceText: "From $18.00",
    basePrice: 18,
    badge: "Bestseller",
    badgeColor: "bg-amore-red text-white -rotate-3",
    image: "/images/charms-scan.png",
  },
  {
    id: "cat-2",
    tag: "HAND-PAINTED TABLEWARE",
    title: "CERAMIC DISHES",
    priceText: "From $32.00",
    basePrice: 32,
    badge: "Kiln Fired",
    badgeColor: "bg-pastel-yellow text-warm-black border border-warm-black/10 rotate-2",
    image: "/images/strawberry-scan.png",
  },
  {
    id: "cat-3",
    tag: "ICONIC GINGHAM COLLECTION",
    title: "CHARM TOTES & BAGS",
    priceText: "From $28.00",
    basePrice: 28,
    badge: "NYC Favorite",
    badgeColor: "bg-gingham-blue text-white border border-warm-black/10 -rotate-2",
    image: "/images/hero-gingham-bag.png",
  },
  {
    id: "cat-4",
    tag: "STUDIO FINDS & PINS",
    title: "ACCESSORIES",
    priceText: "From $22.00",
    basePrice: 22,
    badge: "Handmade",
    badgeColor: "bg-clay-pink text-white border border-warm-black/10 rotate-1",
    image: "/images/accessories-scan.png",
  },
];

export default function CategoryShowcase() {
  const { addItem } = useCart();
  const [currentPage, setCurrentPage] = useState(0);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleItems = currentPage === 0 ? categories.slice(0, 3) : categories.slice(1, 4);

  return (
    <section
      className="w-full px-6 lg:px-12 py-16 max-w-7xl mx-auto border-t border-warm-black/10 relative z-20"
      id="shop"
    >
      <div className="flex flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-widest text-warm-black uppercase">
            MADE WITH LOVE
          </h2>
          <div className="w-16 sm:w-24 h-px bg-warm-black/30" />
        </div>

        {/* Carousel Pagination Counter & Controls */}
        <div className="flex items-center space-x-4">
          <span className="text-xs font-mono text-warm-black/70 font-semibold tracking-wider">
            {currentPage === 0 ? "01 / 02" : "02 / 02"}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(0)}
              className={`w-9 h-9 rounded-full border border-warm-black/20 flex items-center justify-center transition-colors focus:outline-none cursor-pointer ${
                currentPage === 0
                  ? "bg-warm-black text-cream"
                  : "hover:bg-warm-black hover:text-cream text-warm-black"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-full border border-warm-black/20 flex items-center justify-center transition-colors focus:outline-none cursor-pointer ${
                currentPage === 1
                  ? "bg-warm-black text-cream"
                  : "hover:bg-warm-black hover:text-cream text-warm-black"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Grid Cards */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500">
          {visibleItems.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-white/70 rounded-2xl overflow-hidden border border-warm-black/10 p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm"
            >
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-cream/60 flex items-center justify-center p-3">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain card-img-zoom p-3"
                  unoptimized
                />
                <div
                  className={`absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md transform ${cat.badgeColor}`}
                >
                  {cat.badge}
                </div>
                <button
                  onClick={() => toggleFavorite(cat.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/90 backdrop-blur-md flex items-center justify-center text-warm-black hover:text-amore-red hover:bg-white transition-colors spring-wobble cursor-pointer shadow-sm"
                  aria-label="Save item"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites[cat.id] ? "text-amore-red fill-amore-red" : ""
                    }`}
                  />
                </button>
              </div>

              <div className="px-1 pb-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-amore-red tracking-wider uppercase">
                    {cat.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-warm-black uppercase tracking-tight group-hover:text-amore-red transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-warm-black/10 pt-3">
                  <span className="font-hand text-lg text-warm-black/80 font-bold">
                    {cat.priceText}
                  </span>
                  <button
                    onClick={() =>
                      addItem({
                        id: cat.id,
                        name: cat.title,
                        price: cat.basePrice,
                        image: cat.image,
                        details: cat.tag,
                      })
                    }
                    className="inline-flex items-center text-xs font-bold text-warm-black tracking-widest uppercase group-hover:translate-x-1 transition-transform hover:text-amore-red cursor-pointer"
                  >
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 text-amore-red" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
