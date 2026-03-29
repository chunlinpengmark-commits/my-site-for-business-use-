"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
const { items, totalPrice, clearCart } = useCart();
const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const shipping = useMemo(() => (items.length > 0 ? 15 : 0), [items]);
  const finalTotal = totalPrice + shipping;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handlePlaceOrder = (e: React.FormEvent) => {
  e.preventDefault();

  clearCart();
  router.push("/order-success");
};

  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shop" className="hover:text-black">
              Shop
            </Link>{" "}
            / <span className="text-black">Checkout</span>
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <section className="rounded-[28px] border border-black/10 bg-white p-8">
          <h1 className="text-4xl font-black tracking-[-0.04em]">Checkout</h1>
          <p className="mt-3 text-gray-600">
            Complete your order details below.
          </p>

          <form onSubmit={handlePlaceOrder} className="mt-10 space-y-10">
            <div>
              <h2 className="text-xl font-semibold">Contact Information</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                  required
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black md:col-span-2"
                  required
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black md:col-span-2"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Shipping Address</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black md:col-span-2"
                  required
                />
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                  required
                />
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                  required
                />
                <input
                  name="zip"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder="ZIP code"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                  required
                />
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

<button
  type="submit"
  disabled={items.length === 0}
  className="rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
>
  Place Order
</button>
          </form>
        </section>

        <aside className="h-fit rounded-[28px] border border-black/10 bg-white p-8">
          <h2 className="text-2xl font-bold">Order Summary</h2>

          <div className="mt-6 space-y-4">
            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-start justify-between gap-4 border-b border-black/5 pb-4"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 space-y-3 border-t border-black/10 pt-6">
            <div className="flex items-center justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between text-gray-600">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}