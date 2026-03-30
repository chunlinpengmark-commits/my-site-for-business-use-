"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();

  const [sameAsShipping, setSameAsShipping] = useState(true);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    shippingAddress: "",
    shippingCity: "",
    shippingState: "",
    shippingZip: "",
    shippingCountry: "United States",

    billingFirstName: "",
    billingLastName: "",
    billingAddress: "",
    billingCity: "",
    billingState: "",
    billingZip: "",
    billingCountry: "United States",

    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const shipping = useMemo(() => (items.length > 0 ? 15 : 0), [items]);
  const tax = useMemo(() => totalPrice * 0.08, [totalPrice]);
  const finalTotal = totalPrice + shipping + tax;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handlePlaceOrder = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // 模拟 loading
  console.log("Creating payment session...");

  try {
    // 👉 这里未来接 Stripe
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        items,
        form,
      }),
    });

    const data = await res.json();

    // 👉 未来 Stripe 会返回支付链接
    if (data.url) {
      window.location.href = data.url;
    }

  } catch (err) {
    console.error("Checkout error:", err);
  }
};

  return (
    <main className="min-h-screen bg-[#f7f7f8] text-black">
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

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <section className="rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
          <h1 className="text-5xl font-black tracking-[-0.05em]">Checkout</h1>
          <p className="mt-4 text-lg text-gray-600">
            Complete your payment details below.
          </p>

          <form onSubmit={handlePlaceOrder} className="mt-10 space-y-10">
            <div>
              <h2 className="text-2xl font-semibold">Contact Information</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black md:col-span-2"
                  required
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black md:col-span-2"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Shipping Address</h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  name="shippingAddress"
                  value={form.shippingAddress}
                  onChange={handleChange}
                  placeholder="Street address"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black md:col-span-2"
                  required
                />
                <input
                  name="shippingCity"
                  value={form.shippingCity}
                  onChange={handleChange}
                  placeholder="City"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
                <input
                  name="shippingState"
                  value={form.shippingState}
                  onChange={handleChange}
                  placeholder="State"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
                <input
                  name="shippingZip"
                  value={form.shippingZip}
                  onChange={handleChange}
                  placeholder="ZIP code"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
                <select
                  name="shippingCountry"
                  value={form.shippingCountry}
                  onChange={handleChange}
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold">Billing Address</h2>
              </div>

              <label className="mt-5 flex items-center gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={sameAsShipping}
                  onChange={() => setSameAsShipping((prev) => !prev)}
                  className="h-4 w-4"
                />
                Same as shipping address
              </label>

              {!sameAsShipping && (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <input
                    name="billingFirstName"
                    value={form.billingFirstName}
                    onChange={handleChange}
                    placeholder="Billing first name"
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                    required={!sameAsShipping}
                  />
                  <input
                    name="billingLastName"
                    value={form.billingLastName}
                    onChange={handleChange}
                    placeholder="Billing last name"
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                    required={!sameAsShipping}
                  />
                  <input
                    name="billingAddress"
                    value={form.billingAddress}
                    onChange={handleChange}
                    placeholder="Billing street address"
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black md:col-span-2"
                    required={!sameAsShipping}
                  />
                  <input
                    name="billingCity"
                    value={form.billingCity}
                    onChange={handleChange}
                    placeholder="Billing city"
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                    required={!sameAsShipping}
                  />
                  <input
                    name="billingState"
                    value={form.billingState}
                    onChange={handleChange}
                    placeholder="Billing state"
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                    required={!sameAsShipping}
                  />
                  <input
                    name="billingZip"
                    value={form.billingZip}
                    onChange={handleChange}
                    placeholder="Billing ZIP code"
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                    required={!sameAsShipping}
                  />
                  <select
                    name="billingCountry"
                    value={form.billingCountry}
                    onChange={handleChange}
                    className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </div>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Payment Information</h2>
              <p className="mt-2 text-sm text-gray-500">
                Demo checkout UI only. No real payment will be processed.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <input
                  name="cardName"
                  value={form.cardName}
                  onChange={handleChange}
                  placeholder="Name on card"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black md:col-span-2"
                  required
                />
                <input
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="Card number"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black md:col-span-2"
                  required
                />
                <input
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="MM / YY"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
                <input
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  className="rounded-xl border border-black/10 px-4 py-3 outline-none transition focus:border-black"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={items.length === 0}
              className="rounded-full bg-black px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Place Order
            </button>
          </form>
        </section>

        <aside className="h-fit rounded-[30px] border border-black/10 bg-white p-8 md:p-10">
          <h2 className="text-3xl font-bold tracking-[-0.03em]">
            Order Summary
          </h2>

          <div className="mt-8 space-y-5">
            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-start justify-between gap-4 border-b border-black/5 pb-5"
                >
                  <div>
                    <p className="text-xl font-semibold">{item.name}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-xl font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 space-y-4 border-t border-black/10 pt-6">
            <div className="flex items-center justify-between text-lg text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between text-lg text-gray-600">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between text-lg text-gray-600">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="flex items-center justify-between border-t border-black/10 pt-4 text-3xl font-bold tracking-[-0.03em]">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 rounded-[24px] bg-[#f6f6f7] p-5 text-sm leading-7 text-gray-600">
            This checkout page is a design and flow demo only. Payment fields
            are not connected to a live payment processor yet.
          </div>
        </aside>
      </div>
    </main>
  );
}