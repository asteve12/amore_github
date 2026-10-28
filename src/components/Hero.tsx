"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Heart } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  category: string;
  badge: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/images/hero-gingham-bag.png",
    title: "Signature Gingham Tote + Charms",
    category: "Handmade Totes & Bags",
    badge: "Bestseller",
  },
  {
    id: "slide-2",
    image: "/images/charms-scan.png",
    title: "Handcrafted Ceramic Charms Board",
    category: "Artisan Bag Charms",
    badge: "NYC Studio Exclusive",
  },
  {
    id: "slide-3",
    image: "/images/strawberry-scan.png",
    title: "Hand-Painted Tomato Tableware Dish",
    category: "Ceramic Tableware",
    badge: "Kiln Fired",
  },
  {
    id: "slide-4",
    image: "/images/bags-scan.png",
    title: "Quilted Star Pattern Tote Bag",
    category: "Handmade Bags",
    badge: "Small Batch",
  },
  {
    id: "slide-5",
    image: "/images/accessories-scan.png",
    title: "Ceramic Fish & Puppy Accessory",
    category: "Artisan Accessories",
    badge: "Handmade",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll through hero images every 3.2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeSlide = heroSlides[currentIndex];

  return (
    <main className="flex-grow flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-20 max-w-7xl mx-auto w-full relative z-10">
      {/* Background Grid Stitch Decorators */}
      <div className="hidden lg:block absolute left-48 top-6 bottom-6 w-px border-r stitch-border pointer-events-none opacity-40" />
      <div className="hidden lg:block absolute right-12 top-24 left-12 h-px border-b stitch-border pointer-events-none opacity-30" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Hero Left Text Column */}
        <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-4 relative z-20">
          <div className="inline-flex items-center space-x-2 mb-4 bg-amore-red/10 px-3.5 py-1.5 rounded-full border border-amore-red/20 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-amore-red animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-amore-red uppercase">
              HANDMADE IN NEW YORK CITY ♡
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-6xl font-black text-warm-black leading-[0.95] tracking-tight uppercase mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            LITTLE THINGS.
            <br />
            <span className="text-warm-black">MADE WITH</span>
            <br />
            <span className="text-amore-red inline-block relative">
              AMORE.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-amore-red/40"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q 50 0, 100 15"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-charcoal text-base sm:text-lg font-normal leading-relaxed max-w-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-800">
            Playful handmade ceramics, iconic gingham bags, and one-of-a-kind charms crafted with
            love in NYC. Bringing joyful artisan charm to the everyday.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-900">
            <a
              href="#shop"
              className="inline-flex items-center space-x-3 bg-amore-red text-cream px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-amore-red-hover shadow-lg shadow-amore-red/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>EXPLORE THE SHOP</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center space-x-2 text-xs font-hand text-warm-black/80 font-bold italic">
              <Heart className="w-4 h-4 text-amore-red fill-amore-red" />
              <span>100% Hand-sculpted in NYC</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-warm-black/10 text-xs font-sans text-warm-black/70">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold">Original NYC Designs</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amore-red" />
              <span className="font-semibold">Small Batch Releases</span>
            </div>
          </div>
        </div>

        {/* Hero Right: Auto-Scrolling Authentic Product Showcase */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center">
          {/* Main Visual Frame Container */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full max-w-xl aspect-[4/3] lg:aspect-[1.15/1] group cursor-pointer"
          >
            {/* Outer Decorative Paper Mat */}
            <div className="absolute inset-0 bg-white/80 rounded-3xl border-2 border-warm-black/10 shadow-2xl transform rotate-1 transition-transform group-hover:rotate-0 duration-500" />
            <div className="absolute inset-2 bg-cream-dark/40 rounded-2xl border border-dashed border-warm-black/20" />

            {/* Washi Tape Strip on Top Edge */}
            <div className="polaroid-tape -top-3 left-1/2 -translate-x-1/2 rotate-1" />

            {/* Auto-Rotating Image Display Box */}
            <div className="relative w-full h-full p-6 flex items-center justify-center overflow-hidden rounded-2xl z-10">
              <div
                key={activeSlide.id}
                className="relative w-full h-full flex items-center justify-center animate-in fade-in zoom-in-95 duration-500"
              >
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  className="object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Studio Tag Overlay for Active Category */}
                <div className="absolute bottom-4 left-4 sm:left-6 bg-cream/95 backdrop-blur-md px-4 py-2 rounded-full border border-warm-black/15 shadow-lg flex items-center space-x-2 transform -rotate-1 max-w-[90%]">
                  <span className="w-2 h-2 rounded-full bg-amore-red animate-ping flex-shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                    <span className="text-[10px] font-bold tracking-wider text-amore-red uppercase">
                      {activeSlide.category} •
                    </span>
                    <span className="font-hand text-base font-bold text-warm-black truncate">
                      {activeSlide.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge in Top Right Corner */}
              <div className="absolute top-4 right-4 bg-amore-red text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md transform rotate-2 z-20">
                {activeSlide.badge}
              </div>
            </div>

            {/* Auto-Scroll Navigation Dots */}
            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-30">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-7 bg-amore-red"
                      : "w-2 bg-warm-black/25 hover:bg-warm-black/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
