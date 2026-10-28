"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface Product {
  id: string;
  name: string;
  price: number;
  category: "charms" | "ceramics" | "bags";
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
  image: string;
  fitMode?: "contain" | "cover";
}

const products: Product[] = [
  {
    id: "prod-1",
    name: "Signature Gingham Bag + Charms",
    price: 42,
    category: "bags",
    rating: 5,
    reviews: 64,
    badge: "BESTSELLER",
    badgeColor: "bg-amore-red text-white",
    image: "/images/hero-gingham-bag.png",
    fitMode: "contain",
  },
  {
    id: "prod-2",
    name: "Ceramic Tomato Tableware Dish",
    price: 32,
    category: "ceramics",
    rating: 5,
    reviews: 38,
    badge: "STUDIO DROP",
    badgeColor: "bg-amore-red text-white",
    image: "/images/strawberry-scan.png",
    fitMode: "contain",
  },
  {
    id: "prod-3",
    name: "Handcrafted Charms Collection",
    price: 24,
    category: "charms",
    rating: 5,
    reviews: 52,
    badge: "NYC FAVORITE",
    badgeColor: "bg-pastel-yellow text-warm-black border border-warm-black/10",
    image: "/images/charms-scan.png",
    fitMode: "contain",
  },
  {
    id: "prod-4",
    name: "Quilted Star Artisan Tote",
    price: 38,
    category: "bags",
    rating: 4.9,
    reviews: 29,
    badge: "LIMITED",
    badgeColor: "bg-gingham-blue text-white",
    image: "/images/bags-scan.png",
    fitMode: "contain",
  },
  {
    id: "prod-5",
    name: "Fish & Puppy Ceramic Accessory",
    price: 22,
    category: "charms",
    rating: 5,
    reviews: 31,
    badge: "HANDMADE",
    badgeColor: "bg-clay-pink text-white",
    image: "/images/accessories-scan.png",
    fitMode: "contain",
  },
  {
    id: "prod-6",
    name: "Hand-Painted Heart Mug",
    price: 34,
    category: "ceramics",
    rating: 4.9,
    reviews: 45,
    badge: "POPULAR",
    badgeColor: "bg-warm-black text-white",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop",
    fitMode: "cover",
  },
];

export default function ProductGrid() {
  const { addItem } = useCart();
  const [activeFilter, setActiveFilter] = useState<"all" | "charms" | "ceramics" | "bags">("all");

  const filteredProducts =
    activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full px-6 lg:px-12 py-16 max-w-7xl mx-auto relative z-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-amore-red uppercase">
            OUR HANDPICKED FAVORITES
          </span>
          <h2 className="font-display text-3xl font-black text-warm-black uppercase tracking-tight">
            BESTSELLERS & NEW DROPS
          </h2>
        </div>

        {/* Product Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {(["all", "charms", "ceramics", "bags"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer ${
                activeFilter === filter
                  ? "bg-warm-black text-cream"
                  : "bg-cream-dark text-warm-black hover:bg-warm-black hover:text-cream"
              }`}
            >
              {filter === "all" ? "ALL FINDS" : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card group bg-white p-3.5 rounded-2xl border border-warm-black/10 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-cream/70 mb-3 flex items-center justify-center p-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`${
                    product.fitMode === "contain"
                      ? "object-contain p-2 card-img-zoom"
                      : "object-cover card-img-zoom"
                  }`}
                  unoptimized
                />
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-sm ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-warm-black/20"
                    }`}
                  />
                ))}
                <span className="text-[10px] text-warm-black/60 font-bold ml-1">
                  ({product.reviews})
                </span>
              </div>

              <h3 className="font-display text-sm font-bold uppercase text-warm-black truncate">
                {product.name}
              </h3>
            </div>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-warm-black/10">
              <span className="font-hand text-lg font-bold text-amore-red">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    details: "Small-batch NYC Studio Piece",
                  })
                }
                className="bg-warm-black text-cream p-2 rounded-full hover:bg-amore-red transition-colors spring-wobble cursor-pointer"
                aria-label={`Add ${product.name} to Bag`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
