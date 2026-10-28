"use client";

import React from "react";
import { Heart, Mail, ArrowUp } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="w-full bg-warm-black text-cream px-6 lg:px-12 py-16 border-t border-warm-black/20 mt-12 relative z-20"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <span className="font-display font-black text-2xl text-cream tracking-tight uppercase">
            CIAO AMORE STUDIO
          </span>
          <p className="text-xs text-cream/70 font-sans leading-relaxed max-w-sm">
            Handmade bag charms, artisan ceramics, and playful studio accessories crafted with love
            in small batches. Bringing joy to the everyday.
          </p>
          <div className="flex items-center space-x-3 text-cream/80 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-amore-red hover:border-amore-red transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="#shop"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-amore-red hover:border-amore-red transition-colors"
              aria-label="Favorites"
            >
              <Heart className="w-4 h-4" />
            </a>
            <a
              href="mailto:ciao@amorestudio.com"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-amore-red hover:border-amore-red transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-display text-sm font-bold text-cream uppercase tracking-wider">
            SHOP COLLECTIONS
          </h4>
          <ul className="space-y-2 text-xs font-sans text-cream/70">
            <li>
              <a href="#shop" className="hover:text-amore-red transition-colors">
                Bag Charms & Keychains
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-amore-red transition-colors">
                Ceramic Tableware
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-amore-red transition-colors">
                Handmade Totes & Bags
              </a>
            </li>
            <li>
              <a href="#shop" className="hover:text-amore-red transition-colors">
                Paper Goods & Stationery
              </a>
            </li>
          </ul>
        </div>

        {/* Studio Info */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-display text-sm font-bold text-cream uppercase tracking-wider">
            STUDIO & HELP
          </h4>
          <ul className="space-y-2 text-xs font-sans text-cream/70">
            <li>
              <a href="#" className="hover:text-amore-red transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amore-red transition-colors">
                Care Instructions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amore-red transition-colors">
                Wholesale Inquiries
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-amore-red transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Back To Top Button */}
        <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-amore-red hover:border-amore-red transition-colors group cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream/50 font-sans">
        <p>© 2026 CIAO AMORE STUDIO. All rights reserved. Handcrafted with Amore.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
