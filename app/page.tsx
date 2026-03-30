import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* Top bar */}
      <div className="border-b border-[#e9eeee] bg-[#f7fbfb]">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm font-semibold tracking-[0.16em] text-[#27bfc1] uppercase lg:px-10">
          Research Use Peptides • High Purity • Quality Focused
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-[#ececec] bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div className="leading-none">
            <Link href="/" className="inline-block">
              <div className="text-[42px] font-black tracking-[-0.04em]">
                YourBrand
              </div>
              <div className="mt-1 text-sm lowercase tracking-wide text-gray-500">
                research labs
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-10 text-[15px] md:flex">
            <Link href="/" className="transition hover:text-gray-500">
              Home
            </Link>
            <Link href="/shop" className="transition hover:text-gray-500">
              Shop
            </Link>
            <a href="#about" className="transition hover:text-gray-500">
              About
            </a>
            <a href="#contact" className="transition hover:text-gray-500">
              Contact
            </a>
            <a href="#policy" className="transition hover:text-gray-500">
              Terms
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f3f4f4]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.85),rgba(255,255,255,0.18),transparent_50%)]" />

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-gray-500">
              Research Use Peptides
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Premium peptides for research-focused applications
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              A refined brand experience built around research use peptides,
              high-purity standards, and clear scientific positioning.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-sm ring-1 ring-black/10 transition hover:bg-black hover:text-white"
              >
                View Shop
              </Link>

              <a
                href="#about"
                className="rounded-full border border-black px-8 py-4 text-sm font-semibold uppercase tracking-wide transition hover:bg-black hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative h-[560px] overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#dfe4e7_0%,#cfd6da_100%)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.7),transparent_25%),linear-gradient(to_bottom,rgba(255,255,255,0.15),rgba(0,0,0,0.04))]" />

              <div className="absolute bottom-10 left-8 h-36 w-36 rounded-full border border-white/50 bg-white/25 backdrop-blur-sm" />
              <div className="absolute bottom-24 left-32 h-48 w-28 rounded-t-[999px] rounded-b-[28px] border border-white/50 bg-white/30 backdrop-blur-sm" />
              <div className="absolute bottom-10 right-10 h-32 w-32 rounded-t-[999px] rounded-b-[28px] border border-white/50 bg-white/20 backdrop-blur-sm" />
              <div className="absolute right-28 top-20 h-40 w-24 rounded-t-[999px] rounded-b-[26px] border border-white/40 bg-white/20 backdrop-blur-sm" />

              <div className="absolute left-8 top-8 rounded-full bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-700">
                Research Use Only
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-[#ececec] bg-[#fbfbfb]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3 lg:px-10">
          <div>
            <h2 className="mb-3 text-lg font-semibold">Research Use Focus</h2>
            <p className="text-sm leading-7 text-gray-600">
              Our homepage positioning is centered on research use peptides and
              a professional laboratory-oriented brand presentation.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold">High-Purity Standards</h2>
            <p className="text-sm leading-7 text-gray-600">
              Clean messaging, premium visual structure, and consistent product
              presentation designed to support trust and credibility.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold">Modern Brand Identity</h2>
            <p className="text-sm leading-7 text-gray-600">
              Minimal layouts, thoughtful spacing, and research-focused wording
              that feels elevated instead of aggressive or salesy.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-gray-500">
              About
            </p>
            <h2 className="max-w-md text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
              A modern brand for research use peptides
            </h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-8">
              Our company is focused on presenting research use peptides through
              a refined, credible, and professional brand experience.
            </p>

            <p className="leading-8">
              The homepage is intentionally designed to introduce the brand,
              communicate quality standards, and support SEO around research use
              peptides without pushing direct purchase language.
            </p>

            <p className="leading-8">
              The shop page is where products and pricing are displayed in a
              cleaner catalog structure, allowing the homepage to remain brand
              led and informational.
            </p>
          </div>
        </div>
      </section>

      {/* Statement section */}
      <section className="bg-[linear-gradient(180deg,#8c979d_0%,#7f8b91_100%)] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-white/70">
              Brand Positioning
            </p>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Built for clarity, professionalism, and research-first messaging
            </h2>
          </div>

          <div className="text-lg leading-9 text-white/90">
            We focus on clean presentation, restrained visual language, and
            carefully structured communication around research use peptides for
            a more premium and trustworthy digital presence.
          </div>
        </div>
      </section>


    </main>
  );
}