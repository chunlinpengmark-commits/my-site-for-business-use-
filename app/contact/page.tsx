import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">Contact</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="text-5xl font-black tracking-[-0.05em]">
          Contact Us
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          For inquiries regarding products, orders, or general information,
          please reach out using the details below. We aim to respond within
          24–48 hours.
        </p>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Email */}
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="mt-3 text-gray-600">
              For general inquiries and support:
            </p>
            <a
              href="mailto:info@yourbrand.com"
              className="mt-3 block font-medium text-black underline"
            >
              info@yourbrand.com
            </a>
          </div>

          {/* Phone */}
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="mt-3 text-gray-600">
              Monday – Friday, 9am – 5pm (EST)
            </p>
            <a
              href="tel:+19083768993"
              className="mt-3 block font-medium text-black underline"
            >
              +1 (908) 376-8993
            </a>
          </div>

          {/* Business Info */}
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:col-span-2">
            <h3 className="text-lg font-semibold">Business Information</h3>
            <p className="mt-3 text-gray-600">
              YourBrand Research Labs
            </p>
            <p className="text-gray-600">
              United States
            </p>
            <p className="mt-2 text-sm text-gray-500">
              All products are intended strictly for research and laboratory
              use only.
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-sm font-medium underline hover:text-gray-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}