import Link from "next/link";

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">Shipping Policy</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="text-5xl font-black tracking-[-0.05em]">
          Shipping Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-9 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">
              Order Processing
            </h2>
            <p className="mt-3">
              Orders are typically processed within 1–3 business days after
              payment confirmation. Processing times may vary during holidays,
              promotional periods, or due to order volume.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Shipping Methods
            </h2>
            <p className="mt-3">
              Shipping methods and delivery estimates are shown at checkout when
              available. Delivery times are estimates only and are not
              guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Tracking Information
            </h2>
            <p className="mt-3">
              Tracking details may be provided after shipment confirmation.
              Please allow time for carrier systems to update after dispatch.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Shipping Delays
            </h2>
            <p className="mt-3">
              We are not responsible for delays caused by carriers, customs,
              weather events, incorrect address information, or circumstances
              outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Address Accuracy
            </h2>
            <p className="mt-3">
              Customers are responsible for ensuring shipping details are
              entered correctly. We are not responsible for orders shipped to
              incorrectly entered addresses.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}