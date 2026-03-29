"use client";

import { useState } from "react";

export default function ProductPage() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "BPC-157 10 mg",
    price: 49.99,
    description:
      'The "Body Protection Compound" for tissue repair research.',
    details:
      "BPC-157 is presented here as a research use peptide with a premium product layout, quantity selector, and cart-ready structure.",
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">Home / Shop / {product.name}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-2 lg:px-10">
        <div className="flex items-center justify-center rounded-[28px] border border-gray-200 bg-[#f7f7f7] p-10">
          <div className="flex h-[480px] w-full items-center justify-center rounded-[24px] bg-white text-gray-400">
            Product Image
          </div>
        </div>

        <div className="max-w-2xl">
          <h1 className="text-5xl font-black tracking-[-0.04em]">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-semibold">${product.price}</p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="h-12 w-12 rounded border border-gray-300 text-xl"
            >
              -
            </button>

            <div className="flex h-12 min-w-[56px] items-center justify-center rounded border border-gray-300 px-4">
              {qty}
            </div>

            <button
              onClick={() => setQty(qty + 1)}
              className="h-12 w-12 rounded border border-gray-300 text-xl"
            >
              +
            </button>

            <span className="ml-3 text-sm text-gray-500">5+ in stock</span>
          </div>

          <button className="mt-8 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
            Add to bag
          </button>

          <div className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-base leading-8 text-gray-700">
              {product.details}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}