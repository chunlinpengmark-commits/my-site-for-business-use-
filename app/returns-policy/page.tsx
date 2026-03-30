import Link from "next/link";

export default function ReturnsPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">Returns Policy</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="text-5xl font-black tracking-[-0.05em]">
          Returns Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-9 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">
              Return Eligibility
            </h2>
            <p className="mt-3">
              Return requests must be made within a reasonable period after
              delivery and may be reviewed on a case-by-case basis. Items must
              be unused, unopened, and in original condition where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Non-Returnable Items
            </h2>
            <p className="mt-3">
              Certain items may not be eligible for return due to product type,
              handling requirements, or safety-related considerations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Damaged or Incorrect Orders
            </h2>
            <p className="mt-3">
              If an order arrives damaged or incorrect, please contact support
              promptly with order details and photos when possible so the issue
              can be reviewed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">Refunds</h2>
            <p className="mt-3">
              Approved refunds are typically issued to the original payment
              method. Processing times may vary depending on your payment
              provider or bank.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}