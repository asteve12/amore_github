import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: string;
  quote: string;
  author: string;
  location: string;
  rotation: string;
}

const reviews: Review[] = [
  {
    id: "rev-1",
    quote:
      "The cherry charm brought my plain tote bag to life instantly! The packaging was so thoughtful too!",
    author: "Giulia M.",
    location: "Milan",
    rotation: "-rotate-2 hover:rotate-0",
  },
  {
    id: "rev-2",
    quote:
      "Customized my keychain using their tool online and it arrived looking even cuter in person. 10/10!",
    author: "Sarah K.",
    location: "Brooklyn",
    rotation: "rotate-3 hover:rotate-0",
  },
  {
    id: "rev-3",
    quote:
      "The ceramic trinket dish holds my everyday rings perfectly. Truly handcrafted with so much amore.",
    author: "Chloe T.",
    location: "London",
    rotation: "-rotate-1 hover:rotate-0",
  },
];

export default function LoveNotes() {
  return (
    <section className="w-full bg-cream-dark/30 py-16 px-6 lg:px-12 border-t border-warm-black/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-amore-red uppercase">
            FROM OUR COMMUNITY
          </span>
          <h2 className="font-display text-3xl font-black text-warm-black uppercase tracking-tight mt-1">
            LOVE NOTES ♡
          </h2>
        </div>

        {/* Polaroid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`bg-white p-4 pt-6 rounded-sm shadow-xl border border-warm-black/10 relative transform transition-transform duration-300 ${rev.rotation}`}
            >
              <div className="polaroid-tape -top-3 left-1/2 -translate-x-1/2" />
              <div className="flex items-center space-x-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-hand text-xl text-warm-black leading-snug mb-4">
                &ldquo;{rev.quote}&rdquo;
              </p>
              <div className="border-t border-warm-black/10 pt-3 flex justify-between items-center text-xs font-sans">
                <span className="font-bold text-warm-black">
                  — {rev.author} ({rev.location})
                </span>
                <span className="text-warm-black/50">Verified Buyer</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
