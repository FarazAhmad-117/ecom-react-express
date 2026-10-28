import { useMemo, useState } from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-br from-teal-950 via-teal-900 to-stone-900 text-white">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-teal-100">
              React + Express ecommerce
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Everything you need, delivered with style.
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-teal-100/90">
              Browse curated picks across tech, fashion, home, and fitness.
              Polished UI today — hook up your Express API when you are ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#shop"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-teal-950 shadow-lg transition hover:bg-teal-50"
              >
                Shop collection
              </a>
              <Link
                to="/signup"
                className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Create free account
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-8 text-center sm:text-left">
              <div>
                <dt className="text-xs uppercase tracking-wide text-teal-200/80">
                  Products
                </dt>
                <dd className="mt-1 text-2xl font-semibold">{products.length}+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-teal-200/80">
                  Avg. rating
                </dt>
                <dd className="mt-1 text-2xl font-semibold">4.7</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-teal-200/80">
                  Shipping
                </dt>
                <dd className="mt-1 text-2xl font-semibold">Free*</dd>
              </div>
            </dl>
          </div>
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 4).map((p, i) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className={`overflow-hidden rounded-2xl border border-white/10 shadow-2xl ${
                    i % 2 === 1 ? "translate-y-8" : ""
                  }`}
                >
                  <img
                    src={p.image}
                    alt=""
                    className="aspect-square w-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-6xl px-4 py-10 sm:px-6"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500">
          Categories
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === cat.id
                  ? "bg-teal-900 text-white shadow-sm"
                  : "bg-white text-stone-700 ring-1 ring-stone-200 hover:ring-teal-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
              Featured products
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              {filtered.length} item{filtered.length === 1 ? "" : "s"} in view
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 md:flex-row md:text-left">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-stone-900">
              Get 10% off your first order
            </h2>
            <p className="mt-2 text-sm text-stone-600">
              Join the newsletter — demo form only, no backend yet.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none ring-teal-900/20 focus:ring-2"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-teal-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
