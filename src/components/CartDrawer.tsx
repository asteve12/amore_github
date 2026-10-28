"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, X, Trash2, ArrowRight, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckedOut(true);
    setTimeout(() => {
      setIsCheckedOut(false);
      closeCart();
    }, 2500);
  };

  return (
    <div
      className={`fixed inset-0 bg-warm-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCart();
      }}
    >
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-warm-black/10">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-amore-red" />
            <h3 className="font-display text-xl font-bold text-warm-black uppercase">
              YOUR SHOPPING BAG
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="p-1 hover:text-amore-red transition-colors"
            aria-label="Close Shopping Bag"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Cart Items Container */}
        <div className="flex-grow overflow-y-auto py-4 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-warm-black/60">
              <ShoppingBag className="w-12 h-12 stroke-[1.5] text-warm-black/30 mb-3" />
              <p className="font-display font-bold text-base uppercase text-warm-black">
                Your bag is empty
              </p>
              <p className="font-hand text-lg mt-1 text-warm-black/70">
                Pick something made with amore!
              </p>
              <button
                onClick={closeCart}
                className="mt-4 bg-amore-red text-cream px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 bg-white/70 p-3 rounded-xl border border-warm-black/10 transition-all hover:bg-white"
              >
                {item.image ? (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-cream">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-lg bg-pastel-yellow/50 flex items-center justify-center text-2xl flex-shrink-0 border border-warm-black/10">
                    ✨
                  </div>
                )}

                <div className="flex-grow min-w-0">
                  <h4 className="font-display text-sm font-bold text-warm-black uppercase truncate">
                    {item.name}
                  </h4>
                  {item.details && (
                    <p className="text-[10px] text-warm-black/60 truncate">{item.details}</p>
                  )}
                  <p className="font-hand text-sm text-amore-red font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-5 h-5 bg-warm-black/10 rounded flex items-center justify-center font-bold text-xs hover:bg-warm-black/20"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-5 h-5 bg-warm-black/10 rounded flex items-center justify-center font-bold text-xs hover:bg-warm-black/20"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-warm-black/40 hover:text-amore-red transition-colors p-1"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Checkout */}
        {items.length > 0 && (
          <div className="pt-4 border-t border-warm-black/10 space-y-3">
            <div className="flex justify-between font-display text-lg font-bold text-warm-black">
              <span>SUBTOTAL</span>
              <span className="text-amore-red">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-[11px] text-warm-black/60 italic font-sans">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              onClick={handleCheckout}
              disabled={isCheckedOut}
              className="w-full bg-amore-red text-cream py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-amore-red-hover shadow-lg transition-colors flex items-center justify-center space-x-2 disabled:bg-emerald-600"
            >
              {isCheckedOut ? (
                <>
                  <CheckCircle2 className="w-4 h-4 animate-bounce" />
                  <span>PREPARING WITH AMORE...</span>
                </>
              ) : (
                <>
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
