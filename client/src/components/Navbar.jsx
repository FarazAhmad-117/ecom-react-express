import { Link, NavLink } from "react-router";

const navLinkClass = ({ isActive }) =>
  [
    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-teal-950 text-white"
      : "text-stone-600 hover:bg-stone-200/80 hover:text-stone-900",
  ].join(" ");

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-stone-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-900 text-sm text-white">
            E
          </span>
          <span className="hidden sm:inline">
            Express<span className="text-teal-800">Mart</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          <NavLink to="/" end className={navLinkClass}>
            Shop
          </NavLink>
          <NavLink to="/#categories" className={navLinkClass}>
            Categories
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="relative rounded-lg p-2 text-stone-600 transition hover:bg-stone-200/80 hover:text-stone-900"
            aria-label="Cart (demo)"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.75}
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <Link
            to="/login"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-stone-600 transition hover:bg-stone-200/80 sm:inline-block"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="rounded-xl bg-teal-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
