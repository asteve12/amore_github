"use client";

import React, { useState } from "react";
import { Plus, RotateCcw, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface CharmOption {
  id: string;
  name: string;
  emoji: string;
  price: number;
}

const availableCharms: CharmOption[] = [
  { id: "cherry", name: "Cherry", emoji: "🍒", price: 6 },
  { id: "daisy", name: "Daisy", emoji: "🌼", price: 5 },
  { id: "star", name: "Puffy Star", emoji: "⭐", price: 4 },
  { id: "heart", name: "Amore Heart", emoji: "💖", price: 5 },
  { id: "bow", name: "Ribbon Bow", emoji: "🎀", price: 5 },
  { id: "alphabet", name: "Letter Bead", emoji: "🔤", price: 3 },
  { id: "strawberry", name: "Strawberry", emoji: "🍓", price: 6 },
  { id: "mushroom", name: "Artisan Shroom", emoji: "🍄", price: 4 },
];

export default function CharmBuilder() {
  const { addItem } = useCart();
  const [attachedCharms, setAttachedCharms] = useState<
    Array<{ instanceId: number; name: string; emoji: string; price: number }>
  >([
    { instanceId: 1, name: "Cherry", emoji: "🍒", price: 6 },
    { instanceId: 2, name: "Puffy Star", emoji: "⭐", price: 4 },
    { instanceId: 3, name: "Amore Heart", emoji: "💖", price: 5 },
  ]);

  const basePrice = 12; // Base brass clip and split ring
  const charmsTotal = attachedCharms.reduce((acc, c) => acc + c.price, 0);
  const totalPrice = basePrice + charmsTotal;

  const addCharm = (charm: CharmOption) => {
    setAttachedCharms((prev) => [
      ...prev,
      {
        instanceId: Date.now() + Math.random(),
        name: charm.name,
        emoji: charm.emoji,
        price: charm.price,
      },
    ]);
  };

  const removeCharm = (instanceId: number) => {
    setAttachedCharms((prev) => prev.filter((c) => c.instanceId !== instanceId));
  };

  const handleReset = () => {
    setAttachedCharms([]);
  };

  const handleAddToCart = () => {
    const charmNames = attachedCharms.map((c) => c.name).join(" + ");
    addItem({
      id: `custom-keychain-${Date.now()}`,
      name: `Custom Keychain (${attachedCharms.length} Charms)`,
      price: totalPrice,
      details: charmNames ? `Charms: ${charmNames}` : "Base clip only",
    });
  };

  return (
    <section className="w-full px-6 lg:px-12 py-16 max-w-7xl mx-auto relative z-20" id="customizer">
      <div className="bg-cream border-2 border-warm-black/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="bg-amore-red text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
            STUDIO MINI TOOL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-warm-black uppercase tracking-tight mt-2">
            BUILD YOUR OWN CHARM KEYCHAIN
          </h2>
          <p className="font-hand text-lg text-warm-black/80 mt-1">
            Tap charms below to attach them to your clip! Tap any attached charm to remove it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Visual Keychain Preview Render */}
          <div className="lg:col-span-6 bg-cream-dark/60 rounded-2xl p-8 border border-warm-black/10 flex flex-col items-center justify-center min-h-[380px] relative">
            {/* Gold Keychain Ring & Chain */}
            <div className="flex flex-col items-center relative z-10">
              <div className="w-14 h-14 rounded-full border-4 border-amber-500 shadow-md flex items-center justify-center bg-cream/50 relative">
                <div className="w-10 h-10 rounded-full border-2 border-amber-400" />
              </div>
              <div className="w-2 h-4 bg-amber-400 border border-amber-600 rounded-full -mt-1 shadow-sm" />
              <div className="w-2 h-4 bg-amber-400 border border-amber-600 rounded-full -mt-1 shadow-sm" />
            </div>

            {/* Live Attached Charms List Container */}
            <div className="flex flex-wrap justify-center gap-2 mt-3 max-w-xs min-h-[120px] p-4 bg-cream/80 backdrop-blur-sm rounded-2xl border border-dashed border-warm-black/25 w-full items-center">
              {attachedCharms.length === 0 ? (
                <p className="text-xs text-warm-black/50 italic text-center">
                  Keychain is bare! Tap charms from the palette below to customize.
                </p>
              ) : (
                attachedCharms.map((charm) => (
                  <button
                    key={charm.instanceId}
                    onClick={() => removeCharm(charm.instanceId)}
                    className="group bg-white p-2 rounded-xl shadow-sm border border-warm-black/15 flex items-center space-x-1.5 spring-wobble hover:border-amore-red hover:bg-amore-red/5 cursor-pointer"
                    title="Click to remove"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {charm.emoji}
                    </span>
                    <span className="text-[11px] font-bold text-warm-black">{charm.name}</span>
                    <span className="text-[10px] text-warm-black/40 group-hover:text-amore-red font-bold">
                      ×
                    </span>
                  </button>
                ))
              )}
            </div>

            {/* Price & Add Button Bar */}
            <div className="mt-6 w-full flex items-center justify-between border-t border-warm-black/10 pt-4">
              <div>
                <span className="text-[10px] font-bold text-warm-black/60 uppercase">
                  TOTAL PRICE:
                </span>
                <p className="font-display text-2xl font-black text-amore-red">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-amore-red text-cream font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-amore-red-hover shadow-lg transition-all flex items-center space-x-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>ADD CUSTOM KEYCHAIN</span>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Available Charm Selector Palette */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-warm-black flex items-center space-x-2">
                <span>SELECT CHARMS TO ATTACH:</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </h3>
              <button
                onClick={handleReset}
                className="text-xs font-bold text-amore-red hover:underline flex items-center space-x-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {availableCharms.map((charm) => (
                <button
                  key={charm.id}
                  onClick={() => addCharm(charm)}
                  className="bg-white p-3 rounded-xl border border-warm-black/10 flex flex-col items-center justify-center text-center hover:border-amore-red hover:shadow-md transition-all shadow-sm group"
                >
                  <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">
                    {charm.emoji}
                  </span>
                  <p className="font-display text-xs font-bold text-warm-black">{charm.name}</p>
                  <p className="text-[11px] text-amore-red font-bold font-hand">
                    +${charm.price.toFixed(2)}
                  </p>
                </button>
              ))}
            </div>

            <div className="bg-pastel-yellow/30 p-3 rounded-xl border border-warm-black/10 text-xs font-sans text-warm-black/80 flex items-center justify-between">
              <span>Includes Gold Brass Clasp & Heavy Split Ring ($12.00 base value)</span>
              <span className="font-hand font-bold text-sm text-amore-red">100% Lead-Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
