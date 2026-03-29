"use client";

import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative rounded-full border border-black px-5 py-2 text-sm font-semibold transition hover:bg-black hover:text-white"
    >
      Cart
      {totalItems > 0 && (
        <span className="ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-2 text-xs text-white">
          {totalItems}
        </span>
      )}
    </button>
  );
}