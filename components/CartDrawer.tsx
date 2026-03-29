"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Close
          </button>
        </div>

        <div className="flex h-[calc(100%-80px)] flex-col">
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="rounded-2xl border border-black/10 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={`/product/${item.slug}`}
                          className="text-lg font-semibold hover:underline"
                          onClick={closeCart}
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-gray-600">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.slug)}
                        className="text-sm text-gray-400 hover:text-black"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-md border">
                        <button
                          onClick={() => decreaseQty(item.slug)}
                          className="h-10 w-10 hover:bg-black hover:text-white"
                        >
                          -
                        </button>
                        <div className="flex h-10 w-10 items-center justify-center border-x">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => increaseQty(item.slug)}
                          className="h-10 w-10 hover:bg-black hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <p className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 underline underline-offset-4"
                >
                  Clear cart
                </button>
              </div>
            )}
          </div>

          <div className="border-t px-6 py-5">
            <div className="mb-4 flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full rounded-full bg-black px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-85">
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}