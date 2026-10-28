# ecom-react-express

A free to use project for anyone with basic knowledge of mern.... :<)

## Deploy frontend on Vercel

The Vite app lives in **`client/`**. Root **`package.json`** installs and builds that folder for Vercel.

**Recommended (repo root deploy):**

1. Vercel → **Settings → General → Root Directory** → leave **empty** (repository root).
2. **Build & Development:** Framework **Other** or **Vite** — **Install Command** `npm install`, **Build Command** `npm run build`, **Output Directory** `client/dist` (or rely on root `vercel.json`).
3. Clear any old override like `vite build` with no `client` path.
4. Redeploy.

**Alternative:** Set **Root Directory** to **`client`** only. Then Output Directory must be **`dist`**, not `client/dist`. Remove custom build commands so Vercel uses `client/package.json`.

| Error | Fix |
|-------|-----|
| `Failed to locate package.json` | Root Directory must be **empty** (uses root `package.json`) **or** exactly **`client`** — not both mixed with wrong output path. |
| `vite: command not found` | Do not run bare `vite build` at repo root; use **`npm run build`**. |

