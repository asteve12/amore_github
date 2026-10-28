import React from "react";

export default function ScrollingTicker() {
  const items = [
    "HANDMADE IN NEW YORK CITY ♡",
    "100% ARTISAN STONEWARE CERAMICS",
    "SMALL BATCH RELEASES",
    "ICONIC GINGHAM CHARM TOTES",
    "CRAFTED WITH AMORE",
    "HAND-SCULPTED & TWICE KILN-FIRED",
    "CIAO AMORE STUDIO NYC",
  ];

  return (
    <div className="w-full bg-warm-black text-cream py-3 overflow-hidden border-y border-warm-black/20 relative z-20 select-none">
      <div className="animate-scroll-marquee flex items-center space-x-8">
        {/* First repetition */}
        {items.map((item, idx) => (
          <div key={`orig-${idx}`} className="flex items-center space-x-8 flex-shrink-0">
            <span className="text-xs font-bold tracking-widest uppercase font-sans text-cream/90">
              {item}
            </span>
            <span className="text-amore-red text-base font-hand font-bold">✦</span>
          </div>
        ))}
        {/* Duplicate repetition for seamless infinite loop */}
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="flex items-center space-x-8 flex-shrink-0">
            <span className="text-xs font-bold tracking-widest uppercase font-sans text-cream/90">
              {item}
            </span>
            <span className="text-amore-red text-base font-hand font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
