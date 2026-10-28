import { Link } from "react-router";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link to={`/products/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-teal-900 shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-stone-500">
          {product.category.replace(/^\w/, (c) => c.toUpperCase())}
        </p>
        <Link
          to={`/products/${product.id}`}
          className="mt-1 line-clamp-2 font-medium text-stone-900 hover:text-teal-900"
        >
          {product.name}
        </Link>
        <div className="mt-2 flex items-center gap-1 text-sm text-stone-600">
          <span className="text-amber-500" aria-hidden>
            ★
          </span>
          <span className="font-medium text-stone-800">{product.rating}</span>
          <span className="text-stone-400">({product.reviews})</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="text-lg font-semibold text-stone-900">
            {formatPrice(product.price)}
          </p>
          <Link
            to={`/products/${product.id}`}
            className="rounded-lg bg-stone-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-teal-900"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
