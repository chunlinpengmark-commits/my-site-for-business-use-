import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      <div className="border-b border-black/10 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <p className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Home
            </Link>{" "}
            / <span className="text-black">Order Success</span>
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-20 lg:px-10">
        <div className="w-full rounded-[32px] border border-black/10 bg-white p-10 text-center shadow-sm md:p-14">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl text-white">
            ✓
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Order Received
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Thank you. Your order details have been received successfully.
            This is currently a demo checkout flow without live payment
            processing.
          </p>

          <div className="mt-10 rounded-[24px] bg-[#f6f6f7] p-6 text-left">
            <h2 className="text-lg font-semibold">What happens next</h2>

            <div className="mt-4 space-y-3 text-gray-600">
              <p>• A confirmation flow can be connected here later.</p>
              <p>• Live payment integration can be added in the next phase.</p>
              <p>• Order management and email notification can also be added.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-85"
            >
              Back to Shop
            </Link>

            <Link
              href="/"
              className="rounded-full border border-black px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-black hover:text-white"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}