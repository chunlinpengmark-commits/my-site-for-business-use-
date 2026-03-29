import Link from "next/link";

export default function ShopPage() {
  const products = [
    {
      name: "BPC-157",
      description:
        "Research use peptide with clean presentation and clear listing format.",
      price: "$89.00",
      slug: "bpc-157",
    },
    {
      name: "TB-500",
      description:
        "Research use peptide displayed in a structured and modern product layout.",
      price: "$99.00",
      slug: "tb-500",
    },
    {
      name: "CJC-1295",
      description:
        "Professional product page format for research-focused catalog presentation.",
      price: "$119.00",
      slug: "cjc-1295",
    },
    {
      name: "Ipamorelin",
      description:
        "Minimal product card design suitable for peptide catalog pages.",
      price: "$95.00",
      slug: "ipamorelin",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gray-500">
            Shop
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            Research Use Peptides
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600 leading-8">
            Browse our catalog of research use peptides presented with a clean,
            structured, and premium visual experience.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="block"
            >
              <article className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-5 h-48 rounded-[20px] bg-gray-100" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {product.description}
                </p>
                <p className="mt-5 text-lg font-medium">{product.price}</p>
                <div className="mt-5 inline-block rounded-full border border-black px-5 py-2 text-sm font-medium">
                  View Details
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}