import Link from "next/link";

const products = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    price: 120,
    description:
      "Research use peptide with clean presentation and clear listing format.",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    price: 120,
    description:
      "Research use peptide displayed in a structured and modern product layout.",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    price: 120,
    description:
      "Professional product page format for research-focused catalog presentation.",
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    price: 120,
    description:
      "Minimal product card design suitable for peptide catalog pages.",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111111]">
      <section className="border-b border-black/10 bg-[#f3f4f4]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <h1 className="text-5xl font-black tracking-[-0.05em] md:text-6xl">
            Research Use Peptides
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            Browse our catalog of research use peptides presented with a clean,
            structured, and premium visual experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.slug}
              className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 h-[240px] rounded-[24px] bg-[#f1f1f3]" />

              <h2 className="text-[34px] font-black tracking-[-0.04em]">
                {product.name}
              </h2>

              <p className="mt-4 text-base leading-8 text-gray-600">
                {product.description}
              </p>

              <p className="mt-8 text-3xl font-semibold">
                ${product.price.toFixed(2)}
              </p>

              <Link
                href={`/product/${product.slug}`}
                className="mt-8 inline-flex rounded-full border border-black px-7 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}