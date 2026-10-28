import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-stone-900">
            Express<span className="text-teal-800">Mart</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-stone-600">
            A modern storefront built with React and Express — curated products,
            fast checkout UI, and room to grow into a full MERN stack shop.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Shop
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>
              <Link to="/" className="hover:text-teal-900">
                All products
              </Link>
            </li>
            <li>
              <a href="/#categories" className="hover:text-teal-900">
                Categories
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Account
          </p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>
              <Link to="/login" className="hover:text-teal-900">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-teal-900">
                Create account
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-100 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} ExpressMart · Demo storefront
      </div>
    </footer>
  );
}
