import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="bg-amore-red text-cream text-xs font-medium tracking-widest uppercase py-2 px-4 text-center flex items-center justify-center space-x-2 relative z-50">
      <span className="inline-block w-2 h-2 rounded-full bg-pastel-yellow animate-ping" />
      <span>Worldwide Shipping Available • Free US Shipping over $60</span>
      <span className="inline-block w-2 h-2 rounded-full bg-pastel-yellow animate-ping" />
    </div>
  );
}
