"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Fire celebratory confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#D93829", "#F9E498", "#E8A798", "#ffffff"],
      });
    } catch {
      // Fallback if canvas-confetti is not loaded
    }

    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="w-full px-6 lg:px-12 py-12 max-w-7xl mx-auto relative z-20">
      <div className="bg-amore-red text-cream rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-lg z-10">
          <span className="bg-pastel-yellow text-warm-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            SECRET DROPS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight mt-3 text-white">
            JOIN THE AMORE CLUB ♡
          </h2>
          <p className="text-sm text-cream/90 font-sans mt-2 leading-relaxed">
            Subscribe for 10% off your first handmade order, private charm drops, and studio
            behind-the-scenes.
          </p>
        </div>

        {/* Interactive Email Form */}
        <div className="w-full max-w-md z-10 space-y-3">
          <form onSubmit={handleSubmit} className="w-full space-y-3">
            <div className="flex items-center bg-cream/10 backdrop-blur-md rounded-full border border-white/20 p-1.5 focus-within:border-white transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-transparent text-cream placeholder-cream/60 px-4 py-2 text-sm font-sans w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-cream text-warm-black font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-pastel-yellow transition-colors whitespace-nowrap shadow-md cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>

          {isSubscribed && (
            <div className="text-xs font-hand text-pastel-yellow text-center font-bold text-lg animate-in fade-in slide-in-from-bottom-1">
              ✨ Welcome to the Amore Club! Use code <span className="underline">AMORE10</span> for
              10% off!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
