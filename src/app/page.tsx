"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Hero from "@/components/Hero";
import ScrollingTicker from "@/components/ScrollingTicker";
import CategoryShowcase from "@/components/CategoryShowcase";
import CraftProcess from "@/components/CraftProcess";
import ProductGrid from "@/components/ProductGrid";
import LoveNotes from "@/components/LoveNotes";
import StudioMoments from "@/components/StudioMoments";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col justify-between relative selection:bg-amore-red selection:text-white">
        {/* Top Promotional Bar */}
        <AnnouncementBar />

        {/* Global Navigation Bar & Search */}
        <Header />

        {/* Slide-over Interactive Cart Drawer */}
        <CartDrawer />

        {/* Hero Section with Auto-Scrolling Authentic Product Showcase */}
        <Hero />

        {/* Continuous Auto-Scrolling Marquee Ticker */}
        <ScrollingTicker />

        {/* "Made with Love" Category Showcase Carousel */}
        <CategoryShowcase />

        {/* Small Batch Craft & Kiln Process Timeline */}
        <CraftProcess />

        {/* Handpicked Favorites, Bestsellers & New Drops */}
        <ProductGrid />

        {/* Community Love Notes Polaroid Reviews */}
        <LoveNotes />

        {/* Instagram Craft Journal Moments */}
        <StudioMoments />

        {/* Newsletter Subscription with Confetti Burst */}
        <Newsletter />

        {/* Studio Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
}
