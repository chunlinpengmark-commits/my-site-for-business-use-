import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="border-b border-black/10 bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">Privacy Policy</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <h1 className="text-5xl font-black tracking-[-0.05em]">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-8 text-lg leading-9 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-black">
              Information We Collect
            </h2>
            <p className="mt-3">
              We may collect contact information, billing details, shipping
              details, and technical usage data when users browse the website or
              place an order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              How Information Is Used
            </h2>
            <p className="mt-3">
              Information may be used to process orders, provide support,
              improve the site experience, and maintain operational security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Data Protection
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect submitted information, but
              no online transmission or storage method can be guaranteed to be
              completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black">
              Third-Party Services
            </h2>
            <p className="mt-3">
              Certain services such as payment processors, analytics tools, and
              hosting providers may process limited information as needed to
              support website functionality.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}