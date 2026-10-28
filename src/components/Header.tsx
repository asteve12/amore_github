"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { totalCount, toggleCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full px-6 lg:px-12 py-4 flex items-center justify-between border-b border-warm-black/10 relative z-40 bg-cream/90 backdrop-blur-md sticky top-0">
      {/* Brand Logo with Official Ciao Amore Star Mascot */}
      <Link href="#" className="group flex items-center space-x-2.5 focus:outline-none">
        <div className="relative w-10 h-10 flex-shrink-0 group-hover:scale-110 transition-transform">
          <Image
            src="/images/ciao-amore-logo.png"
            alt="Ciao Amore Studio Twin Stars Mascot"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-display font-extrabold text-2xl lg:text-3xl text-warm-black tracking-tight leading-none group-hover:text-amore-red transition-colors duration-300">
            CIAO AMORE
          </span>
          <span className="font-hand text-lg text-amore-red -mt-1 font-bold tracking-widest group-hover:translate-x-1 transition-transform">
            s t u d i o ♡
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-xs font-bold tracking-widest text-warm-black uppercase">
        <a
          href="#shop"
          className="hover:text-amore-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amore-red hover:after:w-full after:transition-all"
        >
          Shop
        </a>
        <a
          href="#story"
          className="hover:text-amore-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amore-red hover:after:w-full after:transition-all"
        >
          Our Story
        </a>
        <a
          href="#journal"
          className="hover:text-amore-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amore-red hover:after:w-full after:transition-all"
        >
          Craft Journal
        </a>
        <a
          href="#footer"
          className="hover:text-amore-red transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amore-red hover:after:w-full after:transition-all"
        >
          Contact
        </a>
      </nav>

      {/* Right Header Action Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Toggle */}
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className="p-2 text-warm-black hover:text-amore-red transition-colors relative rounded-full hover:bg-warm-black/5 cursor-pointer"
          aria-label="Toggle Search"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Bag Icon Button with Counter Badge */}
        <button
          onClick={toggleCart}
          className="p-2 text-warm-black hover:text-amore-red transition-colors relative group rounded-full hover:bg-warm-black/5 cursor-pointer"
          aria-label="Shopping Bag"
        >
          <ShoppingBag className="w-5 h-5 stroke-[2]" />
          <span className="absolute -top-1 -right-1 bg-amore-red text-white font-display text-[11px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform">
            {totalCount}
          </span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-warm-black focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Interactive Expandable Search Bar Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-md border-b border-warm-black/10 p-4 shadow-lg flex items-center justify-center transition-all animate-in fade-in slide-in-from-top-2">
          <div className="max-w-xl w-full flex items-center bg-white rounded-full border border-warm-black/20 px-4 py-2 shadow-inner">
            <Search className="w-5 h-5 text-warm-black/50 mr-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ceramic mugs, cherry charms, keychains..."
              className="w-full text-sm font-sans text-warm-black focus:outline-none bg-transparent"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-warm-black/40 hover:text-warm-black mr-2 cursor-pointer"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs font-bold text-warm-black/60 hover:text-amore-red ml-2 cursor-pointer"
            >
              CANCEL
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-warm-black/10 p-6 shadow-xl flex flex-col space-y-4 text-sm font-bold tracking-widest uppercase">
          <a
            href="#shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-amore-red transition-colors"
          >
            Shop
          </a>
          <a
            href="#story"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-amore-red transition-colors"
          >
            Our Story
          </a>
          <a
            href="#journal"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-amore-red transition-colors"
          >
            Craft Journal
          </a>
          <a
            href="#footer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-amore-red transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
