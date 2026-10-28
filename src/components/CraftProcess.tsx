import React from "react";
import { PencilRuler, Flame, Gift } from "lucide-react";

interface StepDetail {
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const steps: StepDetail[] = [
  {
    number: "01",
    title: "DESIGNED BY HAND",
    shortDesc:
      "Every charm, ceramic dish, and bag design originates from a hand-drawn sketch in our NYC studio notebook before moving to clay moulding.",
    icon: <PencilRuler className="w-5 h-5" />,
    iconBg: "bg-amore-red/10",
    iconColor: "text-amore-red",
  },
  {
    number: "02",
    title: "SCULPTED & GLAZED",
    shortDesc:
      "Each ceramic piece is individually sculpted from stoneware clay, air-dried for 48 hours, hand-painted with underglazes, and kiln-fired twice.",
    icon: <Flame className="w-5 h-5" />,
    iconBg: "bg-pastel-yellow/40",
    iconColor: "text-warm-black",
  },
  {
    number: "03",
    title: "PACKAGED WITH LOVE",
    shortDesc:
      "Wrapped in tissue, sealed with gingham tape, and finished with a handwritten note & studio sticker pack before heading to you.",
    icon: <Gift className="w-5 h-5" />,
    iconBg: "bg-gingham-blue/15",
    iconColor: "text-gingham-blue",
  },
];

export default function CraftProcess() {
  return (
    <section
      className="w-full bg-cream-dark/40 py-16 px-6 lg:px-12 border-y border-warm-black/10 relative z-20"
      id="story"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-amore-red uppercase">
            BEHIND THE STUDIO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-warm-black uppercase tracking-tight mt-1">
            CRAFTED IN SMALL BATCHES WITH HEART
          </h2>
          <p className="font-hand text-2xl text-warm-black/80 mt-2 font-bold">
            &ldquo;No two pieces are ever identical, and that is where the magic lives.&rdquo;
          </p>
        </div>

        {/* 3-Step Process Cards with Uniform, Non-Highlighted Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-cream p-7 rounded-2xl border border-warm-black/10 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-3xl font-black text-warm-black/40">
                  {step.number}
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step.iconBg} ${step.iconColor}`}
                >
                  {step.icon}
                </div>
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-warm-black mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-charcoal leading-relaxed font-sans">{step.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
