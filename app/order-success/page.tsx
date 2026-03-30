import Link from "next/link";

export default function OrderSuccessPage() {
  const orderId = "#RS-2026-001";

  return (
    <main className="min-h-screen bg-[#fafafa] text-black">
      {/* Top breadcrumb */}
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

      {/* Main content */}
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 py-20 lg:px-10">
        <div className="w-full rounded-[32px] border border-black/10 bg-white p-10 shadow-sm md:p-14">
          
          {/* Icon + Title */}
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-black text-3xl text-white">
              ✓
            </div>

            <h1 className="mt-8 text-4xl font-black tracking-[-0.04em] md:text-5xl">
              Order Confirmed
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Thank you. Your order has been successfully received.
              This is currently a demo checkout flow — no real payment has been processed.
            </p>
          </div>

          {/* Order Info */}
          <div className="mx-auto mt-12 max-w-md rounded-2xl border border-black/10 bg-[#fafafa] p-6">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Order ID</span>
              <span className="text-black font-medium">{orderId}</span>
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>Status</span>
              <span className="text-green-600 font-medium">Processing</span>
            </div>

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>Estimated Handling</span>
              <span className="text-black">1–2 business days</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mx-auto mt-10 max-w-md text-center text-sm text-gray-500 leading-6">
            <p>
              You will receive an email confirmation shortly. Once your order is processed,
              tracking information will be provided if applicable.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-85"
            >
              Continue Shopping
            </Link>

            <Link
              href="/"
              className="rounded-full border border-black px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-black hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}