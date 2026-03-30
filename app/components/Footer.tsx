import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <Link href="/" className="inline-block">
            <div className="text-[34px] font-black tracking-[-0.04em]">
              YourBrand
            </div>
            <div className="mt-1 text-sm lowercase tracking-wide text-gray-500">
              research labs
            </div>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-600">
            Research use peptide catalog with a premium, structured, and modern
            ecommerce experience. This website is presented for product browsing,
            cart, and checkout flow demonstration.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Shop
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <Link href="/shop" className="block transition hover:text-black">
              All Products
            </Link>
            <Link
              href="/product/bpc-157"
              className="block transition hover:text-black"
            >
              BPC-157
            </Link>
            <Link
              href="/product/tb-500"
              className="block transition hover:text-black"
            >
              TB-500
            </Link>
            <Link
              href="/product/cjc-1295"
              className="block transition hover:text-black"
            >
              CJC-1295
            </Link>
            <Link
              href="/product/ipamorelin"
              className="block transition hover:text-black"
            >
              Ipamorelin
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Information
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <Link href="/faq" className="block transition hover:text-black">
              FAQ
            </Link>
            <Link
              href="/shipping-policy"
              className="block transition hover:text-black"
            >
              Shipping Policy
            </Link>
            <Link
              href="/returns-policy"
              className="block transition hover:text-black"
            >
              Returns Policy
            </Link>
            <Link
              href="/privacy-policy"
              className="block transition hover:text-black"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="block transition hover:text-black">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 YourBrand. All rights reserved.</p>

          <p className="max-w-2xl md:text-right">
            All products listed on this website are intended for research and
            identification purposes only. Not intended for human consumption,
            injection, or medical use.
          </p>
        </div>
      </div>
    </footer>
  );
}