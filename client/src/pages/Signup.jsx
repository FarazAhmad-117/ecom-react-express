import { Link } from "react-router";

export default function Signup() {
  return (
    <div className="mx-auto grid max-w-6xl gap-0 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-16">
      <div className="order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none">
        <h1 className="text-2xl font-semibold text-stone-900 lg:hidden">
          Create account
        </h1>
        <p className="mt-2 text-sm text-stone-600 lg:hidden">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-teal-900 hover:underline">
            Log in
          </Link>
        </p>

        <form
          className="mt-8 space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="signup-name"
              className="block text-sm font-medium text-stone-700"
            >
              Full name
            </label>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              required
              placeholder="Alex Morgan"
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-900/20"
            />
          </div>
          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm font-medium text-stone-700"
            >
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-900/20"
            />
          </div>
          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm font-medium text-stone-700"
            >
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              placeholder="At least 8 characters"
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-900/20"
            />
          </div>
          <p className="text-xs leading-relaxed text-stone-500">
            By signing up you agree to our demo terms. Your backend signup route
            can accept the same fields: name, email, password.
          </p>
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-900 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 hidden text-center text-sm text-stone-600 lg:block">
          Already registered?{" "}
          <Link to="/login" className="font-medium text-teal-900 hover:underline">
            Log in
          </Link>
        </p>
      </div>

      <div className="order-1 mb-8 hidden flex-col justify-center rounded-2xl border border-stone-200 bg-white p-10 lg:order-2 lg:mb-0 lg:flex">
        <p className="text-sm font-medium uppercase tracking-wider text-teal-800">
          Join ExpressMart
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-snug text-stone-900">
          One account for wishlists, orders, and faster checkout.
        </h2>
        <ul className="mt-8 space-y-4 text-sm text-stone-600">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
              1
            </span>
            Browse the catalog with category filters on the home page.
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
              2
            </span>
            Open any product for details, quantity, and add-to-cart UI.
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900">
              3
            </span>
            Plug in MongoDB and auth routes on the Express side next.
          </li>
        </ul>
      </div>
    </div>
  );
}
