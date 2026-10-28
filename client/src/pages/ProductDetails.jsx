import { Link, useParams } from "react-router";
import { formatPrice, getProductById } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
        <p className="text-6xl font-light text-stone-300">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-stone-900">
          Product not found
        </h1>
        <p className="mt-2 text-stone-600">
          That item may have sold out or the link is wrong.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-xl bg-teal-900 px-5 py-3 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
      <nav className="mb-8 text-sm text-stone-500">
        <Link to="/" className="hover:text-teal-900">
          Shop
        </Link>
        <span className="mx-2">/</span>
        <span className="capitalize text-stone-800">{product.category}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          {product.badge ? (
            <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-900">
              {product.badge}
            </span>
          ) : null}
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="flex items-center gap-1 text-amber-500">
              ★ <span className="font-semibold text-stone-800">{product.rating}</span>
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-600">{product.reviews} reviews</span>
          </div>
          <p className="mt-6 text-3xl font-semibold text-stone-900">
            {formatPrice(product.price)}
          </p>
          <p className="mt-4 leading-relaxed text-stone-600">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <label className="sr-only" htmlFor="qty">
              Quantity
            </label>
            <select
              id="qty"
              defaultValue="1"
              className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-teal-900/20"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  Qty {n}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="flex-1 rounded-xl bg-teal-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800 sm:flex-none"
            >
              Add to cart
            </button>
            <button
              type="button"
              className="rounded-xl border border-stone-200 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
            >
              Save for later
            </button>
          </div>

          <ul className="mt-10 space-y-3 border-t border-stone-200 pt-8 text-sm text-stone-600">
            <li className="flex gap-2">
              <span className="text-teal-800" aria-hidden>
                ✓
              </span>
              Free shipping on orders over $75 (demo)
            </li>
            <li className="flex gap-2">
              <span className="text-teal-800" aria-hidden>
                ✓
              </span>
              30-day easy returns
            </li>
            <li className="flex gap-2">
              <span className="text-teal-800" aria-hidden>
                ✓
              </span>
              Secure checkout — connect Express API next
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
