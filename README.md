# ecom-react-express

A free to use project for anyone with basic knowledge of mern.... :<)

## Deploy frontend on Vercel

This repo has **no root `package.json`** — the Vite app lives in **`client/`**.

**Option A (recommended):** In Vercel → Project Settings → **Root Directory** → set to **`client`**, then redeploy. Framework preset: **Vite**.

**Option B:** Leave root directory empty; the repo root **`vercel.json`** runs install/build in `client/` and outputs `client/dist`.

If you see `vite: command not found`, Vercel is building from the wrong folder or skipping dev tooling — use one of the options above.

