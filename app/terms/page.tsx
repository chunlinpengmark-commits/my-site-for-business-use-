import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">Terms & Conditions</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="text-5xl font-black tracking-[-0.05em]">
          Terms & Conditions
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-9 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">
              General Use
            </h2>
            <p className="mt-3">
              By using this website, you agree to use it only for lawful
              purposes and in accordance with applicable terms, policies, and
              regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Product Information
            </h2>
            <p className="mt-3">
              Product descriptions, pricing, and availability may be updated or
              modified at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">Orders</h2>
            <p className="mt-3">
              We reserve the right to review, accept, reject, or cancel orders
              at our discretion, including in cases of incorrect pricing,
              suspected fraud, or stock issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              We are not liable for indirect, incidental, or consequential
              damages arising from the use of this site or the purchase of any
              products, to the fullest extent permitted by law.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}