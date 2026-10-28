import { Link } from "react-router";

export default function Login() {
  return (
    <div className="mx-auto grid max-w-6xl gap-0 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-16">
      <div className="hidden flex-col justify-center rounded-2xl bg-gradient-to-br from-teal-950 to-stone-900 p-10 text-white lg:flex">
        <p className="text-sm font-medium uppercase tracking-wider text-teal-200">
          Welcome back
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-snug">
          Sign in to track orders and save your favorites.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-teal-100/80">
          Auth will connect to your Express backend — this form is UI-ready for
          when routes are wired up.
        </p>
      </div>

      <div className="mx-auto w-full max-w-md lg:max-w-none">
        <h1 className="text-2xl font-semibold text-stone-900 lg:hidden">
          Log in
        </h1>
        <p className="mt-2 text-sm text-stone-600 lg:hidden">
          New here?{" "}
          <Link to="/signup" className="font-medium text-teal-900 hover:underline">
            Create an account
          </Link>
        </p>

        <form
          className="mt-8 space-y-5 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-stone-700"
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-900/20"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-stone-700"
              >
                Password
              </label>
              <button
                type="button"
                className="text-xs font-medium text-teal-900 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-900/20"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-stone-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-stone-300 text-teal-900 focus:ring-teal-900"
            />
            Remember me on this device
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-900 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 hidden text-center text-sm text-stone-600 lg:block">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-medium text-teal-900 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
