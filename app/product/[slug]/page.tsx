"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = {
  "bpc-157": {
    name: "BPC-157",
    subtitle: "Premium research peptide presentation",
    price: 120,
    stock: 12,
    description:
      "BPC-157 is presented here as a research use peptide in a clean, structured, and premium product layout.",
  },
  "tb-500": {
    name: "TB-500",
    subtitle: "Structured product detail layout",
    price: 120,
    stock: 10,
    description:
      "TB-500 is displayed with a refined product detail format intended for research-focused catalog browsing.",
  },
  "cjc-1295": {
    name: "CJC-1295",
    subtitle: "Clean scientific product presentation",
    price: 120,
    stock: 8,
    description:
      "CJC-1295 is shown in a modern and minimal product detail page.",
  },
  ipamorelin: {
    name: "Ipamorelin",
    subtitle: "Modern research catalog display",
    price: 120,
    stock: 15,
    description:
      "Ipamorelin is presented using a premium product detail structure.",
  },
} as const;

type ProductSlug = keyof typeof products;

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const [qty, setQty] = useState(1);

  const product = products[params.slug as ProductSlug];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Breadcrumb */}
      <div className="border-b border-black/10 px-6 py-6">
        <p className="text-sm text-gray-500">
          <Link href="/">Home</Link> /{" "}
          <Link href="/shop">Shop</Link> / {product.name}
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-2">
        {/* Image */}
        <div className="rounded-3xl bg-gray-100 p-6">
          <div className="flex h-[500px] items-center justify-center text-gray-400">
            Product Image
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-5xl font-black">{product.name}</h1>
          <h2 className="mt-4 text-2xl text-gray-700">
            {product.subtitle}
          </h2>

          <p className="mt-6 text-3xl font-semibold">
            ${product.price}
          </p>

          {/* Qty */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="border px-4 py-2"
            >
              -
            </button>

            <span>{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="border px-4 py-2"
            >
              +
            </button>

            <span className="text-gray-500">
              {product.stock} in stock
            </span>
          </div>

          <button className="mt-6 rounded-full bg-black px-8 py-4 text-white">
            Add to cart
          </button>

          <p className="mt-10 text-gray-600">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
}