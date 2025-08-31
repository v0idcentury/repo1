# Eridian Clock Worker

This project contains a small Cloudflare Workers site displaying the
**Eridian Star Clock** — a glowing digital clock themed for the people of
Erid.

## Deploy

1. Install dependencies with `npm install`.
2. Authenticate with Cloudflare using `wrangler login` (once per environment).
3. Deploy the worker via `npm run deploy`.

Once deployed, visiting the worker URL will show the animated Eridian clock.