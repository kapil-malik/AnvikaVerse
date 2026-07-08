# AnvikaVerse

A mobile-first React + Vite static birthday game. The player travels through a 100-step magical journey, seeing one step at a time.

## Local Run

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173/`.

For clean CI-style installs after `package-lock.json` exists:

```bash
npm ci
```

## Build

```bash
npm run build
```

The static site is generated in `dist/`.

## Static Deploy

Deploy the contents of `dist/` to any static host, such as Netlify, Vercel, GitHub Pages, Cloudflare Pages, or an S3 bucket.

For most hosts:

- Build command: `npm run build`
- Publish directory: `dist`

## Deploying to AWS Amplify

1. Connect the GitHub repo in Amplify.
2. Select the `main` branch.
3. Use the `amplify.yml` build settings.
4. Add the custom domain in Amplify domain management.
5. Point DNS records if the domain is outside Route 53.

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
