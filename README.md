# FidoNext Landing Site

FidoNext is the people-owned successor to FidoNet: Signal’s privacy, libp2p decentralization, and Telegram-class scalability fused into one mesh protocol. This repository contains the public landing page that communicates the mission, roadmap, and hiring needs for FidoNext.org.

## Stack

- [Astro 5](https://astro.build) (static export)
- Global CSS (Space Grotesk + Inter) with custom node-grid visuals
- Zero client-side JavaScript for fast, censorship-friendly delivery
- PNG favicon generated from the official logo

## Requirements

- Node.js **20+** (use [`n`](https://github.com/tj/n) or `nvm`)
- npm 10+

```bash
# install deps
npm install

# local dev
npm run dev

# production build
npm run build

# preview the dist build
npm run preview
```

The production build outputs static HTML/CSS to `dist/`, making it trivial to host on any CDN or IPFS.

## Project Structure

```
/
├── public/            # static assets, brand favicon
├── src/
│   ├── layouts/       # root HTML shell + meta tags
│   ├── pages/         # the landing page content
│   └── styles/        # global design system
├── package.json
├── astro.config.mjs
└── README.md
```

## Deployment Strategy

### 1. Vercel (primary)

1. Create a Vercel project pointing to this repo.
2. Set **Framework Preset** to Astro; default build command `npm run build`, output `dist`.
3. Configure environment: `NODE_VERSION=20`. Optionally add `PUBLIC_CONTACT_EMAIL=dev@fidonext.org` if you externalize CTAs later.
4. Point `fidonext.org` + `www.fidonext.org` DNS to Vercel edge.

### 2. Cloudflare Pages (secondary / mirror)

1. Run `npm run build` locally.
2. Install Wrangler: `npm install -g wrangler` (or use Cloudflare dashboard).
3. Publish: `wrangler pages publish dist --project-name=fidonext`.
4. Add DNS `pages.dev` CNAME or configure as failover using Cloudflare Load Balancer.

### 3. IPFS / Fleek mirror (ideological backup)

1. `npm run build`.
2. `ipfs add -r dist` (or use [Fleek](https://fleek.xyz)).
3. Publish CID and add DNSLink: `_dnslink.fidonext.org = dnslink=/ipfs/<CID>`.
4. Optionally pin via Filebase or Web3.Storage for redundancy.

## Updating Content

All copy lives in `src/pages/index.astro`. Sections map one-to-one with the product narrative (Hero, Mission, What is, Human-first, Features, Developers, Roadmap, Hiring, CTA). Adjust the arrays at the top of the file to update cards, roadmap items, or contact emails.

## Version Archives

- `versions/version1/` — snapshot of the pre-Solana design (monochrome mesh, node-grid look) saved on 2025‑11‑20. Use it if you need to restore the previous layout or compare copy changes.

## Brand Assets

- `public/favicon.png` is generated from the official FidoNext logo (`public/fidonext_logo.jpeg`) for consistent identity.
- Typography + node-grid background align with the “Digital Humanity / Post-server Internet” tone of voice.

## Next Steps

- Connect analytics (Plausible or oatuh?) via Astro `<script>` if needed.
- Add translations (RU/EN) once product messaging stabilizes.
- Automate multi-host deployments via GitHub Actions (`vercel deploy`, `wrangler pages publish`, `ipfs add`).

For any questions, reach out via `dev@fidonext.org`.
