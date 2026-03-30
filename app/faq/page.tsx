import Link from "next/link";

const faqs = [
  {
    q: "How long does order processing take?",
    a: "Orders are typically processed within 1–3 business days, depending on volume and operational conditions.",
  },
  {
    q: "Will I receive tracking information?",
    a: "Tracking information may be provided once an order has been processed and shipped.",
  },
  {
    q: "Can I modify my order after placing it?",
    a: "Order modifications may be possible before shipment, but cannot be guaranteed once processing has begun.",
  },
  {
    q: "How do I contact support?",
    a: "You can contact support using the contact details shown on the website or through a future support/contact page.",
  },
  {
    q: "Is this checkout connected to live payment?",
    a: "The current checkout flow can be configured as a demo or connected to live payment in a later phase.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">FAQ</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="text-5xl font-black tracking-[-0.05em]">
          Frequently Asked Questions
        </h1>

        <div className="mt-12 space-y-6">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-[24px] border border-black/10 bg-[#fafafa] p-6"
            >
              <h2 className="text-2xl font-semibold">{item.q}</h2>
              <p className="mt-3 text-lg leading-8 text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}