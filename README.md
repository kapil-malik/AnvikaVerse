# AnvikaVerse

A mobile-first React + Vite static birthday game. The player travels through a 100-step magical journey, seeing one step at a time.

## Local Run

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`.

If you prefer npm, `npm install` and `npm run dev` work too.

## Build

```bash
pnpm run build
```

The static site is generated in `dist/`.

## Static Deploy

Deploy the contents of `dist/` to any static host, such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or an S3 bucket.

For most hosts:

- Build command: `pnpm run build`
- Publish directory: `dist`

## Editing The Journey

The 100 cells live in `src/gameData.js`.

Each cell uses:

- `id`
- `type`: `normal`, `boost`, `detour`, or `quiz`
- `title`
- `caption`
- `image`
- optional `move` for boost and detour cells
- optional quiz fields: `question`, `options`, `answerIndex`, `correctMove`, `wrongMove`, `correctText`, `wrongText`

Images are expected at paths like `public/images/step-001.png`. Missing images automatically fall back to an in-game magical placeholder.
